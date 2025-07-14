import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Rating } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import {
  AngryIcon,
  FrownIcon,
  GhostIcon,
  LaughIcon,
  SmileIcon,
  SmilePlusIcon,
} from "../icon"
import { VStack } from "../stack"

type Story = StoryFn<typeof Rating>

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: "Components / Rating",
}

export default meta

export const Basic: Story = () => {
  return <Rating />
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Rating key={key} colorScheme={row} size={column} defaultValue={3} />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <Rating defaultValue={3} />
}

export const Items: Story = () => {
  return (
    <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>
  )
}

export const Fractions: Story = () => {
  return (
    <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>
  )
}

export const HighlightSelectedOnly: Story = () => {
  return <Rating defaultValue={3} highlightSelectedOnly />
}

export const Disabled: Story = () => {
  return (
    <>
      <Rating defaultValue={3} disabled />

      <Field.Root disabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Rating defaultValue={3} readOnly />

      <Field.Root label="How satisfied are you with Yamada UI?" readOnly>
        <Rating defaultValue={3} />
      </Field.Root>
    </>
  )
}

export const CustomColor: Story = () => {
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

export const CustomIcon: Story = () => {
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
        return <AngryIcon />

      case 2:
        return <FrownIcon />

      case 3:
        return <SmileIcon />

      case 4:
        return <LaughIcon />

      case 5:
        return <SmilePlusIcon />

      default:
        return null
    }
  }

  return (
    <>
      <Rating
        defaultValue={3}
        emptyIcon={<GhostIcon />}
        filledIcon={<GhostIcon />}
      />

      <Rating
        defaultValue={2}
        emptyIcon={<GhostIcon />}
        filledIcon={<GhostIcon />}
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

export const CustomControl: Story = () => {
  const [value, onChange] = useState<number>(3)

  return <Rating value={value} onChange={onChange} />
}

export const ReactHookForm: Story = () => {
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
      <Field.Root
        errorMessage={errors.rating?.message}
        invalid={!!errors.rating}
        label="How satisfied are you with Yamada UI?"
      >
        <Controller
          name="rating"
          control={control}
          render={({ field }) => <Rating {...field} />}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
