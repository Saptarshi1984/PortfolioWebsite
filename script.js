/* Creating a starry background */


const divParent = document.getElementById('stars');

window.onload = () => {
    
for(let i = 0; i < 100; i++) {
    /* Left-side stars */
    const iChildLeft = document.createElement('i');    
    divParent.appendChild(iChildLeft);
    iChildLeft.style.top = Math.ceil(Math.random()*1000) + 'px';
    iChildLeft.style.left = Math.ceil(Math.random()*1000) + 'px';
    iChildLeft.style.fontSize = Math.ceil(Math.random()*5) + 'px';
    
    /* Not every star will blink */
    if(i % 2 === 0) {
    iChildLeft.className = 'blink fa-solid fa-star fa-beat';
    } else {
        iChildLeft.className = 'blink fa-solid fa-star';
    }
    
    /* Right-side stars */
    const iChildRight = document.createElement('i');
    divParent.appendChild(iChildRight);
    iChildRight.style.top = Math.ceil(Math.random()*1000) + 'px';
    iChildRight.style.right = Math.ceil(Math.random()*1000) + 'px';
    iChildRight.style.fontSize = Math.ceil(Math.random()*5) + 'px';
    
     if(i % 2 === 0) {
    iChildRight.className = 'blink fa-solid fa-star fa-beat';
    } else {
        iChildRight.className = 'blink fa-solid fa-star';
    }
}
}

const meteor = () => {

    const astroid = document.createElement('i');
    astroid.className = 'fa-solid fa-meteor';


}

/* Starry background ends here */

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

 /* Setup for EmailJS starts here  */

 (function(){
   emailjs.init({
     publicKey: "HVBB1QNGvY5XBLc_6",
   });
})();

   const btnSubmit = document.getElementById('submitBtn');
/*    const nameTxt = document.getElementById('txtName').value;
   const emailTxt = document.getElementById('txtEmail').value;
   const messageTxt = document.getElementById('txtMessage').value; */

btnSubmit.addEventListener('submit', (e) => {
e.preventDefault();

var msgTemplateParams = {
   name: document.getElementById('txtName').value,
   email: document.getElementById('txtEmail').value,
   message: document.getElementById('txtMessage').value,
};

emailjs.send('service_bc85t8g', 'template_1hrizsj', msgTemplateParams)
.then(() => {
       document.getElementById('msgStatus').textContent = "Message sent successfully";
       document.getElementById('msgStatus').style.color = '#31EBA1';
      ['txtName','txtEmail', 'txtMessage'].forEach((id) => {
      document.getElementById(id).value = "";       
      })
})
.catch(() => {
   document.getElementById('msgStatus').textContent ="Sending Message failed";
   document.getElementById('msgStatus').style.color = '#ca3c25';
});
});


