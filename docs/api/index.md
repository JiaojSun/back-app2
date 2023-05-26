---
id: "index"
title: "组件库"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [EnumLikeObject](enums/EnumLikeObject.md)

## Model Classes

- [Customer](classes/Customer.md)

## Interfaces

- [AdminUser](interfaces/AdminUser.md)
- [CardAProps](interfaces/CardAProps.md)
- [EasyFormDialogProps](interfaces/EasyFormDialogProps.md)
- [User](interfaces/User.md)

## Component Functions

- [CardA](#carda)
- [EasyFormDialog](#easyformdialog)
- [ReactCardB](#reactcardb)

## Other Functions

- [anInternalFunction](#aninternalfunction)
- [funMakeHttpCallB](#funmakehttpcallb)
- [funSqrt](#funsqrt)
- [markdownShowcase](#markdownshowcase)
- [syntaxHighlightingShowcase](#syntaxhighlightingshowcase)

## Type Aliases

### ComplexGenericTypeAlias

Ƭ **ComplexGenericTypeAlias**<`T`\>: `T` \| `T`[] \| `Promise`<`T`\> \| `Promise`<`T`[]\> \| `Record`<`string`, `Promise`<`T`\>\>

A complex generic type.

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SimpleTypeAlias

Ƭ **SimpleTypeAlias**: `string` \| `number` \| `boolean`

A simple type alias defined using the `type` keyword.

## Properties

### lodashSortBy

• **lodashSortBy**: `any`

## Variables

### E

• **E**: `number` = `2.7182`

An exported variable defined with `let`.

This pattern should generally be avoided because the variable can be reassigned.

___

### ObjectConstant

• `Const` **ObjectConstant**: `Object`

An plain JavaScript object using `as const`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `githubStars` | ``1000000`` | How many people starred us on GitHub. |
| `library` | ``"typedoc"`` | - |
| `version` | ``"1.2.3"`` | - |

___

### PI

• `Const` **PI**: ``3.14159265359``

A simple numeric constant.

___

### STRING\_CONSTANT

• `Const` **STRING\_CONSTANT**: ``"FOOBAR"``

A simple string constant.

## Component Functions

### CardA

▸ **CardA**(`«destructured»`): `ReactElement`

Renders a card around some content.

```tsx
<CardA variant="secondary">
    <h5>My Title</h5>
    <p>My content</p>
</CardA>
```

The props type is defined as a separate interface **which must be exported!**

```
export interface CardAProps {
    // ...
}

export function CardA({
    children,
    variant = "primary",
}: PropsWithChildren<CardAProps>): ReactElement {
    // ...
}
```

This is our recommended way to define React components as it makes your code
more readable. The minor drawback is you must click the `CardAProps` link to
see the component's props.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<[`CardAProps`](interfaces/CardAProps.md)\> |

#### Returns

`ReactElement`

___

### EasyFormDialog

▸ **EasyFormDialog**(`props`): `ReactElement`

An example of a complex React component.

A wrapper around `ActionDialog` that removes a lot of the boilerplate needed
for dialogs that contain a form.

```tsx
interface ExampleProps {
    onSuccess(responseData: number): Promise<void>
    onClose(): void
}

export function Example({
    onSuccess,
    onClose,
}: ExampleProps): ReactElement {
    const { onChildValidChange, allFieldsValid } = useFieldValidity()
    const [showValidation, setShowValidation] = useState(false)
    const vProps = { showValidation, onValidChange: onChildValidChange }

    const [myNumber, setMyNumber] = useState('')

    async function submit() {
        await api.product.performOperation()

        return {
            responseData: parseInt(myNumber),
        }
    }

    return (
        <EasyFormDialog
            title="Enter a Number"
            submitButtonText="Submit"
            formIsValid={allFieldsValid}
            showValidation={showValidation}
            onShowValidationChange={setShowValidation}
            onSubmit={submit}
            onSuccess={onSuccess}
            onClose={onClose}
        >
            <FormGroup label="My number">
                {(id) => (
                    <ValidatedInput
                        id={id}
                        name="myNumber"
                        validators={[Validators.required(), Validators.integer()]}
                        value={myNumber}
                        onChange={setMyNumber}
                        {...vProps}
                    />
                )}
            </FormGroup>
        </EasyFormDialog>
    )
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PropsWithChildren`<[`EasyFormDialogProps`](interfaces/EasyFormDialogProps.md)\> |

#### Returns

`ReactElement`

___

### ReactCardB

▸ **ReactCardB**(`«destructured»`): `ReactElement`

Renders a card around some content.

```tsx
<ReactCardB variant="secondary">
    <h5>My Title</h5>
    <p>My content</p>
</ReactCardB>
```

The props type is written directly in the function definition:

```
export function ReactCardB({
    children,
    variant = "primary",
}: PropsWithChildren<{
    variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
}>): ReactElement {
    // ...
}
```

This can make the TypeDoc documentation a bit cleaner for very simple components,
but it makes your code less readable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `PropsWithChildren`<{ `variant`: ``"primary"`` \| ``"secondary"`` \| ``"success"`` \| ``"danger"`` \| ``"light"`` \| ``"dark"``  }\> |

#### Returns

`ReactElement`

___

## Other Functions

### anInternalFunction

▸ **anInternalFunction**(): `void`

Use `@internal` to indicate that something is for internal use. If the
`--excludeInternal` option is passed, TypeDoc will not document the given
code.

#### Returns

`void`

___

### funMakeHttpCallB

▸ **funMakeHttpCallB**(`options`): `Promise`<`Response`\>

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.body` | `string` \| `Blob` \| `FormData` | - |
| `options.headers` | `Record`<`string`, `string`\> | e.g. `{ 'Authorization': 'Bearer <access token>' }` |
| `options.method` | `string` | e.g. GET, POST, PUT, DELETE |
| `options.mode` | ``"cors"`` \| ``"no-cors"`` \| ``"same-origin"`` | - |
| `options.url` | `string` | - |

#### Returns

`Promise`<`Response`\>

___

### funSqrt

▸ **funSqrt**(`x`): `number`

Calculates the square root of a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | the number to calculate the root of. |

#### Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.

___

### markdownShowcase

▸ **markdownShowcase**(): `void`

# Markdown Showcase

All comments are parsed as **Markdown**. TypeDoc uses the
[Marked](https://github.com/markedjs/marked) markdown parser to _convert
comments to HTML_.

## Symbol References

You can link to other classes, members or functions using an inline link tag. See the [TypeDoc
documentation](https://typedoc.org/tags/link/) for
details.

## Code in Doc Comments

Some inline code: `npm install --save-dev typedoc`

A TypeScript code block:

```
// A fabulous variable
const x: number | string = 12
```

See [`syntaxHighlightingShowcase`](#syntaxhighlightingshowcase) for more code blocks.

## A List

- 🥚 ~~Eggs~~
- 🍞 Bread
- 🧀 Swiss cheese

## A Table

| Package | Version |
| ------- | ------- |
| lodash  | 4.17.21 |
| react   | 17.0.2  |
| typedoc | 0.22.4  |

A Random Shakespeare Quote
--------------------------

> Rebellious subjects, enemies to peace, Profaners of this neighbour-stained
> steel,-- Will they not hear? What, ho! you men, you beasts, That quench the
> fire of your pernicious rage With purple fountains issuing from your veins

## An Image

<img src="media://typescript-logo.svg" width="120" />

This requires the [media option](https://typedoc.org/guides/options/#media)
to be set.

#### Returns

`void`

___

### syntaxHighlightingShowcase

▸ **syntaxHighlightingShowcase**(): `void`

TypeDoc supports code blocks in Markdown and uses
[Shiki](https://shiki.matsu.io/) to provide syntax highlighting.

If no language is specified, the code block is assumed to be TypeScript:

```
// A fabulous variable
const x: number | string = 12
```

You can specify the language at the start of your code block like this:

 ````text
 ```rust
 ````

Use the `tsx` language to get JSX support:

```tsx
function BasicComponent(): ReactElement {
    return <div>Test</div>
}
```

You might want to write code in the language your backend uses. Here's some
Python:

```python
for i in range(30):
    print(i + 1)
```

And some CSS:

```css
.card {
    background-color: white;
    padding: 1rem;
    border: 1px solid lightgray;
}
```

If you don't want syntax highlighting, use the `text` language:

```text
package.json
src/
    index.ts
    __tests__/
        index.test.ts
```

[**View the full list of supported
languages.**](https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages)
You can also get this list by running `typedoc --help`.

#### Returns

`void`
