// Welcome to Lighthouse Markets, grocery store.

// For every two empty bottles, you get one free full bottle.
// For every four bottle caps, you get one free full bottle.
// A pop bottle cost $2

var money = process.argv.splice(2);

var calculBottle = function(money){
  // Initialize our differents items
  var totalBottle = 0;
  var fullBottle = 0;
  var emptyBottle = 0;
  var caps = 0;
  var change = 0;
  // Two var to keep track of empty bottles and caps
  var emptyBottleCount = 0;
  var capsCount = 0;
  // Function that simulate the "drinking" of a full bottle
  function oneFullBottle(){
    fullBottle--;
    totalBottle ++;
    emptyBottle ++;
    caps++;
  }
  // Function that simulate the exchange of two empty bottles
  function twoEmptyBottle(){
    fullBottle++;
    emptyBottle = emptyBottle - 2;
    emptyBottleCount++;
  }
  // Function that simulate the exchange of four caps
  function fourCaps(){
    fullBottle++;
    caps = caps - 4;
    capsCount++;
  }
  // Actual algorithm start here
  // First we buy bottle with money and get change.
  if(money % 2 === 0){
    fullBottle = money / 2;
  }
  else {
    change = money % 2;
    fullBottle = (money - change) / 2;
  }
  // Now we are going into an infinite loop that is gonna "drink" full bottles as long as we can
  for(var i = 1; i > 0; i++){
    if (fullBottle >= 1){
      oneFullBottle();
    }
    // We exchange emptyBottle if we can
    if (emptyBottle >= 2){
      twoEmptyBottle();
    }
    // We exchange caps if we can
    if (caps >= 4){
      fourCaps();
    }
    // When we have no more options we print the result
    if(fullBottle === 0 && emptyBottle < 2 && caps < 4){

      var remainEmptyBottle = totalBottle % 2; // You will always end with 1 Empty Bottle
      var remainCaps = totalBottle % 4; // You will always end with 3 Caps


      console.log("Total Bottles: " + totalBottle);
      console.log("Remaining empty Bottles: " + remainEmptyBottle);
      console.log("Remaining Caps: " + remainCaps);
      console.log("Redeemed Empty Bottles: " + emptyBottleCount);
      console.log("Redeemed Caps: " + capsCount);

      if(change > 0){
        console.log("The customer was also given back $" + change + " in change.")
      }
      console.log("\n");
      break; // end the loop
    }
  }
}

calculBottle(10);
calculBottle(20);
calculBottle(30);
calculBottle(40);

calculBottle(money);
