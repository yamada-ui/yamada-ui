import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

export const basic: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
export const separator: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Docs</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
