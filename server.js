const app = require('./app');
//const serverIP = '0.0.0.0'
const port = process.env.PORT || 3000;

console.log("Server running on port", port);

app.listen(port);
