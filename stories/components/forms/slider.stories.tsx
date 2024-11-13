import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { ActivityIcon } from "@yamada-ui/lucide"
import {
  Button,
  Center,
  FormControl,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Slider>

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Components / Forms / Slider",
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
  return <Slider h="calc(100vh - 16px * 2)" orientation="vertical" />
}

export const withReversed: Story = () => {
  return (
    <>
      <Slider isReversed />
      <Slider
        h="calc(100vh - 16px * 3 - 14px)"
        isReversed
        orientation="vertical"
      />
    </>
  )
}

export const withMinMax: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider max={200} min={0} value={value} onChange={onChange} />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider step={10} value={value} onChange={onChange} />
    </>
  )
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider focusThumbOnChange={false} step={10} value={value} />

      <Center gap="md" w="full">
        <Button
          isDisabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>
        <Button
          colorScheme="blue"
          isDisabled={value === 100}
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
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>
    </VStack>
  )
}

export const withTooltip: Story = () => {
  const [value, onChange] = useState<number>(50)
  const [isOpen, { off, on }] = useBoolean(false)

  return (
    <Slider
      mt="10"
      value={value}
      onChange={onChange}
      onMouseEnter={on}
      onMouseLeave={off}
    >
      <SliderMark ml="-5" value={25} w="10">
        25%
      </SliderMark>
      <SliderMark ml="-5" value={50} w="10">
        50%
      </SliderMark>
      <SliderMark ml="-5" value={75} w="10">
        75%
      </SliderMark>

      <Tooltip label={`${value}%`} open={isOpen} placement="top">
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
        helperMessage="Please select your preferred volume."
        isDisabled
        label="volume (sound)"
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
        helperMessage="Please select your preferred volume."
        isReadOnly
        label="volume (sound)"
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
        errorMessage="Volume should be set to 20 or higher."
        isInvalid={value < 20}
        label="volume (sound)"
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
        filledTrackColor="orange.500"
        thumbColor="orange.700"
        trackColor="orange.200"
      />

      <Slider
        filledTrackProps={{ bg: "green.500" }}
        thumbProps={{ bg: "green.700" }}
        trackProps={{ bg: "green.200" }}
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
          boxSize: "6",
          children: <ActivityIcon />,
          color: "blue.500",
        }}
      />

      <Slider>
        <SliderThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </SliderThumb>
      </Slider>
    </>
  )
}

export const customMark: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <Slider mt="10" value={value} onChange={onChange}>
      <SliderMark ml="-5" value={25} w="10">
        25%
      </SliderMark>
      <SliderMark ml="-5" value={50} w="10">
        50%
      </SliderMark>
      <SliderMark ml="-5" value={75} w="10">
        75%
      </SliderMark>
      <SliderMark
        bg="blue.500"
        color="white"
        ml="-5"
        mt="-10"
        py="0.5"
        rounded="md"
        value={value}
        w="10"
      >
        {value}%
      </SliderMark>
    </Slider>
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
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.slider?.message}
        isInvalid={!!errors.slider}
        label="Volume"
      >
        <Controller
          name="slider"
          control={control}
          render={({ field }) => <Slider {...field} />}
          rules={{ max: { message: "The maximum value is 50.", value: 50 } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
