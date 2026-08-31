/**
 * DevVault Local-First Storage Engine
 * Manages user-created custom component snippets, categories, and JSON backups.
 */

const STORAGE_KEY = 'devvault_custom_snippets_v1';
const PREFERENCES_KEY = 'devvault_user_preferences_v1';

export function loadCustomSnippets() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load custom snippets from storage:', err);
    return [];
  }
}

export function saveCustomSnippet(snippet) {
  const snippets = loadCustomSnippets();
  const existingIdx = snippets.findIndex(s => s.id === snippet.id);
  
  if (existingIdx >= 0) {
    snippets[existingIdx] = { ...snippet, updatedAt: new Date().toISOString() };
  } else {
    snippets.unshift({
      ...snippet,
      id: snippet.id || `custom-${Date.now()}`,
      isCustom: true,
      createdAt: new Date().toISOString()
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
  return snippets;
}

export function deleteCustomSnippet(id) {
  const snippets = loadCustomSnippets().filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
  return snippets;
}

export function exportSnippetsToJson() {
  const customSnippets = loadCustomSnippets();
  const exportData = {
    app: 'DevVault',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    snippetsCount: customSnippets.length,
    snippets: customSnippets
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `devvault-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importSnippetsFromJson(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    const newSnippets = Array.isArray(parsed) ? parsed : (parsed.snippets || []);
    
    if (!Array.isArray(newSnippets)) {
      throw new Error('Invalid JSON format: snippets array not found');
    }

    const current = loadCustomSnippets();
    const map = new Map();
    current.forEach(item => map.set(item.id, item));
    newSnippets.forEach(item => {
      if (item.name && item.category) {
        map.set(item.id || `custom-${Date.now()}-${Math.random()}`, {
          ...item,
          isCustom: true
        });
      }
    });

    const merged = Array.from(map.values());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return { success: true, count: newSnippets.length };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export function loadUserPreferences() {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    return raw ? JSON.parse(raw) : { theme: 'dark', defaultFramework: 'vanilla' };
  } catch {
    return { theme: 'dark', defaultFramework: 'vanilla' };
  }
}

export function saveUserPreferences(prefs) {
  try {
    const current = loadUserPreferences();
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify({ ...current, ...prefs }));
  } catch (err) {
    console.error('Failed to save preferences:', err);
  }
}
