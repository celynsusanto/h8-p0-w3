function tentukanDeretAritmatika(arr) {
    var bandingAwal = arr[1] - arr[0]
    var aritmatika = true
    for (var j = 1; j < arr.length - 1; j++) {
        var banding = arr[j + 1] - arr[j]
        if (bandingAwal !== banding) {
            aritmatika = false;
        }
    }
    return aritmatika
} 

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));
console.log(tentukanDeretAritmatika([2, 4, 6, 8]));
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); 