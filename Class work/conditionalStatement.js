// if(null){               //null is falsy value
//     console.log("hello");
// }
// if(" "){
//     console.log("hello"); //" " empty string with space is truthy value
// }

const age=prompt("enter your age");
switch(true){
    case (age<=10):
        console.log("ur are child");
        break;
     case (age>10 && age<=20):
        console.log("ur are teenager");
        break;
     case (age >20 && age<=30):
        console.log("ur adult");
        break;
     case(age>30 && age<=40):
     console.log("you are father of 2 child");
     break;
     case (age>40 && age<=50):
        console.log("preparation of retierment");
        break;
        case (age>50 && age<=60):
            console.log("retierment");
            break;
        case(age>60 && age<=80):
        console.log("it rest time ");
        break;
        default:
            console.log("enter correct age ");
            break;
      
}