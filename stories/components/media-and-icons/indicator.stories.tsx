import type { Meta, StoryFn } from "@storybook/react"
import { Avatar, Box, Grid, Indicator, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Indicator>

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  title: "Components / Media And Icons / Indicator",
}

export default meta

export const basic: Story = () => {
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

export const withSize: Story = () => {
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

export const withVariant: Story = () => {
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

export const withPlacement: Story = () => {
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

export const withOffset: Story = () => {
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

export const withOverflowCount: Story = () => {
  return (
    <Indicator label={100} overflowCount={99}>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const withShowZero: Story = () => {
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

export const withBorder: Story = () => {
  return (
    <Indicator label={99} withBorder>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const hidden: Story = () => {
  return (
    <Indicator disabled label="new">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const useInlineBlock: Story = () => {
  return (
    <Indicator inline label="new">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const withPing: Story = () => {
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
