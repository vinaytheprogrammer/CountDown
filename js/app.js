const endDate="20 June 2023 12:00 AM"

const Input= document.querySelectorAll("input")  // Array

function clock()
{
    const end = new Date(endDate)
    const now = new Date() // Browser Will Pass The Date in MiliSeconds 
    const diff = (end-now)/1000;

    if(diff<0)return;
    Input[0].value=Math.floor(diff/86400);
    Input[1].value=Math.floor(diff/3600)% 24;
    Input[2].value=Math.floor(diff/60)% 60;
    Input[3].value=Math.floor(diff)% 60;


}

clock()

setInterval(
    () => { clock()},1000
)