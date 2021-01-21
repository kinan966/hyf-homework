/*              House 1 & House 2          */
var widht1, widht2 ;
widht1 = 8, widht2 = 5; // this is the widht of the 2 houses
var height1, height2;
height1 = 10, height2 = 8; // This is the hight of the 2 houses.
var depth1, depth2;
depth1 = 10, depth2 = 11; // This is the depth of the 2 houses.

var gardenSizeInM2_1, gardenSizeInM2_2;
gardenSizeInM2_1 = 100, gardenSizeInM2_2 = 70; // gardensizen 
var volumeInMeters1, volumeInMeters2 ;
volumeInMeters1 = widht1 * height1 * depth1; // volume calculation
volumeInMeters2 = widht2 * height2 * depth2; // volume calculation

var housePrice1 = (volumeInMeters1 * 2.5 * 1000 +
 gardenSizeInM2_1 * 300); // Formula for calculating the price.

 var housePrice2 = (volumeInMeters2 * 2.5 * 1000 +
    gardenSizeInM2_2 * 300); // Formula for calculating the price.

 console.log("My friend Peter will pay " 
 + housePrice1 + ", for the house price.") // printing 

 console.log("My friend Julia will pay " 
 + housePrice2 + ", for the house price.") // printing