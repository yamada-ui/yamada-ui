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
      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect placeholder="キャラクターを選択" aria-label="Native Select">
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
        items={items}
        placeholder="キャラクターを選択"
        aria-label="Native Select"
      />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <NativeSelect
        placeholder="extra small size"
        size="xs"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="small size"
        size="sm"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="medium size"
        size="md"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="large size"
        size="lg"
        aria-label="Native Select"
      />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <NativeSelect
        placeholder="outline"
        variant="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="filled"
        variant="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="flushed"
        variant="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        placeholder="unstyled"
        variant="unstyled"
        aria-label="Native Select"
      />
    </>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <NativeSelect
        placeholder="default border color"
        aria-label="Native Select"
      />
      <NativeSelect
        focusBorderColor="green.500"
        placeholder="custom border color"
        aria-label="Native Select"
      />
      <NativeSelect
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
        aria-label="Native Select"
      />
    </>
  )
}

export const disabledPlaceholderInOptions: Story = () => {
  return (
    <NativeSelect
      placeholder="キャラクターを選択"
      placeholderInOptions={false}
      aria-label="Native Select"
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
        isDisabled
        placeholder="outline"
        variant="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        placeholder="filled"
        variant="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        placeholder="flushed"
        variant="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        placeholder="unstyled"
        variant="unstyled"
        aria-label="Native Select"
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
        isReadOnly
        placeholder="outline"
        variant="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        placeholder="filled"
        variant="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        placeholder="flushed"
        variant="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        placeholder="unstyled"
        variant="unstyled"
        aria-label="Native Select"
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
        isInvalid
        placeholder="outline"
        variant="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        placeholder="filled"
        variant="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        placeholder="flushed"
        variant="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        placeholder="unstyled"
        variant="unstyled"
        aria-label="Native Select"
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
        placeholder="キャラクターを選択"
        aria-label="Native Select"
        iconProps={{ color: "primary" }}
      >
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>

      <NativeSelect
        placeholder="キャラクターを選択"
        aria-label="Native Select"
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
      placeholder="キャラクターを選択"
      value={value}
      aria-label="Native Select"
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
