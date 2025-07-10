import type { Meta, StoryFn } from "@storybook/react-vite"
import { FormatByte } from "./format-byte"

type Story = StoryFn<typeof FormatByte>

const meta: Meta<typeof FormatByte> = {
  component: FormatByte,
  title: "Components / FormatByte",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <FormatByte value={50} />
      <FormatByte value={5000} />
      <FormatByte value={5000000} />
      <FormatByte value={5000000000} />
    </>
  )
}

export const Bits: Story = () => {
  return <FormatByte unit="bit" value={1450} />
}

export const Locale: Story = () => {
  return (
    <>
      <FormatByte locale="de-DE" value={1450} />
      <FormatByte locale="zh-CN" value={1450} />
    </>
  )
}

export const UnitDisplay: Story = () => {
  return (
    <>
      <FormatByte unitDisplay="short" value={50300} />
      <FormatByte unitDisplay="long" value={50300} />
      <FormatByte unitDisplay="narrow" value={50300} />
    </>
  )
}
