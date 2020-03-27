export const keep = (arr, fn) => {
  const tempArray = [];
  if (arr.length === 0) {
    const result = arr.map( (e) => fn(e));
    return result;
  } else if (typeof arr === 'string') {
    const stringToArray = arr.split(' ');
    stringToArray.forEach((e) => {
      if(fn(e)) {
        tempArray.push(e);
      }    
  });
      return tempArray;
  } else {
    arr.forEach((e) => {
      if(fn(e)) {
        tempArray.push(e);
      }    
  });
      return tempArray;
  }
};


 export const discard = (arr, fn) => {
  const tempArray = [];
  if (arr.length === 0) {
    const result = arr.map( (e) => !fn(e));
    return result;
  } else if (typeof arr === 'string') {
    const stringToArray = arr.split(' ');
    stringToArray.forEach((e) => {
      if(!fn(e)) {
        tempArray.push(e);
      }    
  });
      return tempArray;
  } else {
    arr.forEach((e) => {
      if(!fn(e)) {
        tempArray.push(e);
      }    
  });
      return tempArray;
  } 
};
