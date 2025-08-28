import type { Meta } from "@storybook/react-vite"
import { useRef } from "react"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { Wrap } from "../wrap"
import { useNotice } from "./use-notice"

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
            duration: Number.POSITIVE_INFINITY,
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
              variant: "plain",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show plain Notice
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
              variant: "surface",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show surface Notice
        </Button>
        <Button
          onClick={() =>
            notice({
              variant: "island",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show island Notice
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
              icon: { variant: "oval" },
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
              icon: { variant: "grid" },
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
              icon: { variant: "puff" },
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
              icon: { variant: "dots" },
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
  const notice = useNotice({
    duration: Number.POSITIVE_INFINITY,
  })

  return (
    <Center
      flexDirection="column"
      gap="md"
      h="calc(100vh - 16px * 2)"
      w="calc(100vw - 16px * 2)"
    >
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "start-start",
            })
          }
        >
          Show top left Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "start-center",
            })
          }
        >
          Show top Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "start-end",
            })
          }
        >
          Show top right Notice
        </Button>
      </Wrap>

      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "end-start",
            })
          }
        >
          Show bottom left Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "end-center",
            })
          }
        >
          Show bottom Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "end-end",
            })
          }
        >
          Show bottom right Notice
        </Button>
      </Wrap>
    </Center>
  )
}

export const WithClosable = () => {
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
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
      <Button
        onClick={() =>
          notice({
            closable: true,
            closeStrategy: "button",
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice (button)
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
  const notice = useNotice({ limit: 10 })

  return (
    <Center gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            title: "孫悟空",
          })
        }
      >
        Show Notice (limit: 10)
      </Button>
      <Button
        onClick={() =>
          notice({
            description: "オッス！オラ悟空！",
            limit: 2,
            placement: "start-end",
            title: "孫悟空",
          })
        }
      >
        Show Notice (limit: 2)
      </Button>
    </Center>
  )
}

export const CustomComponent = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
            component: ({ onClose }) => (
              <Box
                bg="purple.500"
                color="white"
                px={4}
                py={3}
                onClick={onClose}
              >
                ギャルのパンティーおくれーーーっ！！！！！
              </Box>
            ),
          })
        }
      >
        Show Notice
      </Button>
    </Center>
  )
}
