onmessage = (e) => console.log('сообщение из webworker', e.data);

console.log('webWorker отвечает');
postMessage('я работаю');


const myWorker = new Worker("./worker2.js");
console.log('отправляем сообщение в WebWorker2');
myWorker.postMessage('Привет webworker2');
myWorker.onmessage = (e)=> console.log('Получаем собщение из Webworker2', e.data);
