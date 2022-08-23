let age = Number(prompt("Enter Your Age"));
while (age <=0 ||isNaN(age) ){
    alert("Re-enter Your age");                      //age validation
    age = Number(prompt("Enter Your Age"));
}
let status;
if( age >=1 && age <=10){
    status =alert("You are a child");
}
else if( age >=11 && age <=18){
    status =alert("You are a teenager");
}
else if(age >=19 && age <=50){                         //check status
    status =alert("You are grown");
}
else if(age >50){
    status =alert("you are old");
}
else{
    alert("invalid");
}

