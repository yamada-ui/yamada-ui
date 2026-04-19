import type { Meta, StoryFn } from "@storybook/react-vite"
import { type FC, useCallback, useRef, useState } from "react"
import { Sidebar } from "."
import { styled } from "../../core"
import { useDisclosure } from "../../hooks/use-disclosure"
import { useLocalStorage } from "../../hooks/use-local-storage"
import { dataAttr, handlerAll, wait } from "../../utils"
import { Avatar } from "../avatar"
import { ButtonGroup, IconButton } from "../button"
import { Center } from "../center"
import { Grid } from "../grid"
import {
  ChevronsUpDownIcon,
  EllipsisIcon,
  FileIcon,
  FolderClosedIcon,
  FolderOpenIcon,
  GalleryVerticalEndIcon,
  ImportIcon,
  MinusIcon,
  PaintbrushIcon,
  PaletteIcon,
  PanelLeftIcon,
  PlusIcon,
  RocketIcon,
  SquareArrowOutUpRightIcon,
  SquareTerminalIcon,
  SwatchBookIcon,
  TextAlignStartIcon,
  WrenchIcon,
} from "../icon"
import { Menu } from "../menu"
import { VStack } from "../stack"
import { Text } from "../text"

type Story = StoryFn<typeof Sidebar.Root>

const meta: Meta<typeof Sidebar.Root> = {
  component: Sidebar.Root,
  parameters: { layout: "unstyled" },
  title: "Components / Sidebar",
}

export default meta

const navItems: Sidebar.ItemType[] = [
  {
    children: [
      { label: "Installation", value: "/get-started/installation" },
      { label: "CLI", value: "/get-started/cli" },
      {
        children: [
          {
            label: "Next.js (App)",
            value: "/get-started/frameworks/nextjs-app",
          },
          {
            label: "Next.js (Pages)",
            value: "/get-started/frameworks/nextjs-pages",
          },
          { label: "Vite", value: "/get-started/frameworks/vite" },
          {
            label: "React Router",
            value: "/get-started/frameworks/react-router",
          },
          {
            label: "TanStack Start",
            value: "/get-started/frameworks/tanstack-start",
          },
          {
            label: "TanStack Router",
            value: "/get-started/frameworks/tanstack-router",
          },
        ],
        label: "Frameworks",
        value: "/get-started/frameworks",
      },
    ],
    label: "Get Started",
    value: "/get-started",
  },
  {
    children: [
      { label: "Overview", value: "/styling/overview" },
      { label: "Style Props", value: "/styling/style-props" },
    ],
    label: "Styling",
    value: "/styling",
  },
  {
    children: [
      { label: "Overview", value: "/theming/overview" },
      { label: "Customization", value: "/theming/customization" },
    ],
    label: "Theming",
    value: "/theming",
  },
]

const navItemsWithAsync: Sidebar.ItemType[] = [
  {
    asyncChildren: async () => {
      await wait(1000)

      return [
        { label: "Installation", value: "/get-started/installation" },
        { label: "CLI", value: "/get-started/cli" },
        {
          asyncChildren: async () => {
            await wait(1000)

            return [
              {
                label: "Next.js (App)",
                value: "/get-started/frameworks/nextjs-app",
              },
              {
                label: "Next.js (Pages)",
                value: "/get-started/frameworks/nextjs-pages",
              },
              { label: "Vite", value: "/get-started/frameworks/vite" },
              {
                label: "React Router",
                value: "/get-started/frameworks/react-router",
              },
              {
                label: "TanStack Start",
                value: "/get-started/frameworks/tanstack-start",
              },
              {
                label: "TanStack Router",
                value: "/get-started/frameworks/tanstack-router",
              },
            ]
          },
          label: "Frameworks",
          value: "/get-started/frameworks",
        },
      ]
    },
    label: "Get Started",
    value: "/get-started",
  },
  {
    asyncChildren: async () => {
      await wait(1000)

      return [
        { label: "Overview", value: "/styling/overview" },
        { label: "Style Props", value: "/styling/style-props" },
      ]
    },
    label: "Styling",
    value: "/styling",
  },
  {
    asyncChildren: async () => {
      await wait(1000)

      return [
        { label: "Overview", value: "/theming/overview" },
        { label: "Customization", value: "/theming/customization" },
      ]
    },
    label: "Theming",
    value: "/theming",
  },
]

