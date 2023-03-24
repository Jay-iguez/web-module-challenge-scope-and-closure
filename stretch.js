/*var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27*/
// 1. 
function hostBase (base) {
    let funBase = base
    return function createBase(num) {
        return num + funBase
        
    }
}

addEight = hostBase(8)

console.log(`Task 1`, addEight(8))

