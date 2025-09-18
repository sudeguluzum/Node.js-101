var input = 10
var day
switch (input) { // inputu al, inputun aldığı değerlere göre farklı case'ler vericem. switch parantez içine expression girilir
    case 1:
        day = "Pazartesi"
        break // case 1 bitti anlamına geliyor
    case 2:
        day = "Salı"
        break
    case 3:
        day = "Çarşamba"
        break
    case 4:
        day = "Perşembe"
        break
    case 5:
        day = "Cuma"
        break
    default:
        day = "lütfen geçerli bir gün giriniz."
}
console.log(day)
console.log(`Bugün günlerden ${day}`)

// farklı bir şekilde denemek
var girdi = 7
var expression = (girdi % 7 == 0) ? 7 : girdi % 7
// inputun 7'ye bölümünden kalan 0 ise 7'yi döndür.. değilse direkt inputun % 7'den kalanı versin

var gun
// Strict Comparision
switch (expression) //buraya bir expression giriliyor
{
    case 1:
        gun = "pazartesi"
        break
    case 2:
        gun = "salı"
        break
    case 3:
        gun = "çarşamba"
        break
    case 4:
        gun = "perşembe"
        break
    case 5:
        gun = "cuma"
        break

    case 6:
    case 7:
        gun = "haftasonu"
        break

    default:
        gun = "hata"
}
console.log(gun)


// birden fazla case de verilebilir
switch (expression) {
    default:
        gun = "Lütfen geçerli bir gn giriniz.."
        break // default sonda olsaydı break'e gerek yoktu ama başta olduğu için break eklenir
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        gun = "Hafta içi"
        break
    case 6:
    case 7:
        gun = "Haftasonu"
}
console.log(gun)