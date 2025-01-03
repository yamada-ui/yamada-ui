import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { SelectItem } from "./"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { CheckIcon, ChevronsDownIcon } from "../icon"
import { VStack } from "../stack"
import { Option, OptionGroup, Select } from "./"

type Story = StoryFn<typeof Select>

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components / Select",
}

export default meta

export const Basic: Story = () => {
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

export const WithSize: Story = () => {
  return (
    <>
      <Select size="xs" placeholder="extra small size" />
      <Select size="sm" placeholder="small size" />
      <Select size="md" placeholder="medium size" />
      <Select size="lg" placeholder="large size" />
    </>
  )
}

export const WithVariant: Story = () => {
  return (
    <>
      <Select variant="outline" placeholder="outline" />
      <Select variant="filled" placeholder="filled" />
      <Select variant="flushed" placeholder="flushed" />
      <Select variant="unstyled" placeholder="unstyled" />
    </>
  )
}

export const WithFooter: Story = () => {
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

export const WithDefaultValue: Story = () => {
  return (
    <Select defaultValue="ベジータ" placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const WithBorderColor: Story = () => {
  return (
    <>
      <Select placeholder="default border color" />
      <Select focusBorderColor="green.500" placeholder="custom border color" />
      <Select
        errorBorderColor="orange.500"
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const DisabledPlaceholderInOptions: Story = () => {
  return (
    <Select placeholder="キャラクターを選択" placeholderInOptions={false}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const DisabledCloseOnSelect: Story = () => {
  return (
    <Select closeOnSelect={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const DisabledCloseOnBlur: Story = () => {
  return (
    <Select closeOnBlur={false} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const WithPlacement: Story = () => {
  return (
    <Select maxW="xs" placeholder="キャラクターを選択" placement="right-start">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const WithOffset: Story = () => {
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

export const WithGutter: Story = () => {
  return (
    <Select gutter={32} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const WithDuration: Story = () => {
  return (
    <Select duration={0.4} placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <Select variant="outline" disabled placeholder="outline" />
      <Select variant="filled" disabled placeholder="filled" />
      <Select variant="flushed" disabled placeholder="flushed" />
      <Select variant="unstyled" disabled placeholder="unstyled" />

      <FormControl
        disabled
        label="Which notifications would you like to receive?"
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <Select variant="outline" placeholder="outline" readOnly />
      <Select variant="filled" placeholder="filled" readOnly />
      <Select variant="flushed" placeholder="flushed" readOnly />
      <Select variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl
        label="Which notifications would you like to receive?"
        readOnly
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <Select variant="outline" invalid placeholder="outline" />
      <Select variant="filled" invalid placeholder="filled" />
      <Select variant="flushed" invalid placeholder="flushed" />
      <Select variant="unstyled" invalid placeholder="unstyled" />

      <FormControl
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
      >
        <Select placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const OptionDisabled: Story = () => {
  return (
    <Select placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option disabled value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const OptionFocusable: Story = () => {
  return (
    <Select placeholder="キャラクターを選択">
      <Option value="孫悟空">孫悟空</Option>
      <Option disabled focusable value="ベジータ">
        ベジータ
      </Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const CustomIcon: Story = () => {
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

export const CustomOption: Story = () => {
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

export const CustomControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <Select placeholder="キャラクターを選択" value={value} onChange={onChange}>
      <Option value="孫悟空">孫悟空</Option>
      <Option value="ベジータ">ベジータ</Option>
      <Option value="フリーザ">フリーザ</Option>
    </Select>
  )
}

export const ReactHookForm: Story = () => {
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
        invalid={!!errors.select1}
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
        invalid={!!errors.select2}
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
        invalid={!!errors.select3}
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
        invalid={!!errors.select1}
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
        invalid={!!errors.select2}
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
        invalid={!!errors.select3}
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
