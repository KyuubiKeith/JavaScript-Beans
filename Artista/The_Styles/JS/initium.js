//DOM Elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      naMe = document.getElementById('name'),
      focus = document.getElementById('focus');

//ShowTime   
function showTime(){
  let today = new Date(),

    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12 Hour Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);

}   

//Add initium Zeros
function addZero(n){
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Background & Greeting
function aloha(){
  let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
      //Morning
      document.body.style.backgroundImage = "url(https://source.unsplash.com/collection/411700/morning)";
      greeting.textContent = 'Good Morning';
    }else if(hour < 18 ){
      //Afternoon
      document.body.style.backgroundImage = "url(https://source.unsplash.com/collection/2404478/afternoon)";
      greeting.textContent = 'Good Afternoon';
    }else{
      //Evening
      document.body.style.backgroundImage = "url(https://source.unsplash.com/collection/200283/night)";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
    }
}

//Set name
function getName(){
  if(localStorage.getItem('name') === null){
    naMe.textContent = '[Kimi no nawa]';
  }else{
    naMe.textContent = localStorage.getItem(naMe);
  }
}
function setName(e){
  if(e.type === 'keypress'){
    //make sure enter is pressed
    if(e.which == 13 || e.keycode == 13){
      localStorage.setItem('name', e.target.innerText);
      naMe.blur();
    }

  } else {
    localStorage.setItem('name', e.target.innerText)
  }
}

//Get Focus
function getFocus(){
  if(localStorage.getItem('focus') === null){
    focus.textContent = '[Enter Your Focus]';
  }else{
    focus.textContent = localStorage.getItem(focus);
  }
}
function setFocus(e){
  if(e.type === 'keypress'){
    //make sure enter is pressed
    if(e.which == 13 || e.keycode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }

  } else {
    localStorage.setItem('focus', e.target.innerText)
  }
}

naMe.addEventListener('keypress', setName);
naMe.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Run
showTime();
aloha();
getName();
getFocus();


