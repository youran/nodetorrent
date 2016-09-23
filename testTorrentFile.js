const torrentReader = require('torrentReader');

var torrent = '';

torrentReader.parseTorrentFile(torrent, (err, obj) => {
	if (err) throw err;
	console.log(obj.info_hash);
	console.log(obj.info_hash.toString('hex'));
});

