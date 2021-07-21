function scuberGreetingForFeet(distance){
  if(distance<=400){
    console.log(`This one is on me!`);
    return `This one is on me!`;
    
  }

  else if(distance>2500){
    return `No can do.`;
    
  }

  else if(distance>2000){
    return `I will gladly take your thirty bucks.`;
    
  }

}

function ternaryCheckCity(city){
  return (city === `NYC` ? `Ok, sounds good.` : `No go.`);
}

function switchOnCharmFromTip(tip){

if(tip === `generous`){
  return `Thank you so much.`;
}

else if(tip === `not as generous`){
  return `Thank you.`;
}

else{
  return `Bye.`;
}

}