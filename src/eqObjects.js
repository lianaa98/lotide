const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1).sort(); // => array of sorted keys
  const keys2 = Object.keys(object2).sort();
  const areKeysIdentical = eqArrays(keys1, keys2); // compare arrays

  if (!areKeysIdentical) {
    return false;
  } 
  
  for (let k of keys1) {
    
    // if object.key.value is NOT object => compare values => true/false
    if (typeof object1[k] !== "object") {
      if (object1[k] !== object2[k]) return false;  // if values are NOT equal => return false
      continue;                                     // if values are equal => continue the loop (skip below)
    }
        
    if (eqObjects(object1[k], object2[k]) === false) return false;  // JUMP out of everything if a single false gets returned! But continue on if it's true...
    
  }

  return true;
};

module.exports = eqObjects