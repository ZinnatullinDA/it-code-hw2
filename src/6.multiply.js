class MultiplyError extends Error {
    constructor(message, code) {
      super(message);
      this.code = code;
    }
  } 
  
  const multiply = (num) => {
    if (typeof num !== 'number') {
      throw new MultiplyError('Invalid argument', 'INVALID_ARGUMENT');
    }
    return (value) => {
      if (typeof value !== 'number') {
        throw new MultiplyError('Invalid argument', 'INVALID_ARGUMENT');
      }
      return num * value;
    };
  };
  
  
  
  const multiplyByTen = multiply(10);
  console.log(multiplyByTen(2)); //20
  
  const multiplyByTwo = multiply(2);
  console.log(multiplyByTwo(3)); //6
  
  try {
    const multiplyByTwo = multiply(2);
    console.log(multiplyByTwo('3'));
  } catch (error) {
    if (error instanceof MultiplyError && error.code === 'INVALID_ARGUMENT') {
      console.log('Ошибка: неверный тип аргумента если 2');
    } else {
      throw error;
    }
  }
  
  try {
      const multiplyByTwo = multiply(["two"]);
    } catch (error) {
      if (error instanceof MultiplyError && error.code === 'INVALID_ARGUMENT') {
        console.log('Ошибка: неверный тип аргумента если выбрать two');
      } else {
        throw error;
      }
    }