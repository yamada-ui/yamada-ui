import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import type { NativeSelectItem } from "@yamada-ui/react"
import {
  Button,
  FormControl,
  NativeOption,
  NativeOptionGroup,
  NativeSelect,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

type Story = StoryFn<typeof NativeSelect>

const meta: Meta<typeof NativeSelect> = {
  title: "Components / Forms / NativeSelect",
  component: NativeSelect,
}

export default meta

export const basic: Story = () => {
  const items: NativeSelectItem[] = [
    { label: "ベジータ", value: "ベジータ" },
    {
      label: "地球人",
      items: [
        { label: "孫悟空", value: "孫悟空" },
        { label: "孫悟飯", value: "孫悟飯" },
        { label: "クリリン", value: "クリリン" },
      ],
    },
    {
      label: "フリーザ軍",
      items: [
        { label: "フリーザ", value: "フリーザ" },
        { label: "ギニュー", value: "ギニュー" },
        { label: "リクーム", value: "リクーム" },
        { label: "バータ", value: "バータ" },
        { label: "ジース", value: "ジース" },
        { label: "グルド", value: "グルド" },
      ],
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
        placeholder="キャラクターを選択"
        items={items}
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
        variant="outline"
        placeholder="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        variant="filled"
        placeholder="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        variant="flushed"
        placeholder="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        variant="unstyled"
        placeholder="unstyled"
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
        isInvalid
        errorBorderColor="orange.500"
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
        variant="outline"
        placeholder="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        variant="filled"
        placeholder="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        variant="flushed"
        placeholder="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isDisabled
        variant="unstyled"
        placeholder="unstyled"
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
        variant="outline"
        placeholder="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        variant="filled"
        placeholder="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        variant="flushed"
        placeholder="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isReadOnly
        variant="unstyled"
        placeholder="unstyled"
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
        variant="outline"
        placeholder="outline"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        variant="filled"
        placeholder="filled"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        variant="flushed"
        placeholder="flushed"
        aria-label="Native Select"
      />
      <NativeSelect
        isInvalid
        variant="unstyled"
        placeholder="unstyled"
        aria-label="Native Select"
      />

      <FormControl
        isInvalid
        label="Which notifications would you like to receive?"
        errorMessage="This is required."
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
        iconProps={{ children: <Icon icon={faCaretDown} /> }}
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
      aria-label="Native Select"
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
  type Data = { select: string }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select}
        label="Who is your favorite character?"
        errorMessage={errors.select?.message}
      >
        <NativeSelect
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { value: true, message: "This is required." },
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
  type Data = { select: string }

  const defaultValues: Data = {
    select: "孫悟空",
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.select}
        label="Who is your favorite character?"
        errorMessage={errors.select?.message}
      >
        <NativeSelect
          placeholder="キャラクターを選択"
          {...register("select", {
            required: { value: true, message: "This is required." },
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
