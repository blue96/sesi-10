
function targetTerdekat(arr){
    let state = ' ';
    let awal = 0;
    let akhir = 0;
    let dif = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != ' '){
            state = arr[i];
            awal = i;
            for (let j = i; j < arr.length; j++){
                if (arr[j] != state && arr[j] != ' '){
                    akhir = j;
                    break;
                }
                else if (arr[j] === state){
                    awal = j;
                }
            }

            break;
        }
    }
    if (akhir === 0){
        dif = 0;
    }
    else {
        dif = akhir - awal;
    }
    return dif;
}

console.log(targetTerdekat([' ',' ','o',' ',' ','x',' ','x']));
console.log(targetTerdekat([' ','o','o',' ',' ','x',' ','x']));
console.log(targetTerdekat([' ','x','x','o',' ',' ',' ',' ']));
