import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { ActivityIcon } from "@yamada-ui/lucide"
import {
  Button,
  Center,
  Fieldset,
  Flex,
  RangeSlider,
  RangeSliderEndThumb,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderStartThumb,
  RangeSliderTrack,
  Text,
  Tooltip,
  useBoolean,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof RangeSlider>

const meta: Meta<typeof RangeSlider> = {
  component: RangeSlider,
  title: "Components / Forms / RangeSlider",
}

export default meta

export const basic: Story = () => {
  return <RangeSlider />
}

export const withDefaultValue: Story = () => {
  return <RangeSlider defaultValue={[10, 90]} />
}

export const withSize: Story = () => {
  return (
    <>
      <RangeSlider size="sm" defaultValue={[0, 25]} />
      <RangeSlider size="md" defaultValue={[25, 50]} />
      <RangeSlider size="lg" defaultValue={[50, 75]} />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      {colorSchemes.map((colorScheme) => (
        <RangeSlider key={colorScheme} colorScheme={colorScheme} />
      ))}
    </>
  )
}

export const withOrientation: Story = () => {
  return <RangeSlider h="calc(100vh - 16px * 2)" orientation="vertical" />
}

export const withReversed: Story = () => {
  return (
    <>
      <RangeSlider reversed />
      <RangeSlider
        h="calc(100vh - 16px * 3 - 14px)"
        orientation="vertical"
        reversed
      />
    </>
  )
}

export const withMinMax: Story = () => {
  const [value, onChange] = useState<[number, number]>([50, 150])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider max={200} min={0} value={value} onChange={onChange} />
    </>
  )
}

export const withStep: Story = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider step={5} value={value} onChange={onChange} />
    </>
  )
}

export const withBetweenThumbs: Story = () => {
  return <RangeSlider betweenThumbs={10} />
}

export const withFocusThumbOnChange: Story = () => {
  const [value, setValue] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}
      </Text>
      <RangeSlider focusThumbOnChange={false} step={5} value={value} />

      <Center gap="xl" w="full">
        <Flex align="center" direction="column" gap="sm">
          <Text>Min</Text>

          <Center gap="md">
            <Button
              disabled={value[0] === 0}
              onClick={() =>
                setValue((prev) =>
                  prev[0] !== 0 ? [prev[0] - 5, prev[1]] : prev,
                )
              }
            >
              -5
            </Button>

            <Button
              colorScheme="blue"
              disabled={value[0] === 100 || value[0] === value[1]}
              onClick={() =>
                setValue((prev) =>
                  prev[0] !== 100 && value[0] !== value[1]
                    ? [prev[0] + 5, prev[1]]
                    : prev,
                )
              }
            >
              +5
            </Button>
          </Center>
        </Flex>

        <Flex align="center" direction="column" gap="sm">
          <Text>Max</Text>

          <Center gap="md">
            <Button
              disabled={value[1] === 0 || value[0] === value[1]}
              onClick={() =>
                setValue((prev) =>
                  prev[1] !== 0 && value[0] !== value[1]
                    ? [prev[0], prev[1] - 5]
                    : prev,
                )
              }
            >
              -5
            </Button>

            <Button
              colorScheme="blue"
              disabled={value[1] === 100}
              onClick={() =>
                setValue((prev) =>
                  prev[1] !== 100 ? [prev[0], prev[1] + 5] : prev,
                )
              }
            >
              +10
            </Button>
          </Center>
        </Flex>
      </Center>
    </>
  )
}

export const withMark: Story = () => {
  return (
    <VStack gap="lg">
      <RangeSlider size="sm">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="md">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>

      <RangeSlider size="lg">
        <RangeSliderMark ml="-5" value={25} w="10">
          25%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={50} w="10">
          50%
        </RangeSliderMark>
        <RangeSliderMark ml="-5" value={75} w="10">
          75%
        </RangeSliderMark>
      </RangeSlider>
    </VStack>
  )
}

