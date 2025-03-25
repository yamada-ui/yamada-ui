import type { Meta, StoryFn } from "@storybook/react"
import type { SubmitHandler } from "react-hook-form"
import type { SegmentedControlItem } from "./"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { Button } from "../button"
import { Fieldset } from "../fieldset"
import { VStack } from "../stack"
import { SegmentedControl } from "./"

type Story = StoryFn<typeof SegmentedControl.Root>

const meta: Meta<typeof SegmentedControl.Root> = {
  component: SegmentedControl.Root,
  title: "Components / SegmentedControl",
}

export default meta

export const Basic: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <>
      <SegmentedControl.Root>
        <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
        <SegmentedControl.Button value="ベジータ">
          ベジータ
        </SegmentedControl.Button>
        <SegmentedControl.Button value="フリーザ">
          フリーザ
        </SegmentedControl.Button>
      </SegmentedControl.Root>

      <SegmentedControl.Root items={items} />
    </>
  )
}

export const DefaultValue: Story = () => {
  return (
    <SegmentedControl.Root defaultValue="ベジータ">
      <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
      <SegmentedControl.Button value="ベジータ">
        ベジータ
      </SegmentedControl.Button>
      <SegmentedControl.Button value="フリーザ">
        フリーザ
      </SegmentedControl.Button>
    </SegmentedControl.Root>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="column" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <SegmentedControl.Root key={key} size={row}>
          <SegmentedControl.Button value="孫悟空">
            孫悟空
          </SegmentedControl.Button>
          <SegmentedControl.Button value="ベジータ">
            ベジータ
          </SegmentedControl.Button>
          <SegmentedControl.Button value="フリーザ">
            フリーザ
          </SegmentedControl.Button>
        </SegmentedControl.Root>
      )}
    </PropsTable>
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable variant="column" rows={["basic", "rounded"]}>
      {(_, row, key) => (
        <SegmentedControl.Root key={key} variant={row}>
          <SegmentedControl.Button value="孫悟空">
            孫悟空
          </SegmentedControl.Button>
          <SegmentedControl.Button value="ベジータ">
            ベジータ
          </SegmentedControl.Button>
          <SegmentedControl.Button value="フリーザ">
            フリーザ
          </SegmentedControl.Button>
        </SegmentedControl.Root>
      )}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const items: SegmentedControlItem[] = [
    { label: "孫悟空", value: "孫悟空" },
    { label: "ベジータ", value: "ベジータ" },
    { label: "フリーザ", value: "フリーザ" },
  ]

  return (
    <PropsTable columns={["basic", "rounded"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => (
        <SegmentedControl.Root
          key={key}
          colorScheme={row}
          variant={column}
          items={items}
        />
      )}
    </PropsTable>
  )
}

export const Disabled: Story = () => {
  return (
    <>
      <SegmentedControl.Root disabled>
        <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
        <SegmentedControl.Button value="ベジータ">
          ベジータ
        </SegmentedControl.Button>
        <SegmentedControl.Button value="フリーザ">
          フリーザ
        </SegmentedControl.Button>
      </SegmentedControl.Root>

      <SegmentedControl.Root>
        <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
        <SegmentedControl.Button disabled value="ベジータ">
          ベジータ
        </SegmentedControl.Button>
        <SegmentedControl.Button value="フリーザ">
          フリーザ
        </SegmentedControl.Button>
      </SegmentedControl.Root>
    </>
  )
}

export const ReadOnly: Story = () => {
  return (
    <>
      <SegmentedControl.Root readOnly>
        <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
        <SegmentedControl.Button value="ベジータ">
          ベジータ
        </SegmentedControl.Button>
        <SegmentedControl.Button value="フリーザ">
          フリーザ
        </SegmentedControl.Button>
      </SegmentedControl.Root>

      <SegmentedControl.Root>
        <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
        <SegmentedControl.Button readOnly value="ベジータ">
          ベジータ
        </SegmentedControl.Button>
        <SegmentedControl.Button value="フリーザ">
          フリーザ
        </SegmentedControl.Button>
      </SegmentedControl.Root>
    </>
  )
}

export const CustomControl: Story = () => {
  const [value, onChange] = useState<string>("孫悟空")

  return (
    <SegmentedControl.Root value={value} onChange={onChange}>
      <SegmentedControl.Button value="孫悟空">孫悟空</SegmentedControl.Button>
      <SegmentedControl.Button value="ベジータ">
        ベジータ
      </SegmentedControl.Button>
      <SegmentedControl.Button value="フリーザ">
        フリーザ
      </SegmentedControl.Button>
    </SegmentedControl.Root>
  )
}

export const ReactHookForm: Story = () => {
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
      <Fieldset.Root
        errorMessage={errors.segmentedControl?.message}
        invalid={!!errors.segmentedControl}
        legend="Who is your favorite character?"
        w="fit-content"
      >
        <Controller
          name="segmentedControl"
          control={control}
          render={({ field }) => (
            <SegmentedControl.Root {...field}>
              <SegmentedControl.Button value="孫悟空">
                孫悟空
              </SegmentedControl.Button>
              <SegmentedControl.Button value="ベジータ">
                ベジータ
              </SegmentedControl.Button>
              <SegmentedControl.Button value="フリーザ">
                フリーザ
              </SegmentedControl.Button>
            </SegmentedControl.Root>
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Fieldset.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>
  )
}
