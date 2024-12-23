
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')


window.onscroll=()=>{
    
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset=sec.offsetTop -100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top < offset + height){
        
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

            sec.classList.add('show-animate')
            
        }
        else{
            sec.classList.remove('show-animate')
        }
    });

    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer=document.querySelector('footer');
    
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >=document.scrollingElement.scrollHeight)

    // Get the form element
const form = document.getElementById('contactForm');

// Add a submit event listener
form.addEventListener('submit', async function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Collect form data
    const formData = new FormData(form);

    try {
        // Simulate form submission or use an API (like Web3Forms)
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Successful submission
            alert('Form submitted successfully!');
            form.reset(); // Clear the fields only after a successful submission
        } else {
            // Error in submission
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'Submission failed. Please try again.'}`);
        }
    } catch (error) {
        // Network or unexpected error
        console.error('Submission error:', error);
        alert('Network error. Please try again later.');
    }
});


    
}