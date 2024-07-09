const arr = ['2024-01-01', '2024-02-02', '2024-04-04']

function Format(arr){
    
    return arr.map(item =>{
        const [year, month,day] =  item.split('-');
        return `${day}-${month}-${year}`;
    });
}
const FormatDating = Format(arr);
console.log(FormatDating);
