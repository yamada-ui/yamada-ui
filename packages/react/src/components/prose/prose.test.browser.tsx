import { page, render } from "#test/browser"
import { Prose } from "./prose"

describe("<Prose />", () => {
  test("excludes not-prose elements and their descendants", async () => {
    await render(
      <>
        <Prose>
          <h2 className="not-prose">Excluded heading</h2>
          <div>
            <div className="not-prose">
              <h2>Nested heading</h2>
            </div>
          </div>
          <h2>Styled heading</h2>
        </Prose>
        <Prose className="not-prose">
          <h2>Excluded root heading</h2>
        </Prose>
      </>,
    )

    for (const name of [
      "Excluded heading",
      "Nested heading",
      "Excluded root heading",
    ])
      await expect.element(page.getByRole("heading", { name })).toHaveStyle({
        fontSize: "16px",
        textBoxEdge: "auto",
        textBoxTrim: "none",
      })

    await expect
      .element(page.getByRole("heading", { name: "Styled heading" }))
      .toHaveStyle({
        fontSize: "24px",
        textBoxEdge: "text",
        textBoxTrim: "trim-both",
      })
  })

  test.each(["line", "outline"] as const)(
    "excludes not-prose table cells and rows with %s borders",
    async (table) => {
      await render(
        <Prose table={table}>
          <table>
            <thead>
              <tr className="not-prose">
                <th>Excluded header row</th>
              </tr>
              <tr>
                <th>Styled header</th>
                <th className="not-prose">Excluded header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First body cell</td>
              </tr>
              <tr>
                <td>Styled body cell</td>
                <td className="not-prose">Excluded body cell</td>
              </tr>
              <tr className="not-prose">
                <td>Excluded body row</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Styled footer cell</td>
                <td className="not-prose">Excluded footer cell</td>
              </tr>
              <tr className="not-prose">
                <td>Excluded footer row</td>
              </tr>
            </tfoot>
          </table>
        </Prose>,
      )

      await expect
        .element(page.getByText("Styled header", { exact: true }))
        .toHaveStyle("border-bottom-width: 1px; border-bottom-style: solid")

      for (const name of ["Styled body cell", "Styled footer cell"])
        await expect
          .element(page.getByText(name, { exact: true }))
          .toHaveStyle("border-top-width: 1px; border-top-style: solid")

      for (const name of [
        "Excluded header",
        "Excluded header row",
        "Excluded body cell",
        "Excluded body row",
        "Excluded footer cell",
        "Excluded footer row",
      ])
        await expect
          .element(page.getByText(name, { exact: true }))
          .toHaveStyle(
            "border-top-width: 0px; border-top-style: solid; border-bottom-width: 0px; border-bottom-style: solid",
          )
    },
  )
})
