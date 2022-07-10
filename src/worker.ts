import express, { Express } from 'express';

export default class Worker {
    private app: Express;
    private conf: Record<string, unknown>;

    public constructor(conf: Record<string, unknown>, app: Express = express()) {
        this.app = app;
        this.conf = conf;
    }
}
