// Welcome to Lighthouse Markets, grocery store.

// For every two empty bottles, you get one free full bottle.
// For every four bottle caps, you get one free full bottle.
// A pop bottle cost $2



var calculBottle = function(money){

  function oneFullBottle(){
    fullBottle--;
    totalBottle ++;
    emptyBottle ++;
    caps++;
  }

  function twoEmptyBottle(){
    fullBottle++
    emptyBottle = emptyBottle - 2;
  }

  function fourCaps(){
    fullBottle++
    caps = caps - 4;
  }

  var totalBottle = 0;
  var fullBottle = 0;
  var emptyBottle = 0;
  var caps = 0;

  fullBottle = money / 2;
  for(var i = 1; i > 0; i++){
    if (fullBottle >= 1){
      oneFullBottle();
    }
    if (emptyBottle >= 2){
      twoEmptyBottle();
    }
    if (caps >= 4){
      fourCaps();
    }
    if(fullBottle === 0 && emptyBottle < 2 && caps < 4){
      return totalBottle;
    }
  }
}

console.log(calculBottle(10));
console.log(calculBottle(20));
console.log(calculBottle(30));
console.log(calculBottle(40));
