import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, FontAwesomeIcon } from '@yamada-ui/react'

export default {
  title: 'Components / Navigation / Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

export const basic: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withSeparator: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const withCustomSeparator: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb separator={<FontAwesomeIcon icon={faCaretRight} color='grey.200' />}>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='/'>魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
