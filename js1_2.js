function roundUp(num,decNum){
    if (decNum > 15) {
        decNum = 15;
      }
      
      console.log(parseFloat(num.toFixed(decNum)));
    }
    roundUp(10.5, 3);
    roundUp(3.1415926535897932384626433832795, 2); 