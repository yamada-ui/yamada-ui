import { match } from "ts-pattern"

type FragmentPosition = "start" | "end"

export const getFragmentPattern = (
  position: FragmentPosition,
  allowOppositeFragment: boolean,
) => {
  return match([position, allowOppositeFragment])
    .with(
      ["start", true],
      () => /^(?<leftFragment>:::\w+(?:\s+\w+=(?<status>\w+))?\s+).*/,
    )
    .with(
      ["start", false],
      () => /^:::\w+(?:\s+\w+=(?<status>\w+))?(?!.*:::$).*/,
    )
    .with(["end", true], () => /\S*(?<rightFragment>\s+:::)$/)
    .with(["end", false], () => /^:::$/)
    .exhaustive()
}
