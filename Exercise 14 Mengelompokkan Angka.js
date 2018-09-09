//1. Buat array genap tanpa value 
//2. Buat array ganjil tanpa value
//3. Buat array kelipatanTiga tanpa value
//4. Buat array tempat tanpa value
//5. Lakukan perulangan pada arr
//6. Buat kondisi jika angka habis dibagi 2 sama dengan 0 DAN angka modulus 3 tidak sama dengan 0  masukkan ke array genap
//7. Buat kondisi jika angka modulus 2 tidak sama dengan 0 dan angka modulus 3 tidak sama dengan 0 masukkan ke array ganjil
//8. Buat kondisi jika angka modulus 3 sama dengan 0 maka masukkan ke array kelipatanTiga
//9. Masukkan array genap, array ganjil, dan array kelipatanTiga kedalam tempat
//8. Kembalikan array tempat
//9. Selesai

function mengelompokkanAngka(arr) {
    var arrGenap = []
    var arrGanjil = []
    var arrKelTiga = []


    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0) {
            arrGenap.push(arr[i])
        } else if (arr[i] % 2 != 0 && arr[i] % 3 != 0) {
            arrGanjil.push(arr[i])
        } else if (arr[i] % 3 == 0) {
            arrKelTiga.push(arr[i])
        } else {

        }
    } var arrTemp = [arrGenap, arrGanjil, arrKelTiga]

    return arrTemp
}

console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]