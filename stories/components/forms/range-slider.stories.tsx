import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '@yamada-ui/fontawesome'
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderStartThumb,
  RangeSliderEndThumb,
  RangeSliderTrack,
  FormControl,
  Text,
  VStack,
  useBoolean,
  Tooltip,
  Center,
  Button,
  Flex,
} from '@yamada-ui/react'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export default {
  title: 'Components / Forms / RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>

export const basic: ComponentStory<typeof RangeSlider> = () => {
  return <RangeSlider />
}

export const withDefaultValue: ComponentStory<typeof RangeSlider> = () => {
  return <RangeSlider defaultValue={[10, 90]} />
}

export const withSize: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider size='sm' defaultValue={[0, 25]} />
      <RangeSlider size='md' defaultValue={[25, 50]} />
      <RangeSlider size='lg' defaultValue={[50, 75]} />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider colorScheme='primary' />

      <RangeSlider colorScheme='secondary' />

      <RangeSlider colorScheme='warning' />

      <RangeSlider colorScheme='danger' />

      <RangeSlider colorScheme='link' />

      <RangeSlider colorScheme='gray' />

      <RangeSlider colorScheme='red' />

      <RangeSlider colorScheme='orange' />

      <RangeSlider colorScheme='yellow' />

      <RangeSlider colorScheme='green' />

      <RangeSlider colorScheme='teal' />

      <RangeSlider colorScheme='blue' />

      <RangeSlider colorScheme='cyan' />

      <RangeSlider colorScheme='purple' />

      <RangeSlider colorScheme='pink' />
    </>
  )
}

export const withOrientation: ComponentStory<typeof RangeSlider> = () => {
  return <RangeSlider orientation='vertical' h='calc(100vh - 16px * 2)' />
}

export const withReversed: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider isReversed />
      <RangeSlider isReversed orientation='vertical' h='calc(100vh - 16px * 3 - 14px)' />
    </>
  )
}

export const withMinMax: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([50, 150])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} min={0} max={200} onChange={onChange} />
    </>
  )
}

export const withStep: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} onChange={onChange} />
    </>
  )
}

export const withBetweenThumbs: ComponentStory<typeof RangeSlider> = () => {
  return <RangeSlider betweenThumbs={10} />
}

export const withFocusThumbOnChange: ComponentStory<typeof RangeSlider> = () => {
  const [value, setValue] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} step={5} focusThumbOnChange={false} />

      <Center w='full' gap='xl'>
        <Flex direction='column' align='center' gap='sm'>
          <Text>Min</Text>

          <Center gap='md'>
            <Button
              isDisabled={value[0] === 0}
              onClick={() => setValue((prev) => (prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev))}
            >
              -5
            </Button>

            <Button
              isDisabled={value[0] === 100 || value[0] === value[1]}
              colorScheme='blue'
              onClick={() =>
                setValue((prev) =>
                  prev[0] !== 100 && value[0] !== value[1] ? [prev[0] + 5, prev[1]] : prev,
                )
              }
            >
              +5
            </Button>
          </Center>
        </Flex>

        <Flex direction='column' align='center' gap='sm'>
          <Text>Max</Text>

          <Center gap='md'>
            <Button
              isDisabled={value[1] === 0 || value[0] === value[1]}
              onClick={() =>
                setValue((prev) =>
                  prev[1] !== 0 && value[0] !== value[1] ? [prev[0], prev[1] - 5] : prev,
                )
              }
            >
              -5
            </Button>

            <Button
              isDisabled={value[1] === 100}
              colorScheme='blue'
              onClick={() => setValue((prev) => (prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev))}
            >
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>
  )
}

export const withMark: ComponentStory<typeof RangeSlider> = () => {
  return (
    <VStack gap='lg'>
      <RangeSlider size='sm'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size='md'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size='lg'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
      </RangeSlider>
    </VStack>
  )
}

