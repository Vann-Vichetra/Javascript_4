const arr = [2,1,5,15,6,4,8]

function FindMax(arr){
    const Max = arr.reduce((MaxNum,num) =>{
        if(num > MaxNum){
            return num;
        }else{
            return MaxNum;
        }
    });
    return Max;
}

console.log(FindMax(arr));




// const arr = [2,1,5,6,4,8,9]

// function FindMax(arr){
//     const Max = arr.reduce((acc,cur) =>{ acc < cur},arr[0]);
//     return Max;
// }

// console.log(FindMax(arr));