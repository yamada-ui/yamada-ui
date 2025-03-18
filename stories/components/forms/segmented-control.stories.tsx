import type { Meta, StoryFn } from "@storybook/react"
import type { SegmentedControlItem } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Button,
  Fieldset,
  Grid,
  SegmentedControl,
  SegmentedControlButton,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { colorSchemes } from "../../components"

type Story = StoryFn<typeof SegmentedControl>

const meta: Meta<typeof SegmentedControl> = {
  component: SegmentedControl,
  title: "Components / Forms / SegmentedControl",
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
      gap="md"
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
      w="full"
    >
      {colorSchemes.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          colorScheme={colorScheme}
          items={items}
        />
      ))}
      {colorSchemes.map((colorScheme) => (
        <SegmentedControl
          key={colorScheme}
          colorScheme={colorScheme}
          variant="rounded"
          items={items}
        />
      ))}
    </Grid>
  )
}

export const disabled: Story = () => {
  return (
    <>
      <SegmentedControl disabled>
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
        <SegmentedControlButton disabled value="ベジータ">
          ベジータ
        </SegmentedControlButton>
        <SegmentedControlButton value="フリーザ">
          フリーザ
        </SegmentedControlButton>
      </SegmentedControl>
    </>
  )
}

export const readOnly: Story = () => {
  return (
    <>
      <SegmentedControl readOnly>
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
        <SegmentedControlButton readOnly value="ベジータ">
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
  interface Data {
    segmentedControl: string
  }

  const defaultValues: Data = {
    segmentedControl: "ベジータ",
  }

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
      <Fieldset
        errorMessage={errors.segmentedControl?.message}
        invalid={!!errors.segmentedControl}
        legend="Who is your favorite character?"
      >
        <Controller
          name="segmentedControl"
          control={control}
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
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
