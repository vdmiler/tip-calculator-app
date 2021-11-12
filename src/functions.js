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

export const countingValues = props => {
   let selectedPercent = null,
      amount = 0,
      total = 0;

   props.customPercent !== '' ? selectedPercent = props.customPercent : selectedPercent = props.staticPercent;
   if (props.peopleCount !== '0' && props.peopleCount !== '') {
      amount = (props.bill / 100 * selectedPercent) / props.peopleCount;
      total = props.bill / 100 * selectedPercent;
   }

   return {
      resultAmount: amount.toFixed(2),
      resultTotal: total.toFixed(2),
   }
}

export const doResetForm = props => {
   props.onSetBill('');
   props.onSetStaticPercent('');
   props.onSetCustomPercent('');
   props.onSetPeopleCount('1');
   props.onSetActiveId(null)
}