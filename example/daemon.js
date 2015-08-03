#!/usr/bin/env node

'use strict';

/**
 * bitcoind.js example
 */

process.title = 'bitcore-node';

/**
 * daemon
 */
var daemon = require('../').daemon({
  datadir: process.env.BITCORENODE_DIR || '~/.bitcoin',
  network: 'testnet'
});

daemon.on('ready', function() {
  console.log('ready');
});

daemon.on('tx', function(txid) {
  console.log('txid', txid);
});

daemon.on('error', function(err) {
  daemon.log('error="%s"', err.message);
});

daemon.on('open', function(status) {
  daemon.log('status="%s"', status);
});