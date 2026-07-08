const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{
nav.classList.toggle("active");
}
document.getElementById("searchBtn").onclick=function(){

document.getElementById("searchMsg").innerHTML="✅ Luxury rooms available.";

}
document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("bookingMessage").innerHTML=
"✅ Booking request submitted successfully! We'll contact you soon.";

this.reset();

});