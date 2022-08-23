let time = Number(prompt("Enter Time To Convert!"));
while(time < 0 || time > 24 || isNaN(time)){
alert("You must enter valid time");
time = prompt("Enter Time To Convert!");
//time validation
}
let stat;
if(time == 0){
    time = 12;
    stat = time + ' AM';
    alert("Time is " + stat);
}else if(time <= 11 && time >= 1){
    stat = time + ' AM';
    alert("Time is " + stat);
}else if(time == 12){
    stat = time + ' PM';
    alert("Time is " + stat);
}else if(time <= 23 && time >=13){
    stat = time - 12 + ' PM';
    alert("Time is " + stat);
}else{
    alert("Invalid Time");
}

//Time converting