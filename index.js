function registerServiceWorker(){
    navigator.serviceworker
    .register('/serviceworker.js')
    .then(function(reg){
        console.log("service worker registered", reg)
    })
    .catch(function(err){
        console.log("error when registering service worker", err)
    })
}
