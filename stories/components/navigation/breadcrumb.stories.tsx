import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Breadcrumb } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

export const basic: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb>
      <ul>
        <li>Home/</li>
        <li>Docs/</li>
        <li>Breadcrumb</li>
      </ul>
    </Breadcrumb>
  )
}
