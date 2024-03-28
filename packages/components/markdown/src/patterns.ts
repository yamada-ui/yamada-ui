import { match } from "ts-pattern"

type FragmentPosition = "start" | "end"

export const getFragmentPattern = (
  position: FragmentPosition,
  allowOppositteFragment: boolean,
) => {
  return match([position, allowOppositteFragment])
    .with(
      ["start", true],
      () => /^(?<leftFragment>:::\w+(?:\s+\w+=(?<status>\w+))?\s+).*/,
    )
    .with(
      ["start", false],
      () => /^:::\w+(?:\s+\w+=(?<status>\w+))?(?!.*:::$).*/,
    )
    .with(["end", true], () => /\S*(?<rightFlagment>\s+:::)$/)
    .with(["end", false], () => /^:::$/)
    .exhaustive()
}
