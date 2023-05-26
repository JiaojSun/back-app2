---
id: "EasyFormDialogProps"
title: "Interface: EasyFormDialogProps"
sidebar_label: "EasyFormDialogProps"
sidebar_position: 0
custom_edit_url: null
---

The props type of [`EasyFormDialog`](../modules.md#easyformdialog).

## Properties

### cancelButtonText

• `Optional` **cancelButtonText**: `string`

The text of the cancel button. Defaults to "Cancel".

#### Defined in

[reactComponents.tsx:96](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L96)

___

### closeRef

• `Optional` **closeRef**: `MutableRefObject`<() => `void`\>

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

#### Defined in

[reactComponents.tsx:177](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L177)

___

### focusFirst

• `Optional` **focusFirst**: `boolean`

Set to `false` to disable the default behavior of focusing the first
input.

#### Defined in

[reactComponents.tsx:186](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L186)

___

### formIsValid

• **formIsValid**: `boolean`

A boolean indicating if the form is valid.

#### Defined in

[reactComponents.tsx:108](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L108)

___

### modalClass

• `Optional` **modalClass**: `string`

The CSS class added to the underlying Bootstrap modal.

#### Defined in

[reactComponents.tsx:180](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L180)

___

### showFooter

• `Optional` **showFooter**: `boolean`

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

#### Defined in

[reactComponents.tsx:192](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L192)

___

### showValidation

• **showValidation**: `boolean`

A boolean indicating if validation feedback is being shown.

#### Defined in

[reactComponents.tsx:111](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L111)

___

### submitButtonClass

• `Optional` **submitButtonClass**: `string`

The CSS class of the submit button.

#### Defined in

[reactComponents.tsx:93](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L93)

___

### submitButtonText

• **submitButtonText**: `string`

The text of the submit button.

#### Defined in

[reactComponents.tsx:90](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L90)

___

### submitEnabled

• `Optional` **submitEnabled**: `boolean`

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

#### Defined in

[reactComponents.tsx:105](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L105)

___

### title

• **title**: `ReactNode`

The title of the dialog. Can be a JSX element.

#### Defined in

[reactComponents.tsx:87](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L87)

## Methods

### onCancel

▸ `Optional` **onCancel**(): `void`

An uncommonly-used callback that fires when the user clicks the cancel button.

#### Returns

`void`

#### Defined in

[reactComponents.tsx:167](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L167)

___

### onClose

▸ **onClose**(): `void`

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

#### Returns

`void`

#### Defined in

[reactComponents.tsx:134](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L134)

___

### onShowValidationChange

▸ **onShowValidationChange**(`showValidation`): `void`

A callback that fires when the dialog is submitted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `showValidation` | `boolean` |

#### Returns

`void`

#### Defined in

[reactComponents.tsx:114](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L114)

___

### onSubmit

▸ **onSubmit**(`formData`): `Promise`<`void`\> \| `Promise`<{ `responseData`: `unknown` ; `shouldClose?`: `boolean`  }\>

A callback that fires when the form is submitted. You will typically
perform an API call in your `submit` function.

Your `submit` function can optionally return an object in the shape

```
{
    shouldClose?: boolean
    responseData: unknown
}
```

Using `formData` is deprecated. Use controlled components instead.

`formData` will be `{}` if the optional peer dependency `jquery` is not
installed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `formData` | `Record`<`string`, `string` \| `boolean`\> |

#### Returns

`Promise`<`void`\> \| `Promise`<{ `responseData`: `unknown` ; `shouldClose?`: `boolean`  }\>

#### Defined in

[reactComponents.tsx:154](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L154)

___

### onSuccess

▸ **onSuccess**(`payload`): `Promise`<`void`\>

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

[reactComponents.tsx:126](https://github.com/JiaojSun/react-vite-federation-back-app/blob/c31c95f/src/typedoc/reactComponents.tsx#L126)
