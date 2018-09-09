function targetTerdekat(arr) {
    //cari o
    var o = arr.indexOf('o');
    var temp = arr.length
    //jika tidak ada x 
    if (arr.indexOf('x') === -1){
        return 0}
    for (i = 0; i < arr.length; i++) {
        //cari x
        if (arr[i] === 'x') {
            //jika ketemu x
            var jarak = Math.abs(o - i);
            if (jarak < temp) {
                temp = jarak
            }
        }
    } return temp
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2