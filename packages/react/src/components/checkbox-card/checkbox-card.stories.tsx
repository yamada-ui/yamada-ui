import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { CheckboxCard, CheckboxCardGroup } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { PlusIcon, RabbitIcon, SnailIcon, SquirrelIcon } from "../icon"
import { VStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof CheckboxCard.Root>

const meta: Meta<typeof CheckboxCard.Root> = {
  component: CheckboxCard.Root,
  title: "Components / CheckboxCard",
}

export default meta

export const Basic: Story = () => {
  return (
    <CheckboxCard.Root>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>
  )
}

export const Group: Story = () => {
  return (
    <CheckboxCardGroup.Root>
      <CheckboxCardGroup.Item.Root value="1">
        <CheckboxCardGroup.Item.Label>ドラえもん</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          22世紀の未来から来たネコ型ロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root value="2">
        <CheckboxCardGroup.Item.Label>ドラミ</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          ドラえもんの妹のロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root value="3">
        <CheckboxCardGroup.Item.Label>ガチャ子</CheckboxCardGroup.Item.Label>
        <CheckboxCardGroup.Item.Description>
          アヒル型のロボット。
        </CheckboxCardGroup.Item.Description>
      </CheckboxCardGroup.Item.Root>
    </CheckboxCardGroup.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root items={items} />
}

export const Variant: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
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
          <CheckboxCardGroup.Root
            key={key}
            colorScheme={row}
            variant={column}
            defaultValue={["1"]}
            items={items}
            orientation="vertical"
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
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
          <CheckboxCardGroup.Root
            key={key}
            colorScheme={row}
            size={column}
            defaultValue={["1"]}
            items={items}
            orientation="vertical"
          />
        )
      }}
    </PropsTable>
  )
}

export const DefaultValue: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
}

export const DefaultChecked: Story = () => {
  return (
    <CheckboxCard.Root defaultChecked>
      <CheckboxCard.Label>Enable notifications</CheckboxCard.Label>
      <CheckboxCard.Description>
        You can enable or disable notifications at any time.
      </CheckboxCard.Description>
    </CheckboxCard.Root>
  )
}

export const Max: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root items={items} max={2} />
}

export const Orientation: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root items={items} orientation="vertical" />
}

export const Addon: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        addon: "藤子・F・不二雄",
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        addon: "藤子・F・不二雄",
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        addon: "藤子・F・不二雄",
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root items={items} orientation="vertical" />
}

export const Shape: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["rounded", "square"]}>
      {(_, row, key) => (
        <CheckboxCardGroup.Root
          key={key}
          defaultValue={["1"]}
          items={items}
          shape={row}
        />
      )}
    </PropsTable>
  )
}

export const Justify: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => (
        <CheckboxCardGroup.Root
          key={key}
          defaultValue={["1"]}
          items={items}
          justify={row}
        />
      )}
    </PropsTable>
  )
}

export const HiddenIndicator: Story = () => {
  return (
    <CheckboxCardGroup.Root withIndicator={false}>
      <CheckboxCardGroup.Item.Root
        flexDirection="row"
        gap="sm"
        value="1"
        w="auto"
      >
        <RabbitIcon fontSize="2xl" />
        <Text as="span">Rabbit</Text>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root
        flexDirection="row"
        gap="sm"
        value="2"
        w="auto"
      >
        <SnailIcon fontSize="2xl" />
        <Text as="span">Snail</Text>
      </CheckboxCardGroup.Item.Root>
      <CheckboxCardGroup.Item.Root
        flexDirection="row"
        gap="sm"
        value="3"
        w="auto"
      >
        <SquirrelIcon fontSize="2xl" />
        <Text as="span">Squirrel</Text>
      </CheckboxCardGroup.Item.Root>
    </CheckboxCardGroup.Root>
  )
}

export const Disabled: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxCardGroup.Root
            key={index}
            variant={variant}
            defaultValue={["1"]}
            disabled
            items={items}
          />
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxCardGroup.Root
            key={index}
            variant={variant}
            defaultValue={["1"]}
            items={items}
            readOnly
          />
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <For each={["subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <CheckboxCardGroup.Root
            key={index}
            variant={variant}
            defaultValue={["1"]}
            invalid
            items={items}
          />
        )}
      </For>

      <Field.Root invalid label="Who is your favorite character?">
        <CheckboxCardGroup.Root defaultValue={["1"]} items={items} />
      </Field.Root>
    </>
  )
}

export const BorderColor: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <>
      <CheckboxCardGroup.Root focusBorderColor="green.500" items={items} />
      <CheckboxCardGroup.Root
        defaultValue={["1"]}
        errorBorderColor="orange.500"
        invalid
        items={items}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState(["1"])
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return (
    <CheckboxCardGroup.Root items={items} value={value} onChange={setValue} />
  )
}

export const CustomIcon: Story = () => {
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  return <CheckboxCardGroup.Root checkedIcon={<PlusIcon />} items={items} />
}

export const ReactHookForm: Story = () => {
  interface Data {
    checkboxCard: string[]
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.checkboxCard?.message}
        invalid={!!errors.checkboxCard}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkboxCard"
          control={control}
          render={({ field }) => (
            <CheckboxCardGroup.Root items={items} {...field} />
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
    checkboxCard: string[]
  }

  const defaultValues: Data = {
    checkboxCard: ["2"],
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<CheckboxCardGroup.ItemType[]>(
    () => [
      {
        description: "22世紀の未来から来たネコ型ロボット。",
        label: "ドラえもん",
        value: "1",
      },
      {
        description: "ドラえもんの妹のロボット。",
        label: "ドラミ",
        value: "2",
      },
      {
        description: "アヒル型のロボット。",
        label: "ガチャ子",
        value: "3",
      },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.checkboxCard?.message}
        invalid={!!errors.checkboxCard}
        label="Who is your favorite character?"
      >
        <Controller
          name="checkboxCard"
          control={control}
          render={({ field }) => (
            <CheckboxCardGroup.Root items={items} {...field} />
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
