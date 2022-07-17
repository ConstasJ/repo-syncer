import express, { Express } from 'express';

export default class Worker {
    private app: Express;
    private conf: Record<string, unknown>;

    public constructor(conf: Record<string, unknown>, app: Express = express()) {
        this.app = app;
        this.conf = conf;
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
    }

    public start() {}

    public register(url: string) {
        this.app.post(url, (req, res, next) => {});
    }
}
