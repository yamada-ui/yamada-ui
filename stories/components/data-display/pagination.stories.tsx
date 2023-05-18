import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FontAwesomeIcon, Pagination, VStack, Wrap } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Data Display / Pagination',
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

export const withColorStyle: ComponentStory<typeof Pagination> = () => {
  return (
    <Wrap w='full' gap='md'>
      <VStack w='auto'>
        <Pagination total={10} variant='solid' colorStyle='primary' />

        <Pagination total={10} variant='solid' colorStyle='secondary' />

        <Pagination total={10} variant='solid' colorStyle='warning' />

        <Pagination total={10} variant='solid' colorStyle='danger' />

        <Pagination total={10} variant='solid' colorStyle='link' />

        <Pagination total={10} variant='solid' colorStyle='gray' />

        <Pagination total={10} variant='solid' colorStyle='red' />

        <Pagination total={10} variant='solid' colorStyle='orange' />

        <Pagination total={10} variant='solid' colorStyle='yellow' />

        <Pagination total={10} variant='solid' colorStyle='green' />

        <Pagination total={10} variant='solid' colorStyle='teal' />

        <Pagination total={10} variant='solid' colorStyle='blue' />

        <Pagination total={10} variant='solid' colorStyle='cyan' />

        <Pagination total={10} variant='solid' colorStyle='purple' />

        <Pagination total={10} variant='solid' colorStyle='pink' />

        <Pagination total={10} variant='solid' colorStyle='linkedin' />

        <Pagination total={10} variant='solid' colorStyle='facebook' />

        <Pagination total={10} variant='solid' colorStyle='messenger' />

        <Pagination total={10} variant='solid' colorStyle='whatsapp' />

        <Pagination total={10} variant='solid' colorStyle='twitter' />

        <Pagination total={10} variant='solid' colorStyle='line' />

        <Pagination total={10} variant='solid' colorStyle='instagram' />

        <Pagination total={10} variant='solid' colorStyle='youtube' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='outline' colorStyle='primary' />

        <Pagination total={10} variant='outline' colorStyle='secondary' />

        <Pagination total={10} variant='outline' colorStyle='warning' />

        <Pagination total={10} variant='outline' colorStyle='danger' />

        <Pagination total={10} variant='outline' colorStyle='link' />

        <Pagination total={10} variant='outline' colorStyle='gray' />

        <Pagination total={10} variant='outline' colorStyle='red' />

        <Pagination total={10} variant='outline' colorStyle='orange' />

        <Pagination total={10} variant='outline' colorStyle='yellow' />

        <Pagination total={10} variant='outline' colorStyle='green' />

        <Pagination total={10} variant='outline' colorStyle='teal' />

        <Pagination total={10} variant='outline' colorStyle='blue' />

        <Pagination total={10} variant='outline' colorStyle='cyan' />

        <Pagination total={10} variant='outline' colorStyle='purple' />

        <Pagination total={10} variant='outline' colorStyle='pink' />

        <Pagination total={10} variant='outline' colorStyle='linkedin' />

        <Pagination total={10} variant='outline' colorStyle='facebook' />

        <Pagination total={10} variant='outline' colorStyle='messenger' />

        <Pagination total={10} variant='outline' colorStyle='whatsapp' />

        <Pagination total={10} variant='outline' colorStyle='twitter' />

        <Pagination total={10} variant='outline' colorStyle='line' />

        <Pagination total={10} variant='outline' colorStyle='instagram' />

        <Pagination total={10} variant='outline' colorStyle='youtube' />
      </VStack>

      <VStack w='auto'>
        <Pagination total={10} variant='ghost' colorStyle='primary' />

        <Pagination total={10} variant='ghost' colorStyle='secondary' />

        <Pagination total={10} variant='ghost' colorStyle='warning' />

        <Pagination total={10} variant='ghost' colorStyle='danger' />

        <Pagination total={10} variant='ghost' colorStyle='link' />

        <Pagination total={10} variant='ghost' colorStyle='gray' />

        <Pagination total={10} variant='ghost' colorStyle='red' />

        <Pagination total={10} variant='ghost' colorStyle='orange' />

        <Pagination total={10} variant='ghost' colorStyle='yellow' />

        <Pagination total={10} variant='ghost' colorStyle='green' />

        <Pagination total={10} variant='ghost' colorStyle='teal' />

        <Pagination total={10} variant='ghost' colorStyle='blue' />

        <Pagination total={10} variant='ghost' colorStyle='cyan' />

        <Pagination total={10} variant='ghost' colorStyle='purple' />

        <Pagination total={10} variant='ghost' colorStyle='pink' />

        <Pagination total={10} variant='ghost' colorStyle='linkedin' />

        <Pagination total={10} variant='ghost' colorStyle='facebook' />

        <Pagination total={10} variant='ghost' colorStyle='messenger' />

        <Pagination total={10} variant='ghost' colorStyle='whatsapp' />

        <Pagination total={10} variant='ghost' colorStyle='twitter' />

        <Pagination total={10} variant='ghost' colorStyle='line' />

        <Pagination total={10} variant='ghost' colorStyle='instagram' />

        <Pagination total={10} variant='ghost' colorStyle='youtube' />
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
      <Pagination total={10} controlProps={{ children: <FontAwesomeIcon icon={faPoo} /> }} />
      <Pagination total={10} controlPrevProps={{ children: <FontAwesomeIcon icon={faPoo} /> }} />
      <Pagination total={10} controlNextProps={{ children: <FontAwesomeIcon icon={faPoo} /> }} />
    </>
  )
}

export const customEdgeButton: ComponentStory<typeof Pagination> = () => {
  return (
    <>
      <Pagination total={10} withEdges edgeProps={{ children: <FontAwesomeIcon icon={faPoo} /> }} />
      <Pagination
        total={10}
        withEdges
        edgeFirstProps={{ children: <FontAwesomeIcon icon={faPoo} /> }}
      />
      <Pagination
        total={10}
        withEdges
        edgeLastProps={{ children: <FontAwesomeIcon icon={faPoo} /> }}
      />
    </>
  )
}
