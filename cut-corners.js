function isInt(n) {
  return n === n + 0;
}
function trunc(x){
    let count = 0 
  if (x > 0) {
    while (x > 0 && x - 1 >= 0) {
      x = x - 1
      count ++
    }
  } else if (x < 0) {
    while (x < 0 && x + 1 <= 0) {
      x = x + 1
      count ++
    }
    count = -count
  }
  return count
}
function floor(x){
    if (x > 0){
        return trunc(x)
    }else{
        return trunc(x) - 1
    }
}
function ceil(x){
    if (x > 0){
        return trunc(x) + 1
    }else{
        return trunc(x)
    }
}
function round(x){
    if (x > 0) {
        let y = x
        while (y > 0 && y - 1 >= 0) {
        y = y - 1
        }
        if (y >= 0.5){
            return ceil(x)
        }else{
            return floor(x)
        }
    }else {
        x = - x
        let y = x
        while (y > 0 && y - 1 >= 0) {
        y = y - 1
        }
        if (y >= 0.5){
            return -ceil(x)
        }else{
            return -floor(x)
        }
    }
}