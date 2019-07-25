> **[@poppinss/config](../README.md)**

[Globals](../README.md) / [@poppinss/config](../modules/_poppinss_config.md) / [ConfigContract](_poppinss_config.configcontract.md) /

# Interface: ConfigContract

## Hierarchy

* **ConfigContract**

## Implemented by

* [Config](../classes/_poppinss_config.config.md)

## Index

### Methods

* [defaults](_poppinss_config.configcontract.md#defaults)
* [get](_poppinss_config.configcontract.md#get)
* [merge](_poppinss_config.configcontract.md#merge)
* [set](_poppinss_config.configcontract.md#set)

## Methods

###  defaults

▸ **defaults**(`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `defaultValue?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  merge

▸ **merge**(`key`: string, `defaultValues`: object, `customizer?`: `Function`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValues` | object |
`customizer?` | `Function` |

**Returns:** *any*

___

###  set

▸ **set**(`key`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*