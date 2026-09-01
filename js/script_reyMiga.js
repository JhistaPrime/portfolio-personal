const btn = document.getElementById('btn-submit');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const parrafo = document.getElementById('warnings');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   let warnings = '';
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let hayError = false;
   parrafo.innerHTML = '';

   if(nombre.value.length < 3){
      warnings += `El nombre no es valido <br>`;
      hayError = true;
   }
   if(!regexEmail.test(email.value)){
      warnings += `El email no es valido <br>`;
      hayError = true;
   }
   if(mensaje.value == ''){
      warnings += `El mensaje no puede estar vacío <br>`;
      hayError = true;
   }

   if (hayError) {
      parrafo.innerHTML = warnings;
      return;
   }


   btn.value = 'Enviando...';

   const serviceID = 'service_4cm2nbe';
   const templateID = 'template_li5zv2e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = 'Enviar Mensaje';
      alert('¡Mensaje enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert('No se pudo enviar el mensaje: ' +JSON.stringify(err));
    });
});