const navItemsWithDisabled: Sidebar.ItemType[] = [
  {
    children: [
      { label: "Installation", value: "/get-started/installation" },
      { label: "CLI", value: "/get-started/cli" },
      {
        children: [
          {
            label: "Next.js (App)",
            value: "/get-started/frameworks/nextjs-app",
          },
          {
            label: "Next.js (Pages)",
            value: "/get-started/frameworks/nextjs-pages",
          },
          { label: "Vite", value: "/get-started/frameworks/vite" },
          {
            label: "React Router",
            value: "/get-started/frameworks/react-router",
          },
          {
            label: "TanStack Start",
            value: "/get-started/frameworks/tanstack-start",
          },
          {
            label: "TanStack Router",
            value: "/get-started/frameworks/tanstack-router",
          },
        ],
        label: "Frameworks",
        value: "/get-started/frameworks",
      },
    ],
    disabled: true,
    label: "Get Started",
    value: "/get-started",
  },
  {
    children: [
      { label: "Overview", value: "/styling/overview" },
      { disabled: true, label: "Style Props", value: "/styling/style-props" },
    ],
    label: "Styling",
    value: "/styling",
  },
  {
    children: [
      { label: "Overview", value: "/theming/overview" },
      { label: "Customization", value: "/theming/customization" },
    ],
    label: "Theming",
    value: "/theming",
  },
]

const navItemsWithIcon: Sidebar.ItemType[] = [
  {
    children: [
      {
        label: "Installation",
        startElement: <ImportIcon />,
        value: "/get-started/installation",
      },
      {
        label: "CLI",
        startElement: <SquareTerminalIcon />,
        value: "/get-started/cli",
      },
    ],
    label: "Get Started",
    startElement: <RocketIcon />,
    value: "/get-started",
  },
  {
    children: [
      {
        label: "Overview",
        startElement: <TextAlignStartIcon />,
        value: "/styling/overview",
      },
      {
        label: "Style Props",
        startElement: <SwatchBookIcon />,
        value: "/styling/style-props",
      },
    ],
    label: "Styling",
    startElement: <PaintbrushIcon />,
    value: "/styling",
  },
  {
    children: [
      {
        label: "Overview",
        startElement: <TextAlignStartIcon />,
        value: "/theming/overview",
      },
      {
        label: "Customization",
        startElement: <WrenchIcon />,
        value: "/theming/customization",
      },
    ],
    label: "Theming",
    startElement: <PaletteIcon />,
    value: "/theming",
  },
]

const navItemsWithGroup: Sidebar.ItemType[] = [
  {
    children: [
      { label: "Installation", value: "/get-started/installation" },
      { label: "CLI", value: "/get-started/cli" },
      {
        children: [
          {
            label: "Next.js (App)",
            value: "/get-started/frameworks/nextjs-app",
          },
          {
            label: "Next.js (Pages)",
            value: "/get-started/frameworks/nextjs-pages",
          },
          { label: "Vite", value: "/get-started/frameworks/vite" },
          {
            label: "React Router",
            value: "/get-started/frameworks/react-router",
          },
          {
            label: "TanStack Start",
            value: "/get-started/frameworks/tanstack-start",
          },
          {
            label: "TanStack Router",
            value: "/get-started/frameworks/tanstack-router",
          },
        ],
        label: "Frameworks",
        value: "/get-started/frameworks",
      },
    ],
    group: true,
    label: "Get Started",
  },
  {
    children: [
      { label: "Overview", value: "/styling/overview" },
      { label: "Style Props", value: "/styling/style-props" },
    ],
    group: true,
    label: "Styling",
  },
  {
    children: [
      { label: "Overview", value: "/theming/overview" },
      { label: "Customization", value: "/theming/customization" },
    ],
    group: true,
    label: "Theming",
  },
]

