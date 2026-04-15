import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Autocomplete } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Box } from "../box"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { BugIcon, ChevronsDownIcon, HeartIcon } from "../icon"
import { InputGroup } from "../input"
import { VStack } from "../stack"
import { Tag } from "../tag"
import { Text } from "../text"

type Story = StoryFn<typeof Autocomplete.Root>

const meta: Meta<typeof Autocomplete.Root> = {
  component: Autocomplete.Root,
  title: "Components / Autocomplete",
}

export default meta

export const Basic: Story = () => {
  return (
    <Autocomplete.Root placeholder="Select a digimon">
      <Autocomplete.Option value="アグモン">アグモン</Autocomplete.Option>
      <Autocomplete.Option value="ガブモン">ガブモン</Autocomplete.Option>
      <Autocomplete.Option value="テントモン">テントモン</Autocomplete.Option>
      <Autocomplete.Option value="ピヨモン">ピヨモン</Autocomplete.Option>
      <Autocomplete.Option value="ゴマモン">ゴマモン</Autocomplete.Option>
      <Autocomplete.Option value="パルモン">パルモン</Autocomplete.Option>
      <Autocomplete.Option value="パタモン">パタモン</Autocomplete.Option>
      <Autocomplete.Option value="テイルモン">テイルモン</Autocomplete.Option>
    </Autocomplete.Root>
  )
}

export const Group: Story = () => {
  return (
    <Autocomplete.Root placeholder="Select a digimon">
      <Autocomplete.Group>
        <Autocomplete.Label>成長期</Autocomplete.Label>
        <Autocomplete.Option value="アグモン">アグモン</Autocomplete.Option>
        <Autocomplete.Option value="ガブモン">ガブモン</Autocomplete.Option>
        <Autocomplete.Option value="テントモン">テントモン</Autocomplete.Option>
        <Autocomplete.Option value="ピヨモン">ピヨモン</Autocomplete.Option>
        <Autocomplete.Option value="ゴマモン">ゴマモン</Autocomplete.Option>
        <Autocomplete.Option value="パルモン">パルモン</Autocomplete.Option>
        <Autocomplete.Option value="パタモン">パタモン</Autocomplete.Option>
        <Autocomplete.Option value="テイルモン">テイルモン</Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="成熟期">
        <Autocomplete.Option value="グレイモン">グレイモン</Autocomplete.Option>
        <Autocomplete.Option value="ガルルモン">ガルルモン</Autocomplete.Option>
        <Autocomplete.Option value="カブテリモン">
          カブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="バードラモン">
          バードラモン
        </Autocomplete.Option>
        <Autocomplete.Option value="イッカクモン">
          イッカクモン
        </Autocomplete.Option>
        <Autocomplete.Option value="トグモン">トグモン</Autocomplete.Option>
        <Autocomplete.Option value="エンジェモン">
          エンジェモン
        </Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="完全体">
        <Autocomplete.Option value="メタルグレイモン">
          メタルグレイモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ワーガルルモン">
          ワーガルルモン
        </Autocomplete.Option>
        <Autocomplete.Option value="アトラーカブテリモン">
          アトラーカブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ガルダモン">ガルダモン</Autocomplete.Option>
        <Autocomplete.Option value="ズドモン">ズドモン</Autocomplete.Option>
        <Autocomplete.Option value="リリモン">リリモン</Autocomplete.Option>
        <Autocomplete.Option value="ホーリーエンジェモン">
          ホーリーエンジェモン
        </Autocomplete.Option>
        <Autocomplete.Option value="エンジェウーモン">
          エンジェウーモン
        </Autocomplete.Option>
      </Autocomplete.Group>

      <Autocomplete.Group label="究極体">
        <Autocomplete.Option value="ウォーグレイモン">
          ウォーグレイモン
        </Autocomplete.Option>
        <Autocomplete.Option value="メタルガルルモン">
          メタルガルルモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ヘラクルカブテリモン">
          ヘラクルカブテリモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ホウオウモン">
          ホウオウモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ヴァイクモン">
          ヴァイクモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ロゼモン">ロゼモン</Autocomplete.Option>
        <Autocomplete.Option value="ゴッドドラモン">
          ゴッドドラモン
        </Autocomplete.Option>
        <Autocomplete.Option value="ホーリードラモン">
          ホーリードラモン
        </Autocomplete.Option>
      </Autocomplete.Group>
    </Autocomplete.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "オメガモン", value: "オメガモン" },
      { label: "ディアボロモン", value: "ディアボロモン" },
      {
        items: [
          { label: "アグモン", value: "アグモン" },
          { label: "ガブモン", value: "ガブモン" },
          { label: "テントモン", value: "テントモン" },
          { label: "ピヨモン", value: "ピヨモン" },
          { label: "ゴマモン", value: "ゴマモン" },
          { label: "パルモン", value: "パルモン" },
          { label: "パタモン", value: "パタモン" },
          { label: "テイルモン", value: "テイルモン" },
        ],
        label: "成長期",
      },
      {
        items: [
          { label: "グレイモン", value: "グレイモン" },
          { label: "ガルルモン", value: "ガルルモン" },
          { label: "カブテリモン", value: "カブテリモン" },
          { label: "バードラモン", value: "バードラモン" },
          { label: "イッカクモン", value: "イッカクモン" },
          { label: "トグモン", value: "トグモン" },
          { label: "エンジェモン", value: "エンジェモン" },
        ],
        label: "成熟期",
      },
      {
        items: [
          { label: "メタルグレイモン", value: "メタルグレイモン" },
          { label: "ワーガルルモン", value: "ワーガルルモン" },
          { label: "アトラーカブテリモン", value: "アトラーカブテリモン" },
          { label: "ガルダモン", value: "ガルダモン" },
          { label: "ズドモン", value: "ズドモン" },
          { label: "リリモン", value: "リリモン" },
          { label: "ホーリーエンジェモン", value: "ホーリーエンジェモン" },
          { label: "エンジェウーモン", value: "エンジェウーモン" },
        ],
        label: "完全体",
      },
      {
        items: [
          { label: "ウォーグレイモン", value: "ウォーグレイモン" },
          { label: "メタルガルルモン", value: "メタルガルルモン" },
          { label: "ヘラクルカブテリモン", value: "ヘラクルカブテリモン" },
          { label: "ホウオウモン", value: "ホウオウモン" },
          { label: "ヴァイクモン", value: "ヴァイクモン" },
          { label: "ロゼモン", value: "ロゼモン" },
          { label: "ゴッドドラモン", value: "ゴッドドラモン" },
          { label: "ホーリードラモン", value: "ホーリードラモン" },
        ],
        label: "究極体",
      },
    ],
    [],
  )

  return <Autocomplete.Root items={items} placeholder="Select a digimon" />
}

