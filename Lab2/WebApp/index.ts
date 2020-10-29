import * as express from 'express';
import * as path from 'path';

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

    this.app.listen(3000, () => console.log('Server started on port 3000!'));
	};

	private logMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
		console.log(this.serverName + ': ' + req.url);
		next();
	};
};

new Server();