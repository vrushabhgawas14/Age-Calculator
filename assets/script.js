let userDateInput = document.getElementById("date");
userDateInput.max = new Date().toISOString().split("T")[0]; //Not future Dates

let result = document.getElementById("result");
function calculateDate(){

    let bday = new Date(userDateInput.value);
    if(bday.getDate().toLocaleString() == 'NaN'){
        console.log("Empty Input");
        date.classList.add("error");
        setInterval(()=>{
            date.classList.remove("error");
        },1000);
        return;
    }

    let d1 = bday.getDate();
    console.log(d1);
    let m1 = bday.getMonth() + 1; //Month starts with 0
    let y1 = bday.getFullYear();
    
    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; //Month starts with 0
    let y2 = today.getFullYear();

    let d3 ,m3,y3
    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    }

    // console.log(y3,m3,d3);


    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are now <span>${y3}</span> year, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}
