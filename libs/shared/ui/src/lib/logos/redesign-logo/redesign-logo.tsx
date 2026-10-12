import { type ImageProps, Image } from '../../image/image'

import AcmeLogo from './logo-wrap.svg'

export const AcmeLogo = (props: ImageProps) => {
  return <Image src={AcmeLogo} {...props} fit="contain" />
}

export default AcmeLogo
