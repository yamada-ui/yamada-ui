import type { Meta, StoryFn } from "@storybook/react"
import { COLOR_SCHEMES } from "@yamada-ui/utils"
import { Grid } from "../grid"
import { Stat, StatHelperMessage, StatIcon, StatLabel, StatNumber } from "./"

type Story = StoryFn<typeof Stat>

const meta: Meta<typeof Stat> = {
  component: Stat,
  title: "Components / Stat",
}

export default meta

export const Basic: Story = () => {
  return (
    <>
      <Stat
        helperMessage="21% more than last month"
        icon="increase"
        label="Total Page Views"
        number="1,993,818"
      />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="increase" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>
  )
}

export const WithColorScheme: Story = () => {
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
        <Stat
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

export const WithCenterContent: Story = () => {
  return (
    <Stat
      centerContent
      helperMessage="From August 1 to August 18"
      icon="increase"
      label="Downloads"
      number="18K"
    />
  )
}

export const WithDecrease: Story = () => {
  return (
    <>
      <Stat
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        number="1,993,818"
      />

      <Stat>
        <StatLabel>Total Page Views</StatLabel>
        <StatNumber>1,993,818</StatNumber>
        <StatHelperMessage>
          <StatIcon type="decrease" />
          21% more than last month
        </StatHelperMessage>
      </Stat>
    </>
  )
}
