const {readFile, writeFile} = require('fs')

readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return
    }
    const second = result;
    readFile('./content/first.txt', 'utf8', (err,result) =>{
        if (err){
            console.log(err);
            return
        }
    const first = result;
    writeFile('./content/result-async.txt', `Here is the result : ${second}, ${first}`,(err, result) =>{
        if (err){
            console.log(err);
            return
        }
        console.log(result)
    })
    })
})