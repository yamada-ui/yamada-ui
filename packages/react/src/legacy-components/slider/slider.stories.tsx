import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "."
import { Button, ButtonGroup } from "../../components/button"
import { Center } from "../../components/center"
import { Fieldset } from "../../components/form-control"
import { ActivityIcon } from "../../components/icon"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { useBoolean } from "../../hooks/use-boolean"
import { Tooltip } from "../tooltip"

type Story = StoryFn<typeof Slider>

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Components / Slider",
}

export default meta

export const Basic: Story = () => {
  return <Slider />
}

export const WithDefaultValue: Story = () => {
  return <Slider defaultValue={50} />
}

export const WithSize: Story = () => {
  return (
    <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>
  )
}

export const WithColorScheme: Story = () => {
  return (
    <>
      {COLOR_SCHEMES.map((colorScheme) => (
        <Slider key={colorScheme} colorScheme={colorScheme} />
      ))}
    </>
  )
}

export const WithOrientation: Story = () => {
  return <Slider h="calc(100vh - 16px * 2)" orientation="vertical" />
}

export const WithReversed: Story = () => {
  return (
    <>
      <Slider reversed />
      <Slider
        h="calc(100vh - 16px * 3 - 14px)"
        orientation="vertical"
        reversed
      />
    </>
  )
}

export const WithMinMax: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider max={200} min={0} value={value} onChange={onChange} />
    </>
  )
}

export const WithStep: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider step={10} value={value} onChange={onChange} />
    </>
  )
}

export const WithFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider focusThumbOnChange={false} step={10} value={value} />

      <ButtonGroup as={Center} gap="md" w="full">
        <Button
          disabled={value === 0}
          onClick={() => setValue((prev) => (prev !== 0 ? prev - 10 : prev))}
        >
          -10
        </Button>
        <Button
          colorScheme="blue"
          disabled={value === 100}
          onClick={() => setValue((prev) => (prev !== 100 ? prev + 10 : prev))}
        >
          +10
        </Button>
      </ButtonGroup>
    </>
  )
}

export const WithMark: Story = () => {
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

export const WithTooltip: Story = () => {
  const [value, onChange] = useState<number>(50)
  const [open, { off, on }] = useBoolean(false)

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

      <Tooltip label={`${value}%`} open={open} placement="top">
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Slider disabled />

      <Fieldset
        disabled
        helperMessage="Please select your preferred volume."
        legend="Sound volume"
      >
        <Slider />
      </Fieldset>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Slider readOnly />

      <Fieldset
        helperMessage="Please select your preferred volume."
        legend="Sound volume"
        readOnly
      >
        <Slider />
      </Fieldset>
    </>
  )
}

export const Invalid: Story = () => {
  const [value, onChange] = useState<number>(15)

  return (
    <>
      <Slider invalid={value < 20} value={value} onChange={onChange} />

      <Fieldset
        errorMessage="Volume should be set to 20 or higher."
        invalid={value < 20}
        legend="Sound volume"
      >
        <Slider value={value} onChange={onChange} />
      </Fieldset>
    </>
  )
}

export const CustomColor: Story = () => {
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

export const CustomThumb: Story = () => {
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

export const CustomMark: Story = () => {
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

export const CustomControl: Story = () => {
  const [value, onChange] = useState<number>(50)

  return (
    <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>
  )
}

export const OnChangeStart: Story = () => {
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

export const OnChangeEnd: Story = () => {
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

export const ReactHookForm: Story = () => {
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
      <Fieldset
        errorMessage={errors.slider?.message}
        invalid={!!errors.slider}
        legend="Sound volume"
      >
        <Controller
          name="slider"
          control={control}
          render={({ field }) => <Slider {...field} />}
          rules={{ max: { message: "The maximum value is 50.", value: 50 } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
