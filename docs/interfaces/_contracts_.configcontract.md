**[@poppinss/config](../README.md)**

[Globals](../README.md) › ["contracts"](../modules/_contracts_.md) › [ConfigContract](_contracts_.configcontract.md)

# Interface: ConfigContract

## Hierarchy

* **ConfigContract**

## Implemented by

* [Config](../classes/_config_.config.md)

## Index

### Methods

* [defaults](_contracts_.configcontract.md#defaults)
* [get](_contracts_.configcontract.md#get)
* [merge](_contracts_.configcontract.md#merge)
* [set](_contracts_.configcontract.md#set)

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

▸ **merge**(`key`: string, `defaultValues`: object, `customizer?`: Function): *any*

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

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | any |

**Returns:** *void*