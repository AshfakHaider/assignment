//https://github.com/AshfakHaider/assignment
//First Problem Starting 
function kilometerToMeter(value) {
    var result = value *1000;
    return result;
}

//Checking Output 
console.log(kilometerToMeter(5));

//Second Problem Starting
function budgetCalculator(product1, product2, product3){
    var watch = product1*50;
    var mobile = product2*100;
    var laptop = product3*500;
    var totalPrice = watch + mobile + laptop;
    return totalPrice;
}

 //Checking Output
var price = budgetCalculator(10,7,13);
 console.log(price);

 //Third Problem Starting 
function hotelCost(days){
    if(days<=10){
        return 100*days;
    }
    else if(days<=20){
        var firstTenDays  = 10*100;
        var remaining = days - 10;
        var secondTenDays = remaining*80;
        var totalfair = firstTenDays + secondTenDays;
        return totalfair;
    }
    else{
        var firstTenDays  = 10*100;
        var secondTenDays = 10*80;
        remaining = days -20;
        var lastDays = 50*remaining;
        var totalfair = firstTenDays + secondTenDays + lastDays;
        return totalfair;
    }
}
//Checking Output
var daysWantToSpend = 34;
var result = hotelCost(daysWantToSpend);
console.log(result);

//Last Probelm Starting 
 function megaFriend(arr){
    var long= '0';
    for (i=0; i<arr.length; i++){
        if (arr[i].length > long.length){
          long= arr[i];
        }
  
    }
    return long;
  }
  //Checking Output
var names = ['femon', 'fuad' , 'rayhan' , 'ashfakhaider' , 'khokon', 'syednawzishhaider'];
console.log(megaFriend(names));

