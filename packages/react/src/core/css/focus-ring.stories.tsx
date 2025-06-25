import { Fragment } from "react/jsx-runtime"
import { Button, ButtonPropsContext } from "../../components/button"
import { For } from "../../components/for"
import { Grid } from "../../components/grid"
import { Text } from "../../components/text"
import { dataAttr, toTitleCase } from "../../utils"

export default {
  title: "Styled System / Focus Ring",
}

export const Basic = () => {
  return (
    <Grid alignItems="center" gap="md" templateColumns="auto auto">
      <ButtonPropsContext value={{ variant: "outline" }}>
        <For
          each={
            [
              undefined,
              "outline",
              "inline",
              "mixed",
              "outside",
              "inside",
            ] as const
          }
        >
          {(value, index) => (
            <Fragment key={index}>
              <Text fontWeight="medium">{toTitleCase(value ?? "default")}</Text>

              <Button
                data-focus-visible={dataAttr(value)}
                focusVisibleRing={value}
              >
                Button
              </Button>
            </Fragment>
          )}
        </For>
      </ButtonPropsContext>
    </Grid>
  )
}
