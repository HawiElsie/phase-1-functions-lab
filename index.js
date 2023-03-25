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
    const blockLength = 264; // Set block length to approximately 1/10th of a mile in feet
    
    const distanceInFeet = Math.abs(pickupLocation - hqLocation) * blockLength; // Calculate distance in feet
    
    const distanceInBlocks = Math.ceil(distanceInFeet / blockLength); // Convert distance to blocks
    
    return distanceInBlocks;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // Set block length to 264 feet
    
    const distanceInBlocks = Math.abs(endBlock - startBlock); // Calculate the distance in blocks
    const distanceInFeet = distanceInBlocks * blockLength; // Convert blocks to feet
    
    return distanceInFeet;
  }
  
  const distance = distanceTravelledInFeet(34, 38); // Should return 1056
  console.log(distance); // Output should be 1056

  
  