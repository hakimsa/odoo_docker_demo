const express = require('express');
// App
const app = express();
path = require("path"),


app.get('/', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});
app.get('/pagina', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "index.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/hola', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
    };
    respuesta.json(mascota);
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });