import { match } from "ts-pattern"

type FragmentPosition = "end" | "start"

export const getFragmentPattern = (
  position: FragmentPosition,
  allowOppositeFragment: boolean,
) => {
  return match([position, allowOppositeFragment])
    .with(
      ["start", true],
      () => /^(?<startFragment>:::\w+(?:\s+\w+=(?<status>\w+))?\s+).*/,
    )
    .with(
      ["start", false],
      () => /^:::\w+(?:\s+\w+=(?<status>\w+))?(?!.*:::$).*/,
    )
    .with(["end", true], () => /\S*(?<endFragment>\s+:::)$/)
    .with(["end", false], () => /^:::$/)
    .exhaustive()
}
