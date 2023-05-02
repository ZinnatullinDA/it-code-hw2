function sum() {

    let sum = 0;
    if (arguments.length < 2) {
      throw new Error('INVALID_ARGUMENTS_COUNT');
    }
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }
      sum += arguments[i];
    }
    return sum;
}
  
// Примеры использования:
console.log(sum(1, 2, 3));        // 6
try{
    console.log(sum());
} catch(err){
    console.error(err.message);
} 

try{
    console.log(sum(0, 1, '1', 2));
} catch(err){
    console.error(err.message);     // ошибка INVALID_ARGUMENTS_COUNT
}
try{
    console.log(sum(5, 10, 2));     // 17
} catch(err){
    console.error(err.message);     // ошибка INVALID_ARGUMENT_COUNT     
}
try{
    console.log(sum(true, 3, 4));
} catch(err){
    console.error(err.message);     // ошибка с кодом INVALID_ARGUMENT
}
   