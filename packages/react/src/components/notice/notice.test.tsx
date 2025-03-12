import { useRef } from "react"
import { vi } from "vitest"
import {
  a11y,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../../../test"
import { Notice, NoticeProvider, useNotice } from "./"

describe("<Notice />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <NoticeProvider>
        <Notice.Root>
          <Notice.Icon />
          <Notice.Title>Notice title</Notice.Title>
          <Notice.Description>Notice description</Notice.Description>
        </Notice.Root>
      </NoticeProvider>,
    )
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Notice.Root.displayName).toBe("NoticeRoot")
    expect(Notice.Root.__ui__).toBe("NoticeRoot")

    expect(Notice.Icon.displayName).toBe("NoticeIcon")
    expect(Notice.Icon.__ui__).toBe("NoticeIcon")

    expect(Notice.Title.displayName).toBe("NoticeTitle")
    expect(Notice.Title.__ui__).toBe("NoticeTitle")

    expect(Notice.Description.displayName).toBe("NoticeDescription")
    expect(Notice.Description.__ui__).toBe("NoticeDescription")

    expect(Notice.CloseButton.displayName).toBe("NoticeCloseButton")
    expect(Notice.CloseButton.__ui__).toBe("NoticeCloseButton")

    expect(Notice.Loading.displayName).toBe("NoticeIconLoading")
    expect(Notice.Loading.__ui__).toBe("NoticeIconLoading")
  })

  test("sets `className` correctly", () => {
    render(
      <NoticeProvider>
        <Notice.Root data-testid="notice">
          <Notice.Icon data-testid="icon" />
          <Notice.Title data-testid="title">Notice title</Notice.Title>
          <Notice.Description data-testid="description">
            Notice description
          </Notice.Description>
          <Notice.CloseButton data-testid="close-button" />
        </Notice.Root>
      </NoticeProvider>,
    )

    expect(screen.getByTestId("notice")).toHaveClass("ui-notice__root")
    expect(screen.getByTestId("icon")).toHaveClass("ui-notice__icon")
    expect(screen.getByTestId("title")).toHaveClass("ui-notice__title")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-notice__description",
    )
    expect(screen.getByTestId("close-button")).toHaveClass(
      "ui-notice__close-button",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <NoticeProvider>
        <Notice.Root data-testid="notice">
          <Notice.Icon data-testid="icon" />
          <Notice.Title data-testid="title">Notice title</Notice.Title>
          <Notice.Description data-testid="description">
            Notice description
          </Notice.Description>
          <Notice.CloseButton data-testid="close-button" />
        </Notice.Root>
      </NoticeProvider>,
    )

    expect(screen.getByTestId("notice").tagName).toBe("DIV")
    expect(screen.getByTestId("icon").tagName).toBe("svg")
    expect(screen.getByTestId("title").tagName).toBe("P")
    expect(screen.getByTestId("description").tagName).toBe("SPAN")
    expect(screen.getByTestId("close-button").tagName).toBe("BUTTON")
  })

  test("should have role='alert'", () => {
    render(
      <NoticeProvider>
        <Notice.Root>
          <Notice.Icon />
          <Notice.Title>Notice title</Notice.Title>
          <Notice.Description>Notice description</Notice.Description>
        </Notice.Root>
      </NoticeProvider>,
    )

    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  test("renders loading component correctly", () => {
    render(
      <NoticeProvider>
        <Notice.Root data-testid="notice" status="loading">
          <Notice.Loading data-testid="loading" />
          <Notice.Title>Loading Notice</Notice.Title>
          <Notice.Description>Please wait...</Notice.Description>
        </Notice.Root>
      </NoticeProvider>,
    )

    expect(screen.getByTestId("loading").tagName).toBe("svg")
    expect(screen.getByTestId("loading")).toHaveClass(
      "ui-notice__icon--loading",
    )
  })

  test("CloseButton fires onClick event when clicked", async () => {
    const onClickMock = vi.fn()
    const { user } = render(
      <NoticeProvider>
        <Notice.Root data-testid="notice">
          <Notice.Icon />
          <Notice.Title>Notice title</Notice.Title>
          <Notice.Description>Notice description</Notice.Description>
          <Notice.CloseButton
            data-testid="close-button"
            onClick={onClickMock}
          />
        </Notice.Root>
      </NoticeProvider>,
    )

    await user.click(screen.getByTestId("close-button"))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})

// Functional Tests
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

  test.skip("Only the number specified by limit is displayed", async () => {
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
      expect(screen.getAllByText(/NoticeTitle/i)).toHaveLength(3)
    })
  })

  test.skip("If the limit value is set to 1, only one is displayed", async () => {
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

  test("Dismiss all notices", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const onOpen = () => {
        notice({
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }
      const onDismissAll = () => {
        notice.dismissAll()
      }

      return (
        <>
          <button onClick={onOpen}>Open Notice</button>
          <button onClick={onDismissAll}>Dismiss All Notices</button>
        </>
      )
    }

    const { user } = render(<CloseNoticeExample />)

    const openNoticeButton = await screen.findByRole("button", {
      name: /open notice/i,
    })

    await user.click(openNoticeButton)
    await user.click(openNoticeButton)
    await user.click(openNoticeButton)

    const dismissAllButton = await screen.findByRole("button", {
      name: /dismiss all notices/i,
    })

    const queryAllNotice = () => screen.queryAllByText(/NoticeTitle/i)

    expect(queryAllNotice()).toHaveLength(3)

    await user.click(dismissAllButton)

    await waitForElementToBeRemoved(queryAllNotice)
    expect(queryAllNotice()).toHaveLength(0)
  })

  test("Dismiss notice with specific ID", async () => {
    const CloseNoticeExample = () => {
      const notice = useNotice()
      const noticeIdRef = useRef<number | string>(null)

      const onOpen = () => {
        noticeIdRef.current = notice({
          description: "NoticeDescription",
          title: "NoticeTitle",
        })
      }

      const onDismiss = () => {
        if (noticeIdRef.current) {
          notice.dismiss(noticeIdRef.current)
        }
      }

      return (
        <>
          <button onClick={onOpen}>Open Notice</button>
          <button onClick={onDismiss}>Dismiss Notice</button>
        </>
      )
    }

    const { user } = render(<CloseNoticeExample />)

    await user.click(screen.getByRole("button", { name: /open notice/i }))

    const noticeTitle = await screen.findByText(/NoticeTitle/i)
    expect(noticeTitle).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /dismiss notice/i }))

    const queryNoticeTitle = () => screen.queryByText(/NoticeTitle/i)

    await waitForElementToBeRemoved(queryNoticeTitle)
    expect(queryNoticeTitle()).toBeNull()
  })
})
