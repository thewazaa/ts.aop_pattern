

## Index

### Version changes

*   1.1.2 js builder
*   1.1.0 Extra parameters for external management
*   1.0.1 Small changes on package.json providing much detailed information
*   1.0.0 Initial release

### Example

*__example__*:
 ```typescript

class loggerWorker extends aop_pattern.AopWorker {
    public start(methodName: string, _arguments: any): void {
      console.debug('start', methodName, _arguments);
    }
    public exception(methodName: string, _arguments: any, exception: string): void {
      console.warn('exception', methodName, _arguments, exception);
    }
    public end(methodName: string, _arguments: any, ret?: any): void {
      console.debug('end', methodName, _arguments, ret);
    }
}

class Whatever extends aop_pattern.Aop<loggerWorker> {
   constructor(...) {
     Super(loggerWorker, Whatever.name);
     ...
   }

   public methodSomething(...): ... {
     return this._intereceptMethod(this.methodSomething.name, arguments, () => {
       ...
     });
   }

   public async methodSomething2(...): Promise<...> {
     return this._intereceptPromise(this.methodSomething2.name, arguments, new Promise(
       ...
     ));
   }
}
```

### External modules

* ["index"](docs/modules/_index_.md)
* ["src/Aop"](docs/modules/_src_aop_.md)
* ["src/AopWorker"](docs/modules/_src_aopworker_.md)

---