export const withTooltip: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [isOpen, { on, off }] = useBoolean(false)

  return (
    <RangeSlider value={value} onChange={onChange} mt='10' onMouseEnter={on} onMouseLeave={off}>
      <RangeSliderMark value={25} w='10' ml='-5'>
        25%
      </RangeSliderMark>
      <RangeSliderMark value={50} w='10' ml='-5'>
        50%
      </RangeSliderMark>
      <RangeSliderMark value={75} w='10' ml='-5'>
        75%
      </RangeSliderMark>

      <Tooltip placement='top' label={`${value[0]}%`} isOpen={isOpen}>
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip placement='top' label={`${value[1]}%`} isOpen={isOpen}>
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>
  )
}

export const isDisabled: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider isDisabled />

      <FormControl
        isDisabled
        label='volume (sound)'
        helperMessage='Please select your preferred volume.'
      >
        <RangeSlider />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider isReadOnly />

      <FormControl
        isReadOnly
        label='volume (sound)'
        helperMessage='Please select your preferred volume.'
      >
        <RangeSlider />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([15, 45])

  return (
    <>
      <RangeSlider isInvalid={value[0] < 20} value={value} onChange={onChange} />

      <FormControl
        isInvalid={value[0] < 20}
        label='volume (sound)'
        errorMessage='Min volume should be set to 20 or higher.'
      >
        <RangeSlider value={value} onChange={onChange} />
      </FormControl>
    </>
  )
}

export const customColor: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider trackColor='orange.200' filledTrackColor='orange.500' thumbColor='orange.700' />

      <RangeSlider
        track={{ bg: 'green.200' }}
        filledTrack={{ bg: 'green.500' }}
        thumb={{ bg: 'green.700' }}
      />

      <RangeSlider>
        <RangeSliderTrack bg='blue.200' filledTrack={{ bg: 'blue.500' }} />
        <RangeSliderStartThumb bg='blue.700' />
        <RangeSliderEndThumb bg='blue.700' />
      </RangeSlider>

      <RangeSlider>
        <RangeSliderTrack bg='red.200'>
          <RangeSliderFilledTrack bg='red.500' />
        </RangeSliderTrack>

        <RangeSliderStartThumb bg='red.700' />
        <RangeSliderEndThumb bg='red.700' />
      </RangeSlider>
    </>
  )
}

export const customThumb: ComponentStory<typeof RangeSlider> = () => {
  return (
    <>
      <RangeSlider
        thumb={{
          color: 'blue.500',
          boxSize: '6',
          children: <Icon icon={faWaveSquare} />,
        }}
      />

      <RangeSlider>
        <RangeSliderStartThumb color='blue.500' boxSize='6'>
          <Icon icon={faWaveSquare} />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb color='blue.500' boxSize='6'>
          <Icon icon={faWaveSquare} />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>
  )
}

export const customMark: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])

  return (
    <>
      <RangeSlider value={value} onChange={onChange} mt='10'>
        <RangeSliderMark value={25} w='10' ml='-5'>
          25%
        </RangeSliderMark>
        <RangeSliderMark value={50} w='10' ml='-5'>
          50%
        </RangeSliderMark>
        <RangeSliderMark value={75} w='10' ml='-5'>
          75%
        </RangeSliderMark>
        <RangeSliderMark
          value={value[0]}
          bg='blue.500'
          color='white'
          py='0.5'
          rounded='md'
          w='10'
          mt='-10'
          ml='-5'
        >
          {value[0]}%
        </RangeSliderMark>
        <RangeSliderMark
          value={value[1]}
          bg='blue.500'
          color='white'
          py='0.5'
          rounded='md'
          w='10'
          mt='-10'
          ml='-5'
        >
          {value[1]}%
        </RangeSliderMark>
      </RangeSlider>
    </>
  )
}

export const customControl: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max: {startValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>
  )
}

export const onChangeEnd: ComponentStory<typeof RangeSlider> = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max: {endValue[0]}
      </Text>
      <RangeSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>
  )
}

export const reactHookForm: ComponentStory<typeof RangeSlider> = () => {
  type Data = { rangeSlider: [number, number] }

  const defaultValues: Data = {
    rangeSlider: [25, 75],
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
        isInvalid={!!errors.rangeSlider}
        label='Volume'
        errorMessage={errors.rangeSlider?.message}
      >
        <Controller
          name='rangeSlider'
          control={control}
          render={({ field }) => <RangeSlider {...field} />}
        />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>
  )
}
