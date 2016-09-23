const nodeBencode = require('bencode');
const fs = require('fs');

var txt = '';
var torrent = '';

fs.readFile(torrent, (err, buf) => {
	if (err) throw err;
	nodeBencode.decode(buf, (err, obj) => {
			console.log(obj);
			nodeBencode.encode(obj, (err, result) => {
				console.log(result);
				fs.writeFile('encoded', result, 'binary');
		});
	});
});



