import type { Meta } from "@storybook/react"
import type { NoticePlacement } from "./types"
import { useRef } from "react"
import { Notice } from "."
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { For } from "../for"
import { Wrap } from "../wrap"
import { useNotice } from "./notice"

const meta: Meta = {
  title: "Hooks / useNotice",
}

export default meta

export const Basic = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const WithDuration = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            duration: 30000,
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const KeepStay = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            closable: true,
            description: "オッス！オラ悟空！",
            duration: null,
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const WithVariant = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              variant: "basic",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show basic Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "solid",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show solid Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show subtle Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "top-accent",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show top accent Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "left-accent",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show left accent Notice
        </Button>
      </Wrap>
    </Center>
  )
}

export const WithLoadingVariant = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              icon: { loadingScheme: "oval" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "solid",
              description: "オッス！オラ悟空！",
              icon: { loadingScheme: "grid" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              icon: { loadingScheme: "puff" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              variant: "solid",
              description: "オッス！オラ悟空！",
              icon: { loadingScheme: "dots" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>
      </Wrap>
    </Center>
  )
}

export const WithStatus = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Show info Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Show success Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Show warning Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Show danger Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Show loading Notice
        </Button>
      </Wrap>
    </Center>
  )
}

export const WithColorScheme = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              colorScheme: "green",
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Show green Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              colorScheme: "purple",
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Show purple Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              colorScheme: "gray",
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Show gray Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              colorScheme: "pink",
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Show pink Notice
        </Button>
      </Wrap>
    </Center>
  )
}

export const WithPlacement = () => {
  const notice = useNotice({ duration: null })

  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Wrap gap="md">
        <For each={["start-start", "start-center", "start-end"]}>
          {(placement) => (
            <Button
              onClick={() =>
                notice({
                  description: "オッス！オラ悟空！",
                  placement: placement as NoticePlacement,
                })
              }
            >
              Show {placement} Notice
            </Button>
          )}
        </For>
      </Wrap>
      <Wrap gap="md">
        <For each={["end-start", "end-center", "end-end"]}>
          {(placement) => (
            <Button
              onClick={() =>
                notice({
                  description: "オッス！オラ悟空！",
                  placement: placement as NoticePlacement,
                })
              }
            >
              Show {placement} Notice
            </Button>
          )}
        </For>
      </Wrap>
    </Center>
  )
}

export const WithIsClosable = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            closable: true,
            description: "オッス！オラ悟空！",
            duration: 30000,
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const WithCloseStrategy = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            closable: true,
            closeStrategy: "element",
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const CloseOnDrag = () => {
  const notice = useNotice({
    closable: true,
    closeOnDrag: true,
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const UseClose = () => {
  const notice = useNotice()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = notice({
      closable: true,
      description: "オッス！オラ悟空！",
      duration: 30000,
      title: "孫悟空",
    })
  }

  const onClose = () => {
    if (ref.current) notice.close(ref.current)
  }

  const onCloseAll = () => {
    notice.closeAll()
  }

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={onOpen}>Show Notice</Button>
        <Button onClick={onClose}>Close last Notice</Button>
        <Button onClick={onCloseAll}>Close all Notice</Button>
      </Wrap>
    </Center>
  )
}

export const UseUpdate = () => {
  const notice = useNotice()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = notice({
      colorScheme: "orange",
      description: "オッス！オラ悟空！",
      duration: 30000,
      title: "孫悟空",
    })
  }

  const onUpdate = () => {
    if (ref.current)
      notice.update(ref.current, {
        colorScheme: "blue",
        description: "よくも…よくも…オレの…ブルマを!!",
        duration: 30000,
        title: "ベジータ",
      })
  }

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={onOpen}>Show Notice</Button>
        <Button onClick={onUpdate}>Update last Notice</Button>
      </Wrap>
    </Center>
  )
}

export const UseLimit = () => {
  const notice = useNotice({ closable: true, limit: 3 })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const CustomComponent = () => {
  const notice = useNotice()

  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            closable: true,
            closeOnDrag: true,
            component: () => (
              <Box bg="purple.500" color="white" px={4} py={3}>
                ギャルのパンティーおくれーーーっ！！！！！
              </Box>
            ),
          })
        }
      >
        Show Notice
      </Button>
      <Button
        onClick={() =>
          notice({
            component: ({ onClose }) => (
              <Notice.Root>
                <Notice.Content>
                  <Notice.Title>Notice Title</Notice.Title>
                  <Notice.Description>Notice Description</Notice.Description>
                </Notice.Content>
                <Notice.CloseButton onClose={onClose} />
              </Notice.Root>
            ),
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}

export const CustomStyle = () => {
  const notice = useNotice({
    css: {
      bg: "red",
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              closable: true,
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              css: {
                minW: "60%",
              },
              closable: true,
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show individual style Notice
        </Button>
      </Wrap>
    </Center>
  )
}
