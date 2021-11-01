const express = require('express');
const { port } = require('./config.json');
const { db } = require('./connection.js');
const startSync	 = setInterval(function(){ 
    ForceSync();
}, 1000);

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});
app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

function ForceSync() {

}