
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function timeOfTravel(){
  var calculTime = travelInformation.destinationDistance / 
  travelInformation.speed ;

  var string = calculTime.toString();
  var total = string.split('.');
  let  minutesCalculation = total[1] * 0.6;
  minutesCalculation = minutesCalculation.toFixed(0);
   travelTime= total[0]+ ' hours '+ minutesCalculation +' minutes'
};

timeOfTravel(travelInformation);

console.log(travelTime)