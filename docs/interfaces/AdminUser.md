---
id: "AdminUser"
title: "Interface: AdminUser"
sidebar_label: "AdminUser"
sidebar_position: 0
custom_edit_url: null
---

An interface that extends [`User`](User.md) and adds more properties.

Notice how TypeDoc automatically shows the inheritance hierarchy and where
each property was originally defined.

## Hierarchy

- [`User`](User.md)

  ↳ **`AdminUser`**

## Properties

### administrativeArea

• **administrativeArea**: ``"sales"`` \| ``"delivery"`` \| ``"billing"``

#### Defined in

[types.ts:36](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/types.ts#L36)

___

### email

• **email**: `string`

The user's email address.

#### Inherited from

[User](User.md).[email](User.md#email)

#### Defined in

[types.ts:17](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/types.ts#L17)

___

### id

• **id**: `number`

The user's ID.

#### Inherited from

[User](User.md).[id](User.md#id)

#### Defined in

[types.ts:14](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/types.ts#L14)

___

### jobTitle

• **jobTitle**: `string`

#### Defined in

[types.ts:37](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/types.ts#L37)

___

### name

• **name**: `Object`

The user's name.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `string` | The person's given name. |
| `last` | `string` | The person's family name. |

#### Inherited from

[User](User.md).[name](User.md#name)

#### Defined in

[types.ts:20](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/types.ts#L20)
