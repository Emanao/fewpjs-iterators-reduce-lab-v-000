const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = function(){
  console.log(batteryBatches.reduce((accu, currentElem) => accu+currentElem));
  return ;
 }
