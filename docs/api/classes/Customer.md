---
id: "Customer"
title: "Class: Customer"
sidebar_label: "Customer"
sidebar_position: 0
custom_edit_url: null
---

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Constructors

### constructor

• **new Customer**(`id`, `name`, `nextOrderNumber`)

The constructor of the `Customer` class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | the customer's database ID |
| `name` | `string` | the customer's name |
| `nextOrderNumber` | `string` \| `number` | the next number to use when this customer places an order |

## Properties

### \_nextOrderNumber

• `Private` **\_nextOrderNumber**: `number` = `0`

A private property that is accessed via a getter and setter.

___

### contactName

• `Protected` `Optional` **contactName**: `string`

An optional protected property.

___

### id

• `Readonly` **id**: `number`

A public readonly property.

___

### name

• **name**: `string`

A public property that can be reassigned.

## Accessors

### nextOrderNumber

• `get` **nextOrderNumber**(): `string`

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

#### Returns

`string`

• `set` **nextOrderNumber**(`value`): `void`

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`void`

## Methods

### doInternalStuff

▸ `Private` **doInternalStuff**(): `void`

A private method.

#### Returns

`void`

___

### isValid

▸ `Protected` **isValid**(): `boolean`

A protected method.

#### Returns

`boolean`

___

### onOrderPlaced

▸ **onOrderPlaced**(): `void`

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

___

### onOrderPlacedArrowFunction

▸ **onOrderPlacedArrowFunction**(): `void`

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`
