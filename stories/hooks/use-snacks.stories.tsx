import type { Meta, StoryFn } from "@storybook/react"
import { useRef } from "react"
import { Box, Button, Input, Snacks, Wrap, useSnacks } from "@yamada-ui/react"

type Story = StoryFn<typeof Snacks>

const meta: Meta = {
  title: "Hooks / useSnacks",
}

export default meta

export const basic: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withDirection = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withLimit = () => {
  const { snack, snacks } = useSnacks({ limit: 5 })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withGutter = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks
        snacks={snacks}
        gutter={[0, "lg"]}
        negateMargin={false}
        mb="-md"
      />

      <Input placeholder="Input" />
    </>
  )
}

export const withDuration = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              duration: 30000,
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withVariant = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              variant: "basic",
            })
          }
        >
          Add basic Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              variant: "solid",
            })
          }
        >
          Add solid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              variant: "subtle",
            })
          }
        >
          Add subtle Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              variant: "top-accent",
            })
          }
        >
          Add top accent Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              variant: "left-accent",
            })
          }
        >
          Add left accent Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withLoadingVariant = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "loading",
              variant: "subtle",
              icon: { variant: "oval" },
            })
          }
        >
          Add oval Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "loading",
              variant: "solid",
              icon: { variant: "grid" },
            })
          }
        >
          Add grid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "loading",
              variant: "subtle",
              icon: { variant: "puff" },
            })
          }
        >
          Add puff Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "loading",
              variant: "solid",
              icon: { variant: "dots" },
            })
          }
        >
          Add dots Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withStatus = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "info",
            })
          }
        >
          Add info Snack
        </Button>

        <Button
          colorScheme="success"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "success",
            })
          }
        >
          Add success Snack
        </Button>

        <Button
          colorScheme="warning"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "warning",
            })
          }
        >
          Add warning Snack
        </Button>

        <Button
          colorScheme="danger"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "error",
            })
          }
        >
          Add danger Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "loading",
            })
          }
        >
          Add loading Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withColorScheme = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="green"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "info",
              colorScheme: "green",
            })
          }
        >
          Add green Snack
        </Button>

        <Button
          colorScheme="purple"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "success",
              colorScheme: "purple",
            })
          }
        >
          Add purple Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "warning",
              colorScheme: "gray",
            })
          }
        >
          Add gray Snack
        </Button>

        <Button
          colorScheme="pink"
          onClick={() =>
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              status: "error",
              colorScheme: "pink",
            })
          }
        >
          Add pink Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const withCloseStrategy = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              closeStrategy: "element",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const useClose = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<string | number | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      title: "孫悟空",
      description: "オッス！オラ悟空！",
    })
  }

  const onClose = () => {
    if (ref.current) snack.close(ref.current)
  }

  const onCloseAll = () => {
    snack.closeAll()
  }

  return (
    <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onClose}>Close last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const useUpdate = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<string | number | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      title: "孫悟空",
      description: "オッス！オラ悟空！",
    })
  }

  const onUpdate = () => {
    if (ref.current)
      snack.update(ref.current, {
        title: "ベジータ",
        description: "よくも…よくも…オレの…ブルマを!!",
        colorScheme: "purple",
      })
  }

  const onCloseAll = () => {
    snack.closeAll()
  }

  return (
    <>
      <Wrap gap="md">
        <Button colorScheme="primary" onClick={onOpen}>
          Add Snack
        </Button>
        <Button onClick={onUpdate}>Update last Snack</Button>
        <Button colorScheme="danger" onClick={onCloseAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const customComponent = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              component: () => (
                <Box color="white" py={3} px={4} bg="purple.500">
                  ギャルのパンティーおくれーーーっ！！！！！
                </Box>
              ),
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const customStyle = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              style: {
                w: "60%",
              },
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}

export const disabledClosable = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              title: "孫悟空",
              description: "オッス！オラ悟空！",
              isClosable: false,
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks snacks={snacks} gutter={[0, "md"]} />

      <Input placeholder="Input" />
    </>
  )
}