export const ItemsWithQuery: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      {
        label: (
          <>
            <Text as="span" flex="1">
              アグモン
            </Text>
            <HeartIcon fontSize="lg" />
          </>
        ),
        query: "アグモン",
        value: "アグモン",
      },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return <Autocomplete.Root items={items} placeholder="Select a digimon" />
}

export const Variant: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
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
          <Autocomplete.Root
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
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
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
          <Autocomplete.Root
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

Size.play = async ({ canvas, userEvent }) => {
  const sizes = ["xs", "sm", "md", "lg", "xl"]
  const variants = ["outline", "filled", "flushed"]

  for (let i = 0; i < sizes.length; i++) {
    for (let j = 0; j < variants.length; j++) {
      const index = i * variants.length + j
      const comboboxes = canvas.getAllByRole("combobox")
      await userEvent.click(comboboxes[index]!)
      await expect(await screen.findByRole("listbox")).toBeVisible()
      await userEvent.click(comboboxes[index]!)
    }
  }
}

export const DefaultValue: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      defaultValue="アグモン"
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DefaultInputValue: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      defaultInputValue="モン"
      items={items}
      openOnFocus
      placeholder="Select a digimon"
    />
  )
}

export const Multiple: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root items={items} multiple placeholder="Select a digimon" />
  )
}

export const Max: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      max={3}
      multiple
      placeholder="Select a digimon"
    />
  )
}

export const Separator: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      multiple
      placeholder="Select a digimon"
      separator=";"
    />
  )
}

export const Offset: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      offset={[16, 16]}
      placeholder="Select a digimon"
    />
  )
}

export const Gutter: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      gutter={32}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const AnimationScheme: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      animationScheme="inline-start"
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const Placement: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      animationScheme="inline-start"
      items={items}
      placeholder="Select a digimon"
      placement="center-end"
      rootProps={{ w: "xs" }}
    />
  )
}

export const BlockScrollOnMount: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Box minH="200dvh" w="full">
      <Autocomplete.Root
        blockScrollOnMount
        items={items}
        placeholder="Select a digimon"
      />
    </Box>
  )
}

export const AllowCustomValue: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      allowCustomValue
      items={items}
      placeholder="Select a digimon"
      onChange={(value) => console.log("value:", value)}
    />
  )
}

