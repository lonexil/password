// let pchar="abcdfrgknjrgweehweeweueioiutrghnel@#$%^()&123456789ABCDEFTIGHJKL"
// let charlenght=12
// let password=[dhhjc12A,vbbnn34S,smsjs12A,owowu67X]

function generate(length=8){
  setInterval(() => {
    
    let passsword="";
     let passswordchars="ADEGRJFJIMNBCKS123456789fdeyehejavcenudnd()%$#@&^!"
     let passwordlength=length;
     const array= new Uint32Array(length)
     window.crypto.getRandomValues(array); 
  
  for(i=0; i<length; i++){
    passsword+=passswordchars[array[i] % passswordchars.length]
  }   
  console.log(passsword) 
  document.getElementById("gen").value=passsword;
  
  }, 10000);
  alert("wait for few seconds while password is being generated")
  
}
function show(){
   
 if (
   (document.getElementById("copy").value ==
     document.getElementById("gen").value)
 ) {
   document.getElementById("cop") .style.display= "block";
 } else {
document.getElementById("cop").style.display=" none";

 }
}