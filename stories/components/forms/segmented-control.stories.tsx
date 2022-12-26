import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SegmentedControl, SegmentedControlButton } from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / SegmentedControl',
  component: SegmentedControl,
} as ComponentMeta<typeof SegmentedControl>

export const basic: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <SegmentedControl>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const withDefaultValue: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <SegmentedControl defaultValue='ベジータ'>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const withSize: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <>
      <SegmentedControl size='sm'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size='md'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size='lg'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const withVariant: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <>
      <SegmentedControl variant='basic'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const isDisabled: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <>
      <SegmentedControl isDisabled>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ' isDisabled>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const isReadOnly: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <>
      <SegmentedControl isReadOnly>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ' isReadOnly>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const customControl: ComponentStory<typeof SegmentedControl> = () => {
  const [value, onChange] = useState<string | number>('孫悟空')

  return (
    <SegmentedControl value={value} onChange={onChange}>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}
