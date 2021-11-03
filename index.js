
    function distanceFromHqInBlocks(pickupLocation) {
    let numberOfBlocks = pickupLocation - 42; 
    return Math.abs(numberOfBlocks);
}

//

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation)*264; 
    return distanceInFeet;}

//

function distanceTravelledInFeet(start, destination) {
    let feetTravelled = (destination - start)*264;
    return Math.abs(feetTravelled);
}

//
// describe('calculatesFarePrice(start, destination)', function() {
//     it('gives customers a free sample', function() {
//       expect(calculatesFarePrice(43, 44)).to.equal(0);
//     });

//     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
//       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
//       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
//     });

//     it('charges 25 dollars for a distance over 2000 feet', function() {
//       expect(calculatesFarePrice(50, 58)).to.equal(25);
//     });

//     it('does not allow rides over 2500 feet', function() {
//       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//     });
//   });
// });

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination); 
    if (distanceInFeet <= 400) {
       console.log('gives customer a free sample');
       return(0);
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        console.log('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)');
        return((distanceInFeet - 400) * .02);
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        console.log('charges 25 dollars for a distance over 2000 feet');
        return(25);
    } else {
        console.log('does not allow rides over 2500 feet')
        return('cannot travel that far');
    }
    }
