const express = require('express');
// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });