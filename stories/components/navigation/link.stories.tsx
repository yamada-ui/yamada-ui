import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Link',
  component: Link,
} as ComponentMeta<typeof Link>

export const link: ComponentStory<typeof Link> = () => {
  return <Link href='/'>LINK</Link>
}

export const linkIsExternal: ComponentStory<typeof Link> = () => {
  return (
    <Link href='/' isExternal>
      LINK
    </Link>
  )
}
