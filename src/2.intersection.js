function intersection(arr1, arr2) {
    if (arguments.length !== 2) {
      throw new Error('INVALID_ARGUMENTS_COUNT');
    } else if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      throw new Error('INVALID_ARGUMENT');
    } else if (arr1.some(el => typeof el !== 'number') || arr2.some(el => typeof el !== 'number')) {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    } else {
      let result = [];
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
          result.push(arr1[i]);
        }
      }
      return result;
    }
}
  

try{
    let arr1 = [2, 3, 4, 8, 10];
    let arr2 = [1, 2, 3, 4, 5];
    let result = intersection(arr1, arr2);
    console.log(result);                        // выдаст [2, 3, 4] 
}catch(e){
    console.log(e.message);
}

try{
    let arr1 = [2, 3, 4, 8, 10];
    let arr2 = [1, 2, 3, 4, 5];
    let chislo=5;
    let result = intersection(arr1, chislo);
    console.log(result); 
}catch(e){
    console.log(e.message);               //  ошибка IVALID_ARGUMENT
}

try{
    let arr1 = [2, 3, 4, 8, 10];
    let arr2 = [1, 2, '3', 4, 5];
    let chislo=5;
    let result = intersection(arr1, arr2);
    console.log(result); 
}catch(e){
    console.log(e.message);    // ошибка VALID_ELEMENT_IN_ARRAY 
}

try{
    let arr1 = [2, 3, 4, true, 10];
    let arr2 = [1, 2, 3, 4, 5];
    let chislo=5;
    let result = intersection(arr1); 
    console.log(result);
}catch(e){
    console.log(e.message);   // ошибка VALID_ARGUMENTS_COUNT
}

 
 