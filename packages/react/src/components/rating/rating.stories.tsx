import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { Rating } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Field } from "../field"
import {
  AngryIcon,
  FrownIcon,
  GhostIcon,
  LaughIcon,
  SmileIcon,
  SmilePlusIcon,
} from "../icon"

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
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
        return <Rating key={key} size={row} defaultValue={3} />
      }}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
        return <Rating key={key} colorScheme={row} defaultValue={3} />
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  return <Rating defaultValue={3} />
}

export const Count: Story = () => {
  return (
    <>
      <Rating count={4} />
      <Rating count={5} />
      <Rating count={6} />
    </>
  )
}

export const Fractions: Story = () => {
  return (
    <>
      <Rating defaultValue={1 + 1 / 2} fractions={2} />
      <Rating defaultValue={2 + 1 / 3} fractions={3} />
      <Rating defaultValue={3 + 1 / 4} fractions={4} />
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
    </>
  )
}

export const CustomIcon: Story = () => {
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
      <Rating defaultValue={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<number>(3)

  return <Rating value={value} onChange={onChange} />
}
