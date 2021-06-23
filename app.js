let name = prompt ("what is your name?") ;
alert ('welcome'+ name);
let age = prompt ("how old are you");
if ( age>18 ) {
alert ("you are welcome")
console.log ("wlecome")
}
else{
    alert ("go to home and watch cartoon ")
console.log ("you are child")
};
let lastname = prompt ("what is your last name") ;
alert (name + lastname);
let work = prompt ("are you work ? note:anwser with yes/y or no/n " );
switch (work.toLowerCase()) {
case 'yes':
case 'y':
alert('yes, I am work  ' );
console.log ("yes iam work ");
break;
case 'no':
case 'n':
alert('no, i dont work' );
console.log ("no i dont work ");
break;
       }
let typeofwork = prompt ("do you like your work ? note:anwser with yes/y or no/n " );
switch (typeofwork.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('yes i like my work ');
        console.log("yes i like my work ");
        break;
        case 'no':
          case 'n':
          alert('no, I dont like my work  ');
          console.log("no i dont  like my work ");
          break;
       }
let salary = prompt ("are the salary is good ?note:anwser with yes/y or no/n ");
switch (salary.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('yes i like my work ');
        console.log("yes i like my work ");
        break;
        case 'no':
          case 'n':
          alert('no, I dont like my work  ');
          console.log("no i dont  like my work ");
          break;
       }
       let future = prompt ("are you want to change your carer ? note : answer with yes/ y or no /n ");
       switch (future.toLowerCase()) {
        case 'yes':
            case 'y':
            alert('yes i want do that ');
            console.log("yes i want do that ");
            break;
            case 'no':
              case 'n':
              alert('no, I dont  ');
              console.log("no i dont  ");
              break;}
let result = prompt ("are you honset with answer previous questions  ?note : answer with yes/ y or no /n ");
       switch (result.toLowerCase()) {
        case 'yes':
            case 'y':
            alert('thanks  ');
            console.log("yes  ");
            break;
            case 'no':
              case 'n':
              alert('do that agian and plz be honset ');
              console.log("no i dont  ");
              break;
            }
let number= prompt(" what is my FavoriteNumber?")
number= parseInt(number);
  for(let guess=0 ; guess<4 ; guess++){
      if(number==10){
          console.log("correct")
       alert("correct")
       break;
       }else if(number<10){
         console.log(number)
          alert("too low");
          number= prompt("hi user what is my FavoriteNumber?")
    }else if(number>10){
         console.log(number)
      alert("too high")
      number= prompt("hi user what is my FavoriteNumber?")

      }
  }
  alert("my FavoriteNumber is 7") ;
  let myfavoritesport=['football','basketball','tennis',' handball ','table tennis','running'];
 let userInput= prompt(" what is my Favoritesport?");
for(let i=0;i<6;i++){
    let userInput= prompt(" what is my Favoritesport?");
    for(let x=0;x<myfavoritesport.length;x++){
        if(userInput==myfavoritesport[x]){
             var flag= confirm("correct");
             if(flag==1){
                 break;
             }
            score++;
            i==7
         
        }
    }

    break;

}
prompt ("thanks for visit ");
