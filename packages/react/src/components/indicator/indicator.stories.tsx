import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Avatar } from "../avatar"
import { Grid } from "../grid"
import { Wrap } from "../wrap"
import { Indicator } from "./"

type Story = StoryFn<typeof Indicator>

const meta: Meta<typeof Indicator> = {
  component: Indicator,
  title: "Components / Indicator",
}

export default meta

export const Basic: Story = () => {
  return (
    <Wrap gap="lg">
      <Indicator colorScheme="blue" label="New">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430"
        />
      </Indicator>

      <Indicator colorScheme="blue">
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
          shape="rounded"
        />
      </Indicator>
    </Wrap>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Indicator key={key} colorScheme={row} variant={column} label="New">
            <Avatar
              name="Hirotomo Yamada"
              src="https://avatars.githubusercontent.com/u/84060430?v=4"
              shape="rounded"
            />
          </Indicator>
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Indicator key={key} colorScheme={row} size={column} label="New">
            <Avatar
              name="Hirotomo Yamada"
              src="https://avatars.githubusercontent.com/u/84060430?v=4"
              shape="rounded"
            />
          </Indicator>
        )
      }}
    </PropsTable>
  )
}

export const Placement: Story = () => {
  const placements = [
    "start-start",
    "start-center",
    "start-end",
    "center-start",
    "center-center",
    "center-end",
    "end-start",
    "end-center",
    "end-end",
  ] as const

  return (
    <Grid gap="lg" p="lg" templateColumns="repeat(3, 1fr)">
      {placements.map((placement) => (
        <Indicator
          key={placement}
          colorScheme="blue"
          label="New"
          placement={placement}
        >
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            shape="rounded"
          />
        </Indicator>
      ))}
    </Grid>
  )
}

export const Offset: Story = () => {
  return (
    <Indicator colorScheme="blue" offset="1.5">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      />
    </Indicator>
  )
}

export const OverflowCount: Story = () => {
  return (
    <Indicator colorScheme="blue" label={100} overflowCount={99}>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        shape="rounded"
      />
    </Indicator>
  )
}

export const ShowZero: Story = () => {
  return (
    <Wrap gap="lg">
      <Indicator colorScheme="blue" label={0}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
          shape="rounded"
        />
      </Indicator>

      <Indicator colorScheme="blue" label={0} showZero={false}>
        <Avatar
          name="Hirotomo Yamada"
          src="https://avatars.githubusercontent.com/u/84060430?v=4"
          shape="rounded"
        />
      </Indicator>
    </Wrap>
  )
}

export const Border: Story = () => {
  return (
    <Indicator colorScheme="blue" label={99} withBorder>
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        shape="rounded"
      />
    </Indicator>
  )
}

export const Disabled: Story = () => {
  return (
    <Indicator disabled label="New">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        shape="rounded"
      />
    </Indicator>
  )
}

export const InlineBlock: Story = () => {
  return (
    <Indicator colorScheme="blue" inline label="New">
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
        shape="rounded"
      />
    </Indicator>
  )
}

export const Ping: Story = () => {
  return (
    <>
      <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
          return (
            <Indicator
              key={key}
              colorScheme={row}
              variant={column}
              label="New"
              ping={{ scale: 1.4 }}
            >
              <Avatar
                name="Hirotomo Yamada"
                src="https://avatars.githubusercontent.com/u/84060430?v=4"
                shape="rounded"
              />
            </Indicator>
          )
        }}
      </PropsTable>

      <PropsTable columns={["solid", "subtle", "surface"]} rows={COLOR_SCHEMES}>
        {(column, row, key) => {
          return (
            <Indicator key={key} colorScheme={row} variant={column} ping>
              <Avatar
                name="Hirotomo Yamada"
                src="https://avatars.githubusercontent.com/u/84060430?v=4"
                shape="rounded"
              />
            </Indicator>
          )
        }}
      </PropsTable>
    </>
  )
}
