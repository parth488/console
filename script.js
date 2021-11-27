//JS to make it work on single page/codepen
function request_fullscreen() {
    document.documentElement.webkitRequestFullScreen();
  }
var MainNav = $('.MainNav-Button');
var counter=0;
function glow_text(){
    navigator.vibrate(200);
	

	counter+=1;
	if(counter%2==0){colorLinks("#ca79fc");}
	else{colorLinks("#ededed");}
}



function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}
var abs_counter=0;
var trc_counter=0;
var esc_counter=0;
var ign_counter=0;

function abs_status(){
    navigator.vibrate(200);
    abs_counter+=1;
    if(abs_counter%2==0){document.getElementById("abs_led").style.opacity = "0";}
    else{document.getElementById("abs_led").style.opacity = "1";}

}
function trc_status(){
    navigator.vibrate(200);
    trc_counter+=1;
    if(trc_counter%2==0){document.getElementById("trc_led").style.opacity = "0";}
    else{document.getElementById("trc_led").style.opacity = "1";}
    
}
function esc_status(){
    navigator.vibrate(200);
    esc_counter+=1;
    if(esc_counter%2==0){document.getElementById("esc_led").style.opacity = "0";}
    else{document.getElementById("esc_led").style.opacity = "1";}
    
}

function ign_status(){
    navigator.vibrate(200);
    ign_counter+=1;
    if(ign_counter%2==0){document.getElementById("ign_on_led").style.opacity = "0";document.getElementById("ign_off_led").style.opacity = "1";}
    else{document.getElementById("ign_on_led").style.opacity = "1";document.getElementById("ign_off_led").style.opacity = "0";}
    
}
const torque_maximum=18;
const torque_minimum=0;
var settorquecount=0;
function set_torque(){
    navigator.vibrate(200);
    settorquecount+=1;
    if(settorquecount%2==0){
        setInterval(function(){ 
  
  
            var torque_val=Math.floor(Math.random() * (torque_maximum - torque_minimum + 1)) + torque_minimum;
            
            
            torqueincrease(torque_val);
            setTimeout(function(){ torquedecrease(torque_val); }, 1000);
            
            
            
           }, 3000);
           


    }
    else{}
}

function torqueincrease(torque_val) {
    // need shift key pressed
    setTimeout(function(){ for (var j = 2; j <=torque_val; j+=1) {
      (function (j) {
        setTimeout(function () {
         
         var str1 = "tsi";
         var str4 = j;
         var res1 = str1.concat(str4);   
         document.getElementById(res1).style.opacity="1";},20*j);})(j);
       
         
        } }, 500);
    
    }

    function torquedecrease(torque_val){
        // need shift key released
        setTimeout(function(){ var lights=[];
          for (var i = 2; i <= torque_val; i++) {
            lights.push(i);
                          }
          lights.reverse();
for (let i = 0; i<= torque_val; i+=1) {
(function (i) {
setTimeout(function () {
 var res="";
 var str1 = "tsi";
 var str3 = lights[i];
 var str2 = str3.toString();
 // console.log(str2)

 res = str1.concat(str2); 
  
 document.getElementById(res).style.opacity="0.3";},100*i);})(i);} }, 500);
           //var lights = [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
           
      
      }

MainNav.on('mousedown', function(){
	var $this = $(this);
	$this.parent().find('.MainNav-Button').removeClass('MainNav-Button_LeftOfActive MainNav-Button_RightOfActive MainNav-Button_Active');
	$this.addClass('MainNav-Button_Active').prev().addClass('MainNav-Button_LeftOfActive');
	$this.next().addClass('MainNav-Button_RightOfActive');
});

MainNav.on('click', function(event){
	event.preventDefault();
});



