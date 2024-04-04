function calculateDemeritPoints(speed) {
    const speedLimit = 70; // This is the required maximum speed limit.
    const kmPerDemeritPoint = 5;  // The number of kilometers per demerit point.
    const demeritPointsThreshold = 12; 
    // Return 'ok' if the speed limit is less than 70
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
    // Demerit points are arrived at by dividing the difference between speed and speedlimit and dividing it by kmPerDemeritPoint. 
        const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint);
    // If the demeritPoints is greater than 12 ( demeritPointsThreshold), then the return should be suspension of license
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended"); 
        } else {
            console.log("Points" + demeritPoints); // Output demerit points
        }
    }
}
// Test cases
calculateDemeritPoints(60); // Output: "Points: 2"