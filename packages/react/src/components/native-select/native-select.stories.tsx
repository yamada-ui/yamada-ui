import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { NativeSelect } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { ChevronsDownIcon, UserIcon } from "../icon"
import { InputGroup } from "../input"
import { VStack } from "../stack"

type Story = StoryFn<typeof NativeSelect.Root>

const meta: Meta<typeof NativeSelect.Root> = {
  component: NativeSelect.Root,
  title: "Components / NativeSelect",
}

export default meta

export const Basic: Story = () => {
  return (
    <NativeSelect.Root placeholder="Select a character">
      <NativeSelect.Option value="日比野カフカ">
        日比野カフカ
      </NativeSelect.Option>
      <NativeSelect.Option value="市川レノ">市川レノ</NativeSelect.Option>
      <NativeSelect.Option value="亜白ミナ">亜白ミナ</NativeSelect.Option>
      <NativeSelect.Option value="四ノ宮キコル">
        四ノ宮キコル
      </NativeSelect.Option>
    </NativeSelect.Root>
  )
}

export const Group: Story = () => {
  return (
    <NativeSelect.Root placeholder="Select a character">
      <NativeSelect.Group label="第1部隊">
        <NativeSelect.Option value="鳴海弦">鳴海弦</NativeSelect.Option>
        <NativeSelect.Option value="長谷川エイジ">
          長谷川エイジ
        </NativeSelect.Option>
      </NativeSelect.Group>

      <NativeSelect.Group label="第3部隊">
        <NativeSelect.Option value="日比野カフカ">
          日比野カフカ
        </NativeSelect.Option>
        <NativeSelect.Option value="市川レノ">市川レノ</NativeSelect.Option>
        <NativeSelect.Option value="亜白ミナ">亜白ミナ</NativeSelect.Option>
        <NativeSelect.Option value="四ノ宮キコル">
          四ノ宮キコル
        </NativeSelect.Option>
      </NativeSelect.Group>
    </NativeSelect.Root>
  )
}

export const Items: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "怪獣8号", value: "怪獣8号" },
      {
        items: [
          { label: "鳴海弦", value: "鳴海弦" },
          { label: "長谷川エイジ", value: "長谷川エイジ" },
        ],
        label: "第1部隊",
      },
      {
        items: [
          { label: "日比野カフカ", value: "日比野カフカ" },
          { label: "市川レノ", value: "市川レノ" },
          { label: "亜白ミナ", value: "亜白ミナ" },
          { label: "四ノ宮キコル", value: "四ノ宮キコル" },
        ],
        label: "第3部隊",
      },
    ],
    [],
  )

  return <NativeSelect.Root items={items} placeholder="Select a character" />
}

export const Variant: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
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
          <NativeSelect.Root
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
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
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
          <NativeSelect.Root
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
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <NativeSelect.Root
      defaultValue="日比野カフカ"
      items={items}
      placeholder="Select a character"
    />
  )
}

export const DisabledPlaceholderInOptions: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <NativeSelect.Root
      items={items}
      placeholder="Select a character"
      placeholderInOptions={false}
    />
  )
}

export const DisabledOption: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { disabled: true, label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return <NativeSelect.Root items={items} placeholder="Select a character" />
}

export const Disabled: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
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
            <NativeSelect.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <NativeSelect.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
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
            <NativeSelect.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <NativeSelect.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
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
            <NativeSelect.Root
              items={items}
              placeholder={toTitleCase(variant)}
            />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="Who is your favorite character?"
      >
        <NativeSelect.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
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
          <NativeSelect.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
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
          <NativeSelect.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <>
      <NativeSelect.Root items={items} placeholder="Default border color" />

      <NativeSelect.Root
        focusBorderColor="green.500"
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <UserIcon />
        </InputGroup.Element>
        <NativeSelect.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <NativeSelect.Root
        errorBorderColor="orange.500"
        invalid
        items={items}
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <UserIcon />
        </InputGroup.Addon>
        <NativeSelect.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <>
      <NativeSelect.Root
        items={items}
        placeholder="Select a character"
        iconProps={{ color: "orange" }}
      />

      <NativeSelect.Root
        items={items}
        placeholder="Select a character"
        iconProps={{ children: <ChevronsDownIcon /> }}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<string>("日比野カフカ")
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  return (
    <NativeSelect.Root
      items={items}
      placeholder="Select a character"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export const ReactHookForm: Story = () => {
  interface Data {
    select: string
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>()
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.select?.message}
        invalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <NativeSelect.Root
          placeholder="Select a character"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
          items={items}
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
    select: "日比野カフカ",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>({ defaultValues })
  const items = useMemo<NativeSelect.Item[]>(
    () => [
      { label: "日比野カフカ", value: "日比野カフカ" },
      { label: "市川レノ", value: "市川レノ" },
      { label: "亜白ミナ", value: "亜白ミナ" },
      { label: "四ノ宮キコル", value: "四ノ宮キコル" },
    ],
    [],
  )

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root
        errorMessage={errors.select?.message}
        invalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <NativeSelect.Root
          placeholder="Select a character"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
          items={items}
        />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
