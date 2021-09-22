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
  const results = {};
  // turn items into an array if it isn't one
  const itemsArray = Array.isArray(items) ? items : [items];
  // Look for the item in the current session, if found, add to results
  itemsArray.forEach(item => results[item] = window.sessionStorage.getItem(item));
  return results;
};

// Clear out all of the current sessionStorage
export const clearSessionStorage = () => {
  sessionStorage.clear();
};
