function sort(words) {
    if (typeof words !== 'string') {
      throw new Error('INVALID_ARGUMENT');
    }
    let arr = words.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
    }
    arr.sort((a, b) => a.length - b.length);
    return arr.join(' ');
}
  
 try{
    console.log(sort('hello world'));  // Выведет 'ehllo dlorw'
 }catch(e){
    console.log(e.message);
 }

 try{
    console.log(sort('dog cat sparrow'));  // Выведет 'dgo act aoprrsw'
 }catch(e){
    console.log(e.message);
 }

 try{
    console.log(sort('1234 111'));          // Выведет '111 1234'
 }catch(e){
    console.log(e.message);
 }

 try{
    console.log(sort(11));        
 }catch(e){
    console.log(e.message);     // ошибка IVALID_ARGUMENT
 }