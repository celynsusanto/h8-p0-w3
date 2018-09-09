//Buat function dataHandling2 
//Masukkan array di function tersebut
//Gunakan fungsi splice untuk memodifikasi variable
//Ganti index [2] dgn 'Provinsi Bandar Lampung'
//Tambahkan 'pria' setelah data index [4]
//ganti index [5] dgn 'SMA Internasional Metro'

//Gunakan split di elemen ke 4
//Ambil angka bulan dan console.log nama bulan sesuai angka tsb
var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2() {
    data.splice(1, 1, 'Roman Alamsyah Elsharawy');
    data.splice(2, 1, 'Provinsi Bandar Lampung');
    data.splice(4, 0, 'Pria');
    data.splice(5, 1, 'SMA Internasional Metro');
    console.log(data)
    var datasplit = data[3].split("/");

    switch (datasplit[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Invalid month')
    }
    datasplit.sort(function (a, b) { return b - a })
    console.log(datasplit)
    var rawdata = data[3].split("/")
    var datajoin = rawdata.join('-')
    console.log(datajoin)
    console.log(data[1].slice(0, 15))
}
dataHandling2(data)




