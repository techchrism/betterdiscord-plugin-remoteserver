import Koa from 'koa';
import auth from 'koa-basic-auth';
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import Router from '@koa/router';

export default class WebServer {
    constructor(host, port, password) {
        this.app = new Koa();
        this.host = host;
        this.port = port;
        this.password = password;

        this.app.use(helmet());
        this.app.use(auth({name: 'remoteserver', pass: password}));
        this.app.use(koaBody());

        const router = Router();
        router.post('/run', async ctx => {
            eval(ctx.request.body);
            ctx.response.status = 200;
        });

        this.app.use(router.routes());
    }

    start() {
        this.server = this.app.listen(this.port, this.host);
        console.log(`Started server on ${this.host}:${this.port}`);
    }

    stop() {
        this.server.close();
    }
}