const DocumentMenuButton: FC = () => {
  return (
    <Menu.Root
      animationScheme={{ base: "inline-start", md: "block-start" }}
      gutter={{ base: 16, md: 8 }}
      matchWidth={{ base: false, md: true }}
      placement={{ base: "center-end-start", md: "end" }}
    >
      <Menu.Trigger>
        <Sidebar.MenuButton>
          <Center
            bg="colorScheme.solid"
            color="colorScheme.contrast"
            fontSize="{side-panel-item-icon-size}"
            minBoxSize="{side-panel-item-size}"
            rounded="l2"
          >
            <GalleryVerticalEndIcon />
          </Center>

          <Grid flex="1" gap="xs" lineHeight="1" textAlign="start">
            <Text truncated>Documentation</Text>
            <Text color="fg.muted" truncated>
              v2.2.0
            </Text>
          </Grid>

          <ChevronsUpDownIcon
            color="fg.muted"
            fontSize="{side-panel-item-icon-size}"
          />
        </Sidebar.MenuButton>
      </Menu.Trigger>

      <Menu.Content
        items={[
          { label: "v0.9.10", value: "v0.9.10" },
          { label: "v1.7.8", value: "v1.7.8" },
          { label: "v2.2.0", value: "v2.2.0" },
        ]}
      />
    </Menu.Root>
  )
}

const UserMenuButton: FC = () => {
  return (
    <Menu.Root
      animationScheme={{ base: "inline-start", md: "block-end" }}
      gutter={{ base: 16, md: 8 }}
      matchWidth={{ base: false, md: true }}
      placement={{ base: "center-end-end", md: "start" }}
    >
      <Menu.Trigger>
        <Sidebar.MenuButton>
          <Avatar
            name="Hirotomo Yamada"
            src="https://avatars.githubusercontent.com/u/84060430?v=4"
            size="xs"
            shape="rounded"
          />

          <Grid flex="1" gap="xs" lineHeight="1" textAlign="start">
            <Text truncated>Hirotomo Yamada</Text>
            <Text color="fg.muted" truncated>
              hirotomo.yamada@avap.co.jp
            </Text>
          </Grid>

          <ChevronsUpDownIcon
            color="fg.muted"
            fontSize="{side-panel-item-icon-size}"
          />
        </Sidebar.MenuButton>
      </Menu.Trigger>

      <Menu.Content
        items={[
          { label: "Upgrade to Pro", value: "Upgrade to Pro" },
          { type: "separator" },
          { label: "Account", value: "Account" },
          { label: "Billing", value: "Billing" },
          { label: "Notification", value: "Notification" },
          { type: "separator" },
          { label: "Logout", value: "Logout" },
        ]}
      />
    </Menu.Root>
  )
}

