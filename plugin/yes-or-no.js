exports.def = function (booleant) {
 if(booleant === false) {
   return "Tidak"
 } else {
   return "Ya"
 }
}
exports.fls = function (booleant) {
 if(booleant === undefined) {
   return false
 } else {
   return true
 }
}
exports.fls_rv = function (booleant) {
 if(booleant === undefined) {
   return true
 } else {
   return false
 }
}