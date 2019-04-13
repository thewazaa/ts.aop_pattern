export abstract class AopWorker {
  public _extra?: any;

  /**
   * It controls the code region defined through the [Interceptor], to let you
   * define what to do at the start, at the end, at in case of Exception in that
   * region
   *
   * @example
   * ```typescript
   *
   * class loggerWorker extends aop_pattern.AopWorker {
   *    public start(methodName: string, _arguments: any): void {
   *      console.debug('start', methodName, _arguments);
   *    }
   *    public exception(methodName: string, _arguments: any, exception: string): void {
   *      console.warn('exception', methodName, _arguments, exception);
   *    }
   *    public end(methodName: string, _arguments: any, ret?: any): void {
   *      console.debug('end', methodName, _arguments, ret);
   *    }
   * }
   * ```
   */
  constructor() { }
  /**
   * It runs at the start of the region
   * @param methodName method name
   * @param _arguments method arguments
   */
  public abstract start(methodName: string, _arguments: any): void;

  /**
   * It runs in case of exception.
   * @param methodName method name
   * @param _arguments method arguments
   * @param exception  exception performed
   */
  public abstract exception(methodName: string, _arguments: any, exception: string): void;

  /**
   * It runs at the end the method. Even when an exception is being performed
   * @param methodName method name
   * @param _arguments method arguments
   * @param ret        retrieved value
   */
  public abstract end(methodName: string, _arguments: any, ret?: any): void;
}
