// String -> Integer
// parseInt - parseFloat - Number() kullanaılır stringi int'e çevirmek için
var a = "5.2"
var total = parseInt(a)
var total = Number(a)
console.log(typeof total)
console.log(total)

// Null'u numberı çevireceğimiz zaman çıtkı 0 olarak verir
var b = null
var sonuc = Number(b)
console.log(sonuc)

// Herhangi bir veri tipinden -> String'e çevirmek
// String() - .toString() kullanılır string'e çevirmek için
var sayi = 23
var cevir = String(sayi)
var cevir2 = sayi.toString()

console.log(typeof cevir)
console.log(cevir2)


// Matematiksel İşlemler
console.log(3 + null) // 3+0=3 null'u 0 olarak algılıyor number olarak 3 sonucunu veriyor
console.log(3 + undefined) // NaN
console.log("3" + null) // 3null
console.log("3" + undefined) // 3undefined
console.log("3" + 2) // 32 artı olduğunda çevirmiyor ama diğer * / - de stringi number'a çevirerek sonuç çıkartıyor
console.log("3" - 2) // 1 
console.log("3" / 2) // 1.5
console.log("3" * 2) //6
console.log("3" ** 2) //9