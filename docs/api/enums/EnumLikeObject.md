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

___

### InProgress

• **InProgress** = ``"inProgress"``

Indicates that a courier is en route delivering this order.

___

### Pending

• **Pending** = ``"pending"``
