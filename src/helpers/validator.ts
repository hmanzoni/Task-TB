
const validator = (title:String, description:String, state:string, date:Date) => {
  const errorArr = [];
  const stateCompare = ['inserito', 'in elaborazione', 'completato']
  if ( title==='' || description==='') {
    errorArr.push('Non lasciare nessun campo vuoto');
  }
  if ( date===null) {
    errorArr.push('Seleziona una data');
  }
  if (!stateCompare.includes(state)) {
    errorArr.push('Non si puo cambiare il valore delle opzioni');
  }
  if (title.length > 100) {
    errorArr.push('Non scrivere piú di 100 caratteri');
  }
  if (description.length > 500) {
    errorArr.push('Non scrivere piú di 500 caratteri');
  }
  return {errorArr};
}

export default validator;