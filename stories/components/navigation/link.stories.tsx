import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Link',
  component: Link,
} as ComponentMeta<typeof Link>

export const link: ComponentStory<typeof Link> = () => {
  return <Link href='/'>LINK</Link>
}

export const withExternal: ComponentStory<typeof Link> = () => {
  return (
    <Link href='/' isExternal>
      LINK
    </Link>
  )
}

export const useColor: ComponentStory<typeof Link> = () => {
  return (
    <>
      <Link href='/' color={'blue.200'}>
        LINK
      </Link>
      <Link href='/' color={'teal.500'}>
        LINK
      </Link>
    </>
  )
}
