import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { NativeSelectItem } from "./"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../button"
import { FormControl } from "../form-control"
import { ChevronsDownIcon } from "../icon"
import { VStack } from "../stack"
import { NativeOption, NativeOptionGroup, NativeSelect } from "./"

type Story = StoryFn<typeof NativeSelect>

const meta: Meta<typeof NativeSelect> = {
  component: NativeSelect,
  title: "Components / NativeSelect",
}

export default meta

export const Basic: Story = () => {
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

export const WithSize: Story = () => {
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

export const WithVariant: Story = () => {
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

export const WithBorderColor: Story = () => {
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
        invalid
        placeholder="custom border color"
      />
    </>
  )
}

export const DisabledPlaceholderInOptions: Story = () => {
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

export const Disabled: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        disabled
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        disabled
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        disabled
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        disabled
        placeholder="unstyled"
      />

      <FormControl
        disabled
        label="Which notifications would you like to receive?"
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const Readonly: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        placeholder="outline"
        readOnly
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        placeholder="filled"
        readOnly
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        placeholder="flushed"
        readOnly
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        placeholder="unstyled"
        readOnly
      />

      <FormControl
        label="Which notifications would you like to receive?"
        readOnly
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const Invalid: Story = () => {
  return (
    <>
      <NativeSelect
        variant="outline"
        aria-label="Native Select"
        invalid
        placeholder="outline"
      />
      <NativeSelect
        variant="filled"
        aria-label="Native Select"
        invalid
        placeholder="filled"
      />
      <NativeSelect
        variant="flushed"
        aria-label="Native Select"
        invalid
        placeholder="flushed"
      />
      <NativeSelect
        variant="unstyled"
        aria-label="Native Select"
        invalid
        placeholder="unstyled"
      />

      <FormControl
        errorMessage="This is required."
        invalid
        label="Which notifications would you like to receive?"
      >
        <NativeSelect placeholder="Select notifications" />
      </FormControl>
    </>
  )
}

export const CustomIcon: Story = () => {
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
        iconProps={{ children: <ChevronsDownIcon /> }}
      >
        <NativeOption value="孫悟空">孫悟空</NativeOption>
        <NativeOption value="ベジータ">ベジータ</NativeOption>
        <NativeOption value="フリーザ">フリーザ</NativeOption>
      </NativeSelect>
    </>
  )
}

export const CustomControl: Story = () => {
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
      <FormControl
        errorMessage={errors.select?.message}
        invalid={!!errors.select}
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

export const ReactHookFormWithDefaultValue: Story = () => {
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
        invalid={!!errors.select}
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
