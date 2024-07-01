function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  }
  else if(distance > 400 && distance <= 2000){
    return `That will be twenty bucks.` //charge 20$
  }
  else if(distance > 2000 && distance <= 2500){
    return`I will gladly take your thirty bucks.` //charge 30$
  }
  else{
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  let beverage = city == "NYC" ? "Ok, sounds good." : "No go." ;
   return beverage;
}

function switchOnCharmFromTip(tip){
    switch (tip) {
      case tip='generous':
        return 'Thank you so much.';

      case tip='not as generous':
        return 'Thank you.';

      default:
        return 'Bye.';
    }
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

ternaryCheckCity("NYC");
switchOnCharmFromTip();