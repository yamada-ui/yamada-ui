import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo, useRef, useState } from "react"
import { expect, screen, within } from "storybook/test"
import { useDisclosure } from "../../hooks/use-disclosure"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { PlusIcon, SquareArrowOutUpRightIcon, SquarePenIcon } from "../icon"
import { HStack } from "../stack"
import { Text } from "../text"
import { Menu } from "./"

type Story = StoryFn<typeof Menu.Root>

const meta: Meta<typeof Menu.Root> = {
  component: Menu.Root,
  title: "Components / Menu",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content>
        {items.map(({ label, value }, index) => (
          <Menu.Item key={index} value={value}>
            {label}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

Basic.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Items: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Items.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Size: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg"]}>
      {(_, row, key) => (
        <Menu.Root key={key} size={row}>
          <Menu.Trigger>
            <Button>Menu</Button>
          </Menu.Trigger>

          <Menu.Content items={items} />
        </Menu.Root>
      )}
    </PropsTable>
  )
}

Size.play = async ({ canvas, userEvent }) => {
  const buttons = canvas.getAllByRole("button", { name: /^menu$/i })
  for (const button of buttons) {
    await userEvent.click(button)
    await expect(await screen.findByRole("menu")).toBeVisible()
    await userEvent.click(button)
  }
}

export const OnSelect: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root onSelect={(value) => console.log("selected", value)}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

OnSelect.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Separator: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
      { type: "separator" },
      { label: "大蛇丸", value: "orochimaru" },
      { label: "自來也", value: "pervy-sage" },
      { label: "綱手", value: "tsunade" },
    ],
    [],
  )

  return (
    <HStack>
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="naruto">うずまきナルト</Menu.Item>
          <Menu.Item value="sasuke">うちはサスケ</Menu.Item>
          <Menu.Item value="sakura">春野サクラ</Menu.Item>

          <Menu.Separator />

          <Menu.Item value="orochimaru">大蛇丸</Menu.Item>
          <Menu.Item value="pervy-sage">自來也</Menu.Item>
          <Menu.Item value="tsunade">綱手</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

Separator.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Group: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      {
        items: [
          { label: "うずまきナルト", value: "naruto" },
          { label: "うちはサスケ", value: "sasuke" },
          { label: "春野サクラ", value: "sakura" },
        ],
        label: "第七班",
      },
      {
        items: [
          { label: "大蛇丸", value: "orochimaru" },
          { label: "自來也", value: "pervy-sage" },
          { label: "綱手", value: "tsunade" },
        ],
        label: "伝説の三忍",
      },
    ],
    [],
  )

  return (
    <HStack>
      <Menu.Root size="lg">
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Group label="第七班">
            <Menu.Item value="naruto">うずまきナルト</Menu.Item>
            <Menu.Item value="sasuke">うちはサスケ</Menu.Item>
            <Menu.Item value="sakura">春野サクラ</Menu.Item>
          </Menu.Group>

          <Menu.Separator />

          <Menu.Group label="伝説の三忍">
            <Menu.Item value="orochimaru">大蛇丸</Menu.Item>
            <Menu.Item value="pervy-sage">自來也</Menu.Item>
            <Menu.Item value="tsunade">綱手</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

Group.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const CheckboxGroup: Story = () => {
  const [value, setValue] = useState<string[]>(["naruto"])
  const items = useMemo<Menu.Item[]>(
    () => [
      {
        type: "checkbox",
        items: [
          { label: "うずまきナルト", value: "naruto" },
          { label: "うちはサスケ", value: "sasuke" },
          { label: "春野サクラ", value: "sakura" },
          { disabled: true, label: "はたけカカシ", value: "kakashi" },
        ],
        value,
        onChange: setValue,
      },
    ],
    [value],
  )

  return (
    <HStack>
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="checkbox" value={value} onChange={setValue}>
            <Menu.OptionItem value="naruto">うずまきナルト</Menu.OptionItem>
            <Menu.OptionItem value="sasuke">うちはサスケ</Menu.OptionItem>
            <Menu.OptionItem value="sakura">春野サクラ</Menu.OptionItem>
            <Menu.OptionItem disabled value="kakashi">
              はたけカカシ
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

CheckboxGroup.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const RadioGroup: Story = () => {
  const [value, setValue] = useState<string>("naruto")
  const items = useMemo<Menu.Item[]>(
    () => [
      {
        type: "radio",
        items: [
          { label: "うずまきナルト", value: "naruto" },
          { label: "うちはサスケ", value: "sasuke" },
          { label: "春野サクラ", value: "sakura" },
          { disabled: true, label: "はたけカカシ", value: "kakashi" },
        ],
        value,
        onChange: setValue,
      },
    ],
    [value],
  )

  return (
    <HStack>
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.OptionGroup type="radio" value={value} onChange={setValue}>
            <Menu.OptionItem value="naruto">うずまきナルト</Menu.OptionItem>
            <Menu.OptionItem value="sasuke">うちはサスケ</Menu.OptionItem>
            <Menu.OptionItem value="sakura">春野サクラ</Menu.OptionItem>
            <Menu.OptionItem disabled value="kakashi">
              はたけカカシ
            </Menu.OptionItem>
          </Menu.OptionGroup>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

RadioGroup.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Indicator: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      {
        label: (
          <>
            <Menu.Indicator>
              <PlusIcon />
            </Menu.Indicator>
            New Tab
          </>
        ),
        value: "tab",
      },
      {
        label: (
          <>
            <Menu.Indicator>
              <SquareArrowOutUpRightIcon />
            </Menu.Indicator>
            New Window
          </>
        ),
        value: "window",
      },
      {
        label: (
          <>
            <Menu.Indicator>
              <SquarePenIcon />
            </Menu.Indicator>
            New File
          </>
        ),
        value: "file",
      },
    ],
    [],
  )

  return (
    <HStack>
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="tab">
            <Menu.Indicator>
              <PlusIcon />
            </Menu.Indicator>
            New Tab
          </Menu.Item>
          <Menu.Item value="window">
            <Menu.Indicator>
              <SquareArrowOutUpRightIcon />
            </Menu.Indicator>
            New Window
          </Menu.Item>
          <Menu.Item value="file">
            <Menu.Indicator>
              <SquarePenIcon />
            </Menu.Indicator>
            New File
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

Indicator.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Command: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      {
        label: (
          <>
            New Tab
            <Menu.Command>⌘T</Menu.Command>
          </>
        ),
        value: "tab",
      },
      {
        label: (
          <>
            New Window
            <Menu.Command>⌘N</Menu.Command>
          </>
        ),
        value: "window",
      },
      {
        label: (
          <>
            New File
            <Menu.Command>⌘O</Menu.Command>
          </>
        ),
        value: "file",
      },
    ],
    [],
  )

  return (
    <HStack>
      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with items</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Menu.Root>
        <Menu.Trigger>
          <Button>Menu with composition</Button>
        </Menu.Trigger>

        <Menu.Content>
          <Menu.Item value="tab">
            New Tab
            <Menu.Command>⌘T</Menu.Command>
          </Menu.Item>
          <Menu.Item value="window">
            New Window
            <Menu.Command>⌘N</Menu.Command>
          </Menu.Item>
          <Menu.Item value="file">
            New File
            <Menu.Command>⌘O</Menu.Command>
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    </HStack>
  )
}

Command.play = async ({ canvas, userEvent }) => {
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with items/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.keyboard("{Escape}")
  await userEvent.click(
    canvas.getByRole("button", { name: /menu with composition/i }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Links: Story = () => {
  const items = useMemo(
    () => [
      {
        href: "https://naruto-official.com/",
        label: "うずまきナルト",
        value: "naruto",
      },
      {
        href: "https://naruto-official.com/",
        label: "うちはサスケ",
        value: "sasuke",
      },
      {
        href: "https://naruto-official.com/",
        label: "春野サクラ",
        value: "sakura",
      },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content>
        {items.map(({ href, label, value }, index) => (
          <Menu.Item
            key={index}
            as="a"
            href={href}
            rel="noreferrer"
            target="_blank"
            value={value}
          >
            {label}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  )
}

Links.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Anchor: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <HStack>
        <Menu.Anchor>
          <Center borderWidth="1px" h="10" px="3" rounded="l2">
            Here display Popover
          </Center>
        </Menu.Anchor>

        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>
      </HStack>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Anchor.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Header: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
      { label: "大蛇丸", value: "orochimaru" },
      { label: "自來也", value: "pervy-sage" },
      { label: "綱手", value: "tsunade" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content header="キャラクター" items={items} maxH="2xs" />
    </Menu.Root>
  )
}

Header.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Footer: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
      { label: "大蛇丸", value: "orochimaru" },
      { label: "自來也", value: "pervy-sage" },
      { label: "綱手", value: "tsunade" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content footer="キャラクター" items={items} maxH="2xs" />
    </Menu.Root>
  )
}

Footer.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const ContextMenu: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.ContextTrigger>
        <Center
          borderStyle="dashed"
          borderWidth="1px"
          h="xs"
          p="md"
          rounded="l2"
          w="full"
        >
          <Text>Right click here</Text>
        </Center>
      </Menu.ContextTrigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

ContextMenu.play = async ({ canvas }) => {
  const target = canvas.getByText("Right click here")
  target.dispatchEvent(
    new MouseEvent("contextmenu", { bubbles: true, cancelable: true }),
  )
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const NestedMenu: Story = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content>
        <Menu.Item value="naruto">うずまきナルト</Menu.Item>
        <Menu.Item value="sasuke">うちはサスケ</Menu.Item>
        <Menu.Item value="sakura">春野サクラ</Menu.Item>

        <Menu.Root>
          <Menu.Trigger>
            <Menu.Item>伝説の三忍</Menu.Item>
          </Menu.Trigger>

          <Menu.Content>
            <Menu.Item value="orochimaru">大蛇丸</Menu.Item>
            <Menu.Item value="pervy-sage">自來也</Menu.Item>
            <Menu.Item value="tsunade">綱手</Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </Menu.Content>
    </Menu.Root>
  )
}

NestedMenu.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
  await userEvent.hover(
    within(screen.getByRole("menu")).getByText(/伝説の三忍/),
  )
  await expect(await screen.findByText(/大蛇丸/)).toBeVisible()
}

export const Duration: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root duration={0.7}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Duration.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Offset: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root offset={[16, 16]}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Offset.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Gutter: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root gutter={32}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Gutter.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const AnimationScheme: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root animationScheme="inline-start">
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

AnimationScheme.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Placement: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root animationScheme="inline-start" placement="center-end">
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Placement.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const BlockScrollOnMount: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Box minH="200dvh">
      <Menu.Root blockScrollOnMount>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>
    </Box>
  )
}

BlockScrollOnMount.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const CloseOnScroll: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Box minH="200dvh">
      <Menu.Root closeOnScroll>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>
    </Box>
  )
}

