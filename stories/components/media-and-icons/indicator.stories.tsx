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

      <Indicator offset={1.5} size="lg">
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
      <Indicator label="new" size="sm">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label="new" size="md">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label="new" size="lg">
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
      <Indicator label="new" variant="solid">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator label="new" variant="subtle">
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
        size="2xl"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
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
    <Indicator isDisabled label="new">
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

      <Indicator label="new" ping pingScale={1.4} variant="subtle">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator offset={1.5} ping size="lg">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>

      <Indicator offset={1.5} ping size="lg" variant="subtle">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
    </Wrap>
  )
}
