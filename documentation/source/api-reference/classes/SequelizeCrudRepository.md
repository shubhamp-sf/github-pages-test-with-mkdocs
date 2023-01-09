[loopback4-sequelize](../README.md) / SequelizeCrudRepository

# Class: SequelizeCrudRepository<T, ID, Relations\>

Sequelize implementation of CRUD repository to be used with default loopback entities
and SequelizeDataSource for SQL Databases

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Entity` |
| `ID` | `ID` |
| `Relations` | extends `object` = {} |

## Implements

- `EntityCrudRepository`<`T`, `ID`, `Relations`\>

## Table of contents

### Constructors

- [constructor](SequelizeCrudRepository.md#constructor)

### Properties

- [DB\_SPECIFIC\_SETTINGS\_KEYS](SequelizeCrudRepository.md#db_specific_settings_keys)
- [DEFAULT\_ORDER\_STYLE](SequelizeCrudRepository.md#default_order_style)
- [dataSource](SequelizeCrudRepository.md#datasource)
- [entityClass](SequelizeCrudRepository.md#entityclass)
- [inclusionResolvers](SequelizeCrudRepository.md#inclusionresolvers)
- [sequelizeModel](SequelizeCrudRepository.md#sequelizemodel)

### Methods

- [buildSequelizeAttributeFilter](SequelizeCrudRepository.md#buildsequelizeattributefilter)
- [buildSequelizeIncludeFilter](SequelizeCrudRepository.md#buildsequelizeincludefilter)
- [buildSequelizeOrder](SequelizeCrudRepository.md#buildsequelizeorder)
- [buildSequelizeWhere](SequelizeCrudRepository.md#buildsequelizewhere)
- [count](SequelizeCrudRepository.md#count)
- [create](SequelizeCrudRepository.md#create)
- [createAll](SequelizeCrudRepository.md#createall)
- [createBelongsToAccessorFor](SequelizeCrudRepository.md#createbelongstoaccessorfor)
- [createHasManyRepositoryFactoryFor](SequelizeCrudRepository.md#createhasmanyrepositoryfactoryfor)
- [createHasManyThroughRepositoryFactoryFor](SequelizeCrudRepository.md#createhasmanythroughrepositoryfactoryfor)
- [createHasOneRepositoryFactoryFor](SequelizeCrudRepository.md#createhasonerepositoryfactoryfor)
- [createReferencesManyAccessorFor](SequelizeCrudRepository.md#createreferencesmanyaccessorfor)
- [delete](SequelizeCrudRepository.md#delete)
- [deleteAll](SequelizeCrudRepository.md#deleteall)
- [deleteById](SequelizeCrudRepository.md#deletebyid)
- [excludeHiddenProps](SequelizeCrudRepository.md#excludehiddenprops)
- [execute](SequelizeCrudRepository.md#execute)
- [exists](SequelizeCrudRepository.md#exists)
- [find](SequelizeCrudRepository.md#find)
- [findById](SequelizeCrudRepository.md#findbyid)
- [findOne](SequelizeCrudRepository.md#findone)
- [getSequelizeModel](SequelizeCrudRepository.md#getsequelizemodel)
- [getSequelizeModelAttributes](SequelizeCrudRepository.md#getsequelizemodelattributes)
- [getSequelizeOperator](SequelizeCrudRepository.md#getsequelizeoperator)
- [includeReferencesIfRequested](SequelizeCrudRepository.md#includereferencesifrequested)
- [registerInclusionResolver](SequelizeCrudRepository.md#registerinclusionresolver)
- [replaceById](SequelizeCrudRepository.md#replacebyid)
- [save](SequelizeCrudRepository.md#save)
- [syncLoadedSequelizeModels](SequelizeCrudRepository.md#syncloadedsequelizemodels)
- [syncSequelizeModel](SequelizeCrudRepository.md#syncsequelizemodel)
- [toEntities](SequelizeCrudRepository.md#toentities)
- [update](SequelizeCrudRepository.md#update)
- [updateAll](SequelizeCrudRepository.md#updateall)
- [updateById](SequelizeCrudRepository.md#updatebyid)

## Constructors

### constructor

• **new SequelizeCrudRepository**<`T`, `ID`, `Relations`\>(`entityClass`, `dataSource`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Entity`<`T`\> |
| `ID` | `ID` |
| `Relations` | extends `object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityClass` | typeof `Entity` & { `prototype`: `T`  } |
| `dataSource` | [`SequelizeDataSource`](SequelizeDataSource.md) |

