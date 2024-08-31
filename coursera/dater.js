function gettime(){
let ssy= document.getElementById("year").value
let sy =ssy-2000
let ry=sy/4
let ty=+sy+ +ry
let tty=ty%7
let mc=document.getElementById("month").value
switch (mc){
case "j":
 mc =0
break;
case "f":
mc="3"
break;
case "m":
mc=3
break;
case "ap":
 mc =6
break;
case "my":
mc=1
break;
case "je":
mc=4
break;
case "jy":
mc=6
break;
case "at":
mc=2
break;
case "s":
mc=5
break;
case "o":
 mc =0
break;
case "n":
mc=3
break;
case "d":
mc=5
break;
}
let dn=document.getElementById("day").value
let ly = ssy%4
if( ly==0 && mc==0 || mc=="3"){
let alr=(+tty + +mc + +dn +6-1)
let aalr=alr%7
if(aalr<=0.9){
    let b= "sunday"
    document.getElementById("space").innerHTML=b;
}else if( aalr<=1.9 && aalr>=1){
    let b= "monday"
    document.getElementById("space").innerHTML=b;
}else if(aalr<=2.9 && aalr>=2){
    let b= "tuesday"
    document.getElementById("space").innerHTML=b;
}else if(aalr<=3.9 && aalr>=3){
    let b= "wednesday"
    document.getElementById("space").innerHTML=b;
}else if(aalr<=4.9 && aalr>=4){
    let b= "thursday"
    document.getElementById("space").innerHTML=b;
}else if(aalr<=5.9 && aalr>=5){
    let b= "friday"
    document.getElementById("space").innerHTML=b;
}else if(aalr<=6.9 && aalr>=6){
    let b= "saturday"
    document.getElementById("space").innerHTML=b;
}
}
else{
let al=(+tty + +mc + +dn +6)
let aal=al%7
if(aal<=0.9){
    let a= "sunday"
    document.getElementById("space").innerHTML=a;
}else if( aal<=1.9 && aal>=1){
    let a= "monday"
    document.getElementById("space").innerHTML=a;
}else if(aal<=2.9 && aal>=2){
    let a= "tuesday"
    document.getElementById("space").innerHTML=a;
}else if(aal<=3.9 && aal>=3){
    let a= "wednesday"
    document.getElementById("space").innerHTML=a;
}else if(aal<=4.9 && aal>=4){
    let a= "thursday"
    document.getElementById("space").innerHTML=a;
}else if(aal<=5.9 && aal>=5){
    let a= "friday"
    document.getElementById("space").innerHTML=a;
}else if(aal<=6.9 && aal>=6){
    let a= "saturday"
    document.getElementById("space").innerHTML=a;
}
}
}


