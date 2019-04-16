[aop_pattern](../README.md) > ["Aop"](../modules/_aop_.md) > [Aop](../classes/_aop_.aop.md)

# Class: Aop

## Type parameters
#### T :  [AopWorker](_aopworker_.aopworker.md)
## Hierarchy

**Aop**

## Index

### Constructors

* [constructor](_aop_.aop.md#constructor)

### Properties

* [className](_aop_.aop.md#classname)
* [type](_aop_.aop.md#type)

### Methods

* [_intereceptMethod](_aop_.aop.md#_intereceptmethod)
* [_intereceptPromise](_aop_.aop.md#_intereceptpromise)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Aop**(type: *`object`*, className?: *`undefined` \| `string`*): [Aop](_aop_.aop.md)

*Defined in [Aop.ts:5](https://github.com/thewazaa/ts.aop_pattern/blob/6b95fcc/src/Aop.ts#L5)*

Class to intercept code regions related to class method, functions or promises.

The main concept is to let you control in an easy way code that is repeated between your different methods (or functions or promises) in a confortable way.

The interceptor doesn't rewrite your code. It uses the base structure of typescript to let you perform tasks in a quite easy way. Also, on classes, you can decide to use it as an external class or an extension. Whatever makes you feel more comfortable.

*__example__*:
 ```typescript

class loggerWorker extends AopWorker { ... }

class Whatever extends Aop<loggerWorker> {
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

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `object` |  Interceptor worker to define the operations - at the start, at the end, and on exception of the regions you decide to control. |
| `Optional` className | `undefined` \| `string` |  In case you use it as an extension, it would help you to see the correct namespace path in the worker helper Methods |

**Returns:** [Aop](_aop_.aop.md)

___

## Properties

<a id="classname"></a>

### `<Private>``<Optional>` className

**● className**: *`undefined` \| `string`*

*Defined in [Aop.ts:5](https://github.com/thewazaa/ts.aop_pattern/blob/6b95fcc/src/Aop.ts#L5)*

___
<a id="type"></a>

### `<Private>` type

**● type**: *`object`*

*Defined in [Aop.ts:4](https://github.com/thewazaa/ts.aop_pattern/blob/6b95fcc/src/Aop.ts#L4)*

#### Type declaration

___

## Methods

<a id="_intereceptmethod"></a>

###  _intereceptMethod

▸ **_intereceptMethod**(methodName: *`string`*, _arguments: *`any`*, method: *`function`*, extra?: *`any`*): `any`

*Defined in [Aop.ts:87](https://github.com/thewazaa/ts.aop_pattern/blob/6b95fcc/src/Aop.ts#L87)*

Intercept a class method who retrieves a value (not void)

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| method | `function` |  method code. It seems it has not arguments, but it takes the parent ones |
| `Optional` extra | `any` |  extra auxiliar parameters |

**Returns:** `any`
the expected value

___
<a id="_intereceptpromise"></a>

###  _intereceptPromise

▸ **_intereceptPromise**(methodName: *`string`*, _arguments: *`any`*, promise: *`Promise`<`any`>*, extra?: *`any`*): `Promise`<`any`>

*Defined in [Aop.ts:61](https://github.com/thewazaa/ts.aop_pattern/blob/6b95fcc/src/Aop.ts#L61)*

Intercept a promise who retrieves a promise

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| promise | `Promise`<`any`> |  promise method is retrieving |
| `Optional` extra | `any` |  extra auxiliar parameters |

**Returns:** `Promise`<`any`>
promise replied, with work performed

___

