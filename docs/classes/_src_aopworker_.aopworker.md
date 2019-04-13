[aop_pattern](../README.md) > ["src/AopWorker"](../modules/_src_aopworker_.md) > [AopWorker](../classes/_src_aopworker_.aopworker.md)

# Class: AopWorker

## Hierarchy

**AopWorker**

## Index

### Constructors

* [constructor](_src_aopworker_.aopworker.md#constructor)

### Methods

* [end](_src_aopworker_.aopworker.md#end)
* [exception](_src_aopworker_.aopworker.md#exception)
* [start](_src_aopworker_.aopworker.md#start)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AopWorker**(): [AopWorker](_src_aopworker_.aopworker.md)

*Defined in [src/AopWorker.ts:1](https://github.com/thewazaa/ts.aop_pattern/blob/f378da4/src/AopWorker.ts#L1)*

It controls the code region defined through the \[Interceptor\], to let you define what to do at the start, at the end, at in case of Exception in that region

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
```

**Returns:** [AopWorker](_src_aopworker_.aopworker.md)

___

## Methods

<a id="end"></a>

### `<Abstract>` end

▸ **end**(methodName: *`string`*, _arguments: *`any`*, ret?: *`any`*): `void`

*Defined in [src/AopWorker.ts:45](https://github.com/thewazaa/ts.aop_pattern/blob/f378da4/src/AopWorker.ts#L45)*

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

*Defined in [src/AopWorker.ts:37](https://github.com/thewazaa/ts.aop_pattern/blob/f378da4/src/AopWorker.ts#L37)*

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

*Defined in [src/AopWorker.ts:29](https://github.com/thewazaa/ts.aop_pattern/blob/f378da4/src/AopWorker.ts#L29)*

It runs at the start of the region

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| methodName | `string` |  method name |
| _arguments | `any` |  method arguments |

**Returns:** `void`

___
