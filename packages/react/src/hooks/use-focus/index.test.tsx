import { useRef } from "react"
import { a11y } from "#test"
import { useFocusOnShow } from "./"

describe("useFocusOnShow", () => {
  test("passes a11y checks", async () => {
    const Component = () => {
      const ref = useRef<HTMLDivElement>(null)
      const focusRef = useRef<HTMLButtonElement>(null)
      useFocusOnShow(ref, {
        focusTarget: focusRef,
        shouldFocus: true,
        visible: true,
      })

      return (
        <div ref={ref}>
          <button ref={focusRef} data-testid="button">
            Button
          </button>
        </div>
      )
    }

    await a11y(<Component />)
  })
})
