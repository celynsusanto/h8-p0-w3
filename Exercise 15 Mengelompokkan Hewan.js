//function groupAnimals(arr), arr berisi string
//returnnya array multidimensi sesuai abjad depan dan berurutan
//1. Buat 'arrMulti' dengan nilai kosong dan berjenis array sebagai tempat menampung array baru yang sudah berurutan
//2. Lakukan penyortiran pada array agar tersusun sesuai alphabet dan masukkan kedalam variabel 'sortArr'
//3. Buat 'index' dengan nilai 0 yang akan digunakan untuk index 'arrMulti'
//4. Lakukan perulangan pada 'sortArr'
//5. Masukkan kondisi pertama jika panjang dari 'arrMulti' masih 0 masukkan string pertama dari 'sortArr' kedalam 'arrMulti' dalam bentuk array
//6. Masukkan kondisi kedua jika huruf depan pada 'arrMulti'  sama dengan huruf depan pada sortArr pada index yang dilakukan perulangan dan index huruf ke 0,
//   maka masukkan value dari 'sortArr' tersebut pada index tersebut kedalam 'arrMulti' di index yang sama
//7. Jika kedua kondisi diatas tidak terpenuhi maka masukkan string dari 'sortArr' kedalam 'arrMulti' tanpa menggabungkannya dengan array yang telah terbentuk didalam 'arrMulti' sebelumnya
//   dan juga tambahkan indeks degan nilai 1
//8. Kembalikan nilai 'arrMulti'
//9. Selesai
function groupAnimals(arr) {
    var arrMulti = []
    var sortArr = arr.sort()
    var index = 0
    for (i = 0; i < sortArr.length; i++) {
        if (arrMulti.length === 0) {
            arrMulti.push([sortArr[i]])
        } else if (arrMulti[index][0][0] === sortArr[i][0]) {
            arrMulti[index].push(sortArr[i])
        } else {
            arrMulti.push([sortArr[i]]);
            index=index+1
        }
    }

    return arrMulti

}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]