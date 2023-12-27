import type { Meta, StoryFn } from "@storybook/react"
import {
  Grid,
  Stat,
  StatHelperMessage,
  StatIcon,
  StatLabel,
  StatNumber,
} from "@yamada-ui/react"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof Stat>

const meta: Meta<typeof Stat> = {
  title: "Components / Data Display / Stat",
  component: Stat,
}

export default meta

export const basic: Story = () => {
  return (
    <>
      <Stat
        label="Total Page Views"
        number="1,993,818"
        icon="increase"
        helperMessage="21% more than last month"
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

export const withColorScheme: Story = () => {
  return (
    <Grid
      w="full"
      templateColumns={{
        base: "repeat(4, 1fr)",
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(1, 1fr)",
      }}
      gap="md"
    >
      {colorSchemes.map((colorScheme) => (
        <Stat
          key={colorScheme}
          colorScheme={colorScheme}
          label="Total Likes"
          number="818K"
          helperMessage="21% more than last month"
        />
      ))}
    </Grid>
  )
}

export const withCenterContent: Story = () => {
  return (
    <>
      <Stat
        label="Downloads"
        number="18K"
        icon="increase"
        helperMessage="From August 1 to August 18"
        centerContent
      />
    </>
  )
}

export const withDecrease: Story = () => {
  return (
    <>
      <Stat
        label="Total Page Views"
        number="1,993,818"
        icon="decrease"
        helperMessage="21% more than last month"
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
