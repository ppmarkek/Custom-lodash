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
  includes(arr, value){
    if(Array.isArray(arr)){
      return arr.some((x) => x === value);
    } else if(typeof arr === 'object' && !Array.isArray(arr)){
      return Object.keys(arr).some((x) => x === value) === true ? Object.keys(arr).some((x) => x === value) : Object.values(arr).some((x) => x === value);
    } else if(typeof arr === 'string'){
      return arr.includes(value);
    }
  }
  map(arr, value){
    if(Array.isArray(arr)){
      return typeof value === 'function' ? arr.map((x) => value(x)) : arr.map((x) => x[value]);
    } else if(typeof arr === 'object' && !Array.isArray(arr)){
      return typeof value === 'function' ? Object.values(arr).map((x) => value(x)) : 0;
    }
  }
  zip(...arr){
    const newArr = [], Arr1 = [], Arr2 = [];
    arr.map((x) => x.map((y, lenght) => lenght % 2 === 0 ? Arr1.push(y) : Arr2.push(y)));
    newArr.push(Arr1, Arr2);
    return newArr;
  }
  merge(obj, ...sources) {
    sources.map((x) => {
      for (const key in x) {
        if (x.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object' && typeof x[key] === 'object') {
            merge(obj[key], x[key]);
          } else {
            obj[key] = x[key];
          }
        }
      }
    });
    return obj;
  }
  omit(obj, paths){
    const newObj = {};
    Object.keys(obj).filter((x) => !paths.includes(x) ? newObj[x] = obj[x] : 0);
    return newObj;
  }
  omitBy(obj, fun){
    const newObj = {};
    Object.values(obj).map((x) => fun(obj[x]) ? newObj[x] = obj[x] : 0);
    return newObj;
  }
  pick(obj, paths){
    const newObj = {};
    Object.keys(obj).filter((x) => paths.includes(x) ? newObj[x] = obj[x] : 0);
    return newObj;
  }
  pickBy(obj, predicate){
    const newObj = {};
    Object.keys(obj).map((x) => predicate(obj[x]) ? newObj[x] = obj[x] : 0);
    return newObj;
  }
}

const lod = new ImdenverLodash;

const myObj = { a: 1, b: 2, c: 3, d: 4 };
 
lod.pickBy(myObj, (value) => value % 2 === 0);

/*module.exports = {
  chunk: _.chunk
}*/