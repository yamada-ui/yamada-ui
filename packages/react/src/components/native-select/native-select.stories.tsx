import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { NativeSelect } from "."
import { Button } from "../button"
import { Field } from "../field"
import { For } from "../for"
import { ChevronsDownIcon } from "../icon"
import { VStack } from "../stack"

type Story = StoryFn<typeof NativeSelect.Root>

const meta: Meta<typeof NativeSelect.Root> = {
  component: NativeSelect.Root,
  title: "Components / NativeSelect",
}

export default meta

export const Basic: Story = () => {
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
    <>
      <NativeSelect.Root
        aria-label="Native Select"
        placeholder="キャラクターを選択"
      >
        <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
        <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
        <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
      </NativeSelect.Root>

      <NativeSelect.Root
        aria-label="Native Select"
        placeholder="キャラクターを選択"
      >
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

      <NativeSelect.Root
        aria-label="Native Select"
        items={items}
        placeholder="キャラクターを選択"
      />
    </>
  )
}

export const Size: Story = () => {
  return (
    <For each={["xs", "sm", "md", "lg"]}>
      {(size, index) => (
        <NativeSelect.Root
          key={index}
          size={size}
          aria-label="Native Select"
          placeholder={size}
        />
      )}
    </For>
  )
}

export const Variant: Story = () => {
  return (
    <For each={["outline", "filled", "flushed"]}>
      {(variant, index) => (
        <NativeSelect.Root
          key={index}
          variant={variant}
          aria-label="Native Select"
          placeholder={variant}
        />
      )}
    </For>
  )
}

export const BorderColor: Story = () => {
  return (
    <>
      <NativeSelect.Root
        aria-label="Native Select"
        placeholder="default border color"
      />
      <NativeSelect.Root
        aria-label="Native Select"
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <NativeSelect.Root
        aria-label="Native Select"
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const DisabledPlaceholderInOptions: Story = () => {
  return (
    <NativeSelect.Root
      aria-label="Native Select"
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
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            aria-label="Native Select"
            disabled
            placeholder={variant}
          />
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
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            aria-label="Native Select"
            placeholder={variant}
            readOnly
          />
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
      <For each={["outline", "filled", "flushed"]}>
        {(variant, index) => (
          <NativeSelect.Root
            key={index}
            variant={variant}
            aria-label="Native Select"
            invalid
            placeholder={variant}
          />
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

export const CustomIcon: Story = () => {
  return (
    <>
      <NativeSelect.Root
        aria-label="Native Select"
        placeholder="キャラクターを選択"
        iconProps={{ color: "primary" }}
      >
        <NativeSelect.Option value="孫悟空">孫悟空</NativeSelect.Option>
        <NativeSelect.Option value="ベジータ">ベジータ</NativeSelect.Option>
        <NativeSelect.Option value="フリーザ">フリーザ</NativeSelect.Option>
      </NativeSelect.Root>

      <NativeSelect.Root
        aria-label="Native Select"
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
      aria-label="Native Select"
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
