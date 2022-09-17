import log4js from 'log4js';

log4js.configure({
    appenders: { out: { type: 'stdout' } },
    categories: { main: { appenders: ['out'], level: 'info' } }
});
export const logger = log4js.getLogger();
