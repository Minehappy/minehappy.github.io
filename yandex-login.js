fetch('https://pddimp.yandex.ru/api2/admin/email/add', {
    method: 'POST',
    mode: 'no-cors',
    
    headers: {
       'Content-Type': 'application/json',
       'PddToken': 'IOIBTHWWB6EGBBQCSJ25CIUPTBKIR6WN5LN3NRZ7VVS26C4G3IOQ'
     },
     body: 'domain=robloxmemes.ml&login=hello@robloxmemes.ml&password=Jeraldgomia@2007'
   }
   .then(response => response.json())  // convert to json
   .then(json => console.log(json))    //print data to console
   .catch(err => console.log('Request Failed', err)) // Catch errors
   );