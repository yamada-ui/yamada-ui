import type { Meta, StoryFn } from "@storybook/react-vite"
import { useState } from "react"
import { PropsTable } from "@/storybook"
import { Pagination } from "."
import { COLOR_SCHEMES, isNumber } from "../../utils"
import {
  ArrowLeftIcon,
  ArrowLeftToLineIcon,
  ArrowRightIcon,
  ArrowRightToLineIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon,
  GhostIcon,
  MinusIcon,
} from "../icon"
import { IconButton } from "../icon-button"

type Story = StoryFn<typeof Pagination.Root>

const meta: Meta<typeof Pagination.Root> = {
  component: Pagination.Root,
  title: "Components / Pagination",
}

export default meta

export const Basic: Story = () => {
  return <Pagination.Root total={10} />
}

export const Variant: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => (
        <Pagination.Root
          key={key}
          colorScheme={row}
          variant={column}
          total={10}
        />
      )}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <Pagination.Root key={key} size={row} total={10} />}
    </PropsTable>
  )
}

export const Edges: Story = () => {
  return <Pagination.Root total={10} withEdges />
}

export const DefaultPage: Story = () => {
  return <Pagination.Root defaultPage={3} total={10} />
}

export const Total: Story = () => {
  return <Pagination.Root total={99} />
}

export const Siblings: Story = () => {
  return <Pagination.Root siblings={2} total={99} />
}

export const Boundaries: Story = () => {
  return <Pagination.Root boundaries={3} total={99} />
}

export const Disabled: Story = () => {
  return <Pagination.Root disabled total={10} />
}

export const Attached: Story = () => {
  return <Pagination.Root variant="outline" attached total={10} />
}

export const Text: Story = () => {
  return (
    <PropsTable
      variant="stack"
      columns={["short", "compact"]}
      rows={["xs", "sm", "md", "lg", "xl"]}
    >
      {(column, row, key) => (
        <Pagination.Root key={key} size={row} gap="md" total={10}>
          <Pagination.PrevTrigger>
            <Pagination.Item icon={<ChevronLeftIcon />} />
          </Pagination.PrevTrigger>

          <Pagination.Text format={column} />

          <Pagination.NextTrigger>
            <Pagination.Item icon={<ChevronRightIcon />} />
          </Pagination.NextTrigger>
        </Pagination.Root>
      )}
    </PropsTable>
  )
}

export const CustomComponent: Story = () => {
  return (
    <Pagination.Root size="sm" variant="subtle" total={10}>
      <Pagination.StartTrigger>
        <IconButton icon={<ChevronsLeftIcon />} />
      </Pagination.StartTrigger>

      <Pagination.PrevTrigger>
        <IconButton icon={<ChevronLeftIcon />} />
      </Pagination.PrevTrigger>

      <Pagination.Items
        render={(page) =>
          isNumber(page) ? (
            <IconButton variant={{ base: "subtle", _current: "solid" }}>
              {page}
            </IconButton>
          ) : (
            <IconButton as="span" icon={<EllipsisIcon />} />
          )
        }
      />

      <Pagination.NextTrigger>
        <IconButton icon={<ChevronRightIcon />} />
      </Pagination.NextTrigger>

      <Pagination.EndTrigger>
        <IconButton icon={<ChevronsRightIcon />} />
      </Pagination.EndTrigger>
    </Pagination.Root>
  )
}

export const CustomIcon: Story = () => {
  return (
    <>
      <Pagination.Root
        total={10}
        withEdges
        controlProps={{ icon: <GhostIcon /> }}
        edgeProps={{ icon: <GhostIcon /> }}
        ellipsisProps={{ icon: <MinusIcon /> }}
      />

      <Pagination.Root
        total={10}
        withEdges
        controlNextProps={{ icon: <ArrowRightIcon /> }}
        controlPrevProps={{ icon: <ArrowLeftIcon /> }}
        edgeEndProps={{ icon: <ArrowRightToLineIcon /> }}
        edgeStartProps={{ icon: <ArrowLeftToLineIcon /> }}
      />
    </>
  )
}

export const CustomControl: Story = () => {
  const [page, setPage] = useState(1)

  return <Pagination.Root page={page} total={10} onChange={setPage} />
}
