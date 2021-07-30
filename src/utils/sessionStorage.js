// Ability to add single or array of items into current session
export const addToSessionStorage = items => {
  const buildToSession = (item => {
    const itemKey = Object.keys(item)[0];
    const itemValue = item[itemKey]
    window.sessionStorage.setItem(itemKey, itemValue);
  });
  const multiItem = Array.isArray(items);
  multiItem ? items.forEach(item => buildToSession(item)) : buildToSession(items);
};

// Remove one or more values from sessionStorage
export const removeFromSessionStorage = values => {
  const removeFromSession = value => {
    window.sessionStorage.removeItem(value);
  };
  const multiItem = Array.isArray(values);
  multiItem ? values.forEach(value => removeFromSession(value)) : removeFromSession(values);
};

// Get one or more values from sessionStorage
export const getFromSessionStorage = items => {
  const getFromSession = item => {
    window.sessionStorage.getItem(item);
  };
  const multiItem = Array.isArray(items);
  multiItem ? items.forEach(item => getFromSession(item)) : getFromSession(items);
};

// Clear out all of the current sessionStorage
export const clearSessionStorage = () => {
  sessionStorage.clear();
};
