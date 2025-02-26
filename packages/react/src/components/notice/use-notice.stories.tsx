import type { Meta } from "@storybook/react"
import { Button } from "../button"
import { Center } from "../center"
import { Wrap } from "../flex"
import { dismiss, dismissAll, Notice, useNotice } from "./"

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
            duration: Infinity,
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
              variant: "island",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show island Notice
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
              variant: "plain",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show plain Notice
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
  const notice = useNotice({
    variant: "island",
  })

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
            closable: false,
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

export const WithCloseButton = () => {
  const notice = useNotice()

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
        <Button
          onClick={() =>
            notice({
              closeButton: true,
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
              closeButton: () => <Notice.CloseButton variant="outline" />,
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Show Notice with custom close button
        </Button>
      </Wrap>
    </Center>
  )
}

export const OnAutoClose = () => {
  const notice = useNotice({
    onAutoClose: (notice) => {
      console.log(`Closed ${notice.id} Automatically`)
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    </Center>
  )
}

export const OnDismiss = () => {
  const notice = useNotice({
    onDismiss(notice) {
      console.log("Dismissed", notice.id)
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    </Center>
  )
}

export const UseClose = () => {
  const notice = useNotice()

  const onOpen = () => {
    notice({
      description: "オッス！オラ悟空！",
      duration: 30000,
      title: "孫悟空",
    })
  }

  const onClose = () => {
    dismiss()
  }

  const onCloseAll = () => {
    dismissAll()
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

export const UseLimit = () => {
  const notice = useNotice({ limit: 5 })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
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
        <Button
          onClick={() =>
            notice({
              description: "オッス！オラ悟空！",
              limit: 1,
              title: "孫悟空",
            })
          }
        >
          Limit to 1
        </Button>
      </Wrap>
    </Center>
  )
}

export const CustomComponent = () => {
  const noticeHook = useNotice({
    component(notice) {
      return (
        <Notice.Root variant="subtle">
          <Notice.Title>{notice.title}</Notice.Title>
          <Notice.Description>{notice.description}</Notice.Description>
          <Notice.CloseButton
            top="50%"
            translateY="-50%"
            onClick={() => dismiss(notice.id)}
          />
        </Notice.Root>
      )
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button
        onClick={() =>
          noticeHook({
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

export const CustomStyle = () => {
  const notice = useNotice({
    style: {
      bg: "purple.500",
    },
  })

  return (
    <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
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

        <Button
          onClick={() =>
            notice({
              style: {
                bg: "red.500",
                transitionDuration: "slow",
                transitionProperty: "backgrounds",
                _hover: {
                  bg: "green.500",
                },
              },
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
