import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { COLOR_SCHEMES } from "../../utils"
import { Stat } from "./"

type Story = StoryFn<typeof Stat.Root>

const meta: Meta<typeof Stat.Root> = {
  component: Stat.Root,
  title: "Components / Stat",
}

export default meta

export const Basic: Story = () => {
  return (
    <Stat.Root>
      <Stat.Label>Total Page Views</Stat.Label>
      <Stat.Value>1,993,818</Stat.Value>
      <Stat.HelperMessage>
        <Stat.Icon type="increase" />
        21% more than last month
      </Stat.HelperMessage>
    </Stat.Root>
  )
}

export const PropsPattern: Story = () => {
  return (
    <Stat.Root
      helperMessage="21% more than last month"
      icon="increase"
      label="Total Page Views"
      value="1,993,818"
    />
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => (
        <Stat.Root
          key={key}
          colorScheme={row}
          size={column}
          helperMessage="Time to complete"
          label="Downloads"
          value={
            <>
              8<Stat.Unit>hr</Stat.Unit>
              18<Stat.Unit>min</Stat.Unit>
            </>
          }
        />
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => (
        <Stat.Root
          key={key}
          colorScheme={row}
          helperMessage="21% more than last month"
          label="Total Likes"
          value="818K"
        />
      )}
    </PropsTable>
  )
}

export const CenterContent: Story = () => {
  return (
    <Stat.Root
      centerContent
      helperMessage="From August 1 to August 18"
      icon="increase"
      label="Downloads"
      value="18K"
    />
  )
}

export const Unit: Story = () => {
  return (
    <>
      <Stat.Root
        label="Time to complete"
        value={
          <>
            8<Stat.Unit>hr</Stat.Unit>
            18<Stat.Unit>min</Stat.Unit>
          </>
        }
      />

      <Stat.Root>
        <Stat.Label>Time to complete</Stat.Label>
        <Stat.Value>
          8<Stat.Unit>hr</Stat.Unit>
          18<Stat.Unit>min</Stat.Unit>
        </Stat.Value>
      </Stat.Root>
    </>
  )
}

export const Decrease: Story = () => {
  return (
    <>
      <Stat.Root
        helperMessage="21% more than last month"
        icon="decrease"
        label="Total Page Views"
        value="1,993,818"
      />

      <Stat.Root>
        <Stat.Label>Total Page Views</Stat.Label>
        <Stat.Value>1,993,818</Stat.Value>
        <Stat.HelperMessage>
          <Stat.Icon type="decrease" />
          21% more than last month
        </Stat.HelperMessage>
      </Stat.Root>
    </>
  )
}
