import type { Meta, StoryFn } from "@storybook/react-vite"
import type { SubmitHandler } from "react-hook-form"
import { PropsTable } from "#storybook"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { NativeSelect } from "."
import { COLOR_SCHEMES, toTitleCase } from "../../utils"
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { BellIcon, ChevronsDownIcon } from "../icon"
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
    <NativeSelect.Root placeholder="キャラクターを選択">
      <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
      <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
      <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
    </NativeSelect.Root>
  )
}

export const Group: Story = () => {
  return (
    <NativeSelect.Root placeholder="キャラクターを選択">
      <NativeSelect.OptionGroup label="地球人">
        <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
        <NativeSelect.Option value="孫悟飯">孫悟飯</NativeSelect.Option>
        <NativeSelect.Option value="クリリン">クリリン</NativeSelect.Option>
      </NativeSelect.OptionGroup>

      <NativeSelect.OptionGroup label="フリーザ軍">
        <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
        <NativeSelect.Option value="ギニュー">ギニュー</NativeSelect.Option>
        <NativeSelect.Option value="リクーム">リクーム</NativeSelect.Option>
        <NativeSelect.Option value="バータ">バータ</NativeSelect.Option>
        <NativeSelect.Option value="ジース">ジース</NativeSelect.Option>
        <NativeSelect.Option value="グルド">グルド</NativeSelect.Option>
      </NativeSelect.OptionGroup>
    </NativeSelect.Root>
  )
}

export const Items: Story = () => {
  const items: NativeSelect.Item[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

  return <NativeSelect.Root items={items} placeholder="キャラクターを選択" />
}

export const Variant: Story = () => {
  const items: NativeSelect.Item[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

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
  const items: NativeSelect.Item[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
      label: "地球人",
    },
    {
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
      label: "フリーザ軍",
    },
  ]

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

export const DisabledPlaceholderInOptions: Story = () => {
  return (
    <NativeSelect.Root
      placeholder="キャラクターを選択"
      placeholderInOptions={false}
    >
      <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
      <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
      <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
    </NativeSelect.Root>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            disabled
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <BellIcon />
            </InputGroup.Addon>
            <NativeSelect.Root placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        disabled
        label="Which notifications would you like to receive?"
      >
        <NativeSelect.Root placeholder="Select notifications" />
      </Field.Root>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            placeholder={toTitleCase(variant)}
            readOnly
          >
            <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
            <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
            <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
          </NativeSelect.Root>
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <BellIcon />
            </InputGroup.Addon>
            <NativeSelect.Root placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        label="Which notifications would you like to receive?"
        readOnly
      >
        <NativeSelect.Root placeholder="Select notifications" />
      </Field.Root>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            invalid
            placeholder={toTitleCase(variant)}
          />
        )}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => (
          <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <BellIcon />
            </InputGroup.Addon>
            <NativeSelect.Root placeholder={toTitleCase(variant)} />
          </InputGroup.Root>
        )}
      </For>

      <Field.Root
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
      >
        <NativeSelect.Root placeholder="Select notifications" />
      </Field.Root>
    </>
  )
}

export const Addon: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <BellIcon />
          </InputGroup.Addon>
          <NativeSelect.Root placeholder="Select notifications" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const Element: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => (
        <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <BellIcon />
          </InputGroup.Element>
          <NativeSelect.Root placeholder="Select notifications" />
        </InputGroup.Root>
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <NativeSelect.Root placeholder="Default border color" />

      <NativeSelect.Root
        focusBorderColor="green.500"
        placeholder="Custom border color"
      />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <BellIcon />
        </InputGroup.Element>
        <NativeSelect.Root placeholder="Custom border color" />
      </InputGroup.Root>

      <NativeSelect.Root
        errorBorderColor="orange.500"
        invalid
        placeholder="Custom border color"
      />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <BellIcon />
        </InputGroup.Addon>
        <NativeSelect.Root placeholder="Custom border color" />
      </InputGroup.Root>
    </>
  )
}

export const CustomIcon: Story = () => {
  return (
    <>
      <NativeSelect.Root
        placeholder="キャラクターを選択"
        iconProps={{ color: "orange" }}
      >
        <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
        <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
        <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
      </NativeSelect.Root>

      <NativeSelect.Root
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDownIcon /> }}
      >
        <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
        <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
        <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
      </NativeSelect.Root>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, setValue] = useState<string>("孫悟空")

  return (
    <NativeSelect.Root
      placeholder="キャラクターを選択"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
      <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
      <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
    </NativeSelect.Root>
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
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
        >
          <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
          <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
          <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
        </NativeSelect.Root>
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
    select: "孫悟空",
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<Data>({ defaultValues })

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
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
        >
          <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
          <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
          <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
        </NativeSelect.Root>
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
