const arr = [
    {Name: 'Malisa', Age:'18'},
    {Name: 'Cloude', Age: '16'},
    {Name: 'Clint', Age: '19'},
    {Name: 'Fanny', Age: '22'}
]

function FindHiegher(arr){
    return arr.filter(arr => arr.Age >= 18)
}
const result = FindHiegher(arr)

console.log(result);  