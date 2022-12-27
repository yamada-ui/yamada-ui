import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid, SegmentedControl, SegmentedControlButton } from '@yamada-ui/react'
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

export const withColorStyle: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <Grid w='full' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} gap='md'>
      <SegmentedControl variant='basic'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='linkedin'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='facebook'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='messenger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='whatsapp'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='twitter'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='line'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='instagram'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorStyle='youtube'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='linkedin'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='facebook'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='messenger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='whatsapp'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='twitter'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='line'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='instagram'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorStyle='youtube'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>
    </Grid>
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
