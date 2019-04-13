import { AopWorker } from './AopWorker';

export class Aop<T extends AopWorker> {
  private readonly type: (new () => T);
  private readonly className?: string;

  /**
   * Class to intercept code regions related to class method, functions or promises.
   *
   * The main concept is to let you control in an easy way code that is repeated
   * between your different methods (or functions or promises) in a confortable
   * way.
   *
   * The interceptor doesn't rewrite your code. It uses the base structure of
   * typescript to let you perform tasks in a quite easy way. Also, on classes,
   * you can decide to use it as an external class or an extension. Whatever makes
   * you feel more comfortable.
   * @param type      Interceptor worker to define the operations - at the start,
   *                  at the end, and on exception of the regions you decide to
   *                  control.
   * @param className In case you use it as an extension, it would help you to
   *                  see the correct namespace path in the worker helper Methods
   * @example
   * ```typescript
   *
   * class loggerWorker extends aop_pattern.AopWorker { ... }
   *
   * class Whatever extends aop_pattern.Aop<loggerWorker> {
   *    constructor(...) {
   *      Super(loggerWorker, Whatever.name);
   *      ...
   *    }
   *
   *    public methodSomething(...): ... {
   *      return this._intereceptMethod(this.methodSomething.name, arguments, () => {
   *        ...
   *      });
   *    }
   *
   *    public async methodSomething2(...): Promise<...> {
   *      return this._intereceptPromise(this.methodSomething2.name, arguments, new Promise(
   *        ...
   *      ));
   *    }
   * }
   * ```
   */
  constructor(type: (new () => T), className?: string) {
    this.type = type;
    this.className = className;
  }

  /**
   * Intercept a promise who retrieves a promise
   * @param  methodName method name
   * @param  _arguments method arguments
   * @param  promise    promise method is retrieving
   * @param  extra      extra auxiliar parameters
   * @return            promise replied, with work performed
   */
  public async _intereceptPromise(methodName: string, _arguments: any, promise: Promise<any>, extra?: any): Promise<any> {
    var aux: T = new this.type();
    var ret: Promise<any> | undefined;
    var path = this.className != undefined? this.className + "." + methodName : methodName;
    try {
      aux._extra = extra;
      aux.start(path, _arguments);
      ret = await promise;
      return ret;
    } catch (err) {
      aux.exception(path, _arguments, err);
    } finally {
      aux.end(path, _arguments, ret);
    }
  }

  /**
   * Intercept a class method who retrieves a value (not void)
   * @param  methodName method name
   * @param  _arguments method arguments
   * @param  method     method code. It seems it has not arguments, but it takes the parent ones
   * @param  extra      extra auxiliar parameters
   * @return            the expected value
   */
  public _intereceptMethod(methodName: string, _arguments: any, method: () => {}, extra?: any): any {
    var aux: T = new this.type();
    var ret: any = undefined;
    var path = this.className != undefined? this.className + "." + methodName : methodName;
    try {
      aux._extra = extra;
      aux.start(path, _arguments);
      ret = method();
      return ret;
    } catch (err) {
      aux.exception(path, _arguments, err);
      throw err;
    } finally {
      aux.end(path, _arguments, ret);
    }
  }
}
