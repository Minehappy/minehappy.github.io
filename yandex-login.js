
function yandex_email(){
    const login = document.getElementById("yemail").value
    const password = document.getElementById("ypassword").value
    
    fetch('https://pddimp.yandex.ru/api2/admin/email/add', {
     method: 'POST',
        headers: {
            'PddToken': 'IOIBTHWWB6EGBBQCSJ25CIUPTBKIR6WN5LN3NRZ7VVS26C4G3IOQ'
      },
      body: 'domain=robloxmemes.ml&login='+login+'&password='+password+''
    });
}

