const openBtn=document.querySelector(".container__btn"),bgModal=document.querySelector(".modal"),closeBtn=document.querySelector(".modal__close"),counterClicks=document.querySelector(".counter"),resetBtn=document.querySelector(".modal__btn");let clicks=0;function openModal(){bgModal.style.display="flex",countClicks()}function closeModal(){bgModal.style.display="none"}function countClicks(){clicks++;var e=JSON.stringify(clicks);localStorage.setItem("clicksNumber",e),5<(counterClicks.innerHTML=clicks)&&(resetBtn.style.display="block")}function resetClicks(){clicks=0,counterClicks.innerHTML="0",resetBtn.style.display="none",localStorage.setItem("clicksNumber",JSON.stringify(clicks)),closeModal()}function initStorage(){localStorage.getItem("clicksNumber")&&(clicks=JSON.parse(localStorage.getItem("clicksNumber")))}window.addEventListener("click",function(e){e.target==bgModal&&(bgModal.style.display="none")}),openBtn.addEventListener("click",openModal),closeBtn.addEventListener("click",closeModal),resetBtn.addEventListener("click",resetClicks),initStorage();