import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { RabbitIcon, SnailIcon, SquirrelIcon } from "../icon"
import { VStack } from "../stack"
import { Text } from "../text"
import { RadioCard, RadioCardGroup } from "./"

type Story = StoryFn<typeof RadioCard.Root>

const meta: Meta<typeof RadioCard.Root> = {
  component: RadioCard.Root,
  title: "Components / RadioCard",
}

export default meta

export const Basic: Story = () => {
  return (
    <RadioCardGroup.Root>
      <RadioCardGroup.Item.Root value="1">
        <RadioCardGroup.Item.Label>ビアンカ</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root value="2">
        <RadioCardGroup.Item.Label>フローラ</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root value="3">
        <RadioCardGroup.Item.Label>ルドマン</RadioCardGroup.Item.Label>
        <RadioCardGroup.Item.Description>
          なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。
        </RadioCardGroup.Item.Description>
      </RadioCardGroup.Item.Root>
    </RadioCardGroup.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      { label: "Checked", value: "1" },
      { label: "No checked", value: "2" },
    ],
    [],
  )

  return (
    <PropsTable columns={["subtle", "surface", "outline"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <RadioCardGroup.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultValue="1"
            items={items}
            orientation="vertical"
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      { label: "Checked", value: "1" },
      { label: "No checked", value: "2" },
    ],
    [],
  )

  return (
    <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <RadioCardGroup.Root
            key={key}
            colorScheme={row}
            size={column}
            defaultValue="1"
            items={items}
            orientation="vertical"
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root defaultValue="2" items={items} />
}

export const DefaultChecked: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        defaultChecked: true,
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root items={items} />
}

export const Orientation: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root items={items} orientation="vertical" />
}

export const Addon: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        addon: "ドラゴンクエストV 天空の花嫁",
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        addon: "ドラゴンクエストV 天空の花嫁",
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        addon: "ドラゴンクエストV 天空の花嫁",
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root items={items} orientation="vertical" />
}

export const Shape: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => (
        <RadioCardGroup.Root
          key={key}
          defaultValue="2"
          items={items}
          shape={row}
        />
      )}
    </PropsTable>
  )
}

export const Justify: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => (
        <RadioCardGroup.Root
          key={key}
          defaultValue="2"
          items={items}
          justify={row}
        />
      )}
    </PropsTable>
  )
}

export const HiddenIndicator: Story = () => {
  return (
    <RadioCardGroup.Root withIndicator={false}>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="1" w="auto">
        <RabbitIcon fontSize="2xl" />
        <Text as="span">Rabbit</Text>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="2" w="auto">
        <SnailIcon fontSize="2xl" />
        <Text as="span">Snail</Text>
      </RadioCardGroup.Item.Root>
      <RadioCardGroup.Item.Root flexDirection="row" gap="sm" value="3" w="auto">
        <SquirrelIcon fontSize="2xl" />
        <Text as="span">Squirrel</Text>
      </RadioCardGroup.Item.Root>
    </RadioCardGroup.Root>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioCardGroup.Root
            key={index}
            variant={variant}
            defaultValue="2"
            disabled
            items={items}
          />
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioCardGroup.Root
            key={index}
            variant={variant}
            defaultValue="2"
            items={items}
            readOnly
          />
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <RadioCardGroup.Root
            key={index}
            variant={variant}
            defaultValue="2"
            invalid
            items={items}
          />
        )}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <RadioCardGroup.Root defaultValue="2" items={items} />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <RadioCardGroup.Root focusBorderColor="green.500" items={items} />
      <RadioCardGroup.Root
        defaultValue="2"
        errorBorderColor="orange.500"
        invalid
        items={items}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState("2")
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  return <RadioCardGroup.Root items={items} value={value} onChange={setValue} />
}

export const ReactHookForm: Story = () => {
  interface Data {
    radioCard: string
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>()
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.radioCard?.message}
        invalid={!!errors.radioCard}
        label="Who is your favorite character?"
      >
        <Controller
          name="radioCard"
          control={control}
          render={({ field }) => (
            <RadioCardGroup.Root items={items} {...field} />
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

export const ReactHookFormWithDefaultValue: Story = () => {
  interface Data {
    radioCard: string
  }

  const defaultValues: Data = {
    radioCard: "2",
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<RadioCardGroup.ItemType[]>(
    () => [
      {
        description:
          "パパスの息子より、ふたつ年上のしっかり者の幼なじみ。彼と一緒に、レヌール城のお化け退治に繰り出した。",
        label: "ビアンカ",
        value: "1",
      },
      {
        description:
          "大富豪ルドマンの娘で、デボラの妹。ちょっぴり天然なところもある、清楚で可憐なお嬢様。",
        label: "フローラ",
        value: "2",
      },
      {
        description:
          "なんと、この私が、好きと申すか！？そ、それはいかん！もう１度、考えてみなさい。",
        label: "ルドマン",
        value: "3",
      },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.radioCard?.message}
        invalid={!!errors.radioCard}
        label="Who is your favorite character?"
      >
        <Controller
          name="radioCard"
          control={control}
          render={({ field }) => (
            <RadioCardGroup.Root items={items} {...field} />
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
