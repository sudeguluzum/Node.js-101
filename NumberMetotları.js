// Tam sayıya çevirmek
var a = 5.752
console.log(parseInt(a))


var b = 7
console.log(parseFloat(b))

// 0 yazdığımızda yuvarlayarak 6 değerini string bir sonuç verir virgülden sonraki rakam 5den büyük olduğu yuvarlıyor
console.log(a.toFixed(0))
console.log(typeof a.toFixed(0))

// 1 yazdığımızda virgülden sonra 1 basamak gösterir
console.log(a.toFixed(1))

console.log(a.toFixed(2))

// Çıktının number olması için
console.log(Number(a.toFixed(0)))