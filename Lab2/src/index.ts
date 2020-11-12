import * as express from 'express';

export class Server {
  private app: express.Express;

  private serverName: string = 'TestServer';

  public constructor() {
    this.app = express();
    this.app.use(this.logMiddleware.bind(this));

    this.app.get('**',
      (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.end('Hello\n');
      }
    );

    this.app.listen(1377, () => console.log('Server started on port 1377!'));
  };

  private logMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(this.serverName + ': ' + req.url);
    next();
  };
};

new Server();