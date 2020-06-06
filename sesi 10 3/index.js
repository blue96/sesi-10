let min, max, mean
let odds = []
let evens = []
let total = 0
function numberProcessing(arr){
    max = arr[0];
    min = arr[0];
    for (let i = 0; i < arr.length ; i++){
        total = total + arr[i];
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] % 2 === 0){
            evens.push(arr[i]);
        }
        else{
            odds.push(arr[i]);
        }
    }
    mean = Math.round(total / arr.length)
    console.log(arr)
    console.log('min = ' + min + '; max = ' + max + '; mean = ' + mean + '; odds = ' + odds.join('-') + '; evens = ' + evens.join('-') )
}

numberProcessing([1,3,5,1,2,8,10,0,3]);