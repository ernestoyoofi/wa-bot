const d = new Date()
const second = d.getSeconds()
const minute = d.getMinutes()
const hour   = d.getHours()
const day    = d.getDay()
const month  = d.getMonth()
const year   = d.getFullYear()

const dayJSON = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu"
]
const monthJSON = [
  "Desember",
  "Febuari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Januari"
] 

let results = `${AddZero(hour)}:${AddZero(minute)}:${AddZero(second)} ${dayJSON[day]}, ${monthJSON[month]} ${year}`
let forConsole = `${AddZero(hour)}-${AddZero(minute)}-${AddZero(second)}--${dayJSON[day]}-${monthJSON[month]}-${year}`

function AddZero(tate) {
  if(tate < 9) {
    return `0${tate}`
  } else {
    return tate.toString()
  }
}

exports.def = results
exports.cons = forConsole