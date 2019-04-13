import aop_pattern from '../index';

var _start: any;
var _exception: any;
var _end: any;

export class testWorker extends aop_pattern.AopWorker {
  public start(methodName: string, _arguments: any): void {
    _start = _exception = _end = undefined;
    _start = ['start', methodName, JSON.stringify(_arguments)];
  }

  public exception(methodName: string, _arguments: any, exception: string): void {
    _exception = ['exception', methodName, JSON.stringify(_arguments), exception];
  }

  public end(methodName: string, _arguments: any, ret?: any): void {
    _end = ['end', methodName, JSON.stringify(_arguments), ret];
  }
}

export { _start, _exception, _end };
