const app = require('./app');
const serverIP = '0.0.0.0'
const port = process.env.PORT || 3500;

console.log("Server running on port", port);

app.listen(port, serverIP);
