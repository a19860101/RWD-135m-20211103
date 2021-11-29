let ary = ['紅茶','綠茶','綠茶','拿鐵','梅子綠茶'];

//forEach

ary.forEach(function(data,index){
    // console.log(data);
    // console.log(index);
})

//map

let ary_map = ary.map(function(data){
    return data == '梅子綠茶' ? '已售完': data;
})


//filter
let ary_filter = ary.filter(function(data){
    return data != '綠茶';
})

//find
let ary_find = ary.find(function(data){
    return data == '綠茶';
})

//findIndex
let ary_findIndex = ary.findIndex(function(data){
    return data == '梅子綠茶';
})

//reduce
let price = [100,199,259,139];
let total = price.reduce(function(a,b){
    return a + b;
})
console.log(total);