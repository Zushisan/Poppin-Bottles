// Welcome to Lighthouse Markets, grocery store.

// For every two empty bottles, you get one free full bottle.
// For every four bottle caps, you get one free full bottle.
// A pop bottle cost $2

var money = process.argv.splice(2);

var calculBottle = function(money){

  var totalBottle = 0;
  var fullBottle = 0;
  var emptyBottle = 0;
  var caps = 0;
  var change = 0;

  var emptyBottleCount = 0;
  var capsCount = 0;

  function oneFullBottle(){
    fullBottle--;
    totalBottle ++;
    emptyBottle ++;
    caps++;
  }

  function twoEmptyBottle(){
    fullBottle++;
    emptyBottle = emptyBottle - 2;
    emptyBottleCount++;
  }

  function fourCaps(){
    fullBottle++;
    caps = caps - 4;
    capsCount++;
  }

  if(money % 2 === 0){
    fullBottle = money / 2;
  }
  else {
    change = money % 2;
    fullBottle = (money - change) / 2;
  }

  for(var i = 1; i > 0; i++){
    if (fullBottle >= 1){
      oneFullBottle();
      i = 0;
    }
    if (emptyBottle >= 2){
      twoEmptyBottle();
    }
    if (caps >= 4){
      fourCaps();
    }
    if(fullBottle === 0 && emptyBottle < 2 && caps < 4){

      var remainEmptyBottle = totalBottle % 2;
      var remainCaps = totalBottle % 4;


      console.log("Total Bottles: " + totalBottle);
      console.log("Remaining empty Bottles: " + remainEmptyBottle);
      console.log("Remaining Caps: " + remainCaps);
      console.log("Redeemed Empty Bottles: " + emptyBottleCount);
      console.log("Redeemed Caps: " + capsCount);

      if(change > 0){
        console.log("The customer was also given back $" + change +" in change.")
      }
      console.log("\n");
      break;
    }
  }
}

calculBottle(10);
calculBottle(20);
calculBottle(30);
calculBottle(40);

calculBottle(money);