export const OpenOnChange: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      openOnChange={(ev) => ev.target.value.length > 1}
      openOnFocus={false}
      placeholder="Select a digimon"
    />
  )
}

export const CloseOnChange: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      closeOnChange={(ev) => !ev.target.value.length}
      items={items}
      openOnFocus={false}
      placeholder="Select a digimon"
    />
  )
}

export const CloseOnScroll: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Box minH="200dvh" w="full">
      <Autocomplete.Root
        closeOnScroll
        items={items}
        placeholder="Select a digimon"
      />
    </Box>
  )
}

export const DisabledOpenOnFocus: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      openOnFocus={false}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledOpenOnClick: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      openOnClick={false}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledFocusOnClear: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      defaultValue="アグモン"
      focusOnClear={false}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledCloseOnSelect: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { closeOnSelect: true, label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      closeOnSelect={false}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledCloseOnBlur: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      closeOnBlur={false}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledCloseOnEsc: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      closeOnEsc={false}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledClearable: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      clearable={false}
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const DisabledOption: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { disabled: true, label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return <Autocomplete.Root items={items} placeholder="Select a digimon" />
}

export const Disabled: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Autocomplete.Root
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
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root disabled label="Who is your favorite digimon?">
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Autocomplete.Root
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
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root label="Who is your favorite digimon?" readOnly>
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <Autocomplete.Root
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
              <BugIcon />
            </InputGroup.Addon>
            <Autocomplete.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="Who is your favorite digimon?"
      >
        <Autocomplete.Root items={items} placeholder="Select a digimon" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <BugIcon />
          </InputGroup.Addon>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <BugIcon />
          </InputGroup.Element>
          <Autocomplete.Root items={items} placeholder="Select a digimon" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <>
      <Autocomplete.Root items={items} placeholder="Default border color" />

      <Autocomplete.Root
        focusBorderColor="green.500"
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <BugIcon />
        </InputGroup.Element>
        <Autocomplete.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <Autocomplete.Root
        errorBorderColor="orange.500"
        invalid
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <BugIcon />
        </InputGroup.Addon>
        <Autocomplete.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomEmptyMessage: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      emptyMessage="You just hit a route that doesn't exist... the sadness.😢"
      items={items}
      placeholder="Select a digimon"
    />
  )
}

export const CustomIcon: Story = () => {
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <>
      <Autocomplete.Root
        items={items}
        placeholder="Select a digimon"
        iconProps={{ color: "orange" }}
      />

      <Autocomplete.Root
        icon={<ChevronsDownIcon />}
        items={items}
        placeholder="Select a digimon"
      />
    </>
  )
}

export const CustomOptionIcon: Story = () => {
  const items = useMemo<Autocomplete.ItemWithValue[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      placeholder="Select a digimon"
      optionProps={{ icon: <BugIcon /> }}
    />
  )
}

export const CustomRender: Story = () => {
  const items = useMemo<Autocomplete.ItemWithValue[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      multiple
      placeholder="Select a character"
      render={({ label, onClear }) => (
        <Tag size="sm" me="{gap}" onClose={onClear}>
          {label}
        </Tag>
      )}
    />
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<string>("アグモン")
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  return (
    <Autocomplete.Root
      items={items}
      placeholder="Select a digimon"
      value={value}
      onChange={setValue}
    />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    autocomplete: string
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.autocomplete?.message}
        invalid={!!errors.autocomplete}
        label="Who is your favorite digimon?"
      >
        <Controller
          name="autocomplete"
          control={control}
          render={({ field }) => (
            <Autocomplete.Root
              items={items}
              placeholder="Select a digimon"
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
    autocomplete: string
  }

  const defaultValues: Data = {
    autocomplete: "アグモン",
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<Autocomplete.Item[]>(
    () => [
      { label: "アグモン", value: "アグモン" },
      { label: "ガブモン", value: "ガブモン" },
      { label: "テントモン", value: "テントモン" },
      { label: "ピヨモン", value: "ピヨモン" },
      { label: "ゴマモン", value: "ゴマモン" },
      { label: "パルモン", value: "パルモン" },
      { label: "パタモン", value: "パタモン" },
      { label: "テイルモン", value: "テイルモン" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.autocomplete?.message}
        invalid={!!errors.autocomplete}
        label="Who is your favorite digimon?"
      >
        <Controller
          name="autocomplete"
          control={control}
          render={({ field }) => (
            <Autocomplete.Root
              items={items}
              placeholder="Select a digimon"
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
