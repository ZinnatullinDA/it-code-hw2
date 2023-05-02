function removeAnagrams(arr) {
    
    if (!Array.isArray(arr)) {
      throw new Error('INVALID_ARGUMENT');
    }
  
    
    if (arr.some(x => typeof x !== 'string')) {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  
    
    function checkAnagram(str1, str2) {
      return str1.length === str2.length && str1.split('').sort().join('') === str2.split('').sort().join('');
    }
  
    
    let copy = arr.slice();
  
    
    for (let i = 0; i < copy.length; i++) {
      for (let j = i + 1; j < copy.length; j++) {
        if (checkAnagram(copy[i], copy[j])) {
          copy.splice(j--, 1);
        }
      }
    }
    return copy;
}

let arr1 = ['cat', 'act', 'arc'];
try {
  console.log(removeAnagrams(arr1)); // ['arc']
} catch (e) {
    console.log(e.message); // undefined
}

let arr2 = ['car', 'arc'];
try {
  console.log(removeAnagrams(arr2)); // []
} catch (e) {
    console.log(e.message); // undefined
}

try {
  console.log(removeAnagrams('str')); // ошибка с кодом INVALID_ARGUMENT
} catch (e) {
    console.log(e.message); // INVALID_ARGUMENT
}

let arr4 = ['str', 5];
try {
  console.log(removeAnagrams(arr4)); // ошибка с кодом INVALID_ELEMENT_IN_ARRAY
} catch (e) {
    console.log(e.message); // INVALID_ELEMENT_IN_ARRAY
}