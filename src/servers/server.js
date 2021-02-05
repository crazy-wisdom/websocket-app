
const express = require('express');
const app = express();

const router = require('./route');
const websocket = require('./websocket');

router.setup(app, express);
websocket.start(app);
