import type { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"
import { Activity } from "@yamada-ui/lucide"
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
  Tooltip,
  useBoolean,
  VStack,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Slider>

const meta: Meta<typeof Slider> = {
  title: "Components / Forms / Slider",
  component: Slider,
}

export default meta

export const basic: Story = () => {
  return <Slider />
}

export const withDefaultValue: Story = () => {
  return <Slider defaultValue={50} />
}

export const withSize: Story = () => {
  return (
    <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      {colorSchemes.map((colorScheme) => (
        <Slider key={colorScheme} colorScheme={colorScheme} />
      ))}
    </>
  )
}

export const withOrientation: Story = () => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />
}

export const withReversed: Story = () => {
  return (
    <>
      <Slider isReversed />
      <Slider
        isReversed
        orientation="vertical"
        h="calc(100vh - 16px * 3 - 14px)"
      />
    </>
  )
}

export const withMinMax: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button
          isDisabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>
        <Button
          isDisabled={value === 100}
          colorScheme="blue"
          onClick={() => setValue((prev) => (prev !== 100 ? prev + 10 : prev))}
        >
          +10
        </Button>
      </Center>
    </>
  )
}

export const withMark: Story = () => {
  return (
    <VStack gap="lg">
      <Slider size="sm">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>
    </VStack>
  )
}

export const withTooltip: Story = () => {
  const [value, onChange] = useState<number>(50)
  const [isOpen, { on, off }] = useBoolean(false)

  return (
    <Slider
      value={value}
      onChange={onChange}
      mt="10"
      onMouseEnter={on}
      onMouseLeave={off}
    >
      <SliderMark value={25} w="10" ml="-5">
        25%
      </SliderMark>
      <SliderMark value={50} w="10" ml="-5">
        50%
      </SliderMark>
      <SliderMark value={75} w="10" ml="-5">
        75%
      </SliderMark>

      <Tooltip placement="top" label={`${value}%`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Slider isDisabled />

      <FormControl
        isDisabled
        label="volume (sound)"
        helperMessage="Please select your preferred volume."
      >
        <Slider />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Slider isReadOnly />

      <FormControl
        isReadOnly
        label="volume (sound)"
        helperMessage="Please select your preferred volume."
      >
        <Slider />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  const [value, onChange] = useState<number>(15)

  return (
    <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl
        isInvalid={value < 20}
        label="volume (sound)"
        errorMessage="Volume should be set to 20 or higher."
      >
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>
  )
}

export const customColor: Story = () => {
  return (
    <>
      <Slider
        trackColor="orange.200"
        filledTrackColor="orange.500"
        thumbColor="orange.700"
      />

      <Slider
        trackProps={{ bg: "green.200" }}
        filledTrackProps={{ bg: "green.500" }}
        thumbProps={{ bg: "green.700" }}
      />

      <Slider>
        <SliderTrack bg="blue.200" filledTrackProps={{ bg: "blue.500" }} />
        <SliderThumb bg="blue.700" />
      </Slider>

      <Slider>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red.500" />
        </SliderTrack>

        <SliderThumb bg="red.700" />
      </Slider>
    </>
  )
}

export const customThumb: Story = () => {
  return (
    <>
      <Slider
        thumbProps={{
          color: "blue.500",
          boxSize: "6",
          children: <Activity />,
        }}
      />

      <Slider>
        <SliderThumb color="blue.500" boxSize="6">
          <Activity />
        </SliderThumb>
      </Slider>
    </>
  )
}

export const customMark: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Slider value={value} onChange={onChange} mt="10">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
        <SliderMark
          value={value}
          bg="blue.500"
          color="white"
          py="0.5"
          rounded="md"
          w="10"
          mt="-10"
          ml="-5"
        >
          {value}%
        </SliderMark>
      </Slider>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>
  )
}

export const onChangeStart: Story = () => {
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

export const onChangeEnd: Story = () => {
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

export const reactHookForm: Story = () => {
  interface Data {
    slider: number
  }

  const defaultValues: Data = {
    slider: 50,
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.slider}
        label="Volume"
        errorMessage={errors.slider?.message}
      >
        <Controller
          name="slider"
          control={control}
          rules={{ max: { value: 50, message: "The maximum value is 50." } }}
          render={({ field }) => <Slider {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
