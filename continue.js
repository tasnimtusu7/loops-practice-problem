var number = [23, 45 ,65, 32, 42, 55, 34, 6, 70];
for(var i = 0; i < number.length; i++){
    var numbers = number[i];
    if(numbers >50){
        continue;
    }
    console.log(numbers);
}