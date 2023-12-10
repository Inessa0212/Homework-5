// 1. Given a string. Check whether the string is palindrome or not.

function isPalindrome(str) {
  result = "";
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      return "Yes";
    }
  }
  return "No";
}

// 2. Given a string and symbols. Change first symbol by the second one in the string.

function changeTheLastSymbol(string, symbol, lastSymbol) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1) {
      newString += lastSymbol;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

/* 3. Insert a string. Create new string which is the mirror reverse of the inserted one around
its center. */

function theMirrorReverse(string) {
  let wordString = string.length; // длина строки
  let centerPart = Math.floor(wordString / 2); // делим строку пополам и округляем центральную часть строки
  let result = "";

  for (let i = 0; i < wordString; i++) {
    // открываем цикл
    let newPart = (i + centerPart) % wordString; // создаем новую переменную и делим на остаток
    result += string[newPart]; // потом добавляем к центральному индексу
  }
  return result;
}
    
// 4. Print the following number pattern: function will take argument (in this case it is 5)

function printFollowingNumber(number) {
  for (let i = 1; i <= number; i++) {
      let row = '';
  for (let j = 1; j <= i; j++) {
      row += j;      
   }
      console.log(row)
}     
  for (let i = number - 1; i >= 1; i--) {
     let row ='';
  for (let j = 1; j <= i ; j++) {
       row += j;
  }
       console.log(row)
  } 
}
    

// 5. Given an object. Invert it (keys become values and values become keys).
