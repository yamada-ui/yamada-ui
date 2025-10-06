import type { Meta, StoryFn } from "@storybook/react-vite"
import { Format } from "./"

type Story = StoryFn<typeof Format.Byte>

const meta: Meta<typeof Format.Byte> = {
  component: Format.Byte,
  title: "Components / Format / Byte",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Format.Byte value={50} />
      <Format.Byte value={5000} />
      <Format.Byte value={5000000} />
      <Format.Byte value={5000000000} />
    </>
  )
}

export const Bits: Story = () => {
  return <Format.Byte unit="bit" value={1450} />
}

export const Locale: Story = () => {
  return (
    <>
      <Format.Byte locale="de-DE" value={1450} />
      <Format.Byte locale="zh-CN" value={1450} />
    </>
  )
}

export const UnitDisplay: Story = () => {
  return (
    <>
      <Format.Byte unitDisplay="short" value={50300} />
      <Format.Byte unitDisplay="long" value={50300} />
      <Format.Byte unitDisplay="narrow" value={50300} />
    </>
  )
}
