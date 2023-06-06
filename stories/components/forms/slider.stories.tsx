import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  FormControl,
  Text,
  Center,
  Button,
  FontAwesomeIcon,
  Tooltip,
  useBoolean,
  VStack,
} from '@yamada-ui/react'
import { useState } from 'react'

export default {
  title: 'Components / Forms / Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

export const basic: ComponentStory<typeof Slider> = () => {
  return <Slider />
}

export const withDefaultValue: ComponentStory<typeof Slider> = () => {
  return <Slider defaultValue={50} />
}

export const withSize: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider size='sm' defaultValue={25} />
      <Slider size='md' defaultValue={50} />
      <Slider size='lg' defaultValue={75} />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider colorScheme='primary' />

      <Slider colorScheme='secondary' />

      <Slider colorScheme='warning' />

      <Slider colorScheme='danger' />

      <Slider colorScheme='link' />

      <Slider colorScheme='gray' />

      <Slider colorScheme='red' />

      <Slider colorScheme='orange' />

      <Slider colorScheme='yellow' />

      <Slider colorScheme='green' />

      <Slider colorScheme='teal' />

      <Slider colorScheme='blue' />

      <Slider colorScheme='cyan' />

      <Slider colorScheme='purple' />

      <Slider colorScheme='pink' />
    </>
  )
}

export const withOrientation: ComponentStory<typeof Slider> = () => {
  return <Slider orientation='vertical' h='calc(100vh - 16px * 2)' />
}

export const withReversed: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider isReversed />
      <Slider isReversed orientation='vertical' h='calc(100vh - 16px * 3 - 14px)' />
    </>
  )
}

export const withMinMax: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>
  )
}

export const withStep: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: ComponentStory<typeof Slider> = () => {
  const [value, setValue] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w='full' gap='md'>
        <Button
          isDisabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>
        <Button
          isDisabled={value === 100}
          colorScheme='blue'
          onClick={() => setValue((prev) => (prev !== 100 ? prev + 10 : prev))}
        >
          +10
        </Button>
      </Center>
    </>
  )
}

export const withMark: ComponentStory<typeof Slider> = () => {
  return (
    <VStack gap='lg'>
      <Slider size='sm'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>

      <Slider size='md'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>

      <Slider size='lg'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
      </Slider>
    </VStack>
  )
}

export const withTooltip: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)
  const [isOpen, { on, off }] = useBoolean(false)

  return (
    <Slider value={value} onChange={onChange} mt='10' onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w='10' ml='-5'>
        25%
      </SliderMark>
      <SliderMark value={50} w='10' ml='-5'>
        50%
      </SliderMark>
      <SliderMark value={75} w='10' ml='-5'>
        75%
      </SliderMark>

      <Tooltip placement='top' label={`${value}%`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export const isDisabled: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider isDisabled />

      <FormControl
        isDisabled
        label='volume (sound)'
        helperMessage='Please select your preferred volume.'
      >
        <Slider />
      </FormControl>
    </>
  )
}

export const isReadonly: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider isReadOnly />

      <FormControl
        isReadOnly
        label='volume (sound)'
        helperMessage='Please select your preferred volume.'
      >
        <Slider />
      </FormControl>
    </>
  )
}

export const isInvalid: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(15)

  return (
    <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl
        isInvalid={value < 20}
        label='volume (sound)'
        errorMessage='Volume should be set to 20 or higher.'
      >
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>
  )
}

export const customColor: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider trackColor='orange.200' filledTrackColor='orange.500' thumbColor='orange.700' />

      <Slider
        track={{ bg: 'green.200' }}
        filledTrack={{ bg: 'green.500' }}
        thumb={{ bg: 'green.700' }}
      />

      <Slider>
        <SliderTrack bg='blue.200' filledTrack={{ bg: 'blue.500' }} />
        <SliderThumb bg='blue.700' />
      </Slider>

      <Slider>
        <SliderTrack bg='red.200'>
          <SliderFilledTrack bg='red.500' />
        </SliderTrack>

        <SliderThumb bg='red.700' />
      </Slider>
    </>
  )
}

export const customThumb: ComponentStory<typeof Slider> = () => {
  return (
    <>
      <Slider
        thumb={{
          color: 'blue.500',
          boxSize: '6',
          children: <FontAwesomeIcon icon={faWaveSquare} />,
        }}
      />

      <Slider>
        <SliderThumb color='blue.500' boxSize='6'>
          <FontAwesomeIcon icon={faWaveSquare} />
        </SliderThumb>
      </Slider>
    </>
  )
}

export const customMark: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Slider value={value} onChange={onChange} mt='10'>
        <SliderMark value={25} w='10' ml='-5'>
          25%
        </SliderMark>
        <SliderMark value={50} w='10' ml='-5'>
          50%
        </SliderMark>
        <SliderMark value={75} w='10' ml='-5'>
          75%
        </SliderMark>
        <SliderMark
          value={value}
          bg='blue.500'
          color='white'
          py='0.5'
          rounded='md'
          w='10'
          mt='-10'
          ml='-5'
        >
          {value}%
        </SliderMark>
      </Slider>
    </>
  )
}

export const customControl: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)
  const [startValue, onChangeStart] = useState<number>(50)

  return (
    <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>
  )
}

export const onChangeEnd: ComponentStory<typeof Slider> = () => {
  const [value, onChange] = useState<number>(50)
  const [endValue, onChangeEnd] = useState<number>(50)

  return (
    <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>
  )
}
