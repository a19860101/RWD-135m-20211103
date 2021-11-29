let ary = ['紅茶','綠茶','拿鐵','梅子綠茶'];

//forEach

ary.forEach(function(data,index){
    // console.log(data);
    // console.log(index);
})

//map

let ary_map = ary.map(function(data){
    return data == '梅子綠茶' ? '已售完': data;
})

console.log(ary_map);