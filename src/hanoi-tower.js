
const CustomError = require("../extensions/custom-error");	

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return {
  throw new CustomError('Not implemented');	
    turns: Math.pow(2, disksNumber) - 1,
    seconds: (Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600)
};
