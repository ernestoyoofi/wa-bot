exports.def = function TimesCall(times, externalText) {
    const exText = externalText || ""
    if(times < 11) {
      return exText+"Pagi"
    } else if(times < 14) {
      return exText+"Siang"
    } else if(times < 17){
      return exText+"Sore"
    } else if(times < 19){
      return exText+"Petang"
    } else {
      return exText+"Malam"
    }
  }