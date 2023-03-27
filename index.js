// Code your solution in this file!
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,0,0,0.5)";
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Set Scuber headquarters location to 42nd Street
   
    var distanceInBlocks = Math.abs(pickupLocation - hqLocation) ; // Calculate distance in feet
   
    return distanceInBlocks;
  }
  function distanceFromHqInFeet(pickupLocation) {
    var dfromhqblk=distanceFromHqInBlocks(pickupLocation);
    var dstFeet=dfromhqblk * 264;
    return dstFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // Set block length to 264 feet
    
    var distanceInBlocks = Math.abs(endBlock - startBlock); // Calculate the distance in blocks
    var distanceInFeet = distanceInBlocks * blockLength; // Convert blocks to feet
    
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const freeRide = 400;
    var fare;
    var dstanceTravelled=distanceTravelledInFeet(start, destination);
    if (dstanceTravelled > freeRide){
      var excessdst = dstanceTravelled-freeRide;
      if (excessdst < 2000|| excessdst == 2000){
         var f= 2 * excessdst;
         fare = f + " cents fare"
      } else if ( excessdst < 2500 || excessdst == 2500){
         
         fare = " 25 dollars fare"
      }else{
         fare = "cannot travel that far"
      }
    } else{
      fare = "free Ride";
    }
    //returns the fare for the customer
  }
  
  