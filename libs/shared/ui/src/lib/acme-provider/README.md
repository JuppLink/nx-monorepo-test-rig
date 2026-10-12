# Acme Health UI Theme

This is a Acme Health UI theme generated with [Hypertheme Editor](https://hyperthe.me).

## Usage

Put the entire directory inside the `src/` folder of your project.

Use it in inside your AcmeProvider

```tsx
import * as React from 'react'
import { AcmeProvider } from '@acmehealth/ui'
import theme from './theme'

function App() {
  return <AcmeProvider theme={theme}>...rest of code</AcmeProvider>
}

export default App
```
