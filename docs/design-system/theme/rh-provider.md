# Acme Health UI Theme

This is a Acme Health UI theme provider. This is a required wrapper for any Acme UI driven app.

## Usage

Use use the default theme from `@acmehealth/ui` or a custom theme for the theme prop.

```tsx
import * as React from 'react'
import { AcmeProvider } from '@acmehealth/ui'
import theme from './theme'

function App() {
  return <AcmeProvider theme={theme}>...rest of code</AcmeProvider>
}

export default App
```
