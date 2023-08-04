import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { Meta, StoryFn } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import { Pagination, VStack, Wrap } from '@yamada-ui/react'
import { useState } from 'react'

type Story = StoryFn<typeof Pagination>

const meta: Meta<typeof Pagination> = {
  title: 'Components / Navigation / Pagination',
  component: Pagination,
}

export default meta

export const basic: Story = () => {
  return <Pagination total={10} />
}

export const withSize: Story = () => {
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

export const withVariant: Story = () => {
  return (
    <>
      <Pagination total={10} variant='solid' />
      <Pagination total={10} variant='outline' />
      <Pagination total={10} variant='ghost' />
      <Pagination total={10} variant='unstyled' />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Wrap w='full' gap='md'>
      <VStack w='auto'>
        <Pagination total={10} variant='solid' colorScheme='primary' />

        <Pagination total={10} variant='solid' colorScheme='secondary' />

        <Pagination total={10} variant='solid' colorScheme='warning' />

        <Pagination total={10} variant='solid' colorScheme='danger' />

        <Pagination total={10} variant='solid' colorScheme='link' />

        <Pagination total={10} variant='solid' colorScheme='gray' />

        <Pagination total={10} variant='solid' colorScheme='zinc' />

        <Pagination total={10} variant='solid' colorScheme='neutral' />

        <Pagination total={10} variant='solid' colorScheme='stone' />

        <Pagination total={10} variant='solid' colorScheme='red' />

        <Pagination total={10} variant='solid' colorScheme='rose' />

        <Pagination total={10} variant='solid' colorScheme='pink' />

        <Pagination total={10} variant='solid' colorScheme='orange' />

        <Pagination total={10} variant='solid' colorScheme='amber' />

        <Pagination total={10} variant='solid' colorScheme='yellow' />

        <Pagination total={10} variant='solid' colorScheme='lime' />

        <Pagination total={10} variant='solid' colorScheme='green' />

        <Pagination total={10} variant='solid' colorScheme='emerald' />

        <Pagination total={10} variant='solid' colorScheme='teal' />

        <Pagination total={10} variant='solid' colorScheme='cyan' />

        <Pagination total={10} variant='solid' colorScheme='sky' />

        <Pagination total={10} variant='solid' colorScheme='blue' />

        <Pagination total={10} variant='solid' colorScheme='indigo' />

        <Pagination total={10} variant='solid' colorScheme='violet' />

        <Pagination total={10} variant='solid' colorScheme='purple' />

        <Pagination total={10} variant='solid' colorScheme='fuchsia' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='outline' colorScheme='primary' />

        <Pagination total={10} variant='outline' colorScheme='secondary' />

        <Pagination total={10} variant='outline' colorScheme='warning' />

        <Pagination total={10} variant='outline' colorScheme='danger' />

        <Pagination total={10} variant='outline' colorScheme='link' />

        <Pagination total={10} variant='outline' colorScheme='gray' />

        <Pagination total={10} variant='outline' colorScheme='zinc' />

        <Pagination total={10} variant='outline' colorScheme='neutral' />

        <Pagination total={10} variant='outline' colorScheme='stone' />

        <Pagination total={10} variant='outline' colorScheme='red' />

        <Pagination total={10} variant='outline' colorScheme='rose' />

        <Pagination total={10} variant='outline' colorScheme='pink' />

        <Pagination total={10} variant='outline' colorScheme='orange' />

        <Pagination total={10} variant='outline' colorScheme='amber' />

        <Pagination total={10} variant='outline' colorScheme='yellow' />

        <Pagination total={10} variant='outline' colorScheme='lime' />

        <Pagination total={10} variant='outline' colorScheme='green' />

        <Pagination total={10} variant='outline' colorScheme='emerald' />

        <Pagination total={10} variant='outline' colorScheme='teal' />

        <Pagination total={10} variant='outline' colorScheme='cyan' />

        <Pagination total={10} variant='outline' colorScheme='sky' />

        <Pagination total={10} variant='outline' colorScheme='blue' />

        <Pagination total={10} variant='outline' colorScheme='indigo' />

        <Pagination total={10} variant='outline' colorScheme='violet' />

        <Pagination total={10} variant='outline' colorScheme='purple' />

        <Pagination total={10} variant='outline' colorScheme='fuchsia' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='ghost' colorScheme='primary' />

        <Pagination total={10} variant='ghost' colorScheme='secondary' />

        <Pagination total={10} variant='ghost' colorScheme='warning' />

        <Pagination total={10} variant='ghost' colorScheme='danger' />

        <Pagination total={10} variant='ghost' colorScheme='link' />

        <Pagination total={10} variant='ghost' colorScheme='gray' />

        <Pagination total={10} variant='ghost' colorScheme='zinc' />

        <Pagination total={10} variant='ghost' colorScheme='neutral' />

        <Pagination total={10} variant='ghost' colorScheme='stone' />

        <Pagination total={10} variant='ghost' colorScheme='red' />

        <Pagination total={10} variant='ghost' colorScheme='rose' />

        <Pagination total={10} variant='ghost' colorScheme='pink' />

        <Pagination total={10} variant='ghost' colorScheme='orange' />

        <Pagination total={10} variant='ghost' colorScheme='amber' />

        <Pagination total={10} variant='ghost' colorScheme='yellow' />

        <Pagination total={10} variant='ghost' colorScheme='lime' />

        <Pagination total={10} variant='ghost' colorScheme='green' />

        <Pagination total={10} variant='ghost' colorScheme='emerald' />

        <Pagination total={10} variant='ghost' colorScheme='teal' />

        <Pagination total={10} variant='ghost' colorScheme='cyan' />

        <Pagination total={10} variant='ghost' colorScheme='sky' />

        <Pagination total={10} variant='ghost' colorScheme='blue' />

        <Pagination total={10} variant='ghost' colorScheme='indigo' />

        <Pagination total={10} variant='ghost' colorScheme='violet' />

        <Pagination total={10} variant='ghost' colorScheme='purple' />

        <Pagination total={10} variant='ghost' colorScheme='fuchsia' />
      </VStack>
    </Wrap>
  )
}

export const withDefaultPage: Story = () => {
  return <Pagination defaultPage={3} total={10} />
}

export const withTotal: Story = () => {
  return <Pagination total={77} />
}

export const withEdge: Story = () => {
  return <Pagination total={10} withEdges />
}

export const withSiblings: Story = () => {
  return <Pagination total={77} siblings={3} />
}

export const withBoundaries: Story = () => {
  return <Pagination total={77} boundaries={3} />
}

export const withDisabled: Story = () => {
  return (
    <>
      <Pagination total={10} variant='solid' isDisabled />
      <Pagination total={10} variant='outline' isDisabled />
      <Pagination total={10} variant='ghost' isDisabled />
      <Pagination total={10} variant='unstyled' isDisabled />
    </>
  )
}

export const disabledControlButton: Story = () => {
  return <Pagination total={10} withControls={false} />
}

export const customControl: Story = () => {
  const [page, onChange] = useState<number>(1)

  return <Pagination page={page} total={10} onChange={onChange} />
}

export const customControlButton: Story = () => {
  return (
    <>
      <Pagination
        total={10}
        controlProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        controlPrevProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        controlNextProps={{ children: <Icon icon={faPoo} /> }}
      />
    </>
  )
}

export const customEdgeButton: Story = () => {
  return (
    <>
      <Pagination
        total={10}
        withEdges
        edgeProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeFirstProps={{ children: <Icon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeLastProps={{ children: <Icon icon={faPoo} /> }}
      />
    </>
  )
}
