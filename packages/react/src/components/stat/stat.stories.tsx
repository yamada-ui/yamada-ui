import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { Grid } from "../grid"
import { Stat } from "./"

type Story = StoryFn<typeof Stat.Root>

const meta: Meta<typeof Stat.Root> = {
  component: Stat.Root,
  title: "Components / Stat",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Stat.Root
        helperMessage="21% more than last month"
        icon="increase"
        label="Total Page Views"
        number="1,993,818"
      />

      <Stat.Root>
        <Stat.Label>Total Page Views</Stat.Label>
        <Stat.Number>1,993,818</Stat.Number>
        <Stat.HelperMessage>
          <Stat.Icon type="increase" />
          21% more than last month
        </Stat.HelperMessage>
      </Stat.Root>
    </>
  )
}

export const ColorScheme: Story = () => {
  return (
    <Grid
      gap="md"
      templateColumns={{
        base: "repeat(4, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      w="full"
    >
      {COLOR_SCHEMES.map((colorScheme) => (
        <Stat.Root
          key={colorScheme}
          colorScheme={colorScheme}
          helperMessage="21% more than last month"
          label="Total Likes"
          number="818K"
        />
      ))}
    </Grid>
  )
}

export const CenterContent: Story = () => {
  return (
    <Stat.Root
      centerContent
      helperMessage="From August 1 to August 18"
      icon="increase"
      label="Downloads"
      number="18K"
    />
  )
}

export const Decrease: Story = () => {
  return (
    <>
      <Stat.Root
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        number="1,993,818"
      />

      <Stat.Root>
        <Stat.Label>Total Page Views</Stat.Label>
        <Stat.Number>1,993,818</Stat.Number>
        <Stat.HelperMessage>
          <Stat.Icon type="decrease" />
          21% more than last month
        </Stat.HelperMessage>
      </Stat.Root>
    </>
  )
}
