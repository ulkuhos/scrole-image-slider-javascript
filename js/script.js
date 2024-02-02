let scrollContainer = document.querySelector(".gallery")
let backBtn = document.querySelector("#backBtn")
let nextBtn = document.querySelector("#nextBtn")

scrollContainer.addEventListener("wheel", (e)=> { // wheel:tekerlek gibi donme-ilerleme
   e.preventDefault();
   //oncelikle sayfanın yenilenmesini, o an yaptigi islemi engellemis oluyoruz.
   scrollContainer.scrollLeft += e.deltaY; // mouse tekerlegini hareket ettirdigimizde resimler saga ve sola dogru kayar (alttaki butonlara atadigimiz clik ozelligi eklenince o butona basildiginde saga sola dogru kayar.)
   scrollContainer.style.scrollBehavior = "auto";
})
nextBtn.addEventListener("click", ()=> {
scrollContainer.style.scrollBehavior = "smooth"; // scroll etme davranisi smooth  stilinde gerceklesir yavasca doner.
scrollContainer.scrollLeft += 900; //next butona tiklaynca saga dogru hareket eder
})
backBtn.addEventListener("click", ()=> {
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft -= 900; //back butona tiklaynca sola dogru hareket eder
})



