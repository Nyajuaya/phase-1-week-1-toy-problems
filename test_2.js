function calculatePoints(speed) {
    const speedLimit = 70; 
  
    
    if (speed <= speedLimit) {
      console.log("Speed is within the limit. ok.");
    } else {
      const excessSpeed = speed - speedLimit;
      const points = Math.floor(excessSpeed / 5); 
  
      
      if (points > 12) {
        console.log("License deneid");
      } else {
        console.log("Points:", points);
      }
    }
  }




































