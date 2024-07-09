const arr = [
    {name: 'Bread', category: 'Grocery'}, 
    {name: 'Butter', category: 'Grocery'}, 
    {name: 'Shampoo', category: 'Personal_care'}
]
function FindCategery(arr){
    return arr.reduce((acc,cur) => {
        if( !acc[cur.category]){
            acc[cur.category] = [];
        }
        acc[cur.category].push(cur.name)
        return acc;

    },{});
}
const findit = FindCategery(arr)

console.log(findit);