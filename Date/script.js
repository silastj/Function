//DATE
const data = new Date()
console.log('data:'+data);
console.log(data.getDay())
console.log(data.getMonth());
console.log(data.getTime());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getUTCHours());

//String
//Trazer data em formato de string
console.log(data.toString());
console.log(data.toDateString());
console.log(data.toISOString());
console.log(data.toLocaleDateString());
console.log(data.toLocaleString());
console.log(data.toUTCString());
console.log(data.toLocaleString('pt-Br'));
console.log(data.toLocaleString('pt-Br',{month:'long', weekday: 'long', day: 'numeric'}));
console.log(data.toLocaleString('pt-Br',{month:'long', weekday: 'short', day: 'numeric'}));
console.log(data.toLocaleString('pt-Br',{month:'short', weekday: 'long', day: 'numeric'}));

console.log('===========================================');
//OBS: Na documentação do Mozila temos mais parametros para passar.

//DESAFIO
const dateBirthday = new Date(1984,04,30) //base
const dayDateBirthDay = dateBirthday.getDate() // dia
const dateBirthdayMonth = dateBirthday.getMonth() //mês
const yearDateBirthDay = dateBirthday.getFullYear() // ano

const generalBirthday = `${dayDateBirthDay}${dateBirthdayMonth}${yearDateBirthDay}`
console.log(generalBirthday);

const dateBirthdayCurrent = new Date() //dia atual
const dayDateBirthDayCurrent = dateBirthdayCurrent.getDate() // dia
const dateBirthdayMonthCurrent = dateBirthdayCurrent.getMonth()+1 //mês
const yearDateBirthDayCurrent = dateBirthdayCurrent.getFullYear() // ano

const generalBirthdayCurrent = `${dayDateBirthDayCurrent}${dateBirthdayMonthCurrent}${yearDateBirthDayCurrent}`
console.log(generalBirthdayCurrent);

const resDay = (dayDateBirthDay - dayDateBirthDayCurrent) //dia
console.log(resDay);
const resMonth = (dateBirthdayMonth - dateBirthdayMonthCurrent) //mes
console.log(resMonth);
const resYear = (yearDateBirthDay - yearDateBirthDayCurrent) //ano
console.log(resYear);