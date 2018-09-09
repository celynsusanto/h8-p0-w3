//1.Buat perulangan untuk mencari angka palindrome
//2.Jika 'angka' sama dengan 'angka dibalik' maka hentikan perulangan dan tampilkan angka palindrome tersebut
//3.

function angkaPalindrome(num) {

    while (true) {
        num++
        var numbaru=""
        numbaru = numbaru + num
        var numbalik=numbaru.split("").reverse().join("")
        // for (i = numbaru.length - 1; i >= 0; i--){
        //     var numbalik = ""
        //     numbalik = numbalik + numbaru[i]}
        if (numbaru === numbalik) 
            return num;
    }
}
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));