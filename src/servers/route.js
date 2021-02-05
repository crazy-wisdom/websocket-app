
const path = require('path');
const bodyParser = require('body-parser');

const port = 3050;

exports.setup = function(app, express) {
  // Store all of user post on the array.
  app.locals.talks = [];

  const router = express.Router();  

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  router.use(function(req, res, next) {
    console.log('Received body from client:')
    console.log(req.body);
    next();
  });

  router.route('/talks')

    // POST http://localhost:3050/api/talks
    .post(function(req, res, next) {

      app.locals.talks.push({
        title: req.body.title
      });
      console.log('Post saved.')

      res.json(app.locals.talks);
      next();
    });

  app.use('/api', router);

  app.listen(port, () => {
    console.log(`listening http://localhost:${port}`);
  });

  app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
};