export const Basic: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel bg="bg.panel">
        <Sidebar.Header>
          <DocumentMenuButton />
        </Sidebar.Header>

        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Get Started</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Item
                label="Installation"
                value="/get-started/installation"
              />

              <Sidebar.Item label="Frameworks" value="/get-started/frameworks">
                <Sidebar.Item
                  label="Next.js (App)"
                  value="/get-started/frameworks/nextjs-app"
                />
                <Sidebar.Item
                  label="Next.js (Pages)"
                  value="/get-started/frameworks/nextjs-pages"
                />
                <Sidebar.Item
                  label="Vite"
                  value="/get-started/frameworks/vite"
                />
                <Sidebar.Item
                  label="React Router"
                  value="/get-started/frameworks/react-router"
                />
                <Sidebar.Item
                  label="TanStack Start"
                  value="/get-started/frameworks/tanstack-start"
                />
                <Sidebar.Item
                  label="TanStack Router"
                  value="/get-started/frameworks/tanstack-router"
                />
              </Sidebar.Item>
            </Sidebar.GroupContent>
          </Sidebar.Group>

          <Sidebar.Group>
            <Sidebar.GroupLabel>Styling</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Item label="Overview" value="/styling/overview" />
              <Sidebar.Item label="Style Props" value="/styling/style-props" />
            </Sidebar.GroupContent>
          </Sidebar.Group>

          <Sidebar.Group>
            <Sidebar.GroupLabel>Theming</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Item label="Overview" value="/theming/overview" />
              <Sidebar.Item
                label="Customization"
                value="/theming/customization"
              />
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>

        <Sidebar.Footer>
          <UserMenuButton />
        </Sidebar.Footer>
      </Sidebar.SidePanel>

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Items: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Offcanvas: Story = () => {
  return (
    <Sidebar.Root mode="offcanvas">
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Placement: Story = () => {
  return (
    <Sidebar.Root placement="end">
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <VStack alignItems="flex-start" gap="md">
          <Sidebar.Trigger alignSelf="flex-end">
            <IconButton
              size="xs"
              variant="ghost"
              fontSize="md"
              icon={<PanelLeftIcon />}
            />
          </Sidebar.Trigger>
        </VStack>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DrawerPlacement: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
        drawerProps={{ placement: "inline-end" }}
      />

      <Sidebar.MainPanel p="md">
        <VStack alignItems="flex-start" gap="md">
          <Sidebar.Trigger alignSelf={{ base: undefined, md: "flex-end" }}>
            <IconButton
              size="xs"
              variant="ghost"
              fontSize="md"
              icon={<PanelLeftIcon />}
            />
          </Sidebar.Trigger>
        </VStack>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Icon: Story = () => {
  return (
    <Sidebar.Root mode="icon">
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithIcon}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Variant: Story = () => {
  return (
    <Sidebar.Root
      variant="solid"
      defaultExpandedValue={["/get-started"]}
      defaultSelectedValue="/get-started/installation"
    >
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const GroupGuideLine: Story = () => {
  return (
    <Sidebar.Root withGroupGuideLine>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const GuideLine: Story = () => {
  return (
    <Sidebar.Root withGuideLine>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Shape: Story = () => {
  return (
    <Sidebar.Root
      defaultExpandedValue={["/get-started"]}
      defaultSelectedValue="/get-started/installation"
      shape="square"
    >
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Breakpoint: Story = () => {
  return (
    <Sidebar.Root breakpoint="lg">
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DefaultClosed: Story = () => {
  return (
    <Sidebar.Root disclosure={{ desktop: { defaultOpen: false } }}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DefaultSelected: Story = () => {
  return (
    <Sidebar.Root
      defaultExpandedValue={["/get-started"]}
      defaultSelectedValue="/get-started/installation"
    >
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DefaultExpanded: Story = () => {
  return (
    <Sidebar.Root defaultExpandedValue={["/get-started"]}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const ExpandCollapseAll: Story = () => {
  const controlRef = useRef<Sidebar.Control>(null)

  return (
    <Sidebar.Root controlRef={controlRef}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <VStack alignItems="flex-start" gap="md">
          <Sidebar.Trigger>
            <IconButton
              size="xs"
              variant="ghost"
              fontSize="md"
              icon={<PanelLeftIcon />}
            />
          </Sidebar.Trigger>

          <ButtonGroup.Root px="sm">
            <ButtonGroup.Item onClick={() => controlRef.current?.expand()}>
              Expand All
            </ButtonGroup.Item>
            <ButtonGroup.Item onClick={() => controlRef.current?.collapse()}>
              Collapse All
            </ButtonGroup.Item>
          </ButtonGroup.Root>
        </VStack>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Separator: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
        withHandle={false}
        contentProps={{
          css: {
            "& > li": {
              _after: {
                borderBottomWidth: "1px",
                mt: "{side-panel-space}",
                mx: "calc({side-panel-space} * -1)",
              },
            },
          },
          gap: "{side-panel-space}",
          py: "{side-panel-space}",
        }}
        footerProps={{ borderTopWidth: "1px" }}
        headerProps={{ borderBottomWidth: "1px" }}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const IndicatorHidden: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        indicatorHidden
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DisabledItem: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithDisabled}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DisabledAnimated: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        animated={false}
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DisabledHandle: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
        withHandle={false}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const DisabledBreakpoint: Story = () => {
  return (
    <Sidebar.Root breakpoint={false}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const Async: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithAsync}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const LoadingScheme: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithAsync}
        loadingScheme="dots"
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const StartElement: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
        startElement={{
          group: ({ expanded }) =>
            expanded ? <FolderOpenIcon /> : <FolderClosedIcon />,
          item: <FileIcon />,
        }}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const EndElement: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        endElement={{ item: <SquareArrowOutUpRightIcon /> }}
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const LocalStorage: Story = () => {
  const [defaultOpen, setDefaultOpen] = useLocalStorage({
    key: "sidebar-expanded",
    defaultValue: true,
    getInitialValueInEffect: false,
  })

  const disclosure = useDisclosure({
    defaultOpen,
    onClose: () => setDefaultOpen(false),
    onOpen: () => setDefaultOpen(true),
  })

  return (
    <Sidebar.Root disclosure={{ desktop: disclosure }}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const CookieStorage: Story = () => {
  const key = "sidebar-expanded"
  const getStorage = useCallback(() => {
    const match = document.cookie.match(new RegExp(`(^| )${key}=([^;]+)`))

    return match ? match[2] === "true" : true
  }, [])
  const setStorage = useCallback((value: boolean) => {
    document.cookie = `${key}=${value}; max-age=31536000; path=/`
  }, [])
  const disclosure = useDisclosure({
    defaultOpen: getStorage(),
    onClose: () => setStorage(false),
    onOpen: () => setStorage(true),
  })

  return (
    <Sidebar.Root disclosure={{ desktop: disclosure }}>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const CustomIndicator: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        indicator={({ expanded }) => (expanded ? <MinusIcon /> : <PlusIcon />)}
        items={navItems}
        indicatorProps={{ _expanded: { transform: "rotate(0deg)" } }}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const CustomRender: Story = () => {
  return (
    <Sidebar.Root>
      <Sidebar.SidePanel
        bg="bg.panel"
        endElement={{ item: <EllipsisIcon /> }}
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItemsWithGroup}
        render={{
          item: ({
            children,
            endElement,
            group,
            groupOpen,
            label,
            selected,
            value,
            itemProps,
            linkProps,
            triggerProps,
            onSelectedChange,
          }) => {
            return (
              <styled.li as="li" {...itemProps}>
                {group ? (
                  <>
                    <Sidebar.ItemTrigger
                      as="a"
                      href={value}
                      data-selected={dataAttr(selected)}
                      pe="calc(({side-panel-space} * 2) + {side-panel-item-icon-size})"
                      onClick={() => onSelectedChange(value)}
                    >
                      <Sidebar.ItemLabel>{label}</Sidebar.ItemLabel>
                    </Sidebar.ItemTrigger>

                    <styled.button
                      type="button"
                      aria-label={`${groupOpen ? "Collapse" : "Expand"} ${label}`}
                      cursor="pointer"
                      display="center"
                      p="{side-panel-space}"
                      position="absolute"
                      right="0"
                      rounded="{side-panel-item-rounded}"
                      top="0"
                      _hover={{ bg: "bg.subtle" }}
                      {...triggerProps}
                      onClick={handlerAll(triggerProps.onClick, (ev) => {
                        ev.preventDefault()
                        ev.stopPropagation()
                      })}
                    >
                      <Sidebar.ItemIndicator color="currentColor" />
                    </styled.button>

                    <Sidebar.ItemContent>{children}</Sidebar.ItemContent>
                  </>
                ) : (
                  <>
                    <Sidebar.ItemLink
                      pe="calc(({side-panel-space} * 2) + {side-panel-item-icon-size})"
                      {...linkProps}
                    >
                      <Sidebar.ItemLabel>{label}</Sidebar.ItemLabel>
                    </Sidebar.ItemLink>

                    <Menu.Root
                      animationScheme={{
                        base: "inline-start",
                        md: "block-start",
                      }}
                      gutter={{ base: 16, md: 8 }}
                      matchWidth={{ base: false, md: true }}
                      placement={{ base: "center-end-start", md: "end-end" }}
                    >
                      <Menu.Trigger>
                        <Sidebar.ItemEndElement
                          as="button"
                          type="button"
                          aria-label={`Open menu for ${label}`}
                          cursor="pointer"
                          p="{side-panel-space}"
                          position="absolute"
                          right="0"
                          rounded="{side-panel-item-rounded}"
                          top="0"
                          _hover={{ bg: "bg.subtle" }}
                          onClick={(ev) => {
                            ev.preventDefault()
                            ev.stopPropagation()
                          }}
                        >
                          {endElement.item}
                        </Sidebar.ItemEndElement>
                      </Menu.Trigger>

                      <Menu.Content
                        items={[
                          {
                            label: "View as Markdown",
                            value: "View as Markdown",
                          },
                          { type: "separator" },
                          {
                            label: "Open in ChatGPT",
                            value: "Open in ChatGPT",
                          },
                          { label: "Open in Claude", value: "Open in Claude" },
                        ]}
                        onClick={(ev) => {
                          ev.preventDefault()
                          ev.stopPropagation()
                        }}
                      />
                    </Menu.Root>
                  </>
                )}
              </styled.li>
            )
          },
        }}
      />

      <Sidebar.MainPanel p="md">
        <Sidebar.Trigger>
          <IconButton
            size="xs"
            variant="ghost"
            fontSize="md"
            icon={<PanelLeftIcon />}
          />
        </Sidebar.Trigger>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}

export const CustomControl: Story = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    "/get-started/installation",
  )
  const [expandedValue, setExpandedValue] = useState<string[]>(["/get-started"])
  const desktopDisclosure = useDisclosure({ defaultOpen: true })
  const mobileDisclosure = useDisclosure()

  return (
    <Sidebar.Root
      disclosure={{ desktop: desktopDisclosure, mobile: mobileDisclosure }}
      expandedValue={expandedValue}
      selectedValue={selectedValue}
      onExpandedChange={setExpandedValue}
      onSelectedChange={setSelectedValue}
    >
      <Sidebar.SidePanel
        bg="bg.panel"
        footer={<UserMenuButton />}
        header={<DocumentMenuButton />}
        items={navItems}
      />

      <Sidebar.MainPanel p="md">
        <VStack alignItems="flex-start" gap="md">
          <Sidebar.Trigger>
            <IconButton
              size="xs"
              variant="ghost"
              fontSize="md"
              icon={<PanelLeftIcon />}
            />
          </Sidebar.Trigger>

          <VStack gap="0" px="sm">
            <Text>Selected Value: {selectedValue}</Text>
            <Text>Expanded Value: {expandedValue.join(", ")}</Text>
            <Text>Desktop Open: {desktopDisclosure.open.toString()}</Text>
            <Text>Mobile Open: {mobileDisclosure.open.toString()}</Text>
          </VStack>
        </VStack>
      </Sidebar.MainPanel>
    </Sidebar.Root>
  )
}
