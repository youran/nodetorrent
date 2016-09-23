const fs = require('fs');
const net = require('net');
const http = require('http');
const https = require('https');
const assert = require('assert');
const torrentRdr = require('torrentReader');
const torrentWorker = require('torrentWorker');

// global variables
var torrentPool = {};


var initialize = () => {
	torrentRdr.parseTorrentFile(process.argv[2], (err, obj) => {
		if (err) throw err;
		const worker = torrentWorker.download(obj, port);
		torrentPool[obj.info_hash.toString('hex')] = worker;
		// TODO add listeners to worker
	});
};
