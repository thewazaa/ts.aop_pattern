export declare abstract class AopWorker {
    _extra?: any;
    constructor();
    abstract start(methodName: string, _arguments: any): void;
    abstract exception(methodName: string, _arguments: any, exception: string): void;
    abstract end(methodName: string, _arguments: any, ret?: any): void;
}
