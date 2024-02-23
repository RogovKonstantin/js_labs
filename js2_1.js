function getSum(number){
    number=number.toString();
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum+=Number(number[i]);
    }
    return sum;
}
console.log(getSum(245678));
console.log(getSum(97561));
console.log(getSum(543));