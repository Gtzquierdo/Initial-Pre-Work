// redix: specifies the base of the number in the string. can be an integer between 2 and 36
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
