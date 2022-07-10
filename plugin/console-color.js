exports.clear = function (text)     { return `\x1b[0m${text}\x1b[0m` }
exports.bright = function (text)    { return `\x1b[1m${text}\x1b[0m`}
exports.dim = function (text)       { return `\x1b[2m${text}\x1b[0m` }
exports.underscore = function (text){ return `\x1b[4m${text}\x1b[0m` }
exports.blink = function (text)     { return `\x1b[5m${text}\x1b[0m` }
exports.reverse = function (text)   { return `\x1b[7m${text}\x1b[0m` }
exports.hidden = function (text)    { return `\x1b[8m${text}\x1b[0m` }

exports.FgBlack = function (text)   { return `\x1b[30m${text}\x1b[0m` }
exports.FgRed = function (text)     { return `\x1b[31m${text}\x1b[0m` }
exports.FgGreen = function (text)   { return `\x1b[32m${text}\x1b[0m` }
exports.FgYellow = function (text)  { return `\x1b[33m${text}\x1b[0m` }
exports.FgBlue = function (text)    { return `\x1b[34m${text}\x1b[0m` }
exports.FgMagenta = function (text) { return `\x1b[35m${text}\x1b[0m` }
exports.FgCyan = function (text)    { return `\x1b[36m${text}\x1b[0m` }
exports.FgWhite = function (text)   { return `\x1b[37m${text}\x1b[0m` }

exports.BgBlack = function (text)   { return `\x1b[40m${text}\x1b[0m` }
exports.BgRed = function (text)     { return `\x1b[41m${text}\x1b[0m` }
exports.BgGreen = function (text)   { return `\x1b[42m${text}\x1b[0m` }
exports.BgYellow = function (text)  { return `\x1b[43m${text}\x1b[0m` }
exports.BgBlue = function (text)    { return `\x1b[44m${text}\x1b[0m` }
exports.BgMagenta = function (text) { return `\x1b[45m${text}\x1b[0m` }
exports.BgCyan = function (text)    { return `\x1b[46m${text}\x1b[0m` }
exports.BgWhite = function (text)   { return `\x1b[47m${text}\x1b[0m` }