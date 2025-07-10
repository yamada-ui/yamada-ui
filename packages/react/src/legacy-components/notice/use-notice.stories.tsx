import type { Meta } from "@storybook/react-vite"
import { useRef } from "react"
import { Box } from "../box"
import { Button } from "../button"
import { Center } from "../center"
import { Wrap } from "../flex"
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
            description: "オッス！オラ悟空！",
            duration: null,
            isClosable: true,
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
  const notice = useNotice()

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
              placement: "top-left",
            })
          }
        >
          Show top left Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "top",
            })
          }
        >
          Show top Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "top-right",
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
              placement: "bottom-left",
            })
          }
        >
          Show bottom left Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "bottom",
            })
          }
        >
          Show bottom Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              placement: "bottom-right",
            })
          }
        >
          Show bottom right Notice
        </Button>
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
            description: "オッス！オラ悟空！",
            duration: 30000,
            isClosable: true,
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
            closeStrategy: "element",
            description: "オッス！オラ悟空！",
            isClosable: true,
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
      description: "オッス！オラ悟空！",
      duration: 30000,
      isClosable: true,
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
  const notice = useNotice({ limit: 3 })

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
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          notice({
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
    </Center>
  )
}

export const CustomStyle = () => {
  const notice = useNotice({
    style: {
      maxW: "100%",
      minW: "100%",
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              isClosable: true,
              title: "孫悟空",
            })
          }
        >
          Show Notice
        </Button>

        <Button
          onClick={() =>
            notice({
              style: {
                minW: "60%",
              },
              description: "オッス！オラ悟空！",
              isClosable: true,
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
