---
id: "EnumLikeObject"
title: "Enumeration: EnumLikeObject"
sidebar_label: "EnumLikeObject"
sidebar_position: 0
custom_edit_url: null
---

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObject = {
    Pending: 'pending',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

## Enumeration Members

### Completed

• **Completed** = ``"completed"``

#### Defined in

[enums.ts:22](https://github.com/JiaojSun/react-vite-federation-back-app/blob/e7bd690/src/typedoc/enums.ts#L22)

___

### InProgress

• **InProgress** = ``"inProgress"``

Indicates that a courier is en route delivering this order.

#### Defined in

[enums.ts:20](https://github.com/JiaojSun/react-vite-federation-back-app/blob/e7bd690/src/typedoc/enums.ts#L20)

___

### Pending

• **Pending** = ``"pending"``

#### Defined in

[enums.ts:17](https://github.com/JiaojSun/react-vite-federation-back-app/blob/e7bd690/src/typedoc/enums.ts#L17)
