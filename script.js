function decimalToBinary(num) {
  //Write you code here
  let num = 7;
  while (num > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

window.decimalToBinary = decimalToBinary;
