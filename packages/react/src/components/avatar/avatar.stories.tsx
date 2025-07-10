import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "../../../storybook/components"
import { COLOR_SCHEMES } from "../../utils"
import { For } from "../for"
import { GhostIcon } from "../icon"
import { Wrap } from "../wrap"
import { Avatar, AvatarGroup } from "./"

type Story = StoryFn<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components / Avatar",
}

export default meta

export const Basic: Story = () => {
  return (
    <Avatar
      name="Hirotomo Yamada"
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
    />
  )
}

export const Variant: Story = () => {
  return (
    <PropsTable
      columns={["solid", "subtle", "surface", "outline"]}
      rows={COLOR_SCHEMES}
    >
      {(column, row, key) => {
        return (
          <Avatar
            key={key}
            name="Hirotomo Yamada"
            colorScheme={row}
            variant={column}
          />
        )
      }}
    </PropsTable>
  )
}

export const Size: Story = () => {
  return (
    <PropsTable columns={["xs", "sm", "md", "lg", "xl"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
        return (
          <Avatar
            key={key}
            name="Hirotomo Yamada"
            colorScheme={row}
            size={column}
          />
        )
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  return (
    <PropsTable variant="stack" rows={["circle", "square", "rounded"]}>
      {(_, row, key) => <Avatar key={key} name="Hirotomo Yamada" shape={row} />}
    </PropsTable>
  )
}

export const Name: Story = () => {
  return <Avatar name="Hirotomo Yamada" />
}

export const Image: Story = () => {
  return (
    <Avatar
      src="https://avatars.githubusercontent.com/u/84060430?v=4"
      alt="Hirotomo Yamada"
    />
  )
}

export const Fallback: Story = () => {
  return (
    <Wrap gap="md">
      <Avatar src="https://not-found.com" />
      <Avatar src="https://not-found.com" alt="alternative text" />
      <Avatar src="https://not-found.com" icon={<GhostIcon fontSize="2xl" />} />
    </Wrap>
  )
}

export const RandomColor: Story = () => {
  const randomColorScheme = (name: string) => {
    const index = name.charCodeAt(0) % COLOR_SCHEMES.length

    return COLOR_SCHEMES[index]
  }

  return (
    <Wrap gap="md">
      <For each={["Hirotomo Yamada", "Koiso Kenji", "Shinohara Natsuki"]}>
        {(name, index) => (
          <Avatar
            key={index}
            name={name}
            colorScheme={randomColorScheme(name)}
          />
        )}
      </For>
    </Wrap>
  )
}

export const Group: Story = () => {
  return (
    <>
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <AvatarGroup key={index} variant={variant}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar
                  key={index}
                  name="Hirotomo Yamada"
                  bg={variant === "outline" ? "bg" : undefined}
                />
              ))}
          </AvatarGroup>
        )}
      </For>

      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {(size, index) => (
          <AvatarGroup key={index} size={size}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar key={index} name="Hirotomo Yamada" />
              ))}
          </AvatarGroup>
        )}
      </For>

      <For each={["circle", "square", "rounded"] as const}>
        {(shape, index) => (
          <AvatarGroup key={index} shape={shape}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar key={index} name="Hirotomo Yamada" />
              ))}
          </AvatarGroup>
        )}
      </For>
    </>
  )
}

export const GroupMax: Story = () => {
  return (
    <>
      <For each={["solid", "subtle", "surface", "outline"] as const}>
        {(variant, index) => (
          <AvatarGroup key={index} variant={variant} max={3}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar
                  key={index}
                  name="Hirotomo Yamada"
                  bg={variant === "outline" ? "bg" : undefined}
                />
              ))}
          </AvatarGroup>
        )}
      </For>

      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {(size, index) => (
          <AvatarGroup key={index} size={size} max={3}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar key={index} name="Hirotomo Yamada" />
              ))}
          </AvatarGroup>
        )}
      </For>

      <For each={["circle", "square", "rounded"] as const}>
        {(shape, index) => (
          <AvatarGroup key={index} max={3} shape={shape}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Avatar key={index} name="Hirotomo Yamada" />
              ))}
          </AvatarGroup>
        )}
      </For>
    </>
  )
}
