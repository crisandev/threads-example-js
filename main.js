// main.js
function startWorker() {
   const startNumber = 1;
   const endNumber = 1000; // Cambia según tus necesidades
 
   const worker = new Worker('worker.js');
 
   // Manejar el mensaje del worker
   worker.onmessage = function(e) {
     const resultElement = document.getElementById('result');
     resultElement.textContent = 'Prime Numbers: ' + e.data.join(', ');
     worker.terminate(); // Terminar el worker después de completar la tarea
   };
 
   // Enviar datos al worker
   const dataToSend = { start: startNumber, end: endNumber };
   worker.postMessage(dataToSend);
 }
 