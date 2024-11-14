import type { Meta, StoryFn } from "@storybook/react"
import type { SelectItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import { CheckIcon, ChevronsDownIcon } from "@yamada-ui/lucide"
import {
  Button,
  FormControl,
  Option,
  OptionGroup,
  Select,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"

type Story = StoryFn<typeof Select>

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components / Forms / Select",
}

export default meta

export const basic: Story = () => {
  const items: SelectItem[] = [
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
      <Select placeholder="キャラクターを選択">
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </Select>

      <Select placeholder="キャラクターを選択">
        <OptionGroup label="地球人">
          <Option value="孫悟空">孫悟空</Option>
          <Option value="孫悟飯">孫悟飯</Option>
          <Option value="クリリン">クリリン</Option>
        </OptionGroup>

        <OptionGroup label="フリーザ軍">
          <Option value="フリーザ">フリーザ</Option>
          <Option value="ギニュー">ギニュー</Option>
          <Option value="リクーム">リクーム</Option>
          <Option value="バータ">バータ</Option>
          <Option value="ジース">ジース</Option>
          <Option value="グルド">グルド</Option>
        </OptionGroup>
      </Select>

      <Select items={items} placeholder="キャラクターを選択" />
    </>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Select size="xs" placeholder="extra small size" />
      <Select size="sm" placeholder="small size" />
      <Select size="md" placeholder="medium size" />
      <Select size="lg" placeholder="large size" />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Select variant="outline" placeholder="outline" />
      <Select variant="filled" placeholder="filled" />
      <Select variant="flushed" placeholder="flushed" />
      <Select variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const withFooter: Story = () => {
  const [value, onChange] = useState<string | undefined>(undefined)
  const items: SelectItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "孫悟飯", value: "孫悟飯" },
    { label: "クリリン", value: "クリリン" },
  ]

  return (
    <Select
      footer={({ onClose }) => (
        <VStack
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          borderTopWidth="1px"
          p="2"
        >
          <Button
            onClick={() => {
              onChange("孫悟空")
              onClose()
            }}
          >
            Set "孫悟空"
          </Button>
        </VStack>
      )}
      items={items}
      placeholder="キャラクターを選択"
      value={value}
      onChange={onChange}
    />
  )
}

export const withDefaultValue: Story = () => {
  return (
    <Select defaultValue="ベジータ" placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const withBorderColor: Story = () => {
  return (
    <>
      <Select placeholder="default border color" />
      <Select focusBorderColor="green.500" placeholder="custom border color" />
      <Select
        errorBorderColor="orange.500"
        isInvalid
        placeholder="custom border color"
      />
    </>
  )
}

export const disabledPlaceholderInOptions: Story = () => {
  return (
    <Select placeholder="キャラクターを選択" placeholderInOptions={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnSelect: Story = () => {
  return (
    <Select closeOnSelect={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const disabledCloseOnBlur: Story = () => {
  return (
    <Select closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const withPlacement: Story = () => {
  return (
    <Select maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const withOffset: Story = () => {
  return (
    <Select
      offset={[16, 16]}
      placeholder="キャラクターを選択"
      listProps={{ maxW: "xs" }}
    >
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const withGutter: Story = () => {
  return (
    <Select gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const withDuration: Story = () => {
  return (
    <Select duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Select variant="outline" isDisabled placeholder="outline" />
      <Select variant="filled" isDisabled placeholder="filled" />
      <Select variant="flushed" isDisabled placeholder="flushed" />
      <Select variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl
        isDisabled
        label="Which notifications would you like to receive?"
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Select variant="outline" isReadOnly placeholder="outline" />
      <Select variant="filled" isReadOnly placeholder="filled" />
      <Select variant="flushed" isReadOnly placeholder="flushed" />
      <Select variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl
        isReadOnly
        label="Which notifications would you like to receive?"
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isInvalid: Story = () => {
  return (
    <>
      <Select variant="outline" isInvalid placeholder="outline" />
      <Select variant="filled" isInvalid placeholder="filled" />
      <Select variant="flushed" isInvalid placeholder="flushed" />
      <Select variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        isInvalid
        label="Which notifications would you like to receive?"
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const isOptionDisabled: Story = () => {
  return (
    <Select placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const isOptionFocusable: Story = () => {
  return (
    <Select placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option isDisabled isFocusable value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const customIcon: Story = () => {
  return (
    <>
      <Select placeholder="キャラクターを選択" iconProps={{ color: "primary" }}>
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </Select>

      <Select
        placeholder="キャラクターを選択"
        iconProps={{ children: <ChevronsDownIcon /> }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </Select>
    </>
  )
}

export const customOption: Story = () => {
  return (
    <>
      <Select
        placeholder="キャラクターを選択"
        optionProps={{ color: "primary" }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </Select>

      <Select
        placeholder="キャラクターを選択"
        optionProps={{ icon: <CheckIcon color="green.500" /> }}
      >
        <Option value="孫悟空">孫悟空</Option>
        <Option value="ベジータ">ベジータ</Option>
        <Option value="フリーザ">フリーザ</Option>
      </Select>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <Select placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const reactHookForm: Story = () => {
  interface Data {
    select1: string
    select2: string
    select3: string
  }

  const items: SelectItem[] = [
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

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.select1?.message}
        isInvalid={!!errors.select1}
        label="Who is your favorite character?"
      >
        <Controller
          name="select1"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </Select>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select2?.message}
        isInvalid={!!errors.select2}
        label="Who is your favorite character?"
      >
        <Controller
          name="select2"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </Select>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select3?.message}
        isInvalid={!!errors.select3}
        label="Who is your favorite character?"
      >
        <Controller
          name="select3"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field} items={items} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}

export const reactHookFormWithDefaultValue: Story = () => {
  interface Data {
    select1: string
    select2: string
    select3: string
  }

  const defaultValues: Data = {
    select1: "孫悟空",
    select2: "フリーザ",
    select3: "リクーム",
  }

  const items: SelectItem[] = [
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

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        errorMessage={errors.select1?.message}
        isInvalid={!!errors.select1}
        label="Who is your favorite character?"
      >
        <Controller
          name="select1"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field}>
              <Option value="孫悟空">孫悟空</Option>
              <Option value="ベジータ">ベジータ</Option>
              <Option value="フリーザ">フリーザ</Option>
            </Select>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select2?.message}
        isInvalid={!!errors.select2}
        label="Who is your favorite character?"
      >
        <Controller
          name="select2"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field}>
              <OptionGroup label="地球人">
                <Option value="孫悟空">孫悟空</Option>
                <Option value="孫悟飯">孫悟飯</Option>
                <Option value="クリリン">クリリン</Option>
              </OptionGroup>

              <OptionGroup label="フリーザ軍">
                <Option value="フリーザ">フリーザ</Option>
                <Option value="ギニュー">ギニュー</Option>
                <Option value="リクーム">リクーム</Option>
                <Option value="バータ">バータ</Option>
                <Option value="ジース">ジース</Option>
                <Option value="グルド">グルド</Option>
              </OptionGroup>
            </Select>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.select3?.message}
        isInvalid={!!errors.select3}
        label="Who is your favorite character?"
      >
        <Controller
          name="select3"
          control={control}
          render={({ field }) => (
            <Select placeholder="キャラクターを選択" {...field} items={items} />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
