/* Örnek Çalışma 1

"ekmek" "pasta", "börek değerlerini tutan 3 farklı değişken tanımlayın. belirtilen sırayla her kelimenin ilk üç 
harifini kesip elde ettiğiniz sonuçları tek bir değişkende - ile birleştirin ve çıkan sonucun bütün harflerini 
büyük harfe dönüştürün.  */

var a = "Ekmek"
var b = "Pasta"
var c = "Börek"

var aSlice = a.slice(0, 3)
var bSlice = b.slice(0, 3)
var cSlice = c.slice(0, 3)
var sonuc = `${aSlice} - ${bSlice} - ${cSlice}`.toUpperCase()
console.log(sonuc)


/* Örnek Çalışma 2

var num = sayı seklinde bir "sayi" degiskeni tanimlayin (Örn: var num = 5). If - else yapisini kullanarak girilen 
sayinin tek mi yoksa cift mi oldugunu konsola yazdirin. Eger girilen sayinin tipi Number degilse konsola bir hata 
mesaji yazdirin. */

var num = "10"
if (typeof num !== "number") {
    console.log("Girilen değer tipi number değil")
}
else if (num % 2 == 0) {
    console.log("Çift say")
}
else
    console.log("Tek sayı")


/* Örnek Çalışma 3
var week_day = sayi seklinde bir "week_day" degiskeni tanimlayin (örn: var week_day - 11). Switch - case yapisim 
kullanarak girilen sayinin hangi aya denk geldigini konsola yazdirin. */

var week_day = 1
switch (week_day) {
    case 1:
        week_day = "Ocak"
        break
    case 2:
        week_day = "Şubat"
        break
    case 3:
        week_day = "Mart"
        break

    default:
        week_day = "1 ile 12 arasında bir değer giriniz"
}
console.log(week_day)