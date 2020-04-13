const funk = require('./funkcionalnosti/zad.js')

console.log(funk.sveKnjige())

funk.addKnjiga(6,"Trump: The Art of the Deal","Donald J. Trump")

let val = funk.getKnjiga(3)

console.log(val)

console.log(funk.sveKnjige())

funk.deleteKnjiga(4)

console.log(funk.sveKnjige())