// const arr = [2,4,5,4,3,5,6,7,6,5,4,8,3,10,1,33]

// function Findout(arr){
//     return arr.filter((item,index,self) => self.indexOf(item) === self.lastIndexOf(item))
// }

// const result = Findout(arr);
// console.log(result)



const arr = [2,4,5,4,3,5,6,7,6,5,4,8,3,10,1,33]

function Findout(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index)
}

const result = Findout(arr);
console.log(result)


