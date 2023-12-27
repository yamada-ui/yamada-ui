import {
  faFaceGrinStars,
  faFaceSadCry,
  faFaceSadTear,
  faFaceSmile,
  faFaceSmileBeam,
  faPoo,
} from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Button, FormControl, Rating, VStack } from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Rating>

const meta: Meta<typeof Rating> = {
  title: "Components / Forms / Rating",
  component: Rating,
}

export default meta

export const basic: Story = () => {
  return <Rating />
}

export const withSize: Story = () => {
  return (
    <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return <Rating defaultValue={3} />
}

export const withItems: Story = () => {
  return (
    <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>
  )
}

export const withFractions: Story = () => {
  return (
    <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>
  )
}

export const withHighlightSelectedOnly: Story = () => {
  return <Rating defaultValue={3} highlightSelectedOnly />
}

export const isDisabled: Story = () => {
  return (
    <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>
  )
}

export const customColor: Story = () => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500"

      case 2:
        return "orange.500"

      case 3:
        return "yellow.500"

      case 4:
        return "green.500"

      case 5:
        return "blue.500"

      default:
        return undefined
    }
  }

  return (
    <>
      <Rating color="green.500" defaultValue={3} />
      <Rating color={getColor} defaultValue={3} />
      <Rating color={getColor} defaultValue={3} fractions={3} />
    </>
  )
}

export const customIcon: Story = () => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500"

      case 2:
        return "orange.500"

      case 3:
        return "yellow.500"

      case 4:
        return "green.500"

      case 5:
        return "blue.500"

      default:
        return undefined
    }
  }

  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return <Icon icon={faFaceSadCry} />

      case 2:
        return <Icon icon={faFaceSadTear} />

      case 3:
        return <Icon icon={faFaceSmile} />

      case 4:
        return <Icon icon={faFaceSmileBeam} />

      case 5:
        return <Icon icon={faFaceGrinStars} />

      default:
        return null
    }
  }

  return (
    <>
      <Rating
        defaultValue={3}
        emptyIcon={<Icon icon={faPoo} />}
        filledIcon={<Icon icon={faPoo} />}
      />

      <Rating
        defaultValue={2}
        fractions={3}
        emptyIcon={<Icon icon={faPoo} />}
        filledIcon={<Icon icon={faPoo} />}
      />

      <Rating gap="xs" emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating
        gap="xs"
        color={getColor}
        emptyIcon={getIcon}
        filledIcon={getIcon}
      />

      <Rating gap="xs" fractions={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(3)

  return <Rating value={value} onChange={onChange} />
}

export const reactHookForm: Story = () => {
  type Data = { rating: number }

  const defaultValues: Data = {
    rating: 3,
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
        isInvalid={!!errors.rating}
        label="How satisfied are you with Yamada UI?"
        errorMessage={errors.rating?.message}
      >
        <Controller
          name="rating"
          control={control}
          render={({ field }) => <Rating {...field} />}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
