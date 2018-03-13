
/*Make a copy of the original input and assign units digit using modulo and place in reversed version
until done, compare the reversed number with the original. If equal, return true.
Steps
1
  Copy the input 1331
  digit = 1331 % 10 = 1
  reversed number = 1
  number copy = 133
2
  digit = 133 % 10 = 3
  reversed number = 13
  number copy = 13
3
  digit = 13 % 10 = 3
  reversed number = 133
  number copy = 1
4
  digit = 1 % 10 = 1
  reversed number = 1331
  number copy = 0
5
  1331 = 1331 return true
  */
 const isNumberPalindrome = (number) => {
  let nums = ['number']
  let reversed = nums.reverse();
  
  if (nums === reversed) {
    return true;
  } else 
   return false ;
  };
  
  console.log(isNumberPalindrome(1331));

  //STILL WORKING ON PROBLEM - JUST WANTED TO PRACTICE GIT!