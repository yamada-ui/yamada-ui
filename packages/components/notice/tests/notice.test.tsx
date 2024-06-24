import { Button } from "@yamada-ui/react"
import { a11y, render, fireEvent, screen, waitFor } from "@yamada-ui/test"
import { useRef, useState } from "react"
import { useNotice } from "../src"

describe("useNotice()", () => {
  const NoticeExample = () => {
    const notice = useNotice()
    const onOpen = () => {
      notice({
        title: "NoticeTitle",
        description: "NoticeDescription",
      })
    }

    return (
      <>
        <Button data-testid="OpenNotice" onClick={onOpen}>
          Open Notice
        </Button>
      </>
    )
  }

  test("Notice renders correctly", async () => {
    const { container } = render(<NoticeExample />)
    await a11y(container)
  })

  test("Should render notice", async () => {
    render(<NoticeExample />)
    fireEvent.click(screen.getByTestId("OpenNotice"))
    await waitFor(() => {
      expect(screen.getByText("NoticeTitle")).toBeInTheDocument()
    })
    expect(screen.getByText("NoticeDescription")).toBeInTheDocument()
  })

  test("Only the number specified by LIMIT is displayed", async () => {
    const LimitedNoticeExample = () => {
      const notice = useNotice({ limit: 3 })
      const onOpen = () => {
        notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
        })
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
        </>
      )
    }

    render(<LimitedNoticeExample />)
    for (let index = 0; index < 5; index++) {
      fireEvent.click(screen.getByTestId("OpenNotice"))
    }
    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(3)
    })
  })

  test("If the limit value is set to 1, only one is displayed", async () => {
    const LimitedNoticeExample = () => {
      const notice = useNotice({ limit: 1 })
      const onOpen = () => {
        notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
        })
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
        </>
      )
    }

    render(<LimitedNoticeExample />)
    for (let index = 0; index < 5; index++) {
      fireEvent.click(screen.getByTestId("OpenNotice"))
    }
    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(1)
    })
  })

  test("Invalid limit value is ignored", async () => {
    const LimitedNoticeExample = () => {
      const notice = useNotice({ limit: -1 })
      const onOpen = () => {
        notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
        })
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
        </>
      )
    }

    render(<LimitedNoticeExample />)
    for (let index = 0; index < 5; index++) {
      fireEvent.click(screen.getByTestId("OpenNotice"))
    }
    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(5)
    })
  })

  test("Update notice", async () => {
    const UpdateNoticeExample = () => {
      const notice = useNotice()
      const ref = useRef<string | number | undefined>(undefined)
      const onOpen = () => {
        ref.current = notice({
          title: "Notification",
          description: "This is description.",
          colorScheme: "orange",
          duration: 30000,
        })
      }
      const onUpdate = () => {
        if (ref.current)
          notice.update(ref.current, {
            title: "Updated notification",
            description: "This is updated description.",
            colorScheme: "blue",
            duration: 30000,
          })
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Show notification
          </Button>
          <Button data-testid="UpdateNotice" onClick={onUpdate}>
            Update last notification
          </Button>
        </>
      )
    }

    render(<UpdateNoticeExample />)
    fireEvent.click(screen.getByTestId("OpenNotice"))
    await waitFor(() => {
      expect(screen.getByText("Notification")).toBeInTheDocument()
    })
    expect(screen.getByText("This is description.")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("UpdateNotice"))
    await waitFor(() => {
      expect(screen.getByText("Updated notification")).toBeInTheDocument()
    })
    expect(screen.getByText("This is updated description.")).toBeInTheDocument()
  })

  test("Close all notice", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const onOpen = () => {
        notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
        })
      }
      const onCloseAll = () => {
        notice.closeAll()
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
          <Button data-testid="CloseAllNotice" onClick={onCloseAll}>
            Close All Notice
          </Button>
        </>
      )
    }

    render(<CloseNoticeExample />)
    for (let index = 0; index < 5; index++) {
      fireEvent.click(screen.getByTestId("OpenNotice"))
    }
    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(5)
    })
    fireEvent.click(screen.getByTestId("CloseAllNotice"))
    await waitFor(() => {
      expect(screen.queryByText("NoticeTitle")).not.toBeInTheDocument()
    })
  })

  test("Close notice with using close", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const [noticeId, setNoticeId] = useState<number | string | null>(null)

      const onOpen = () => {
        const id = notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
        })
        setNoticeId(id)
      }

      const onClose = () => {
        notice.close(noticeId as number | string)
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
          <Button data-testid="CloseNotice" onClick={onClose}>
            Close Notice
          </Button>
        </>
      )
    }

    render(<CloseNoticeExample />)
    fireEvent.click(screen.getByTestId("OpenNotice"))

    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(1)
    })

    fireEvent.click(screen.getByTestId("CloseNotice"))

    await waitFor(() => {
      expect(screen.queryByText("NoticeTitle")).not.toBeInTheDocument()
    })
  })

  test("Close notice with using isClosable", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const onOpen = () => {
        notice({
          title: "NoticeTitle",
          description: "NoticeDescription",
          isClosable: true,
        })
      }

      return (
        <>
          <Button data-testid="OpenNotice" onClick={onOpen}>
            Open Notice
          </Button>
        </>
      )
    }

    render(<CloseNoticeExample />)
    fireEvent.click(screen.getByTestId("OpenNotice"))

    await waitFor(() => {
      expect(screen.getAllByText("NoticeTitle")).toHaveLength(1)
    })

    const closeButton = screen.getByRole("button", { name: /close/i })
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByText("NoticeTitle")).toBeNull()
    })
  })
})
