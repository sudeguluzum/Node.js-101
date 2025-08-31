// Primitive (İlkel) Veri Tipleri
// Number, String, Boolean, BigInt, Symbol, Null(Object), undefined

// ctrl + l ile terminali temizleyebiliriz
// node dosyaadı.js yazarak terminalde çalıştırıyoruz.

// Variable - Identifier
// Declare (tanımlamak), Assigment (birşeye eşitlemek)
/*  Overwrite üstüne yazmak test değişkenini tanımladık birçok kez farklı değer verdik terminalde çalıştırdığımızda
en son tanımladığımızın çıktısını görürüz. */
var test

//Number
test = 3

//String
test = "deneme"

//Boolean
test = false

console.log(test)
console.log(typeof test) // veri tipini öğreniyoruz


//String Toplama
var a = "sude"
var b = "gül"
var c = `${a} ${b} üzüm ${3 + 5}`

console.log(a + " " + b)
console.log(c)

// Stringlerin belirli parçasını alma
var a = "test"
console.log(a[0]) //index
console.log(a.charAt(0))

// Belirli bir karakterin indexini bulma
var a = "Merhaba Dünya"
console.log(a.indexOf("e"))
console.log(a.indexOf("a")) //birden fazla aynı harften varsa ilk indexi gösterir
console.log(a.indexOf("a", 5)) //5'i indexten sonra aramaya başla diyoruz
console.log(a.lastIndexOf("a")) // son indexi bul yani 12. indexi gösterir
console.log(a.lastIndexOf("a", 11)) // 11. indexe karar arama yap diyoruz o zaman bize 6. indexi verir

//Kontrol -boolen döndürür-
console.log(a.startsWith("Merh")) //a değişkeninin merh ile başlayıp başlamadığını kontrol ediyoruz boolean çıktı gösterir büyük küçük harf duyarlılığı vardır.
console.log(a.startsWith("haba", 3)) // 3.idexten itibaren ara diyoruz 3 dahil true döner
console.log(a.endsWith("Dünya"))
console.log(a.endsWith("Dün", 10)) //10.indexe kadar ara 10 dahil değil yani 9a kadar false döner

// İçerip içermeme kontrolü
console.log(a.includes("Dün")) // büyük küçük harf duyarlılığı var boolen döndürür


// Karekter uzunluğu -boşlukta bir karakterdir- 
/* length için parantez açıp kapamadık çünkü bir property yani nesnenin değeri
substing(), toUpperCase() bunlara parantez açılır çünkü onlar fonksiyon */
var k = "sude gül"
console.log(k.length) // burda sadece k'ye ait bir değere/özelliğe erişiyoruz bir işlem yapmıyoruz


//String'i parçalama
console.log(a.slice(1, 3)) //er çıktısını alırız baş dahil son dahil değil

var b = "!selam"  // ünlemi almak istemiyoruz 
console.log(b.slice(1))
console.log(b.substring(1))

// Büyük Küçük Harf çevirme
var c1 = "selam"
console.log(c1.toUpperCase())

var c2 = "SELAM"
console.log(c2.toLowerCase())


// ilk harfi büyük ondan sonrakileri küçük olsun
var j = "sude"
j = `${j[0].toUpperCase()}${j.slice(1)}`
console.log(j)


//String'in başındaki ve sonundaki boşlukları silmek
var d = "   sude  "
console.log(d.trim())


// bu dosyada kullandığımız methodların hiçbirisi değişkenin kendisinde bir değişiklik yapmaz
var ad = "SUDE GÜL"
ad.toLowerCase()
console.log(ad) // bu çıktıda yine SUDE GÜL olur değişkenin kendisi değişmez. 

//Değişmesi için değişkene eşitlememiz gerekir
var ad = "SUDE GÜL"
ad = ad.toLowerCase()
console.log.apply(ad)

// Merthodları art arda kullanabiliriz
var i = "  ÜZÜM "
console.log(i.slice(2, 5).toLowerCase().trim())