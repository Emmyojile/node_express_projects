const _ = require('lodash')

const items = [1,[2,[3,[4,[5,[6]]]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);

const amount = 89

if (amount < 15){
    console.log('small number')
}else{
    console.log('big number')
}
