import { simpleGit } from 'simple-git';
import * as os from 'os';
import * as path from 'path';

async function sync(pth: string, srcp: string, trgp: string) {
    const hPath = os.homedir();
    const gc = simpleGit();
    await gc.mirror(`git@${srcp}.com:${pth}`, path.resolve(hPath, `./${pth}`));
    const git = simpleGit(path.resolve(hPath, `./${pth}`));
    await git.addRemote(trgp, `git@${trgp}.com:${pth}`);
    await git.push(trgp);
}

export { sync };
