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

#### Defined in

[classes/ClassCustomer.ts:48](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L48)

## Properties

### \_nextOrderNumber

• `Private` **\_nextOrderNumber**: `number` = `0`

A private property that is accessed via a getter and setter.

#### Defined in

[classes/ClassCustomer.ts:19](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L19)

___

### contactName

• `Protected` `Optional` **contactName**: `string`

An optional protected property.

#### Defined in

[classes/ClassCustomer.ts:16](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L16)

___

### id

• `Readonly` **id**: `number`

A public readonly property.

#### Defined in

[classes/ClassCustomer.ts:10](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L10)

___

### name

• **name**: `string`

A public property that can be reassigned.

#### Defined in

[classes/ClassCustomer.ts:13](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L13)

## Accessors

### nextOrderNumber

• `get` **nextOrderNumber**(): `string`

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

#### Returns

`string`

#### Defined in

[classes/ClassCustomer.ts:25](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L25)

• `set` **nextOrderNumber**(`value`): `void`

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[classes/ClassCustomer.ts:33](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L33)

## Methods

### doInternalStuff

▸ `Private` **doInternalStuff**(): `void`

A private method.

#### Returns

`void`

#### Defined in

[classes/ClassCustomer.ts:75](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L75)

___

### isValid

▸ `Protected` **isValid**(): `boolean`

A protected method.

#### Returns

`boolean`

#### Defined in

[classes/ClassCustomer.ts:70](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L70)

___

### onOrderPlaced

▸ **onOrderPlaced**(): `void`

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

#### Defined in

[classes/ClassCustomer.ts:56](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L56)

___

### onOrderPlacedArrowFunction

▸ **onOrderPlacedArrowFunction**(): `void`

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`

#### Defined in

[classes/ClassCustomer.ts:65](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/classes/ClassCustomer.ts#L65)
