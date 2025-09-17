import type { Meta } from "@storybook/react-vite"
import type { NoticeCloseStrategy } from "../../core"
import { useRef } from "react"
import { toTitleCase } from "../../utils"
import { Button } from "../button"
import { For } from "../for"
import { Wrap } from "../wrap"
import { useNotice } from "./use-notice"

const meta: Meta = {
  parameters: { layout: "centered" },
  title: "Hooks / useNotice",
}

export default meta

export const Basic = () => {
  const notice = useNotice()

  return (
    <Button
      onClick={() =>
        notice({
          description: "私の歌を聴けー！",
          title: "シェリル・ノーム",
        })
      }
    >
      Show Notice
    </Button>
  )
}

export const Variant = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For each={["plain", "solid", "subtle", "surface", "island"] as const}>
        {(variant) => (
          <Button
            key={variant}
            onClick={() => {
              notice({
                variant,
                description: "こんなサービス、滅多にしないんだからね！",
                title: "シェリル・ノーム",
                withIcon: variant !== "island" ? true : false,
              })
            }}
          >
            Add "{toTitleCase(variant)}" Snack
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const Status = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For each={["info", "success", "warning", "error"] as const}>
        {(status) => (
          <Button
            key={status}
            onClick={() => {
              notice({
                description: "皆抱きしめて！銀河の果てまで！",
                status,
                title: "ランカ・リー",
              })
            }}
          >
            Add "{toTitleCase(status)}" Snack
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const ColorScheme = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For each={["info", "success", "warning", "error"] as const}>
        {(colorScheme) => (
          <Button
            key={colorScheme}
            onClick={() => {
              notice({
                colorScheme,
                description:
                  "人は１人じゃ飛べない。飛んじゃいけない。それが分かったから…",
                title: "早乙女アルト",
              })
            }}
          >
            Add "{toTitleCase(colorScheme)}" Snack
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const Loading = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For each={["oval", "grid", "puff", "dots"] as const}>
        {(loadingScheme) => (
          <Button
            key={loadingScheme}
            onClick={() => {
              notice({
                description: "人を本気で好きになるのは命がけなんだな。",
                loadingScheme,
                title: "ミハエル・ブラン",
              })
            }}
          >
            Add "{toTitleCase(loadingScheme)}" Snack
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const Limit = () => {
  const notice = useNotice({ limit: 10 })

  return (
    <Wrap gap="md">
      <Button
        onClick={() =>
          notice({
            description: "お前の恋は何処にある！",
            title: "クラン・クラン",
          })
        }
      >
        Show Notice
      </Button>

      <Button
        onClick={() =>
          notice({
            description: "お前の恋は何処にある！",
            limit: 2,
            title: "クラン・クラン",
          })
        }
      >
        Show Notice with Option
      </Button>
    </Wrap>
  )
}

export const Duration = () => {
  const notice = useNotice({ duration: 10000 })

  return (
    <Wrap gap="md">
      <Button
        onClick={() =>
          notice({
            description: "お前も、お前の夢も、俺が守る！",
            title: "オズマ・リー",
          })
        }
      >
        Show Notice
      </Button>

      <Button
        onClick={() =>
          notice({
            description: "お前も、お前の夢も、俺が守る！",
            duration: 5000,
            title: "オズマ・リー",
          })
        }
      >
        Show Notice with Option
      </Button>
    </Wrap>
  )
}

export const KeepStay = () => {
  const notice = useNotice({ duration: null })

  return (
    <Button
      onClick={() =>
        notice({
          description:
            "覚えておきなさい、こんなにいい女滅多にいないんだからねっ！",
          title: "シェリル・ノーム",
        })
      }
    >
      Show Notice
    </Button>
  )
}

export const Placement = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For
        each={
          [
            "start-start",
            "start-center",
            "start-end",
            "end-start",
            "end-center",
            "end-end",
          ] as const
        }
      >
        {(placement) => (
          <Button
            key={placement}
            onClick={() =>
              notice({
                description: "お前が、お前たちが俺の翼だ！",
                placement,
                title: "早乙女アルト",
              })
            }
          >
            Open "{placement}" Notice
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const CloseStrategy = () => {
  const notice = useNotice()

  return (
    <Wrap gap="md">
      <For each={["click", "drag", "button"] as const}>
        {(closeStrategy) => (
          <Button
            key={closeStrategy}
            onClick={() =>
              notice({
                closeStrategy,
                description: "お前が、お前たちが俺の翼だ！",
                title: "早乙女アルト",
              })
            }
          >
            {toTitleCase(closeStrategy)} Only
          </Button>
        )}
      </For>

      <For
        each={
          [
            ["click", "drag"],
            ["button", "drag"],
          ] as NoticeCloseStrategy[][]
        }
      >
        {(closeStrategy) => (
          <Button
            key={closeStrategy.join("-")}
            onClick={() =>
              notice({
                closeStrategy,
                description: "お前が、お前たちが俺の翼だ！",
                title: "早乙女アルト",
              })
            }
          >
            {toTitleCase(closeStrategy[0]!)} & {toTitleCase(closeStrategy[1]!)}
          </Button>
        )}
      </For>
    </Wrap>
  )
}

export const UseClose = () => {
  const notice = useNotice()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = notice({
      closable: true,
      description: "お前が好きだ。",
      duration: 30000,
      title: "クラン・クラン",
    })
  }

  const onClose = () => {
    if (ref.current) {
      notice.close(ref.current)
    }
  }

  const onCloseAll = () => {
    notice.closeAll()
  }

  return (
    <Wrap gap="md">
      <Button onClick={onOpen}>Show Notice</Button>
      <Button onClick={onClose}>Close last Notice</Button>
      <Button onClick={onCloseAll}>Close all Notice</Button>
    </Wrap>
  )
}

export const UseUpdate = () => {
  const notice = useNotice()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = notice({
      colorScheme: "orange",
      description: "チャンスは目の前にあるものよ。",
      duration: 5000,
      title: "シェリル・ノーム",
    })
  }

  const onUpdate = () => {
    if (ref.current) {
      notice.update(ref.current, {
        colorScheme: "blue",
        description: "人生はワン･ツー･デカルチャー！！頑張れ、私。",
        duration: 5000,
        title: "ランカ・リー",
      })
    }
  }

  return (
    <Wrap gap="md">
      <Button onClick={onOpen}>Show Notice</Button>
      <Button onClick={onUpdate}>Update last Notice</Button>
    </Wrap>
  )
}