#### Defined in

[sequelize/sequelize.repository.base.ts:70](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L70)

## Properties

### DB\_SPECIFIC\_SETTINGS\_KEYS

• `Readonly` **DB\_SPECIFIC\_SETTINGS\_KEYS**: readonly [``"postgresql"``, ``"mysql"``, ``"sqlite3"``]

Object keys used in models for set database specific settings.
Example: In model property definition one can use postgresql dataType as float
`{
  type: 'number',
  postgresql: {
    dataType: 'float',
    precision: 20,
    scale: 4,
  },
}`

This array of keys is used while building model definition for sequelize.

#### Defined in

[sequelize/sequelize.repository.base.ts:100](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L100)

___

### DEFAULT\_ORDER\_STYLE

• `Readonly` **DEFAULT\_ORDER\_STYLE**: ``"ASC"``

Default `order` filter style if only column name is specified

#### Defined in

[sequelize/sequelize.repository.base.ts:84](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L84)

___

### dataSource

• **dataSource**: [`SequelizeDataSource`](SequelizeDataSource.md)

#### Defined in

[sequelize/sequelize.repository.base.ts:74](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L74)

___

### entityClass

• **entityClass**: typeof `Entity` & { `prototype`: `T`  }

#### Implementation of

EntityCrudRepository.entityClass

#### Defined in

[sequelize/sequelize.repository.base.ts:71](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L71)

___

### inclusionResolvers

• `Readonly` **inclusionResolvers**: `Map`<`string`, `InclusionResolver`<`T`, `Entity`\>\>

#### Implementation of

EntityCrudRepository.inclusionResolvers

#### Defined in

[sequelize/sequelize.repository.base.ts:106](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L106)

___

### sequelizeModel

• **sequelizeModel**: `ModelStatic`<`Model`<`T`, `T`\>\>

Sequelize Model Instance created from the model definition received from the `entityClass`

#### Defined in

[sequelize/sequelize.repository.base.ts:114](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L114)

## Methods

### buildSequelizeAttributeFilter

▸ `Protected` **buildSequelizeAttributeFilter**(`fields?`): `undefined` \| `FindAttributeOptions`

Get Sequelize `attributes` filter value from `fields` of loopback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields?` | `Fields`<`AnyObject`\> | Loopback styles `fields` options. eg. `["name", "age"]`, `{ id: false }` |

#### Returns

`undefined` \| `FindAttributeOptions`

Sequelize Compatible Object/Array based on the fields provided. eg. `{ "exclude": ["id"] }`

#### Defined in

[sequelize/sequelize.repository.base.ts:369](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L369)

___

### buildSequelizeIncludeFilter

▸ `Protected` **buildSequelizeIncludeFilter**(`inclusionFilters?`, `sourceModel?`): `Includeable`[]

Build Sequelize compatible `include` filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inclusionFilters?` | `Object`[] | loopback style `where` condition |
| `sourceModel?` | `ModelStatic`<`Model`<`T`, `T`\>\> | sequelize model instance |

#### Returns

`Includeable`[]

Sequelize compatible `Includeable` array

#### Defined in

[sequelize/sequelize.repository.base.ts:442](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L442)

___

### buildSequelizeOrder

▸ `Protected` **buildSequelizeOrder**(`order?`): `undefined` \| `Order`

Get Sequelize Order filter value from loopback style order value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `order?` | `string` \| `string`[] | Sorting order in loopback style filter. eg. `title ASC`, `["id DESC", "age ASC"]` |

#### Returns

`undefined` \| `Order`

Sequelize compatible order filter value

#### Defined in

[sequelize/sequelize.repository.base.ts:420](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L420)

___

### buildSequelizeWhere

▸ `Protected` **buildSequelizeWhere**<`MT`\>(`where?`): `WhereOptions`<`MT`\>

Build Sequelize compatible where condition object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MT` | extends `Entity`<`MT`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `where?` | `Where`<`MT`\> | loopback style `where` condition |

#### Returns

`WhereOptions`<`MT`\>

Sequelize compatible where options to be used in queries

#### Defined in

[sequelize/sequelize.repository.base.ts:520](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L520)

___

### count

▸ **count**(`where?`, `options?`): `Promise`<`Count`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `where?` | `Where`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`Count`\>

#### Implementation of

EntityCrudRepository.count

#### Defined in

[sequelize/sequelize.repository.base.ts:332](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L332)

___

### create

▸ **create**(`entity`, `options?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `DataObject`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`T`\>

