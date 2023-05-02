const patchArrays = () => {
    const isValidIndex = (index, length) => Number.isInteger(index) && Math.min(index, length) >= 0;
    const constructModifiedArray = (array, index, value) => {
      if (index < 0) {
        return [value, ...array];
      }
      if (index > array.length - 1) {
        return [...array, value];
      }
      return [...array.slice(0, index), value, ...array.slice(index)];
    };
    const throwInvalidArgument = () => {
      throw new Error('INVALID_ARGUMENT');
    };
    Object.defineProperty(Array.prototype, 'count', {
      value: function() {
        return this.length;
      }
    });
    Object.defineProperty(Array.prototype, 'insert', {
      value: function(index, value) {
        if (typeof index !== 'number') {
          throwInvalidArgument();
        }
        if (isValidIndex(index, this.length + 1)) {
          return constructModifiedArray(this, index, value);
        }
        return this;
      }
    });
    Object.defineProperty(Array.prototype, 'remove', {
      value: function(valueToRemove) {
        const index = this.findIndex((value) => value === valueToRemove);
        if (index >= 0) {
          return [...this.slice(0, index), ...this.slice(index + 1)];
        }
        return this;
      }
    });
};
  
patchArrays();
  

try{
    console.log([1, 2, 3].count());    // 3
}catch(err){
    console.error(err.message);
}

try{
    console.log([].count());           // 0
}catch(err){
    console.error(err.message);
}

try{
    arr = [];
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.insert(10, 1));     // [1]
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.insert(1, 'name')); // [1, 'name']
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.insert(1, null));   // [1, null, 'name']
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.insert(0, null));   // [null, 1, null, 'name']
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.remove(2));         // [null, 1, null, 'name']
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.remove(1));         // [null, null, 'name']
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.remove('name'));    // [null, null]
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.remove(null));      // [null]
}catch(err){
    console.error(err.message);
}

try{
    console.log(arr.remove(null).insert('2'));      // ['2']
}catch(err){
    console.error(err.message);
}


try {
    [].insert('0', null);
} catch (e) {
    console.log(e.message); // INVALID_ARGUMENT
}