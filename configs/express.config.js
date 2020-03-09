
const compression = require('compression');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy');
const path = require('path');

const logger = require(path.join(__dirname, '..', 'utils', 'logger'));

module.exports = (app) => {
  app.use(compression());

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  // app.use(logger('dev'));

  app.use(busboy());

  app.use(
    (req, res, next) => {
      res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.header('Pragma', 'no-cache');
      res.header('Expires', 0);
      next();
    },
  );

  // Get port env or set 3000
  app.set('port', process.env.PORT || 3000);
};