#### Implementation of

EntityCrudRepository.create

#### Defined in

[sequelize/sequelize.repository.base.ts:116](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L116)

___

### createAll

▸ **createAll**(`entities`, `options?`): `Promise`<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `DataObject`<`T`\>[] |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`T`[]\>

#### Implementation of

EntityCrudRepository.createAll

#### Defined in

[sequelize/sequelize.repository.base.ts:131](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L131)

___

### createBelongsToAccessorFor

▸ `Protected` **createBelongsToAccessorFor**<`Target`, `TargetId`\>(`relationName`, `targetRepositoryGetter`): `BelongsToAccessor`<`Target`, `ID`\>

Function to create a belongs to accessor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | extends `Entity`<`Target`\> |
| `TargetId` | `TargetId` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `targetRepositoryGetter` | `Getter`<`EntityCrudRepository`<`Target`, `TargetId`, {}\>\> \| { `[repoType: string]`: `Getter`<`EntityCrudRepository`<`Target`, `TargetId`\>\>;  } | - |

#### Returns

`BelongsToAccessor`<`Target`, `ID`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:1118](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1118)

___

### createHasManyRepositoryFactoryFor

▸ `Protected` **createHasManyRepositoryFactoryFor**<`Target`, `TargetID`, `ForeignKeyType`\>(`relationName`, `targetRepositoryGetter`): `HasManyRepositoryFactory`<`Target`, `ForeignKeyType`\>

Function to create a constrained relation repository factory

**`Example`**

```ts
class CustomerRepository extends SequelizeCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  public readonly orders: HasManyRepositoryFactory<Order, typeof Customer.prototype.id>;

  constructor(
    protected db: SequelizeDataSource,
    orderRepository: EntityCrudRepository<Order, typeof Order.prototype.id>,
  ) {
    super(Customer, db);
    this.orders = this.createHasManyRepositoryFactoryFor(
      'orders',
      orderRepository,
    );
  }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | extends `Entity`<`Target`\> |
| `TargetID` | `TargetID` |
| `ForeignKeyType` | `ForeignKeyType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `targetRepositoryGetter` | `Getter`<`EntityCrudRepository`<`Target`, `TargetID`, {}\>\> | - |

#### Returns

`HasManyRepositoryFactory`<`Target`, `ForeignKeyType`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:1097](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1097)

___

### createHasManyThroughRepositoryFactoryFor

▸ `Protected` **createHasManyThroughRepositoryFactoryFor**<`Target`, `TargetID`, `Through`, `ThroughID`, `ForeignKeyType`\>(`relationName`, `targetRepositoryGetter`, `throughRepositoryGetter`): `HasManyThroughRepositoryFactory`<`Target`, `TargetID`, `Through`, `ForeignKeyType`\>

Function to create a constrained hasManyThrough relation repository factory

**`Example`**

```ts
class CustomerRepository extends SequelizeCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  public readonly cartItems: HasManyRepositoryFactory<CartItem, typeof Customer.prototype.id>;

  constructor(
    protected db: SequelizeDataSource,
    cartItemRepository: EntityCrudRepository<CartItem, typeof, CartItem.prototype.id>,
    throughRepository: EntityCrudRepository<Through, typeof Through.prototype.id>,
  ) {
    super(Customer, db);
    this.cartItems = this.createHasManyThroughRepositoryFactoryFor(
      'cartItems',
      cartItemRepository,
    );
  }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | extends `Entity`<`Target`\> |
| `TargetID` | `TargetID` |
| `Through` | extends `Entity`<`Through`\> |
| `ThroughID` | `ThroughID` |
| `ForeignKeyType` | `ForeignKeyType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `targetRepositoryGetter` | `Getter`<`EntityCrudRepository`<`Target`, `TargetID`, {}\>\> \| { `[repoType: string]`: `Getter`<`EntityCrudRepository`<`Target`, `TargetID`\>\>;  } | - |
| `throughRepositoryGetter` | `Getter`<`EntityCrudRepository`<`Through`, `ThroughID`, {}\>\> | - |

#### Returns

`HasManyThroughRepositoryFactory`<`Target`, `TargetID`, `Through`, `ForeignKeyType`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:1189](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1189)

___

### createHasOneRepositoryFactoryFor

▸ `Protected` **createHasOneRepositoryFactoryFor**<`Target`, `TargetID`, `ForeignKeyType`\>(`relationName`, `targetRepositoryGetter`): `HasOneRepositoryFactory`<`Target`, `ForeignKeyType`\>

