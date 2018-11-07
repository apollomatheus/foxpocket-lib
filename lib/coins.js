'use strict';

var coins = module.exports;

/// Api list to fill new networks
coins.default_networks = [
    {
        coin: 'BTC.livenet',
        name: 'livenet',
        alias: 'mainnet',
        pubkeyhash: 0x00,
        privatekey: 0x80,
        scripthash: 0x05,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        networkMagic: 0xf9beb4d9,
        port: 8333,
        dnsSeeds: [
          'seed.bitcoin.sipa.be',
          'dnsseed.bluematt.me',
          'dnsseed.bitcoin.dashjr.org',
          'seed.bitcoinstats.com',
          'seed.bitnodes.io',
          'bitseed.xf2.org'
        ]
    }/*,
    {
        coin: 'ZCR',
        desc: 'ZCore',
        name: 'livenet',
        alias: 'mainnet',
        pubkeyhash: 0x50,
        privatekey: 0x50,
        scripthash: 0x00,
        xpubkey: 0x0888b21e,
        xprivkey: 0x0988ade4,
        networkMagic: 0x1a13b24b,
        port: 17291,
        dnsSeeds: [
        ]
    },*/
];

coins._networkAdd = null;

coins.isDefault = function (coin) {
    for (var n in this.default_networks) {
        if (this.default_networks[n].coin == coin) {
            return true;
        }
    }
    return false;
}

coins.get = function (list,coin) {
    for (var n in list) {
        if (list[n].coin) {
            if (list[n].coin == coin) {
                return list[n];
            }
        }
    }
    return null;
}

coins.fill = function() {
    for (var n in this.default_networks) {
        this._networkAdd(this.default_networks[n]);
    }
}

coins.add = function(network) {
    if (!network.coin) throw "Missing coin name, eg.: BTC.livenet";
    else {
        if (this._networkAdd) {
            this._networkAdd(network);
        }
    }
}