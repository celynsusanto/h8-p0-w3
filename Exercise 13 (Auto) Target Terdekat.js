function targetTerdekat(arr) {
    var o = arr.indexOf('o');
    var jarak=0
    if(arr.indexOf('x')===-1){
        return 0
    }
    for (i = 0; i < arr.lenght; i++) {
        if (arr[i] === 'x') {
             jarak = Math.abs(o-i)
    }return jarak
    } 
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2