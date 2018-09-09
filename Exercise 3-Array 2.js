//Array Multidimensi
//1.Buat Fungsi dengan nama dataHilang dengan parameter berbentuk array
//2.Array berisi beberapa array
//3.Masukkan isi Array sebagai berikut:
// [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ]
//4. Tampilkan data sebagai berikut:
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun
//5. Gunakan looping untuk membuat data seperti diatas

var data = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling() {
    var gabung = '';
    for (i = 0; i <= data.length - 1; i++) {
        gabung += 'Nomor ID: ' + data[i][0] + '\n' + 'Nama Lengkap: ' + data[i][1] + '\n' + 'TTL: ' + data[i][2] + '\n' + data[i][3] + '\n' + 'Hobi: ' + data[i][4] + '\n' + '\n';
    }
    return gabung;
}

console.log(dataHandling(data))



