export const formattingNumbers = number => {
   let array = [];
   const toString = number.toString();
   const checkNumber = toString.includes('.', 0);
   if (checkNumber) {
      array = toString.split('.');
   } else {
      return number + '.00';
   }
   for (let i = 0; i < array.length; i++) {
      if (array[i] < 10 && array[i].length < 2) {
         array[i] = '0' + array[i]
      }
   }
   return array.join('.')
}