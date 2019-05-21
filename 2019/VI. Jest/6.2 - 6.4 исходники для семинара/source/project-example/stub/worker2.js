onmessage = (e) => console.log('сообщение из webworker2', e.data);

console.log('webWorker2 отвечает');
postMessage('я не работаю');


