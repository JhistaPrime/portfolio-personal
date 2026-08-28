const btn = document.getElementById('btn-submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_4cm2nbe';
   const templateID = 'template_li5zv2e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Enviar Mensaje';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});