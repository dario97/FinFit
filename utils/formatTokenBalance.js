function formatTokenAmount(number, decimalLength){
    number = number.padStart(decimalLength, '0');
    let integerPortion = number.substring(0, number.length - decimalLength);
    let decimalPortion = number.substring(number.length - decimalLength);
    return parseFloat(`${integerPortion}.${decimalPortion}`);
}