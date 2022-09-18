import { simpleGit } from 'simple-git';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { logger } from './log';

async function sSync(pth: string, srcp: string, trgp: string) {
    async function hasRemote(remote: string) {
        const git = simpleGit(path.resolve(hPath, `./${pth}`));
        const rems = await git.getRemotes();
        for (const rem of rems) {
            if (rem.name === remote) return true;
        }
        return false;
    }

    const hPath = os.homedir();
    const gc = simpleGit();
    if (!fs.existsSync(path.resolve(hPath, `./${pth}`))) {
        await gc.mirror(`git@${srcp}.com:${pth}`, path.resolve(hPath, `./${pth}`));
        logger.info(`Cloned repo from source platform(${srcp}).`);
    } else {
        const gl = simpleGit(path.resolve(hPath, `./${pth}`));
        await gl.fetch(['--all']);
        logger.info(`Pulled from source platform(${srcp}).`);
    }
    const git = simpleGit(path.resolve(hPath, `./${pth}`));
    if (!(await hasRemote(trgp))) await git.addRemote(trgp, `git@${trgp}.com:${pth}`);
    await git.push(['--all', `${trgp}`]);
    logger.info(`Pushed to target platform(${trgp}).`);
}

async function sync(pth: string, srcp: string, trgp: string) {
    logger.info(`Step 1:Sync from ${srcp} to ${trgp}.`);
    await sSync(pth, srcp, trgp);
    logger.info(`Step 2:Sync from ${trgp} to ${srcp}.`);
    await sSync(pth, trgp, srcp);
}

export { sSync, sync };
