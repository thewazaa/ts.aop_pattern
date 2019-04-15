[aop_pattern](../README.md) > ["AopWorker"](../modules/_aopworker_.md) > [AopWorker](../classes/_aopworker_.aopworker.md)

# Class: AopWorker

## Hierarchy

**AopWorker**

## Index

### Constructors

* [constructor](_aopworker_.aopworker.md#constructor)

### Properties

* [_extra](_aopworker_.aopworker.md#_extra)

### Methods

* [end](_aopworker_.aopworker.md#end)
* [exception](_aopworker_.aopworker.md#exception)
* [start](_aopworker_.aopworker.md#start)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AopWorker**(): [AopWorker](_aopworker_.aopworker.md)

*Defined in [AopWorker.ts:2](https://github.com/thewazaa/ts.aop_pattern/blob/4a30b91/src/AopWorker.ts#L2)*

It controls the code region defined through the \[Interceptor\], to let you define what to do at the start, at the end, at in case of Exception in that region

*__example__*:
 ```typescript

class loggerWorker extends AopWorker {
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
```

**Returns:** [AopWorker](_aopworker_.aopworker.md)

___

## Properties

<a id="_extra"></a>

### `<Optional>` _extra

**● _extra**: *`any`*

*Defined in [AopWorker.ts:2](https://github.com/thewazaa/ts.aop_pattern/blob/4a30b91/src/AopWorker.ts#L2)*

___

## Methods

<a id="end"></a>

### `<Abstract>` end

▸ **end**(methodName: *`string`*, _arguments: *`any`*, ret?: *`any`*): `void`

*Defined in [AopWorker.ts:47](https://github.com/thewazaa/ts.aop_pattern/blob/4a30b91/src/AopWorker.ts#L47)*

It runs at the end the method. Even when an exception is being performed

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| `Optional` ret | `any` |  retrieved value |

**Returns:** `void`

___
<a id="exception"></a>

### `<Abstract>` exception

▸ **exception**(methodName: *`string`*, _arguments: *`any`*, exception: *`string`*): `void`

*Defined in [AopWorker.ts:39](https://github.com/thewazaa/ts.aop_pattern/blob/4a30b91/src/AopWorker.ts#L39)*

It runs in case of exception.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |
| exception | `string` |  exception performed |

**Returns:** `void`

___
<a id="start"></a>

### `<Abstract>` start

▸ **start**(methodName: *`string`*, _arguments: *`any`*): `void`

*Defined in [AopWorker.ts:31](https://github.com/thewazaa/ts.aop_pattern/blob/4a30b91/src/AopWorker.ts#L31)*

It runs at the start of the region

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |

**Returns:** `void`

___

