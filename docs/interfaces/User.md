---
id: "User"
title: "Interface: User"
sidebar_label: "User"
sidebar_position: 0
custom_edit_url: null
---

A simple interface. Each property has its own doc comment.

TypeDoc even supports doc comments on nested type definitions, as shown by the `name` property.

## Hierarchy

- **`User`**

  ↳ [`AdminUser`](AdminUser.md)

## Properties

### email

• **email**: `string`

The user's email address.

#### Defined in

[types.ts:17](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/types.ts#L17)

___

### id

• **id**: `number`

The user's ID.

#### Defined in

[types.ts:14](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/types.ts#L14)

___

### name

• **name**: `Object`

The user's name.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `string` | The person's given name. |
| `last` | `string` | The person's family name. |

#### Defined in

[types.ts:20](https://github.com/JiaojSun/react-vite-federation-back-app/blob/23c7817/src/typedoc/types.ts#L20)
