import type { Meta, StoryFn } from "@storybook/react-vite"
import { PropsTable } from "#storybook"
import { useMemo } from "react"
import { Timeline } from "."
import { COLOR_SCHEMES } from "../../utils"
import { Avatar } from "../avatar"
import { Center } from "../center"
import { AxeIcon, GhostIcon, SparklesIcon } from "../icon"

type Story = StoryFn<typeof Timeline.Root>

const meta: Meta<typeof Timeline.Root> = {
  component: Timeline.Root,
  title: "Components / Timeline",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return <Timeline.Root items={items} />
}

export const Size: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
        return <Timeline.Root key={key} size={row} items={items} />
      }}
    </PropsTable>
  )
}

export const ColorScheme: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
        return <Timeline.Root key={key} colorScheme={row} items={items} />
      }}
    </PropsTable>
  )
}

export const Align: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["start", "center", "end"]}>
      {(_, row, key) => {
        return (
          <Timeline.Root
            key={key}
            align={row}
            items={
              row !== "start"
                ? items.map((item, index) => ({
                    align: row !== "end" && index % 2 === 0 ? "start" : "end",
                    ...item,
                  }))
                : items
            }
          />
        )
      }}
    </PropsTable>
  )
}

export const Shape: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return (
    <PropsTable variant="stack" rows={["circle", "rounded", "square"]}>
      {(_, row, key) => {
        return <Timeline.Root key={key} items={items} shape={row} />
      }}
    </PropsTable>
  )
}

export const Alternate: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        align: "end",
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        align: "start",
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        align: "end",
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return <Timeline.Root align="center" items={items} />
}

export const Indicator: Story = () => {
  const itemsWithIcon = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        indicator: <GhostIcon fontSize="xl" />,
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        indicator: <AxeIcon fontSize="xl" />,
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        indicator: <SparklesIcon fontSize="xl" />,
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  const itemsWithAvatar = useMemo<Timeline.Item[]>(
    () => [
      {
        description: "ジョナサン・ジョースター",
        indicator: (
          <Avatar
            name="ジョナサン・ジョースター"
            src="https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_01.png"
            boxSize="full"
          />
        ),
        title: "君はディオ・ブランドーだね？",
        contentProps: { gap: "0" },
        titleProps: { lineHeight: "short" },
      },
      {
        description: "ディオ・ブランドー",
        indicator: (
          <Avatar
            name="ディオ・ブランドー"
            src="https://jojo-portal.com/wp-content/themes/jojo-portal/assets/images/common/about/01/img_chara_02.png"
            boxSize="full"
          />
        ),
        title: "そういう君はジョナサン・ジョースター",
        contentProps: { gap: "0" },
        titleProps: { lineHeight: "short" },
      },
    ],
    [],
  )

  return (
    <>
      <Timeline.Root items={itemsWithIcon} />
      <Timeline.Root indicatorSize="10" items={itemsWithAvatar} />
    </>
  )
}

export const Number: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        indicator: (
          <Center layerStyle="solid" boxSize="full">
            1
          </Center>
        ),
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        indicator: (
          <Center layerStyle="solid" boxSize="full">
            2
          </Center>
        ),
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        indicator: (
          <Center layerStyle="solid" boxSize="full">
            3
          </Center>
        ),
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return <Timeline.Root size="lg" items={items} shape="rounded" />
}

export const Dashed: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        "--separator-style": "dashed",
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return <Timeline.Root items={items} />
}

export const Attached: Story = () => {
  const items = useMemo<Timeline.Item[]>(
    () => [
      {
        description:
          "全てはここから始まった！ジョナサンとディオ、運命の出会い‼",
        title: "第1部 ファントムブラッド",
      },
      {
        description:
          "石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼",
        title: "第2部 戦闘潮流",
      },
      {
        description: "DIO復活…！永き因縁に終止符を打つスタンドバトル‼",
        title: "第3部 スターダストクルセイダース",
      },
    ],
    [],
  )

  return <Timeline.Root attached items={items} />
}

export const Composition: Story = () => {
  return (
    <Timeline.Root>
      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第1部 ファントムブラッド</Timeline.Title>
          <Timeline.Description>
            全てはここから始まった！ジョナサンとディオ、運命の出会い‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第2部 戦闘潮流</Timeline.Title>
          <Timeline.Description>
            石仮面を創った「柱の一族」が蘇る！究極の生命体カーズを打ち破れ‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Connector>
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content>
          <Timeline.Title>第3部 スターダストクルセイダース</Timeline.Title>
          <Timeline.Description>
            DIO復活…！永き因縁に終止符を打つスタンドバトル‼
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}