CloseOnScroll.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const InitialFocusRef: Story = () => {
  const ref = useRef<HTMLDivElement>(null)
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { ref: ref, label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root initialFocusRef={ref}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

InitialFocusRef.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const Disabled: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root disabled>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

Disabled.parameters = {
  chromatic: { disableSnapshot: true },
}

export const DisabledItem: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { disabled: true, label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

DisabledItem.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const DisabledCloseOnSelect: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { closeOnSelect: true, label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

DisabledCloseOnSelect.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const DisabledCloseOnBlur: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root closeOnBlur={false}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

DisabledCloseOnBlur.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const DisabledCloseOnEsc: Story = () => {
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <Menu.Root closeOnEsc={false}>
      <Menu.Trigger>
        <Button>Menu</Button>
      </Menu.Trigger>

      <Menu.Content items={items} />
    </Menu.Root>
  )
}

DisabledCloseOnEsc.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}

export const CustomControl: Story = () => {
  const { open, onClose, onOpen } = useDisclosure()
  const items = useMemo<Menu.Item[]>(
    () => [
      { label: "うずまきナルト", value: "naruto" },
      { label: "うちはサスケ", value: "sasuke" },
      { label: "春野サクラ", value: "sakura" },
    ],
    [],
  )

  return (
    <HStack>
      <Menu.Root open={open} onClose={onClose} onOpen={onOpen}>
        <Menu.Trigger>
          <Button>Menu</Button>
        </Menu.Trigger>

        <Menu.Content items={items} />
      </Menu.Root>

      <Button onClick={onOpen}>Click me from here</Button>
    </HStack>
  )
}

CustomControl.play = async ({ canvas, userEvent }) => {
  await userEvent.click(canvas.getByRole("button", { name: /^menu$/i }))
  await expect(await screen.findByRole("menu")).toBeVisible()
}
