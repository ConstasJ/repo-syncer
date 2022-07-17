import Adapter from './index';

export default class GithubAdapter extends Adapter {
    public platform = 'github';
    private token: string;

    public constructor(token: string) {
        super();
        this.token = token;
    }

    public register() {}
}
