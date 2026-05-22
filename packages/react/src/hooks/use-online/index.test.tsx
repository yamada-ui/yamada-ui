import type { FC } from "react"
import { renderToString } from "react-dom/server"
import { useOnline } from "./"

const Component: FC<{ getServerSnapshot?: () => boolean }> = ({
  getServerSnapshot,
}) => {
  const online = useOnline(getServerSnapshot)

  return <p data-testid="status">{String(online)}</p>
}

describe("useOnline SSR", () => {
  test("uses default getServerSnapshot during SSR", () => {
    const html = renderToString(<Component />)

    expect(html).toContain("true")
  })

  test("uses custom getServerSnapshot during SSR", () => {
    const html = renderToString(<Component getServerSnapshot={() => false} />)

    expect(html).toContain("false")
  })
})
