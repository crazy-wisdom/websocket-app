
const path = require('path');
const bodyParser = require('body-parser');


exports.setup = function(app, express) {
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // app.get('/', (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
  // });

  const router = express.Router();  
  app.use('/api', router);

  const port = 3050;
  app.listen(port, () => {
    console.log(`listening http://localhost:${port}`);
  });

  app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
};
