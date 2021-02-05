
const path = require('path');
var cors = require('cors');
const bodyParser = require('body-parser');
const websocket = require('./websocket');

const port = 3050;

exports.setup = function(app, express) {
  // Store all of user post on the array.
  app.locals.talks = [];

  const websocketServer = websocket.connect(app);

  const router = express.Router();

  app.use(cors());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  router.use(function(req, res, next) {
    console.log('Received body from client:')
    console.log(req.body);
    next();
  });

  router.route('/talks')
    
    // GET http://localhost:3050/api/talks
    .get(function(req, res, next) {
      console.log('Get talks')
      res.json(app.locals.talks);
      next();
    })

    // POST http://localhost:3050/api/talks
    .post(function(req, res, next) {

      const data = {
        title: req.body.title,
        rank: req.body.rank ? req.body.rank : 0
      };

      app.locals.talks.push(data);
      console.log('Post saved.')

      // Send latest talks to all clients.
      websocket.send(app, websocketServer);

      res.json(app.locals.talks);
      next();
    });

  app.use('/api', router);

  app.listen(port, () => {
    console.log(`listening http://localhost:${port}`);
  });

  app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
};
