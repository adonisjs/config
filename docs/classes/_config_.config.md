**[@poppinss/config](../README.md)**

[Globals](../README.md) › ["Config"](../modules/_config_.md) › [Config](_config_.config.md)

# Class: Config

Config module eases the process of using configuration inside your AdonisJs
applications.

The config files are stored inside a seperate directory, which are loaded and cached
on application boot. Later you can access the values using the `dot` syntax.

## Access values

1. **Given the config file is stored as `config/app.js` with following content**

```js
module.exports = {
 appKey: ''
}
```

2. **You access the appKey as follows**

```js
Config.get('app.appKey')
```

**NOTE:**
The `get` method doesn't raise runtime exceptions when top level objects are missing.

## Hierarchy

* **Config**

## Implements

* [ConfigContract](../interfaces/_contracts_.configcontract.md)

## Index

### Constructors

* [constructor](_config_.config.md#constructor)

### Methods

* [defaults](_config_.config.md#defaults)
* [get](_config_.config.md#get)
* [merge](_config_.config.md#merge)
* [set](_config_.config.md#set)

## Constructors

###  constructor

\+ **new Config**(`_config`: object): *[Config](_config_.config.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_config` | object |  {} |

**Returns:** *[Config](_config_.config.md)*

## Methods

###  defaults

▸ **defaults**(`key`: string, `value`: any): *void*

*Implementation of [ConfigContract](../interfaces/_contracts_.configcontract.md)*

Defaults allows providers to define the default config for a
module, which is merged with the user config

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `defaultValue?`: any): *any*

*Implementation of [ConfigContract](../interfaces/_contracts_.configcontract.md)*

Read value from the pre-loaded config. Make use of the `dot notation`
syntax to read nested values.

The `defaultValue` is returned when original value is `undefined`.

**`example`** 
```js
Config.get('database.mysql')
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  merge

▸ **merge**(`key`: string, `defaultValues`: object, `customizer?`: Function): *any*

*Implementation of [ConfigContract](../interfaces/_contracts_.configcontract.md)*

Fetch and merge an object to the existing config. This method is useful
when you are fetching an object from the config and want to merge
it with some default values.

An optional customizer can be passed to customize the merge operation.
The function is directly passed to [lodash.mergeWith](https://lodash.com/docs/4.17.10#mergeWith)
method.

**`example`** 
```js
// Config inside the file will be merged with the given object

Config.merge('database.mysql', {
  host: '127.0.0.1',
  port: 3306
})
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValues` | object |
`customizer?` | Function |

**Returns:** *any*

___

###  set

▸ **set**(`key`: string, `value`: any): *void*

*Implementation of [ConfigContract](../interfaces/_contracts_.configcontract.md)*

Update in memory value of the pre-loaded config

**`example`** 
```js
Config.set('database.host', '127.0.0.1')
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*