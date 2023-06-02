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

export const withColorScheme: ComponentStory<typeof SegmentedControl> = () => {
  return (
    <Grid w='full' templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }} gap='md'>
      <SegmentedControl variant='basic'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='linkedin'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='facebook'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='messenger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='whatsapp'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='twitter'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='line'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='instagram'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='youtube'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='linkedin'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='facebook'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='messenger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='whatsapp'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='twitter'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='line'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='instagram'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='youtube'>
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
  const [value, onChange] = useState<string>('孫悟空')

  return (
    <SegmentedControl value={value} onChange={onChange}>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}
