import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List, } from '@yamada-ui/react'
import { Link } from '../../../components/navigation/src/link'

export default {
  title: 'Components / Navigation / Link',
  component: List,
} as ComponentMeta<typeof List>

export const link: ComponentStory<typeof List> = () => {
  return (
    <Link href='/'>LINK</Link>
  )
}

export const linkIsExternal: ComponentStory<typeof List> = () => {
  return (
    <Link href='/' isExternal>LINK</Link>
  )
}