Function to create a constrained hasOne relation repository factory

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | extends `Entity`<`Target`\> |
| `TargetID` | `TargetID` |
| `ForeignKeyType` | `ForeignKeyType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `targetRepositoryGetter` | `Getter`<`EntityCrudRepository`<`Target`, `TargetID`, {}\>\> \| { `[repoType: string]`: `Getter`<`EntityCrudRepository`<`Target`, `TargetID`\>\>;  } | - |

#### Returns

`HasOneRepositoryFactory`<`Target`, `ForeignKeyType`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:1140](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1140)

___

### createReferencesManyAccessorFor

▸ `Protected` **createReferencesManyAccessorFor**<`Target`, `TargetId`\>(`relationName`, `targetRepoGetter`): `ReferencesManyAccessor`<`Target`, `ID`\>

Function to create a references many accessor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | extends `Entity`<`Target`\> |
| `TargetId` | `TargetId` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `targetRepoGetter` | `Getter`<`EntityCrudRepository`<`Target`, `TargetId`, {}\>\> | - |

#### Returns

`ReferencesManyAccessor`<`Target`, `ID`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:1229](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1229)

___

### delete

▸ **delete**(`entity`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `T` |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EntityCrudRepository.delete

#### Defined in

[sequelize/sequelize.repository.base.ts:202](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L202)

___

### deleteAll

▸ **deleteAll**(`where?`, `options?`): `Promise`<`Count`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `where?` | `Where`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`Count`\>

#### Implementation of

EntityCrudRepository.deleteAll

#### Defined in

[sequelize/sequelize.repository.base.ts:305](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L305)

___

### deleteById

▸ **deleteById**(`id`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EntityCrudRepository.deleteById

#### Defined in

[sequelize/sequelize.repository.base.ts:316](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L316)

___

### excludeHiddenProps

▸ `Protected` **excludeHiddenProps**(`entity`): `T` & `Relations`

Remove hidden properties specified in model from response body. (See:  https://github.com/sourcefuse/loopback4-sequelize/issues/3)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `T` & `Relations` | normalized entity. You can use `entity.toJSON()`'s value |

#### Returns

`T` & `Relations`

normalized entity excluding the hiddenProperties

#### Defined in

[sequelize/sequelize.repository.base.ts:818](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L818)

___

### execute

▸ **execute**(`..._args`): `Promise`<`AnyObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._args` | `PositionalParameters` |

#### Returns

`Promise`<`AnyObject`\>

#### Implementation of

EntityCrudRepository.execute

#### Defined in

[sequelize/sequelize.repository.base.ts:341](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L341)

___

### exists

▸ **exists**(`id`, `_options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |
| `_options?` | `AnyObject` |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

EntityCrudRepository.exists

#### Defined in

[sequelize/sequelize.repository.base.ts:143](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L143)

___

### find

▸ **find**(`filter?`, `options?`): `Promise`<`T` & `Relations`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `Filter`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`T` & `Relations`[]\>

#### Implementation of

EntityCrudRepository.find

#### Defined in

[sequelize/sequelize.repository.base.ts:206](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L206)

___

### findById

▸ **findById**(`id`, `filter?`, `options?`): `Promise`<`T` & `Relations`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |
| `filter?` | `FilterExcludingWhere`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`T` & `Relations`\>

#### Implementation of

EntityCrudRepository.findById

#### Defined in

[sequelize/sequelize.repository.base.ts:263](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L263)

___

### findOne

▸ **findOne**(`filter?`, `options?`): `Promise`<``null`` \| `T` & `Relations`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `Filter`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<``null`` \| `T` & `Relations`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:232](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L232)

___

### getSequelizeModel

▸ **getSequelizeModel**(`entityClass?`): `ModelCtor`<`Model`<`any`, `any`\>\> \| `ModelCtor`<`SequelizeModel`\>

