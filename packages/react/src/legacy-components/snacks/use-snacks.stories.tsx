import type { Meta, StoryFn } from "@storybook/react-vite"
import { useRef } from "react"
import { Snacks, useSnacks } from "."
import { Box } from "../../components/box"
import { Button } from "../../components/button"
import { Wrap } from "../../components/flex"
import { Input } from "../input"

type Story = StoryFn<typeof Snacks>

const meta: Meta = {
  title: "Hooks / useSnacks",
}

export default meta

export const Basic: Story = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithDirection = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithLimit = () => {
  const { snack, snacks } = useSnacks({ limit: 5 })

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithGutter = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              title: "孫悟空",
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
        gutter={[0, "lg"]}
        mb="-md"
        negateMargin={false}
        snacks={snacks}
      />

      <Input placeholder="Input" />
    </>
  )
}

export const WithDuration = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              duration: 30000,
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithVariant = () => {
  const { snack, snacks } = useSnacks({ direction: "bottom" })

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              variant: "basic",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Add basic Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "solid",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Add solid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Add subtle Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "top-accent",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Add top accent Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "left-accent",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }
        >
          Add left accent Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithLoadingVariant = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          onClick={() =>
            snack({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              icon: { variant: "oval" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add oval Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "solid",
              description: "オッス！オラ悟空！",
              icon: { variant: "grid" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add grid Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "subtle",
              description: "オッス！オラ悟空！",
              icon: { variant: "puff" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add puff Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              variant: "solid",
              description: "オッス！オラ悟空！",
              icon: { variant: "dots" },
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add dots Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithStatus = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Add info Snack
        </Button>

        <Button
          colorScheme="success"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Add success Snack
        </Button>

        <Button
          colorScheme="warning"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Add warning Snack
        </Button>

        <Button
          colorScheme="danger"
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Add danger Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              description: "オッス！オラ悟空！",
              status: "loading",
              title: "孫悟空",
            })
          }
        >
          Add loading Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithColorScheme = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="green"
          onClick={() =>
            snack({
              colorScheme: "green",
              description: "オッス！オラ悟空！",
              status: "info",
              title: "孫悟空",
            })
          }
        >
          Add green Snack
        </Button>

        <Button
          colorScheme="purple"
          onClick={() =>
            snack({
              colorScheme: "purple",
              description: "オッス！オラ悟空！",
              status: "success",
              title: "孫悟空",
            })
          }
        >
          Add purple Snack
        </Button>

        <Button
          onClick={() =>
            snack({
              colorScheme: "gray",
              description: "オッス！オラ悟空！",
              status: "warning",
              title: "孫悟空",
            })
          }
        >
          Add gray Snack
        </Button>

        <Button
          colorScheme="pink"
          onClick={() =>
            snack({
              colorScheme: "pink",
              description: "オッス！オラ悟空！",
              status: "error",
              title: "孫悟空",
            })
          }
        >
          Add pink Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const WithCloseStrategy = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              closeStrategy: "element",
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const UseClose = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空",
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const UseUpdate = () => {
  const { snack, snacks } = useSnacks()
  const ref = useRef<number | string | undefined>(undefined)

  const onOpen = () => {
    ref.current = snack({
      description: "オッス！オラ悟空！",
      title: "孫悟空",
    })
  }

  const onUpdate = () => {
    if (ref.current)
      snack.update(ref.current, {
        colorScheme: "purple",
        description: "よくも…よくも…オレの…ブルマを!!",
        title: "ベジータ",
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const CustomComponent = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              component: () => (
                <Box bg="purple.500" color="white" px={4} py={3}>
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

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const CustomStyle = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              style: {
                w: "60%",
              },
              description: "オッス！オラ悟空！",
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}

export const DisabledClosable = () => {
  const { snack, snacks } = useSnacks()

  return (
    <>
      <Wrap gap="md">
        <Button
          colorScheme="primary"
          onClick={() => {
            snack({
              description: "オッス！オラ悟空！",
              isClosable: false,
              title: "孫悟空",
            })
          }}
        >
          Add Snack
        </Button>

        <Button colorScheme="danger" onClick={snack.closeAll}>
          Close all Snack
        </Button>
      </Wrap>

      <Snacks gutter={[0, "md"]} snacks={snacks} />

      <Input placeholder="Input" />
    </>
  )
}
