/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

const calculate = (str) => {
  const signs = [];
  const nums = [];
  let sum = 0;
  let arr;
  let negative = false;
  const numberMaker = (index, string) => {
    let numString = '';
    let ind = index;
    for(let i = 0; i < string.length; i++) {
      if((Number(string[i]) * -1) < 0 ) {
        numString += string[i];
        ind = i;
      } else {
        break;
      }
      ind = i;
    }

    return [numString, ind];
  };


  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'p') {
      signs.push('+');
    }
    if(str[i] === 'm') {
      signs.push('-');
    }
    if(str[i] === '-') {
      negative = true;
    }
    if(Number(str[i]) * 0 === 0) {
      arr = numberMaker(i, str);
      nums.push(arr[0]);
      i = arr[1] - 1;
    }
  }
  sum = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(signs[i - 1] === '+') {
      sum += nums[i];
    } else {
      sum -= nums[i];
    }
  }
  return sum.toString();
}