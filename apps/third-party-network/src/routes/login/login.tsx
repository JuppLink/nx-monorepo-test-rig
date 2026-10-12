import { useTitle } from 'react-use'
import { Login as UserLogin } from '@acmehealth/third-party-network/features/authentication'
import { Box, Flex, Grid, AcmeLogo } from '@acmehealth/ui'

import { Graphic } from './components/graphic'

export const Login = () => {
  useTitle('Acme Advise | Log In')

  return (
    <Grid templateColumns="1fr 1fr" h="100%" gap="40px">
      <Flex flexDir="column">
        <Box as="header" mb="auto">
          <AcmeLogo alt="Acme Health" />
        </Box>
        <Box as="main" mb="auto">
          <UserLogin />
        </Box>
      </Flex>
      <Graphic />
    </Grid>
  )
}
