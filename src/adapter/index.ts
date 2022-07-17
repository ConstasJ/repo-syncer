export default abstract class Adapter {
    public abstract platform: string;

    public abstract register(): void;
}
