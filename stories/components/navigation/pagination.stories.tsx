import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import { Pagination, VStack, Wrap } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Navigation / Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

export const basic: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={10} />
}

export const withSize: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} size='xs' />
      <Pagination total={10} size='sm' />
      <Pagination total={10} size='md' />
      <Pagination total={10} size='lg' />
      <Pagination total={10} size='xl' />
    </>
  )
}

export const withVariant: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} variant='solid' />
      <Pagination total={10} variant='outline' />
      <Pagination total={10} variant='ghost' />
      <Pagination total={10} variant='unstyled' />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof Pagination> = () => {
  return (
    <Wrap w='full' gap='md'>
      <VStack w='auto'>
        <Pagination total={10} variant='solid' colorScheme='primary' />

        <Pagination total={10} variant='solid' colorScheme='secondary' />

        <Pagination total={10} variant='solid' colorScheme='warning' />

        <Pagination total={10} variant='solid' colorScheme='danger' />

        <Pagination total={10} variant='solid' colorScheme='link' />

        <Pagination total={10} variant='solid' colorScheme='gray' />

        <Pagination total={10} variant='solid' colorScheme='red' />

        <Pagination total={10} variant='solid' colorScheme='orange' />

        <Pagination total={10} variant='solid' colorScheme='yellow' />

        <Pagination total={10} variant='solid' colorScheme='green' />

        <Pagination total={10} variant='solid' colorScheme='teal' />

        <Pagination total={10} variant='solid' colorScheme='blue' />

        <Pagination total={10} variant='solid' colorScheme='cyan' />

        <Pagination total={10} variant='solid' colorScheme='purple' />

        <Pagination total={10} variant='solid' colorScheme='pink' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='outline' colorScheme='primary' />

        <Pagination total={10} variant='outline' colorScheme='secondary' />

        <Pagination total={10} variant='outline' colorScheme='warning' />

        <Pagination total={10} variant='outline' colorScheme='danger' />

        <Pagination total={10} variant='outline' colorScheme='link' />

        <Pagination total={10} variant='outline' colorScheme='gray' />

        <Pagination total={10} variant='outline' colorScheme='red' />

        <Pagination total={10} variant='outline' colorScheme='orange' />

        <Pagination total={10} variant='outline' colorScheme='yellow' />

        <Pagination total={10} variant='outline' colorScheme='green' />

        <Pagination total={10} variant='outline' colorScheme='teal' />

        <Pagination total={10} variant='outline' colorScheme='blue' />

        <Pagination total={10} variant='outline' colorScheme='cyan' />

        <Pagination total={10} variant='outline' colorScheme='purple' />

        <Pagination total={10} variant='outline' colorScheme='pink' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='ghost' colorScheme='primary' />

        <Pagination total={10} variant='ghost' colorScheme='secondary' />

        <Pagination total={10} variant='ghost' colorScheme='warning' />

        <Pagination total={10} variant='ghost' colorScheme='danger' />

        <Pagination total={10} variant='ghost' colorScheme='link' />

        <Pagination total={10} variant='ghost' colorScheme='gray' />

        <Pagination total={10} variant='ghost' colorScheme='red' />

        <Pagination total={10} variant='ghost' colorScheme='orange' />

        <Pagination total={10} variant='ghost' colorScheme='yellow' />

        <Pagination total={10} variant='ghost' colorScheme='green' />

        <Pagination total={10} variant='ghost' colorScheme='teal' />

        <Pagination total={10} variant='ghost' colorScheme='blue' />

        <Pagination total={10} variant='ghost' colorScheme='cyan' />

        <Pagination total={10} variant='ghost' colorScheme='purple' />

        <Pagination total={10} variant='ghost' colorScheme='pink' />
      </VStack>
    </Wrap>
  )
}

export const withDefaultPage: ComponentStory<typeof Pagination> = () => {
  return <Pagination defaultPage={3} total={10} />
}

export const withTotal: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={77} />
}

export const withEdge: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={10} withEdges />
}

export const withSiblings: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={77} siblings={3} />
}

export const withBoundaries: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={77} boundaries={3} />
}

export const withDisabled: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} variant='solid' isDisabled />
      <Pagination total={10} variant='outline' isDisabled />
      <Pagination total={10} variant='ghost' isDisabled />
      <Pagination total={10} variant='unstyled' isDisabled />
    </>
  )
}

export const disabledControlButton: ComponentStory<typeof Pagination> = () => {
  return <Pagination total={10} withControls={false} />
}

export const customControl: ComponentStory<typeof Pagination> = () => {
  const [page, onChange] = useState<number>(1)

  return <Pagination page={page} total={10} onChange={onChange} />
}

export const customControlButton: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} controlProps={{ children: <Icon icon={faPoo} /> }} />
      <Pagination total={10} controlPrevProps={{ children: <Icon icon={faPoo} /> }} />
      <Pagination total={10} controlNextProps={{ children: <Icon icon={faPoo} /> }} />
    </>
  )
}

export const customEdgeButton: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} withEdges edgeProps={{ children: <Icon icon={faPoo} /> }} />
      <Pagination total={10} withEdges edgeFirstProps={{ children: <Icon icon={faPoo} /> }} />
      <Pagination total={10} withEdges edgeLastProps={{ children: <Icon icon={faPoo} /> }} />
    </>
  )
}
