var array1 = ['one', 'two']
var array2 = ['three', 'four']


const combined = [...array1, ...array2]
const [first, second, ...others] = combined 