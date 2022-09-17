import { Command } from 'commander';
import { sync } from './api';

const cmd = new Command();

cmd.argument('path')
    .argument('source')
    .argument('target')
    .action(async (pth, src, trg) => {
        await sync(pth, src, trg);
    });

cmd.parse();
