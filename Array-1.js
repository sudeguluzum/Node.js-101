// Array (Dizi) 

var list = [1, "test", 3]

console.log(list[2]) //listedeki indexi elemanını 

console.log(list.length) // listenin uzunluğu 

console.log(list[list.length - 1]) // listenin içindeki son eleman

list.push("4") // listeye eleman eklemek
console.log(list)

list.splice(3, 1) // listeden eleman silmek 3.indexi 1 tane sil
console.log(list)