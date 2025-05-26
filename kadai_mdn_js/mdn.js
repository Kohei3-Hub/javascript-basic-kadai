const data = new Date();
const day = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();

const ymd = () => {

console.log(year + '年', month+1 + '月', day +'日');

}

ymd();
