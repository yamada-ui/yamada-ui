import { Loading } from "@yamada-ui/loading"
import {
  CircleCheckBigIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "@yamada-ui/lucide"
import { a11y, render, screen } from "@yamada-ui/test"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "../src"
import { getStatusColorScheme, getStatusIcon } from "../src/alert"

describe("<Alert />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <Alert>
        <AlertIcon />
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>,
    )
  })

  test("should have role='alert'", () => {
    render(
      <Alert>
        <AlertIcon />
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>,
    )

    expect(screen.getByRole("alert")).toBeInTheDocument()
  })

  describe("getStatusColorScheme", () => {
    test("info", () => {
      expect(getStatusColorScheme("info")).toBe("info")
    })

    test("success", () => {
      expect(getStatusColorScheme("success")).toBe("success")
    })

    test("warning", () => {
      expect(getStatusColorScheme("warning")).toBe("warning")
    })

    test("error", () => {
      expect(getStatusColorScheme("error")).toBe("danger")
    })

    test("loading", () => {
      expect(getStatusColorScheme("loading")).toBe("primary")
    })
  })

  describe("getStatusIcon", () => {
    test("info", () => {
      expect(getStatusIcon("info")).toBe(InfoIcon)
    })

    test("success", () => {
      expect(getStatusIcon("success")).toBe(CircleCheckBigIcon)
    })

    test("warning", () => {
      expect(getStatusIcon("warning")).toBe(TriangleAlertIcon)
    })

    test("error", () => {
      expect(getStatusIcon("error")).toBe(TriangleAlertIcon)
    })

    test("loading", () => {
      expect(getStatusIcon("loading")).toBe(Loading)
    })
  })
})
