import flag from 'country-code-emoji'

const template = cf => { 
    const emoji = flag(cf.country) || '🔥';

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>User Info</title>
            <style>
                body {
                    background: #2F2FA2;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    font-family: sans-serif;
                }
                .container {
                    background: #F64C72;
                    color: white;
                    border-radius: 1rem;
                    padding: 4rem;
                }
            </style>
        </head>
        <body>
        <div class="container">
            <h1>Connected from ${cf.country} ${emoji}</h1>
            <h3>Clouflare datacenter: ${cf.colo}</h3>
            <h3>Your city: ${cf.city}</h3>
            <h3>Your latitude: ${cf.latitude}</h3>
            <h3>Your longitude: ${cf.longitude}</h3>
            <h3>Your Time Zone: ${cf.timezone}</h3>
        </div>
        </body>
        </html>
    `
}

export default template