
const express = require('express');
const app = express();

const router = require('./route');

router.setup(app, express);
