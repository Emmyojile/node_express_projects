//Modules
const names = require('./names')
const sayHi = require('./utils')
const data = require('./alt')

require('./mind')
// console.log(names);
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.joy)


const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)


const path = require('path')


console.log(path.sep);

const filepath = path.join('content','subfolder', 'test.txt')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolde','text.txt')
console.log(absolute);