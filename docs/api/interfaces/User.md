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

___

### id

• **id**: `number`

The user's ID.

___

### name

• **name**: `Object`

The user's name.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `first` | `string` | The person's given name. |
| `last` | `string` | The person's family name. |
