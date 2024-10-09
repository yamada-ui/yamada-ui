import type { Meta, StoryFn } from "@storybook/react"
import type { NativeSelectItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { ChevronsDown } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  NativeOption,
  NativeOptionGroup,
  NativeSelect,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof NativeSelect>

const meta: Meta<typeof NativeSelect> = {
  component: NativeSelect,
  title: "Components / Forms / NativeSelect",
}

export default meta

export const basic: Story = () => {
  const items: NativeSelectItem[] = [
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
      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect aria-label="Native Select" placeholder="キャラクターを選択">
        <NativeOptionGroup label="地球人">
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="孫悟飯">孫悟飯</NativeOption>
          <NativeOption value="クリリン">クリリン</NativeOption>
        </NativeOptionGroup>

        <NativeOptionGroup label="フリーザ軍">
          <NativeOption value="フリーザ">フリーザ</NativeOption>
          <NativeOption value="ギニュー">ギニュー</NativeOption>
          <NativeOption value="リクーム">リクーム</NativeOption>
          <NativeOption value="バータ">バータ</NativeOption>
          <NativeOption value="ジース">ジース</NativeOption>
          <NativeOption value="グルド">グルド</NativeOption>
        </NativeOptionGroup>
      </NativeSelect>

      <NativeSelect
        aria-label="Native Select"
        items={items}
        placeholder="キャラクターを選択"
      />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <NativeSelect
        size="xs"
        aria-label="Native Select"
        placeholder="extra small size"
      />
      <NativeSelect
        size="sm"
        aria-label="Native Select"
        placeholder="small size"
      />
      <NativeSelect
        size="md"
        aria-label="Native Select"
        placeholder="medium size"
      />
      <NativeSelect
        size="lg"
        aria-label="Native Select"
        placeholder="large size"
      />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        placeholder="unstyled"
      />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <NativeSelect
        aria-label="Native Select"
        placeholder="default border color"
      />
      <NativeSelect
        aria-label="Native Select"
        focusBorderColor="green.500"
        placeholder="custom border color"
      />
      <NativeSelect
        aria-label="Native Select"
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const disabledPlaceholderInOptions: Story = () => {
  return (
    <NativeSelect
      aria-label="Native Select"
      placeholder="キャラクターを選択"
      placeholderInOptions={false}
    >
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        isDisabled
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        isDisabled
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        isDisabled
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        isDisabled
        placeholder="unstyled"
      />

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        isReadOnly
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        isReadOnly
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        isReadOnly
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        isReadOnly
        placeholder="unstyled"
      />

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        isInvalid
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        isInvalid
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        isInvalid
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        isInvalid
        placeholder="unstyled"
      />

      <FormControl
        errorMessage="This is required."
        isInvalid
        label="Which notifications would you like to receive?"
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <NativeSelect
        aria-label="Native Select"
        placeholder="キャラクターを選択"
        iconProps={{ color: "primary" }}
      >
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect
        aria-label="Native Select"
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDown /> }}
      >
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>
  )
}

export const customControl: Story = () => {
  const [value, setValue] = useState<string>("孫悟空")

  return (
    <NativeSelect
      aria-label="Native Select"
      placeholder="キャラクターを選択"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <NativeOption value="孫悟空">孫悟空</NativeOption>
      <NativeOption value="ベジータ">ベジータ</NativeOption>
      <NativeOption value="フリーザ">フリーザ</NativeOption>
    </NativeSelect>
  )
}

export const reactHookForm: Story = () => {
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
      <FormControl
        errorMessage={errors.select?.message}
        isInvalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <NativeSelect
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
        >
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
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
      <FormControl
        errorMessage={errors.select?.message}
        isInvalid={!!errors.select}
        label="Who is your favorite character?"
      >
        <NativeSelect
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { message: "This is required.", value: true },
          })}
        >
          <NativeOption value="孫悟空">孫悟空</NativeOption>
          <NativeOption value="ベジータ">ベジータ</NativeOption>
          <NativeOption value="フリーザ">フリーザ</NativeOption>
        </NativeSelect>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
