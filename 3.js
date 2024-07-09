const arr = [
    {Name: 'I', Age: '18'},
    {Name: 'You', Age: '16'},
    {Name: 'We', Age: '20'},
    {Name: 'They',Age: '22'}
]

function Person(arr){
    return arr.map(Person => Person.Name)
}

const FindName = Person(arr);
console.log(FindName);