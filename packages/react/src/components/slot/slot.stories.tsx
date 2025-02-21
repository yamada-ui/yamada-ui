import type { Meta, StoryFn } from "@storybook/react"
import type { FC, HTMLAttributes, ReactNode } from "react"
import { Slot, Slottable } from "./"

type Story = StoryFn<typeof Slot>

const meta: Meta<typeof Slot> = {
  component: Slot,
  title: "Components / Slot",
}

export default meta

export const Basic: Story = () => {
  const Button: FC<
    HTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
  > = ({ asChild, ...props }) => {
    const Component = asChild ? Slot : "button"

    return <Component {...props} />
  }

  return (
    <Button
      asChild
      onClick={(ev) => {
        if (!ev.defaultPrevented)
          console.log("Not logged because default is prevented.")
      }}
    >
      <a href="/about" onClick={(ev) => ev.preventDefault()}>
        About
      </a>
    </Button>
  )
}

export const MultipleChildren: Story = () => {
  const Button: FC<
    HTMLAttributes<HTMLButtonElement> & {
      asChild?: boolean
      endIcon?: ReactNode
      startIcon?: ReactNode
    }
  > = ({ asChild, children, endIcon, startIcon, ...props }) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component {...props}>
        {startIcon}
        <Slottable>{children}</Slottable>
        {endIcon}
      </Component>
    )
  }

  return (
    <Button asChild>
      <a href="/about">About</a>
    </Button>
  )
}
