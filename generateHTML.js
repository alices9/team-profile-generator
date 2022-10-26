function managerCard(manager){
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
        ${manager.name}
        Manager
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.email}</li>
        <li class="list-group-item">${manager.number}</li>
    </ul>
</div>`
}

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Information</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead">Welcome to my team page. Here you can find their basic contact information.</p>
            </div>
        </div>
    
        ${managerCard(data)}
    
    </body>
    
    </html>
    `
}


module.exports = generateHTML;