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
  let string = '';
  let negative = false;
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
      string = '';
      for(let j = i; j < str.length; j++) {
        if(Number(str[j]) * 0 === 0) {
          string += str[j];
        }
        i = j;
      }
      if(negative === true) {
        nums.push(Number(string) * -1);
      } else {
        nums.push(Number(string));
      }
      negative = false;
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