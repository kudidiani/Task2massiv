
function firstReturn(){
    return { name: 'John', surname: 'Doe', age: null};
}
function secondReturn(){
    return { data: { id:1,  type: 'line' }}
};
function thirtReturn(){
    return { data: { nodes: [ { id:1, type: 'line' } ] } }
}  

let massiv = [firstReturn(), secondReturn(), thirtReturn()];
for (let i=0; i < massiv.length; i++) {
    console.log(massiv[i])
 }
 