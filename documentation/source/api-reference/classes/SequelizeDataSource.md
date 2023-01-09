[loopback4-sequelize](../README.md) / SequelizeDataSource

# Class: SequelizeDataSource

Sequelize DataSource Class

## Implements

- `LifeCycleObserver`

## Table of contents

### Constructors

- [constructor](SequelizeDataSource.md#constructor)

### Properties

- [config](SequelizeDataSource.md#config)
- [name](SequelizeDataSource.md#name)
- [sequelize](SequelizeDataSource.md#sequelize)
- [sequelizeConfig](SequelizeDataSource.md#sequelizeconfig)
- [settings](SequelizeDataSource.md#settings)

### Methods

- [automigrate](SequelizeDataSource.md#automigrate)
- [autoupdate](SequelizeDataSource.md#autoupdate)
- [init](SequelizeDataSource.md#init)
- [start](SequelizeDataSource.md#start)
- [stop](SequelizeDataSource.md#stop)

## Constructors

### constructor

• **new SequelizeDataSource**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`SequelizeDataSourceConfig`](../README.md#sequelizedatasourceconfig) |

#### Defined in

[sequelize/sequelize.datasource.base.ts:19](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L19)

## Properties

### config

• **config**: [`SequelizeDataSourceConfig`](../README.md#sequelizedatasourceconfig)

#### Defined in

[sequelize/sequelize.datasource.base.ts:19](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L19)

___

### name

• **name**: `string`

#### Defined in

[sequelize/sequelize.datasource.base.ts:17](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L17)

___

### sequelize

• `Optional` **sequelize**: `Sequelize`

#### Defined in

[sequelize/sequelize.datasource.base.ts:32](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L32)

___

### sequelizeConfig

• **sequelizeConfig**: [`SequelizeDataSourceConfig`](../README.md#sequelizedatasourceconfig)

#### Defined in

[sequelize/sequelize.datasource.base.ts:33](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L33)

___

### settings

• **settings**: `Object` = `{}`

#### Defined in

[sequelize/sequelize.datasource.base.ts:18](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L18)

## Methods

### automigrate

▸ **automigrate**(): `void`

#### Returns

`void`

#### Defined in

[sequelize/sequelize.datasource.base.ts:65](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L65)

___

### autoupdate

▸ **autoupdate**(): `void`

#### Returns

`void`

#### Defined in

[sequelize/sequelize.datasource.base.ts:70](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L70)

___

### init

▸ **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

LifeCycleObserver.init

#### Defined in

[sequelize/sequelize.datasource.base.ts:34](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L34)

___

### start

▸ **start**(`..._injectedArgs`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._injectedArgs` | `unknown`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

LifeCycleObserver.start

#### Defined in

[sequelize/sequelize.datasource.base.ts:60](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L60)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

LifeCycleObserver.stop

#### Defined in

[sequelize/sequelize.datasource.base.ts:61](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.datasource.base.ts#L61)
