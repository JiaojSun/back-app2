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

___

### email

• **email**: `string`

The user's email address.

#### Inherited from

[User](User.md).[email](User.md#email)

___

### id

• **id**: `number`

The user's ID.

#### Inherited from

[User](User.md).[id](User.md#id)

___

### jobTitle

• **jobTitle**: `string`

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
