const os = require("os")

console.log(os.platform())
console.log(os.type())
console.log(os.arch())
console.log(os.hostname())
console.log(os.uptime())
totalbyesofmem=os.totalmem()
totalmemgb=(totalbyesofmem/(1024 ** 3)).toFixed(2)

console.log(`Total system memore:${totalmemgb}gb`)