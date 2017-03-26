#!/usr/bin/env node
'use strict';

// Change Lerna concurrency to 1 in lerna.json

var fs = require('fs');
var path = require('path');
var lernaPath = path.resolve(__dirname, '..', 'lerna.json');

var lerna = JSON.parse(fs.readFileSync(lernaPath, 'utf8'));

lerna.concurrency = '1';

fs.renameSync(lernaPath, lernaPath + '.old');
fs.writeFileSync(lernaPath, JSON.stringify(lerna));
