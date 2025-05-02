
/* Mobile toggle menu */
const navButton = document.getElementById("navBtn");
navButton.addEventListener("click", (e) => {
 e.preventDefault();

 const x = document.getElementById("mobileNav");

 if(x.style.display == "none") {
    x.style.display = "flex";
    navButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

 } else {
    x.style.display = "none";
    navButton.innerHTML = `<i  class="fa-solid fa-bars"></i>`;
 }    
});

const mobileLinks = document.getElementById("mobileNav");

const aLinks = mobileLinks.querySelectorAll("a");

aLinks.forEach(link => {

   link.addEventListener("click", (e) => {

      const herf = link.getAttribute("href");
      //checks if the href is pointed to a id section or websitelink.
      if(herf.startsWith("#")) {
       e.preventDefault();

       // Get the target section ID from the href
       const targetId = link.getAttribute("href").replace("#",""); // remove the "#" symbol
       const targetSection = document.getElementById(targetId);

       // Scroll to the target section
       if (targetSection) {
           const yOffset = -40; // adjust this value as needed (e.g., for fixed headers)
           const yPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

           window.scrollTo({ top: yPosition, behavior: "smooth" });
       }
      }

       // Hide the mobile menu
       mobileLinks.style.display = "none";
       //change cross with bar
       navButton.innerHTML = `<i  class="fa-solid fa-bars"></i>`;
   });

});


/* fubction for back to top button */
window.addEventListener("scroll", () => {
   const btn = document.getElementById("scrollBtn");
   if (window.scrollY > 100) { // show after 100px scroll
     btn.style.display = "block";
   } else {
     btn.style.display = "none";
   }
 });