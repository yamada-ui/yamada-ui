import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Select } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { ChevronsDownIcon, UserIcon } from "../icon"
import { InputGroup } from "../input"
import { VStack } from "../stack"
import { Tag } from "../tag"
import { Text } from "../text"

type Story = StoryFn<typeof Select.Root>

const meta: Meta<typeof Select.Root> = {
  component: Select.Root,
  title: "Components / Select",
}

export default meta

export const Basic: Story = () => {
  return (
    <Select.Root placeholder="Select a character">
      <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
      <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
      <Select.Option value="七海麻美">七海麻美</Select.Option>
      <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
      <Select.Option value="桜沢墨">桜沢墨</Select.Option>
      <Select.Option value="八重森みに">八重森みに</Select.Option>
    </Select.Root>
  )
}

export const Group: Story = () => {
  return (
    <Select.Root placeholder="Select a character">
      <Select.Group>
        <Select.Label>主要人物</Select.Label>
        <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
        <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
        <Select.Option value="七海麻美">七海麻美</Select.Option>
        <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
        <Select.Option value="桜沢墨">桜沢墨</Select.Option>
        <Select.Option value="八重森みに">八重森みに</Select.Option>
      </Select.Group>

      <Select.Separator />

      <Select.Group label="主要人物の関係者">
        <Select.Option value="木ノ下和">木ノ下和</Select.Option>
        <Select.Option value="一ノ瀬小百合">一ノ瀬小百合</Select.Option>
        <Select.Option value="木部芳秋">木部芳秋</Select.Option>
        <Select.Option value="栗林駿">栗林駿</Select.Option>
      </Select.Group>
    </Select.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "水原千鶴", value: "水原千鶴" },
      {
        items: [
          { label: "木ノ下和也", value: "木ノ下和也" },
          { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
          { label: "七海麻美", value: "七海麻美" },
          { label: "更科瑠夏", value: "更科瑠夏" },
          { label: "桜沢墨", value: "桜沢墨" },
          { label: "八重森みに", value: "八重森みに" },
        ],
        label: "主要人物",
      },
      {
        items: [
          { label: "木ノ下和", value: "木ノ下和" },
          { label: "一ノ瀬小百合", value: "一ノ瀬小百合" },
          { label: "木部芳秋", value: "木部芳秋" },
          { label: "栗林駿", value: "栗林駿" },
        ],
        label: "主要人物の関係者",
      },
    ],
    [],
  )

  return <Select.Root items={items} placeholder="Select a character" />
}

export const Variant: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["outline", "filled", "flushed"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Select.Root
            key={key}
            colorScheme={row}
            variant={column}
            items={items}
            placeholder={toTitleCase(column)}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <PropsTable
      variant="stack"
      columns={["xs", "sm", "md", "lg", "xl"]}
      rows={["outline", "filled", "flushed"]}
    >
      {(column, row, key) => {
        return (
          <Select.Root
            key={key}
            size={column}
            variant={row}
            items={items}
            placeholder={`Size (${column})`}
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      defaultValue="木ノ下和也"
      items={items}
      placeholder="Select a character"
    />
  )
}

export const Multiple: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return <Select.Root items={items} multiple placeholder="Select a character" />
}

export const Clearable: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      clearable
      items={items}
      multiple
      placeholder="Select a character"
    />
  )
}

export const Max: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      max={2}
      multiple
      placeholder="Select a character"
    />
  )
}

export const Separator: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      multiple
      placeholder="Select a character"
      separator=";"
    />
  )
}

export const Offset: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      offset={[16, 16]}
      placeholder="Select a character"
    />
  )
}

export const Gutter: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root gutter={32} items={items} placeholder="Select a character" />
  )
}

export const AnimationScheme: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      animationScheme="inline-start"
      items={items}
      placeholder="Select a character"
    />
  )
}

export const Placement: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      animationScheme="inline-start"
      items={items}
      placeholder="Select a character"
      placement="center-end"
      rootProps={{ w: "xs" }}
    />
  )
}

export const BlockScrollOnMount: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Box minH="200dvh" w="full">
      <Select.Root
        blockScrollOnMount
        items={items}
        placeholder="Select a character"
      />
    </Box>
  )
}

export const CloseOnScroll: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Box minH="200dvh" w="full">
      <Select.Root
        closeOnScroll
        items={items}
        placeholder="Select a character"
      />
    </Box>
  )
}

export const DisabledIncludePlaceholder: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      includePlaceholder={false}
      items={items}
      placeholder="Select a character"
    />
  )
}

export const DisabledCloseOnSelect: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { closeOnSelect: true, label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      closeOnSelect={false}
      items={items}
      placeholder="Select a character"
    />
  )
}

export const DisabledCloseOnBlur: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      closeOnBlur={false}
      items={items}
      placeholder="Select a character"
    />
  )
}

export const DisabledCloseOnEsc: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      closeOnEsc={false}
      items={items}
      placeholder="Select a character"
    />
  )
}

export const DisabledOption: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { disabled: true, label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return <Select.Root items={items} placeholder="Select a character" />
}

export const Disabled: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Select.Root
            key={index}
            variant={variant}
            disabled
            items={items}
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Select.Root
            key={index}
            variant={variant}
            items={items}
            placeholder={toTitleCase(variant)}
            readOnly
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Select.Root
            key={index}
            variant={variant}
            invalid
            items={items}
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="Who is your favorite character?"
      >
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <UserIcon />
          </InputGroup.Addon>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <UserIcon />
          </InputGroup.Element>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <>
      <Select.Root items={items} placeholder="Default border color" />

      <Select.Root
        focusBorderColor="green.500"
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <UserIcon />
        </InputGroup.Element>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <Select.Root
        errorBorderColor="orange.500"
        invalid
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <UserIcon />
        </InputGroup.Addon>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <>
      <Select.Root
        items={items}
        placeholder="Select a character"
        iconProps={{ color: "orange" }}
      />

      <Select.Root
        icon={<ChevronsDownIcon />}
        items={items}
        placeholder="Select a character"
      />
    </>
  )
}

export const CustomOptionIcon: Story = () => {
  const items = useMemo<Select.ItemWithValue[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      placeholder="Select a character"
      optionProps={{ icon: <UserIcon /> }}
    />
  )
}

export const CustomRender: Story = () => {
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      multiple
      placeholder="Select a character"
      render={({ label, value, onClear }) =>
        value === "" ? (
          <Text data-placeholder>{label}</Text>
        ) : (
          <Tag size="sm" _notLast={{ me: "{gap}" }} onClose={onClear}>
            {label}
          </Tag>
        )
      }
    />
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<string>("木ノ下和也")
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  return (
    <Select.Root
      items={items}
      placeholder="Select a character"
      value={value}
      onChange={setValue}
    />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    select: string
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.select?.message}
        invalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select.Root
              items={items}
              placeholder="Select a character"
              {...field}
            />
          )}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const ReactHookFormDefaultValue: Story = () => {
  interface Data {
    select: string
  }

  const defaultValues: Data = {
    select: "木ノ下和也",
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<Select.Item[]>(
    () => [
      { label: "木ノ下和也", value: "木ノ下和也" },
      { label: "一ノ瀬ちづる", value: "一ノ瀬ちづる" },
      { label: "七海麻美", value: "七海麻美" },
      { label: "更科瑠夏", value: "更科瑠夏" },
      { label: "桜沢墨", value: "桜沢墨" },
      { label: "八重森みに", value: "八重森みに" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.select?.message}
        invalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select.Root
              items={items}
              placeholder="Select a character"
              {...field}
            />
          )}
          rules={{
            required: { message: "This is required.", value: true },
          }}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
