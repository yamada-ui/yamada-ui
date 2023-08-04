import { Meta, StoryFn } from '@storybook/react'
import {
  Grid,
  SegmentedControl,
  SegmentedControlButton,
  VStack,
  Button,
  FormControl,
} from '@yamada-ui/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Story = StoryFn<typeof SegmentedControl>

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components / Forms / SegmentedControl',
  component: SegmentedControl,
}

export default meta

export const basic: Story = () => {
  return (
    <SegmentedControl>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const withDefaultValue: Story = () => {
  return (
    <SegmentedControl defaultValue='ベジータ'>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <SegmentedControl size='sm'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size='md'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size='lg'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <SegmentedControl variant='basic'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <Grid
      w='full'
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
      gap='md'
    >
      <SegmentedControl variant='basic' colorScheme='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='zinc'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='neutral'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='stone'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='rose'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='amber'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='lime'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='emerald'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='sky'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='indigo'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='violet'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='basic' colorScheme='fuchsia'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='primary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='secondary'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='warning'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='danger'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='link'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='gray'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='zinc'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='neutral'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='stone'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='red'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='rose'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='pink'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='orange'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='amber'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='yellow'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='lime'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='green'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='emerald'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='teal'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='cyan'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='sky'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='blue'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='indigo'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='violet'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='purple'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant='rounded' colorScheme='fuchsia'>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </Grid>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <SegmentedControl isDisabled>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ' isDisabled>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const isReadOnly: Story = () => {
  return (
    <>
      <SegmentedControl isReadOnly>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ'>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
        <SegmentedControlButton value='ベジータ' isReadOnly>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value='フリーザ'>
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>('孫悟空')

  return (
    <SegmentedControl value={value} onChange={onChange}>
      <SegmentedControlButton value='孫悟空'>孫悟空</SegmentedControlButton>
      <SegmentedControlButton value='ベジータ'>ベジータ</SegmentedControlButton>
      <SegmentedControlButton value='フリーザ'>フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const reactHookForm: Story = () => {
  type Data = { segmentedControl: string }

  const defaultValues: Data = {
    segmentedControl: 'ベジータ',
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log('submit:', data)

  console.log('watch:', watch())

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.segmentedControl}
        label='Who is your favorite character?'
        errorMessage={errors.segmentedControl?.message}
      >
        <Controller
          name='segmentedControl'
          control={control}
          rules={{ required: { value: true, message: 'This is required.' } }}
          render={({ field }) => (
            <SegmentedControl {...field}>
              <SegmentedControlButton value='孫悟空'>
                孫悟空
              </SegmentedControlButton>
              <SegmentedControlButton value='ベジータ'>
                ベジータ
              </SegmentedControlButton>
              <SegmentedControlButton value='フリーザ'>
                フリーザ
              </SegmentedControlButton>
            </SegmentedControl>
          )}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
