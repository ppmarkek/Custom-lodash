class ImdenverLodash {
  chunk(arr, x){
    const newArr = [], arrx = [], arry = [];

    arr.map((y, lenght) => lenght >= x ? arry.push(y) : arrx.push(y));
    newArr.push(arrx, arry);
    return newArr;
  }
  compact(arr){
    return arr.filter((x) => typeof x === 'number' && x !== 0);
  }
  drop(arr, x){
    x === undefined ? x = 1 : 0;
    return arr.slice(x);
  }
  dropWhile(arr, fun){
     if(typeof fun === 'function'){
      const newMap = [];
      arr.filter((x) => !fun(x) ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && !Array.isArray(fun)){
      const newMap = [];
      let key1;
      let key2;
      const funKeys = Object.keys(fun);
      const funValue = Object.values(fun);
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[0] ? key1 = lenght : 0));
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[1] ? key2 = lenght : 0));
      arr.map((x) => Object.keys(x)[key1] === funKeys[0] && Object.values(x)[key1] === funValue[0] && Object.keys(x)[key2] === funKeys[1] && Object.values(x)[key2] === funValue[1] ? 0 : newMap.push(x.user));
      return newMap;
     } else if(typeof fun === 'object' && Array.isArray(fun)){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun[0] ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun[0] && Object.values(x)[key] !== fun[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'string'){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun ? newMap.push(x.user) : 0);
      return newMap;
     }
  }
  take(arr, value){
    value === undefined ? value = 1 : 0;
    return arr.filter((x, length) => length+1 <= value);
  }
  filter(arr, fun){
    if(typeof fun === 'function'){
      const newMap = [];
      arr.filter((x) => fun(x) ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && !Array.isArray(fun)){
      const newMap = [];
      let key1;
      let key2;
      const funKeys = Object.keys(fun);
      const funValue = Object.values(fun);
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[0] ? key1 = lenght : 0));
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[1] ? key2 = lenght : 0));
      arr.some((x) => Object.keys(x)[key1] === funKeys[0] && Object.values(x)[key1] === funValue[0] && Object.keys(x)[key2] === funKeys[1] && Object.values(x)[key2] === funValue[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && Array.isArray(fun)){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun[0] ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun[0] && Object.values(x)[key] === fun[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'string'){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun ? newMap.push(x.user) : 0);
      return newMap;
     }
  }
  find(arr, fun){
    if(typeof fun === 'function'){
      const newMap = [];
      arr.filter((x) => fun(x) ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && !Array.isArray(fun)){
      const newMap = [];
      let key1;
      let key2;
      const funKeys = Object.keys(fun);
      const funValue = Object.values(fun);
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[0] ? key1 = lenght : 0));
      arr.some((x) => Object.keys(x).map((y, lenght) => y === funKeys[1] ? key2 = lenght : 0));
      arr.some((x) => Object.keys(x)[key1] === funKeys[0] && Object.values(x)[key1] === funValue[0] && Object.keys(x)[key2] === funKeys[1] && Object.values(x)[key2] === funValue[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && Array.isArray(fun)){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun[0] ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun[0] && Object.values(x)[key] === fun[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'string'){
      const newMap = [];
      let key;
      arr.some((x) => Object.keys(x).map((y, lenght) => y === fun ? key = lenght : 0));
      arr.some((x) => Object.keys(x)[key] === fun ? newMap.push(x.user) : 0);
      return newMap;
     }
  }
}

const lod = new ImdenverLodash;
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
   
lod.filter(users, 'active');



/*module.exports = {
  chunk: _.chunk
}*/