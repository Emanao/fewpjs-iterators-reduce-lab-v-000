const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = function(){
  return batteryBatches.reduce((accu, currentElem) => accu+currentElem);
 }
