import type { Meta, StoryFn } from "@storybook/react"
import { Avatar } from "../avatar"
import { Box } from "../box"
import { Wrap } from "../flex"
import { Grid } from "../grid"
import { Indicator } from "./"

type Story = StoryFn<typeof Indicator>

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  title: "Components / Indicator",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="md">
      <Indicator label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator size="lg" offset={1.5}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Wrap>
  )
}

export const WithSize: Story = () => {
  return (
    <Wrap gap="md">
      <Indicator size="sm" label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator size="md" label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator size="lg" label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Wrap>
  )
}

export const WithVariant: Story = () => {
  return (
    <Wrap gap="md">
      <Indicator variant="solid" label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator variant="subtle" label="new">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Wrap>
  )
}

export const WithPlacement: Story = () => {
  return (
    <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <Indicator label={99} placement="top-left">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="top">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="top-right">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="left">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Box />
      <Indicator label={99} placement="right">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="bottom-left">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="bottom">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={99} placement="bottom-right">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Grid>
  )
}

export const WithOffset: Story = () => {
  return (
    <Indicator label="new" offset={4}>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        size="2xl"
      />
    </Indicator>
  )
}

export const WithOverflowCount: Story = () => {
  return (
    <Indicator label={100} overflowCount={99}>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const WithShowZero: Story = () => {
  return (
    <>
      <Indicator label={0}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label={0} showZero={false}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </>
  )
}

export const WithBorder: Story = () => {
  return (
    <Indicator label={99} withBorder>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const Hidden: Story = () => {
  return (
    <Indicator disabled label="new">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const UseInlineBlock: Story = () => {
  return (
    <Indicator inline label="new">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const WithPing: Story = () => {
  return (
    <Wrap gap="md">
      <Indicator label="new" ping pingScale={1.4}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator variant="subtle" label="new" ping pingScale={1.4}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator size="lg" offset={1.5} ping>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator size="lg" variant="subtle" offset={1.5} ping>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Wrap>
  )
}
