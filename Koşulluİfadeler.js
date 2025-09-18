// Karşılaştırma Operatörleri
// == -> Değeri Eşit mi? == → eşitse true
var a = 5
console.log(a == 3)

var b = "4"
console.log(b == 4) // == tip sorgulaması yapmaz o yüzden cevap true çıkar
console.log(b === 4) // === Değeri ve Tipi Eşit mi? cevap false çıkar

// != → eşit değilse true → alt + 26 yazarak çıkar
console.log("test" != "test2") // cevap true çıkar 
console.log("5" != 5) // tip kontrolü yapmadığı için ve biribirine eşit olduğu için false çıkar
console.log("4" !== 4) // tip kontrolü yaptığı için eşit değiller bu yüzden true çıkar


// Mantıksal Operatörler
// && → Ve Operatörü
var condition1 = 5 > 3 //true
var condition2 = 3 < 1 //false
console.log(condition1 && condition2) //false döner

// || → Veya Operatörü
console.log(condition1 || condition2) // true döner

// ! → Değil Operatörü true'yu false false'u true'ya döndürür
console.log(!condition1) // true döndürüyordu ! koyduğumuz için false döndürür
console.log(!condition2) // normalde false döndürürdü ! ile true döndürür


// if - else if else
var age = 18

if (age >= 18) {  // basit bir şekilde ifin içinde koşulu yazabiliriz ya da yeni bir değer tanımlayı koşulu ona atayabiliriz
    console.log("Oyun başlasınnn!")
}

// koşulu condition'a atadık
var condition = age >= 18
if (condition) {
    console.log("Yesss")
}
else if (age >= 14) {
    console.log("yaşınız 14'den küçük")
}
else {
    console.log("Yaşınız tutmuyor")
}

// Bu şekilde tek satırda da yazılabilir
if (age >= 15) console.log("Oyun başlatıldı")
else console.log("Yaşınız tutmuyor")


// En çok kullanılan
var yas = 20

var cevap = (yas >= 18) ? "Oyun başlatıldı!!" : "Yaşınız Tutmuyor"
console.log(cevap)

// yukardakiyle aynı anlama gelir
yas >= 18 ? console.log("Oyun başaltıldıı.") : console.log("Yaş tutmuyor")