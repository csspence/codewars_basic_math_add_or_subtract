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
  let num;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'p') {
      signs.push('+');
    }
    if(str[i] === 'm') {
      signs.push('-');
    }
    if(typeof Number(str[i]) === 'number') {
      num = str[i];
      for(let j = i + 1; j < str.length; j++) {
        if(typeof Number(str[j]) === 'number') {
          num += str[j];
        } else {
          nums.push(Number(num));
          i = j;
          break;
        }
      }
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