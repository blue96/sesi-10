
function perkalianUnik(arr){
    total = 1;
    for (let index = 0; index < arr.length; index++) {
        total = total * arr[index];
    }

    let newArr = arr.map(element=>{
        return total / element;
    })
    return newArr;
}

console.log(perkalianUnik([2,4,6]));
console.log(perkalianUnik([1,2,3,4,5]));
console.log(perkalianUnik([1,4,3,2,5]));
console.log(perkalianUnik([1,3,3,1]));
console.log(perkalianUnik([2,1,8,10,2]));