export const withTooltip: Story = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [open, { off, on }] = useBoolean(false)

  return (
    <RangeSlider
      mt="10"
      value={value}
      onChange={onChange}
      onMouseEnter={on}
      onMouseLeave={off}
    >
      <RangeSliderMark ml="-5" value={25} w="10">
        25%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={50} w="10">
        50%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={75} w="10">
        75%
      </RangeSliderMark>

      <Tooltip label={`${value[0]}%`} open={open} placement="top">
        <RangeSliderStartThumb />
      </Tooltip>

      <Tooltip label={`${value[1]}%`} open={open} placement="top">
        <RangeSliderEndThumb />
      </Tooltip>
    </RangeSlider>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <RangeSlider disabled />

      <Fieldset
        disabled
        helperMessage="Please select your preferred price range."
        legend="Hotel Price Range"
      >
        <RangeSlider />
      </Fieldset>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <RangeSlider readOnly />

      <Fieldset
        helperMessage="Please select your preferred price range."
        legend="Hotel Price Range"
        readOnly
      >
        <RangeSlider />
      </Fieldset>
    </>
  )
}

export const invalid: Story = () => {
  const [value, onChange] = useState<[number, number]>([15, 45])

  return (
    <>
      <RangeSlider invalid={value[0] < 20} value={value} onChange={onChange} />

      <Fieldset
        errorMessage="Minimum price should be set to 20 or higher."
        invalid={value[0] < 20}
        legend="Hotel Price Range"
      >
        <RangeSlider value={value} onChange={onChange} />
      </Fieldset>
    </>
  )
}

export const customColor: Story = () => {
  return (
    <>
      <RangeSlider
        filledTrackColor="orange.500"
        thumbColor="orange.700"
        trackColor="orange.200"
      />

      <RangeSlider
        filledTrackProps={{ bg: "green.500" }}
        thumbProps={{ bg: "green.700" }}
        trackProps={{ bg: "green.200" }}
      />

      <RangeSlider>
        <RangeSliderTrack bg="blue.200" filledTrackProps={{ bg: "blue.500" }} />
        <RangeSliderStartThumb bg="blue.700" />
        <RangeSliderEndThumb bg="blue.700" />
      </RangeSlider>

      <RangeSlider>
        <RangeSliderTrack bg="red.200">
          <RangeSliderFilledTrack bg="red.500" />
        </RangeSliderTrack>

        <RangeSliderStartThumb bg="red.700" />
        <RangeSliderEndThumb bg="red.700" />
      </RangeSlider>
    </>
  )
}

export const customThumb: Story = () => {
  return (
    <>
      <RangeSlider
        thumbProps={{
          boxSize: "6",
          children: <ActivityIcon />,
          color: "blue.500",
        }}
      />

      <RangeSlider>
        <RangeSliderStartThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderStartThumb>

        <RangeSliderEndThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </RangeSliderEndThumb>
      </RangeSlider>
    </>
  )
}

export const customMark: Story = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])

  return (
    <RangeSlider mt="10" value={value} onChange={onChange}>
      <RangeSliderMark ml="-5" value={25} w="10">
        25%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={50} w="10">
        50%
      </RangeSliderMark>
      <RangeSliderMark ml="-5" value={75} w="10">
        75%
      </RangeSliderMark>
      <RangeSliderMark
        bg="blue.500"
        color="white"
        ml="-5"
        mt="-10"
        py="0.5"
        rounded="md"
        value={value[0]}
        w="10"
      >
        {value[0]}%
      </RangeSliderMark>
      <RangeSliderMark
        bg="blue.500"
        color="white"
        ml="-5"
        mt="-10"
        py="0.5"
        rounded="md"
        value={value[1]}
        w="10"
      >
        {value[1]}%
      </RangeSliderMark>
    </RangeSlider>
  )
}

export const customControl: Story = () => {
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

export const onChangeStart: Story = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [startValue, onChangeStart] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, Start Min: {startValue[0]}, Start Max:{" "}
        {startValue[0]}
      </Text>
      <RangeSlider
        value={value}
        onChange={onChange}
        onChangeStart={onChangeStart}
      />
    </>
  )
}

export const onChangeEnd: Story = () => {
  const [value, onChange] = useState<[number, number]>([25, 75])
  const [endValue, onChangeEnd] = useState<[number, number]>([25, 75])

  return (
    <>
      <Text>
        Min: {value[0]}, Max: {value[1]}, End Min: {endValue[0]}, End Max:{" "}
        {endValue[0]}
      </Text>
      <RangeSlider
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    </>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    rangeSlider: [number, number]
  }

  const defaultValues: Data = {
    rangeSlider: [25, 75],
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
        errorMessage={errors.rangeSlider?.message}
        invalid={!!errors.rangeSlider}
        legend="Hotel Price Range"
      >
        <Controller
          name="rangeSlider"
          control={control}
          render={({ field }) => <RangeSlider {...field} />}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
