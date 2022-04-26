export function convertUnixTimeToDate(time:number){
    const date = new Date(time * 1000);
const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

const formattedTime = year + '-' + month + '-' + day;

return isNaN(year)? '': formattedTime;
}