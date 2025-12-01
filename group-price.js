function groupPrice(str){
    const reg = /(?:usd|\$)(\d+)\.(\d+)/gi;
    return [...str.matchAll(reg)].map(r => r.slice(0,3))
}

console.log(groupPrice('USD12.31'));
