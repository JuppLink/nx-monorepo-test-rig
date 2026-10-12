import { acme } from './acme'

export default {
  title: 'System / Core'
}

export const ApplyProp = () => (
  <acme.p>
    This is a paragraph, but apply styles from{' '}
    <acme.code fontFamily="mono">styles.h1</acme.code>
  </acme.p>
)

export const WithHeading = () => (
  <div>
    <acme.h1
      fontSize={['50px', '80px', '100px']}
      color="tomato"
      css={{ color: 'teal.500' }}
    >
      Welcome
    </acme.h1>
  </div>
)

export const WithGradient = () => (
  <>
    <acme.div bgGradient="to-r" gradientFrom="pink.300" gradientTo="blue.500" w="500px" h="64px" />
    <acme.span
      bgGradient="to-r"
      gradientFrom="red.200"
      gradientTo="papayawhip"
      bgClip="text"
      fontSize="7xl"
      fontWeight="extrabold"
    >
      Welcome to Chakra UI
    </acme.span>
  </>
)

export const WithCSSVarToken = () => {
  return (
    <acme.div
      css={{
        '--banner-height': 'sizes.md',
        '.banner': {
          height: 'var(--banner-height)',
          bg: 'red.200'
        }
      }}
    >
      <div className="banner">banner</div>
    </acme.div>
  )
}

export const WithSemanticTokens = () => {
  return (
    <div>
      <acme.p color="semantic">I am in the default color mode</acme.p>
      <div data-theme="light">
        <acme.p color="semantic">I am forced to light mode (red)</acme.p>
      </div>
      <div data-theme="dark">
        <acme.p color="semantic">I am forced to dark mode (blue)</acme.p>
        <div data-theme="light">
          <acme.p pl="4" color="semantic">
            I am nested and forced to light mode (red)
          </acme.p>
        </div>
      </div>
    </div>
  )
}

export const WithColorMode = () => {
  return (
    <>
      <acme.span>Not forced</acme.span>
      <div data-theme="dark">
        <acme.div bg="gray.800" padding="40px">
          <acme.p color="fg">Forced dark mode</acme.p>
        </acme.div>
      </div>
    </>
  )
}
