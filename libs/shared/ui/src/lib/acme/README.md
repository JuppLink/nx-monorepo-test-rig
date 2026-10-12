# Acme UI Factory

---

- title: 'Acme UI Factory'
- package: '@acmehealth/ui'
- description: Using the Acme UI Factory and elements
- category: 'features'

---

Acme UI Factory serves as an **object of acme enabled JSX elements**, and also
**a function that can be used to enable custom component** receive acme's
style props.

```bash
import { acme } from "@acmehealth/ui"
```

## Acme JSX Elements

Create base html elements with theme-aware style props using `acme.<element>`
notation. For example, if you want a plain html button with ability to pass
acme styles, you can write `<acme.button />`.

```jsx
<acme.button
  px="3"
  py="2"
  bg="green.200"
  rounded="md"
  _hover={{ bg: 'green.300' }}
>
  Click me
</acme.button>
```

This reduces the need to create custom component wrappers and name them. This
syntax is available for common html elements. See the reference for the full
[list of elements](https://github.com/acme-ui/acme-ui/blob/main/packages/system/src/system.utils.ts#L9)
supported.

```jsx
<acme.h1 fontSize="lg"> Heading </acme.h1>
```

## Acme UI Factory function

This is a function that converts **non-acme components** or **jsx element** to
acme-enabled components so you can pass style props to them.

Consider a package called `react-input-autoresize`, let's use the Acme UI Factory
function to make possible to pass style props.

The function will infer the prop types from the wrapped component and also add
acme style props.

```jsx
import { acme } from '@acmehealth/ui'
import Textarea from 'react-input-autoresize'

const AutoResizeInput = acme(Textarea)

function Example() {
  return <AutoResizeInput bg="red.200" fontSize="12px" />
}
```

> Considering that Acme uses `emotion` under the hood, ensure the non-acme
> component accepts `className` as props for this to work correctly

### Attaching styles

In some instances, you might need to attach specific styles to the component
wrapped in the Acme UI Factory

```jsx
const AutoResizeInput = acme(AutoResizeInput, {
  baseStyle: {
    bg: 'papayawhip',
    color: 'red.500'
  }
})
```

You can also use the Acme UI Factory on jsx elements as well.

```jsx
const Card = acme('div', {
  baseStyle: {
    shadow: 'lg',
    rounded: 'lg',
    bg: 'white'
  }
})
```

### Allowing custom props to be forwarded

By default, the `acme` factory only filters acme related style props from
getting to the DOM. For more fine-grained control of how and what prop should be
forwarded, pass the `shouldForwardProp` option.

Here's a simple example that allows all props (including acme's style props)
to pass through except the `sample` prop.

```jsx
const Div = acme('div', {
  shouldForwardProp: prop => !['sample'].includes(prop)
})
```

Another example that combines the default `shouldForwardProp` from Acme UI
with custom logic.

```jsx
import { acme, shouldForwardProp } from '@acmehealth/ui'

const Div = acme('div', {
  shouldForwardProp: prop => {
    // don't forward Acme's props
    const isAcmeProp = !shouldForwardProp(prop)
    if (isAcmeProp) return false

    // else, only forward `sample` prop
    return ['sample'].includes(prop)
  }
})
```

To filter non-HTML attributes, you can leverage
[@emotion/is-prop-valid](https://github.com/emotion-js/emotion/tree/master/packages/is-prop-valid)
package.

```jsx
import isValidHTMLProp from '@emotion/is-prop-valid'
import { acme, shouldForwardProp } from '@acmehealth/ui'

const Div = acme('div', {
  shouldForwardProp: prop => {
    // don't forward Acme's props
    const isAcmeProp = !shouldForwardProp(prop)
    if (isAcmeProp) return false

    // forward valid HTML props
    const isValidProp = isValidHTMLProp(prop)
    if (isValidProp) return true

    // else, only forward `sample` prop
    return ['sample'].includes(prop)
  }
})
```
