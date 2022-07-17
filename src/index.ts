import Worker from './worker';
import { cosmiconfig } from 'cosmiconfig';
import log4js from 'log4js';

const log = log4js.getLogger();
log.level = 'debug';

async function main() {
    const explore = await cosmiconfig('reposyncer').search();
    if (!explore?.isEmpty) {
        const conf = explore?.config;
        const worker = new Worker(conf);
    } else {
        log.error('No configuration provided!');
        process.exit(1);
    }
}

main().then((value) => process.exit(0));

export {};
