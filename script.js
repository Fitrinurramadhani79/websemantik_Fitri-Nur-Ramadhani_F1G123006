// ======================
// ACCORDION PENDIDIKAN
// ======================

const buttons = document.querySelectorAll(".edu-btn");

buttons.forEach((btn)=>{

btn.addEventListener("click",()=>{

const card = btn.parentElement;

/* tutup semua card lain */
document
.querySelectorAll(".edu-card")
.forEach((item)=>{

if(item!==card){

item.classList.remove("active");

}

});

/* buka card yg dipilih */
card.classList.toggle("active");

});

});