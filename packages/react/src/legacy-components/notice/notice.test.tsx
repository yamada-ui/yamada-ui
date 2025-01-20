import { useRef, useState } from "react"
import {
  a11y,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../../../test"
import { useNotice } from "./notice"

describe("useNotice()", () => {
  const NoticeExample = () => {
    const notice = useNotice()
    const onOpen = () => {
      notice({
        description: "NoticeDescription",
        title: "NoticeTitle",
      })
    }

    return <button onClick={onOpen}>Open Notice</button>
  }

  test("Notice renders correctly", async () => {
    const { container } = render(<NoticeExample />)
    await a11y(container)
  })

  test("Should render notice", async () => {
    const { user } = render(<NoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /open notice/i,
    })
    await user.click(openNoticeButton)

    const noticeTitle = await screen.findByText(/NoticeTitle/i)
    const noticeDescription = await screen.findByText(/NoticeDescription/i)

    expect(noticeTitle).toBeInTheDocument()
    expect(noticeDescription).toBeInTheDocument()
  })

  test("Only the number specified by LIMIT is displayed", async () => {
    const LimitedNoticeExample = () => {
      const notice = useNotice({ limit: 3 })
      const onOpen = () => {
        notice({
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }

      return <button onClick={onOpen}>Open Notice</button>
    }

    const { user } = render(<LimitedNoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /open notice/i,
    })

    for (let index = 0; index < 5; index++) {
      await user.click(openNoticeButton)
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
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }

      return <button onClick={onOpen}>Open Notice</button>
    }

    const { user } = render(<LimitedNoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /Open Notice/i,
    })

    for (let index = 0; index < 5; index++) {
      await user.click(openNoticeButton)
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
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }

      return <button onClick={onOpen}>Open Notice</button>
    }

    const { user } = render(<LimitedNoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /open notice/i,
    })

    for (let index = 0; index < 5; index++) {
      await user.click(openNoticeButton)
    }
    const noticeTitles = await screen.findAllByText(/NoticeTitle/i)
    expect(noticeTitles).toHaveLength(5)
  })

  test("Update notice", async () => {
    const UpdateNoticeExample = () => {
      const notice = useNotice()
      const ref = useRef<number | string | undefined>(undefined)
      const onOpen = () => {
        ref.current = notice({
          colorScheme: "orange",
          description: "This is description.",
          duration: 30000,
          title: "Notification",
        })
      }
      const onUpdate = () => {
        if (ref.current)
          notice.update(ref.current, {
            colorScheme: "blue",
            description: "This is updated description.",
            duration: 30000,
            title: "Updated notification",
          })
      }

      return (
        <>
          <button onClick={onOpen}>Show notification</button>
          <button onClick={onUpdate}>Update last notification</button>
        </>
      )
    }

    const { user } = render(<UpdateNoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /Show notification/i,
    })
    await user.click(openNoticeButton)

    const notification = await screen.findByText("Notification")
    expect(notification).toBeInTheDocument()
    const notificationDescription = await screen.findByText(
      "This is description.",
    )
    expect(notificationDescription).toBeInTheDocument()

    const updateNoticeButton = await screen.findByRole("button", {
      name: "Update last notification",
    })
    await user.click(updateNoticeButton)

    const updatedNotification = await screen.findByText("Updated notification")
    expect(updatedNotification).toBeInTheDocument()

    const updatedNotificationDescription = await screen.findByText(
      "This is updated description.",
    )
    expect(updatedNotificationDescription).toBeInTheDocument()
  })

  test("Close all notice", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const onOpen = () => {
        notice({
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }
      const onCloseAll = () => {
        notice.closeAll()
      }

      return (
        <>
          <button onClick={onOpen}>Open Notice</button>
          <button onClick={onCloseAll}>Close All Notice</button>
        </>
      )
    }

    const { user } = render(<CloseNoticeExample />)
    const openNoticeButton = await screen.findByRole("button", {
      name: /open notice/i,
    })

    for (let index = 0; index < 5; index++) {
      await user.click(openNoticeButton)
    }

    const noticeTitles = await screen.findAllByText(/NoticeTitle/i)
    expect(noticeTitles).toHaveLength(5)

    const closeAllNoticeButton = await screen.findByRole("button", {
      name: /close all notice/i,
    })
    await user.click(closeAllNoticeButton)

    const queryAllNotice = () => screen.queryAllByText(/NoticeTitle/i)
    await waitForElementToBeRemoved(queryAllNotice())
    expect(queryAllNotice()).toHaveLength(0)
  })

  test("Close notice with using close", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const [noticeId, setNoticeId] = useState<null | number | string>(null)

      const onOpen = () => {
        const id = notice({
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
        setNoticeId(id)
      }

      const onClose = () => {
        notice.close(noticeId as number | string)
      }

      return (
        <>
          <button onClick={onOpen}>Open Notice</button>
          <button onClick={onClose}>Close Notice</button>
        </>
      )
    }

    const { user } = render(<CloseNoticeExample />)
    await user.click(screen.getByRole("button", { name: /open notice/i }))

    const noticeTitle = await screen.findByText(/NoticeTitle/i)
    expect(noticeTitle).toBeInTheDocument()

    const closeNoticeButton = await screen.findByRole("button", {
      name: /close notice/i,
    })
    await user.click(closeNoticeButton)

    const queryNoticeTitle = () => screen.queryByText(/NoticeTitle/i)
    await waitForElementToBeRemoved(queryNoticeTitle())
    expect(queryNoticeTitle()).toBeNull()
  })

  test("Close notice with using isClosable", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const onOpen = () => {
        notice({
          description: "NoticeDescription",
          isClosable: true,
          title: "NoticeTitle",
        })
      }

      return <button onClick={onOpen}>Open Notice</button>
    }

    const { user } = render(<CloseNoticeExample />)
    await user.click(screen.getByRole("button", { name: /open notice/i }))

    const noticeTitle = await screen.findByText(/NoticeTitle/i)
    expect(noticeTitle).toBeInTheDocument()

    const closeButton = await screen.findByRole("button", { name: /close/i })
    expect(closeButton).toBeInTheDocument()

    await user.click(closeButton)
    const queryNoticeTitle = () => screen.queryByText(/NoticeTitle/i)
    await waitForElementToBeRemoved(queryNoticeTitle())
    expect(queryNoticeTitle()).toBeNull()
  })
})
