import { Meta } from '@storybook/react-vite'

import { AcmeLogo } from './acme-logo'

const Story: Meta<typeof AcmeLogo> = {
  component: AcmeLogo,
  title: 'Components / Logos / Acme Health',
  args: {}
}
export default Story

export const Default = {
  args: {}
}

export const Responsive = {
  args: {
    width: ['150px', '200px', '250px', '300px'],
    height: 'auto'
  }
}
