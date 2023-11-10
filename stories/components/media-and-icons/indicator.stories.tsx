import { Meta, StoryFn } from "@storybook/react"
import { Avatar, Box, Grid, Indicator, Wrap } from "@yamada-ui/react"

type Story = StoryFn<typeof Indicator>

const meta: Meta<typeof Indicator> = {
  title: "Components / Media And Icons / Indicator",
  component: Indicator,
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
    <Grid p="md" templateColumns="repeat(3, 1fr)" gap="md">
      <Indicator placement="top-left" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="top" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="top-right" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="left" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Box />
      <Indicator placement="right" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="bottom-left" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="bottom" label={99}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
        />
      </Indicator>
      <Indicator placement="bottom-right" label={99}>
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
        size="2xl"
        name="Hirotomo Yamada"
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
      <Indicator showZero={false} label={0}>
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
