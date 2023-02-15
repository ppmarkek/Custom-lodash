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
}

const lod = new ImdenverLodash;

/*module.exports = {
  chunk: _.chunk
}*/