Get Sequelize Model

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityClass` | typeof `Entity` & { `prototype`: `T`  } |

#### Returns

`ModelCtor`<`Model`<`any`, `any`\>\> \| `ModelCtor`<`SequelizeModel`\>

Sequelize Model Instance based on the definitions from `entityClass`

#### Defined in

[sequelize/sequelize.repository.base.ts:579](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L579)

___

### getSequelizeModelAttributes

▸ `Protected` **getSequelizeModelAttributes**(`definition`): `ModelAttributes`<`SequelizeModel`, `any`\>

Get Sequelize Model Attributes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | `Object` | property definition received from loopback entityClass eg. `{ id: { type: "Number", id: true } }` |

#### Returns

`ModelAttributes`<`SequelizeModel`, `any`\>

model attributes supported in sequelize model definiotion

TODO: Verify all possible loopback types https://loopback.io/doc/en/lb4/LoopBack-types.html

#### Defined in

[sequelize/sequelize.repository.base.ts:701](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L701)

___

### getSequelizeOperator

▸ `Protected` **getSequelizeOperator**(`key`): `symbol`

Get Sequelize Operator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Operators` | Name of the operator used in loopback eg. lt |

#### Returns

`symbol`

Equivalent operator symbol if available in Sequelize eg `Op.lt`

#### Defined in

[sequelize/sequelize.repository.base.ts:356](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L356)

___

### includeReferencesIfRequested

▸ `Protected` **includeReferencesIfRequested**(`parentEntities`, `parentEntityClass`, `inclusionFilters?`): `Promise`<`T` & `Relations`[]\>

Include related entities of `@referencesMany` relation

referencesMany relation is NOT handled by `sequelizeModel.findAll` as it doesn't have any direct alternative to it,
so to include relation data of referencesMany, we're manually fetching related data requested

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentEntities` | `Model`<`T`, `T`\>[] | source table data |
| `parentEntityClass` | typeof `Entity` | loopback entity class for the parent entity |
| `inclusionFilters?` | `InclusionFilter`[] | - |

#### Returns

`Promise`<`T` & `Relations`[]\>

entities with related models in them

#### Defined in

[sequelize/sequelize.repository.base.ts:842](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L842)

___

### registerInclusionResolver

▸ **registerInclusionResolver**(`relationName`, `resolver`): `void`

Register an inclusion resolver for the related model name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `relationName` | `string` | Name of the relation defined on the source model |
| `resolver` | `InclusionResolver`<`T`, `Entity`\> | Resolver function for getting related model entities |

#### Returns

`void`

#### Defined in

[sequelize/sequelize.repository.base.ts:1062](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L1062)

___

### replaceById

▸ **replaceById**(`id`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |
| `data` | `DataObject`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EntityCrudRepository.replaceById

#### Defined in

[sequelize/sequelize.repository.base.ts:292](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L292)

___

### save

▸ **save**(`entity`, `options?`): `Promise`<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `T` |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`T`\>

#### Implementation of

EntityCrudRepository.save

#### Defined in

[sequelize/sequelize.repository.base.ts:156](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L156)

___

### syncLoadedSequelizeModels

▸ **syncLoadedSequelizeModels**(`options?`): `Promise`<`void`\>

Run CREATE TABLE query for the all sequelize models, Useful for quick testing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `SyncOptions` | Sequelize Sync Options |

#### Returns

`Promise`<`void`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:690](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L690)

___

### syncSequelizeModel

▸ **syncSequelizeModel**(`options?`): `Promise`<`void`\>

Run CREATE TABLE query for the target sequelize model, Useful for quick testing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `SyncOptions` | Sequelize Sync Options |

#### Returns

`Promise`<`void`\>

#### Defined in

[sequelize/sequelize.repository.base.ts:681](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L681)

___

### toEntities

▸ `Protected` **toEntities**(`models`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `models` | `Model`<`T`, `T`\>[] |

#### Returns

`T`[]

#### Defined in

[sequelize/sequelize.repository.base.ts:347](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L347)

___

### update

▸ **update**(`entity`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `T` |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EntityCrudRepository.update

#### Defined in

[sequelize/sequelize.repository.base.ts:166](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L166)

___

### updateAll

▸ **updateAll**(`data`, `where?`, `options?`): `Promise`<`Count`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DataObject`<`T`\> |
| `where?` | `Where`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`Count`\>

#### Implementation of

EntityCrudRepository.updateAll

#### Defined in

[sequelize/sequelize.repository.base.ts:187](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L187)

___

### updateById

▸ **updateById**(`id`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |
| `data` | `DataObject`<`T`\> |
| `options?` | `AnyObject` |

#### Returns

`Promise`<`void`\>

#### Implementation of

EntityCrudRepository.updateById

#### Defined in

[sequelize/sequelize.repository.base.ts:170](https://github.com/sourcefuse/loopback4-sequelize/blob/de4037c/src/sequelize/sequelize.repository.base.ts#L170)
