import { AopWorker } from './AopWorker';
export declare class Aop<T extends AopWorker> {
    private readonly type;
    private readonly className?;
    constructor(type: (new () => T), className?: string);
    _intereceptPromise(methodName: string, _arguments: any, promise: Promise<any>, extra?: any): Promise<any>;
    _intereceptMethod(methodName: string, _arguments: any, method: () => {}, extra?: any): any;
}
