import { a11y } from "#test"
import { Steps } from "."
import { ButtonGroup } from "../button"

const items: Steps.Item[] = [
  {
    content: "Content A",
    description: "Description A",
    title: "Title A",
  },
  {
    content: "Content B",
    description: "Description B",
    title: "Title B",
  },
  {
    content: "Content C",
    description: "Description C",
    title: "Title C",
  },
]

describe("<Steps />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Steps.Root data-testid="root" items={items}>
        <Steps.List />
        <Steps.Contents />
        <Steps.CompletedContent data-testid="completedContent">
          Completed
        </Steps.CompletedContent>

        <ButtonGroup.Root>
          <Steps.PrevTrigger>
            <ButtonGroup.Item>Prev</ButtonGroup.Item>
          </Steps.PrevTrigger>
          <Steps.NextTrigger>
            <ButtonGroup.Item>Next</ButtonGroup.Item>
          </Steps.NextTrigger>
        </ButtonGroup.Root>
      </Steps.Root>,
    )
  })
})
