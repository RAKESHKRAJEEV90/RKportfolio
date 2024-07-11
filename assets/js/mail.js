/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail =(e)=>{
    e.preventDefault()
    //- publicKey
    emailjs.init('CIeYU2pZcpMYBtAM8');
    //serviceID - templateID -#form 
    emailjs.sendForm('service_c0o2q7c', 'template_t9v2tap', '#contact-form')
    .then(() => {
        //Show sent message
        contactMessage.textContent = 'Your message has been sent'
        //Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)
        //Clear input fields
        contactForm.reset()
},()=>{
//Show error message
contactMessage.textContent= 'Message Not Send(Service Error)'
})
}
contactForm.addEventListener('submit',sendEmail)




