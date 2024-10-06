import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { Angry, Frown, Ghost, Laugh, Smile, SmilePlus } from "@yamada-ui/lucide"
import { Button, FormControl, Rating, VStack } from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Rating>

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: "Components / Forms / Rating",
}

export default meta

export const basic: Story = () => {
  return <Rating />
}

export const withSize: Story = () => {
  return (
    <>
      <Rating defaultValue={3} size="xs" />
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} size="md" />
      <Rating defaultValue={3} size="lg" />
      <Rating defaultValue={3} size="xl" />
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
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>
  )
}

export const withHighlightSelectedOnly: Story = () => {
  return <Rating defaultValue={3} highlightSelectedOnly />
}

export const isDisabled: Story = () => {
  return (
    <>
      <Rating defaultValue={3} isDisabled />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Rating defaultValue={3} isReadOnly />

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
        return <Angry />

      case 2:
        return <Frown />

      case 3:
        return <Smile />

      case 4:
        return <Laugh />

      case 5:
        return <SmilePlus />

      default:
        return null
    }
  }

  return (
    <>
      <Rating defaultValue={3} emptyIcon={<Ghost />} filledIcon={<Ghost />} />

      <Rating
        defaultValue={2}
        emptyIcon={<Ghost />}
        filledIcon={<Ghost />}
        fractions={3}
      />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} gap="xs" />

      <Rating
        color={getColor}
        emptyIcon={getIcon}
        filledIcon={getIcon}
        gap="xs"
      />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} fractions={3} gap="xs" />
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<number>(3)

  return <Rating value={value} onChange={onChange} />
}

export const reactHookForm: Story = () => {
  interface Data {
    rating: number
  }

  const defaultValues: Data = {
    rating: 3,
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
        errorMessage={errors.rating?.message}
        isInvalid={!!errors.rating}
        label="How satisfied are you with Yamada UI?"
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
