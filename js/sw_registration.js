if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
  .then(function(){
    console.log('Registration worked!');
  })
  .catch(function(){
    console.log('Registration failed!');
  });
}else{
  console.log('Service workers are not supported');
}
