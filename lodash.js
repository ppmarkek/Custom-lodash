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
      arr.map((x) => x.user !== fun.user || x.active !== fun.active ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && Array.isArray(fun)){
      const newMap = [];
      arr.some((x) => fun[0] === 'active' && x.active !== fun[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'string'){
      const newMap = [];
      arr.map((x) => fun === 'active' ? newMap.push(x.user) : newMap.push(x.active));
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
      arr.map((x) => x.user === fun.user || x.active === fun.active ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'object' && Array.isArray(fun)){
      const newMap = [];
      arr.some((x) => fun[0] === 'active' && x.active === fun[1] ? newMap.push(x.user) : 0);
      return newMap;
     } else if(typeof fun === 'string'){
      const newMap = [];
      arr.some((x) => fun === 'active' ? newMap.push(x.user) : newMap.push(x.active));
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