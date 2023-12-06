import type { Meta, StoryFn } from "@storybook/react"
import type { SegmentedControlItem } from "@yamada-ui/react"
import {
  Grid,
  SegmentedControl,
  SegmentedControlButton,
  VStack,
  Button,
  FormControl,
} from "@yamada-ui/react"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof SegmentedControl>

const meta: Meta<typeof SegmentedControl> = {
  title: "Components / Forms / SegmentedControl",
  component: SegmentedControl,
}

export default meta

export const basic: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <>
      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl items={items} />
    </>
  )
}

export const withDefaultValue: Story = () => {
  return (
    <SegmentedControl defaultValue="ベジータ">
      <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
      <SegmentedControlButton value="ベジータ">ベジータ</SegmentedControlButton>
      <SegmentedControlButton value="フリーザ">フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <SegmentedControl size="sm">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size="md">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl size="lg">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <SegmentedControl variant="basic">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl variant="rounded">
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const withColorScheme: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <Grid
      w="full"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      gap="md"
    >
      {colorSchemes.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          items={items}
          colorScheme={colorScheme}
        />
      ))}
      {colorSchemes.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          variant="rounded"
          items={items}
          colorScheme={colorScheme}
        />
      ))}
    </Grid>
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <SegmentedControl isDisabled>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ" isDisabled>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const isReadOnly: Story = () => {
  return (
    <>
      <SegmentedControl isReadOnly>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>

      <SegmentedControl>
        <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
        <SegmentedControlButton value="ベジータ" isReadOnly>
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const customControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <SegmentedControl value={value} onChange={onChange}>
      <SegmentedControlButton value="孫悟空">孫悟空</SegmentedControlButton>
      <SegmentedControlButton value="ベジータ">ベジータ</SegmentedControlButton>
      <SegmentedControlButton value="フリーザ">フリーザ</SegmentedControlButton>
    </SegmentedControl>
  )
}

export const reactHookForm: Story = () => {
  type Data = { segmentedControl: string }

  const defaultValues: Data = {
    segmentedControl: "ベジータ",
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>({ defaultValues })

  const onSubmit: SubmitHandler<Data> = (data) => console.log("submit:", data)

  console.log("watch:", watch())

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.segmentedControl}
        label="Who is your favorite character?"
        errorMessage={errors.segmentedControl?.message}
      >
        <Controller
          name="segmentedControl"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <SegmentedControl {...field}>
              <SegmentedControlButton value="孫悟空">
                孫悟空
              </SegmentedControlButton>
              <SegmentedControlButton value="ベジータ">
                ベジータ
              </SegmentedControlButton>
              <SegmentedControlButton value="フリーザ">
                フリーザ
              </SegmentedControlButton>
            </SegmentedControl>
          )}
        />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
