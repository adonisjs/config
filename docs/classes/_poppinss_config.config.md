[@poppinss/config](../README.md) > [@poppinss/config](../modules/_poppinss_config.md) > [Config](../classes/_poppinss_config.config.md)

# Class: Config

Config module eases the process of using configuration inside your AdonisJs applications.

The config files are stored inside a seperate directory, which are loaded and cached on application boot. Later you can access the values using the `dot` syntax.

Access values
-------------

1.  **Given the config file is stored as `config/app.js` with following content**

```js
module.exports = {
 appKey: ''
}
```

2.  **You access the appKey as follows**

```js
Config.get('app.appKey')
```

**NOTE:** The `get` method doesn't raise runtime exceptions when top level objects are missing.

## Hierarchy

**Config**

## Implements

* [ConfigContract](../interfaces/_contracts_.configcontract.md)

## Index

### Constructors

* [constructor](_poppinss_config.config.md#constructor)

### Methods

* [defaults](_poppinss_config.config.md#defaults)
* [get](_poppinss_config.config.md#get)
* [merge](_poppinss_config.config.md#merge)
* [set](_poppinss_config.config.md#set)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Config**(_config?: *`object`*): [Config](_poppinss_config.config.md)

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` _config | `object` |  {} |

**Returns:** [Config](_poppinss_config.config.md)

___

## Methods

<a id="defaults"></a>

###  defaults

▸ **defaults**(key: *`string`*, value: *`any`*): `void`

Defaults allows providers to define the default config for a module, which is merged with the user config

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`string`*, defaultValue?: *`any`*): `any`

Read value from the pre-loaded config. Make use of the `dot notation` syntax to read nested values.

The `defaultValue` is returned when original value is `undefined`.

*__example__*:
 ```js
Config.get('database.mysql')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `any` |

**Returns:** `any`

___
<a id="merge"></a>

###  merge

▸ **merge**(key: *`string`*, defaultValues: *`object`*, customizer?: *`Function`*): `any`

Fetch and merge an object to the existing config. This method is useful when you are fetching an object from the config and want to merge it with some default values.

An optional customizer can be passed to customize the merge operation. The function is directly passed to [lodash.mergeWith](https://lodash.com/docs/4.17.10#mergeWith) method.

*__example__*:
 ```js
// Config inside the file will be merged with the given object

Config.merge('database.mysql', {
  host: '127.0.0.1',
  port: 3306
})
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| defaultValues | `object` |
| `Optional` customizer | `Function` |

**Returns:** `any`

___
<a id="set"></a>

###  set

▸ **set**(key: *`string`*, value: *`any`*): `void`

Update in memory value of the pre-loaded config

*__example__*:
 ```js
Config.set('database.host', '127.0.0.1')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `void`

___

