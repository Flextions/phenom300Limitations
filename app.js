// Questions & Answer Data is added below
data = [ // Elements include a question and answer
  // s = section
  // q = question
  // a = answer
  // r = reference
  {s:"Weights <b>Pre Mod</b> SB 505-00-0008", q:"Max Ramp (MRW)", a:18078, r:""},
  {s:"Weights <b>Pre Mod</b> SB 505-00-0008", q:"Max Takeoff (MTOW)", a:17968, r:""},
  {s:"Weights <b>Pre Mod</b> SB 505-00-0008", q:"Max Landing (MLW)", a:16865, r:""},
  {s:"Weights <b>Pre Mod</b> SB 505-00-0008", q:"Max Zero Fuel (MZFW)", a:13999, r:""},
  {s:"Weights <b>Post Mod</b> SB 505-00-0008", q:"Max Ramp (MRW)", a:18497, r:""},
  {s:"Weights <b>Post Mod</b> SB 505-00-0008", q:"Max Takeoff (MTOW)", a:18387, r:""},
  {s:"Weights <b>Post Mod</b> SB 505-00-0008", q:"Max Landing (MLW)", a:17042, r:""},
  {s:"Weights <b>Post Mod</b> SB 505-00-0008", q:"Max Zero Fuel (MZFW)", a:14220, r:""},
  {s:"Airspeeds", q:"VLO KIAS", a:250, r:""},
  {s:"Airspeeds", q:"VLE KIAS", a:250, r:""},
  {s:"Airspeeds", q:"Takeoff VMC KIAS", a:97, r:""},
  {s:"Airspeeds", q:"Landing VMC (No Icing Conditions) KIAS", a:91, r:""},
  {s:"Airspeeds", q:"Landing VMC (Icing Conditions) KIAS", a:95, r:""},
  {s:"Airspeeds", q:"MMO", a:0.78, r:""},
  {s:"Airspeeds", q:"VO KIAS", a:205, r:""},
  {s:"Airspeeds", q:"VFE Flaps 1 KIAS", a:180, r:""},
  {s:"Airspeeds", q:"VFE Flaps 2&3 KIAS", a:170, r:""},
  {s:"Airspeeds", q:"VFE Flaps FULL KIAS", a:160, r:""},
  {s:"Airspeeds", q:"Maximum Tire Speed KGS", a:182, r:""},
  {s:"Airspeeds", q:"Min Mach for SAT -54°C to-65°C", a:0.55, r:""},
  {s:"Airspeeds", q:"Min Mach for SAT -65°C to-70°C", a:0.67, r:""},
  {s:"Electrical", q:"Min Bat Voltage for Start", a:24, r:""},
  {s:"Electrical", q:"Min GPU Voltage for Bat Charge", a:27, r:""},
  {s:"Electrical", q:"Generator Load on Ground Amps each", a:330, r:""},
  {s:"Electrical", q:"Generator Load in Flight Amps each", a:390, r:""},
  {s:"Fuel", q:"Maximum Fuel Capacity lb", a:5401, r:""},
  {s:"Fuel", q:"Maximum Usable Fuel Capacity lb", a:5352, r:""},
  {s:"Fuel", q:"Max Usable Fuel per Tank lb", a:2676, r:""},
  {s:"Fuel", q:"Unusable Fuel per Tank lb", a:24.2, r:""},
  {s:"Fuel", q:"Maximum Fuel Imbalance lb", a:220, r:""},
  {s:"Fuel", q:"Minimum Fuel Temp °C", a:-37, r:""},
  {s:"Fuel", q:"Maximum Fuel Temp °C (Ground)", a:52, r:""},
  {s:"Fuel", q:"Maximum Fuel Temp °C (In Flight)", a:80, r:""},
  {s:"Fuel", q:"Inop Jet Pump Unusable Increase lb", a:44, r:""},
  {s:"Pressurization", q:"Maximum Differential Pressure psid", a:9.4, r:""},
  {s:"Pressurization", q:"Maximum DifferentialOverpressure psid", a:9.6, r:""},
  {s:"Pressurization", q:"Maximum Differential T/L psid", a:0.2, r:""},
  {s:"Pressurization", q:"Maximum Negative Differential psid", a:-0.3, r:""},
  {s:"Icing Conditions", q:"Max T/O & Landing PA ft", a:10000, r:""},
  {s:"Icing Conditions", q:"Max Cruise Alt OEI ft", a:15000, r:""},
  {s:"Icing Conditions", q:"Minimum Temp for Landing°C", a:-38, r:""},
  {s:"Icing Conditions", q:"Min Airspeed WHSAIS Inhibited KIAS", a:165, r:""},
  {s:"Icing Conditions", q:"Min Airspeed WHSAIS Un-Inhibited KIAS", a:150, r:""},
  {s:"Starter Limits", q:"Cool down after 1st start min(s)", a:1, r:""},
  {s:"Starter Limits", q:"Cool down after 2nd start min(s)", a:1, r:""},
  {s:"Starter Limits", q:"Cool down after 3rd start min(s)", a:15, r:""},
  {s:"Starter Limits", q:"Cool down after 4th start min(s)", a:30, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Starting ITT °C (5 Sec)", a:765, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum ITT °C (10 Min SE in ICE)", a:725, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Takeoff ITT °C (5 Min)", a:700, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum Continuous ITT °C", a:680, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Transient ITT °C (20 Sec)", a:765, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum N1% (10 Min SE in ICE)", a:100, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Takeoff N1% (5 Min)", a:100, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum Continuous N1%", a:100, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Transient N1% (20 Sec)", a:102, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum N2% (5 Min SE in ICE)", a:101, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Takeoff N2% (5 Min)", a:101, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Maximum Continuous N2%", a:101, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Minimum Ground Idle N2%", a:55.1, r:""},
  {s:"Powerplant (FADEC 4.3)", q:"Transient N2% (20 Sec)", a:103, r:""},
  {s:"Loading", q:"Forward Baggage Compartment lb", a:110, r:""},
  {s:"Loading", q:"Aft Baggage Compartment lb", a:463, r:""},
  {s:"Loading", q:"Forward Baggage Load Limit lb/sq ft", a:22.1, r:""},
  {s:"Loading", q:"Aft Baggage Load Limit lb/sq ft", a:70.0, r:""},
  {s:"Auto Pilot", q:"Minimum Engage Height ft agl (2 Eng)", a:600, r:""},
  {s:"Auto Pilot", q:"Minimum Engage Height ft agl (1 Eng)", a:1000, r:""},
  {s:"Auto Pilot", q:"Minimum Use Height ft agl (2 Eng)", a:195, r:""},
  {s:"Auto Pilot", q:"Minimum Use Height ft agl (1 Eng)", a:220, r:""},
  {s:"Miscellaneous", q:"Maximum Cruise Altitude ft", a:45000, r:""},
  {s:"Miscellaneous", q:"Max Alt ft for Flap Extended", a:18000, r:""},
  {s:"Miscellaneous", q:"Max Altitude ft PA for T/O & Landing", a:14000, r:""},
  {s:"Miscellaneous", q:"Load Factors g Flaps 0", a:3.00, r:""},
  {s:"Miscellaneous", q:"Load Factors g Flaps 1, 2, 3 & FULL", a:2.00, r:""},
  {s:"Miscellaneous", q:"Maximum Runway Slope %", a:2.0, r:""},
  {s:"Miscellaneous", q:"Max Tailwind Component kts", a:10, r:""},
  {s:"Miscellaneous", q:"Max Crosswind kts for Static T/O", a:18, r:""},
  {s:"Miscellaneous", q:"Min Temp °C for T/O & Landing", a:-40, r:""},
  {s:"Miscellaneous", q:"Maximum ISA Deviation ISA+°C", a:35, r:""}
  ] ;

// Shuffle questions Data
data = shuffle(data);

var i = 0; // set to first question/answer.
var input = "";  // answer_box input will go here
var last_question = data.length; // set last question reference
var timer_started_flag = false;
const question_section = document.getElementById('question_section');
const question_box = document.getElementById('question_box');
const answer_box = document.getElementById('answer_box');
const question_ref = document.getElementById('question_ref');
const info_box = document.getElementById('info');

function start_timer(){
  // Start the timer
  var start = new Date().getTime(),
      elapsed = '0.0';

  window.setInterval(function()
  {
      var time = new Date().getTime() - start;

      elapsed = Math.floor(time / 100) / 10;
      if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

      document.title = elapsed;

  }, 100);
}

answer_box.addEventListener("keyup", function(event){
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();
    var input = this.value;
    // Do whatever you want with the input
    result = check_answer(input);
    if (result == "correct"){
        i++;
        if (i < last_question){
          info_box.innerHTML = "";
          ask_question(i);
        }
        else{
          end_quiz();
        }
    }
    else {
      document.getElementById('work_area').style.backgroundColor = 'rgba(255, 165, 0, 0.8)';
      answer_box.select();
    }
  }
});

function ask_question(n){
  document.getElementById('work_area').style.backgroundColor = '';  //reset background after incorrect
  question_section.innerHTML = data[n].s; // write the question section to the page
  question_box.innerHTML = data[n].q; // write the question to the page
  question_ref.innerHTML = data[n].r; // write the reference to the page
  answer_box.value = "";  // empty answer_box of last answer
  answer_box.focus(); // draw focus to the answer_box
}

function check_answer(my_answer){
  var correct_answer = data[i].a;
    if (my_answer == correct_answer){
      result = "correct";
    }
    else{
      result = "incorrect";
    }
    // if timer not already, start timer
    if ( timer_started_flag == false ){
      console.log("start timer now");
      start_timer();
      timer_started_flag = true;
    }
    return result;
  }

function end_quiz(){
  info_box.innerHTML = "You have finished the quiz in " + elapsed + " seconds.";
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

ask_question(i);