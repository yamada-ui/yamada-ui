import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { For } from "../for"
import { Input } from "../input"
import { Wrap } from "../wrap"
import { Snacks } from "./snacks"
import { useSnacks } from "./use-snacks"

type Story = StoryFn<typeof Snacks>

const meta: Meta = {
  title: "Components / Snacks",
}

export default meta

export const Basic: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            snack({
              description: "こいつ、動くぞ！",
              title: "アムロ・レイ",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Variant: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <For each={["plain", "solid", "subtle", "surface", "island"] as const}>
          {(variant) => (
            <Button
              key={variant}
              onClick={() => {
                snack({
                  variant,
                  description: "美しいものが、嫌いな人がいるのかしら？",
                  title: "ララァ・スン",
                  withIcon: variant !== "island" ? true : false,
                })
              }}
            >
              Add "{toTitleCase(variant)}" Snack
            </Button>
          )}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Status: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <For each={["info", "success", "warning", "error"] as const}>
          {(status) => (
            <Button
              key={status}
              onClick={() => {
                snack({
                  description: "アムロ、行きまーす！",
                  status,
                  title: "アムロ・レイ",
                })
              }}
            >
              Add "{toTitleCase(status)}" Snack
            </Button>
          )}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const ColorScheme: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <For each={["info", "success", "warning", "error"] as const}>
          {(colorScheme) => (
            <Button
              key={colorScheme}
              onClick={() => {
                snack({
                  colorScheme,
                  description:
                    "見せて貰おうか。連邦軍のモビルスーツの性能とやらを！",
                  title: "シャア・アズナブル",
                })
              }}
            >
              Add "{toTitleCase(colorScheme)}" Snack
            </Button>
          )}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Loading: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <For each={["oval", "grid", "puff", "dots"] as const}>
          {(loadingScheme) => (
            <Button
              key={loadingScheme}
              onClick={() => {
                snack({
                  description: "大丈夫、あなたなら出来るわ。",
                  loadingScheme,
                  title: "セイラ・マス",
                })
              }}
            >
              Add "{toTitleCase(loadingScheme)}" Snack
            </Button>
          )}
        </For>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Direction: Story = () => {
  const { snack, snacks } = useSnacks({ direction: "end" })

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            snack({
              description:
                "認めたくないものだな。自分自身の、若さゆえの過ちというものを。",
              title: "シャア・アズナブル",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Limit: Story = () => {
  const { snack, snacks } = useSnacks({ limit: 5 })

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            snack({
              description: "殴られもせずに一人前になった奴がどこにいるものか！",
              title: "ブライト・ノア",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const Duration = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "それでも男ですか！軟弱者！",
              duration: 30000,
              title: "セイラ・マス",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const DisabledClosable = () => {
  const { snack, snacks } = useSnacks({ closable: false })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "ザクとは違うのだよ、ザクとは！",
              title: "ランバ・ラル",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const UseClose = () => {
  const { snack, snacks } = useSnacks()
  const id = useRef<string | undefined>(undefined)

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            id.current = snack({
              description: "オレは、生きる！生きて、アイナと添い遂げる！",
              title: "シロー・アマダ",
            })
          }}
        >
          Add Snack
        </Button>

        <Button
          colorScheme="warning"
          onClick={() => {
            if (id.current) snack.close(id.current)
          }}
        >
          Close last Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const UseUpdate = () => {
  const { snack, snacks } = useSnacks()
  const id = useRef<string | undefined>(undefined)

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() => {
            id.current = snack({
              description:
                "今の私は、クワトロ・バジーナ大尉だ。それ以上でも、それ以下でもない。",
              title: "クワトロ・バジーナ",
            })
          }}
        >
          Add Snack
        </Button>

        <Button
          onClick={() => {
            if (id.current)
              snack.update(id.current, {
                colorScheme: "purple",
                description: "そんな大人、修正してやる！",
                title: "カミーユ・ビダン",
              })
          }}
        >
          Update last Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}
