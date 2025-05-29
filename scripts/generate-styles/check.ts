import type { CSSCompatData } from "."
import { shorthandProps } from "./shorthand-props"
import { additionalProps, atRuleProps, styledProps } from "./styled-props"
import { tokens } from "./tokens"

export const checkProps = (cssCompatData: CSSCompatData) => {
  const propMap = Object.keys(cssCompatData)
  const styledPropMap = [
    ...Object.keys(additionalProps),
    ...Object.keys(styledProps),
    ...Object.keys(atRuleProps),
  ] as string[]

  Object.entries(tokens).reduce<string[]>((prev, [token, properties]) => {
    properties.forEach((property) => {
      if (prev.includes(property))
        throw new Error(
          `Duplicated prop in "token props", please check "${property}" in "${token}"`,
        )
    })

    return [...prev, ...properties]
  }, [])

  Object.entries(shorthandProps).reduce<string[]>(
    (prev, [relatedProperty, properties]) => {
      properties.forEach((property) => {
        if (prev.includes(property))
          throw new Error(
            `Duplicated prop in "shorthand props", please check "${property}" in "${relatedProperty}"`,
          )
      })

      return [...prev, ...properties]
    },
    [],
  )

  Object.entries(shorthandProps).forEach(([relatedProperty, properties]) => {
    properties.forEach((property) => {
      if (propMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "CSS Properties", please check "${property}" in "${relatedProperty}"`,
        )
    })
  })

  Object.entries(shorthandProps).forEach(([relatedProperty, properties]) => {
    properties.forEach((property) => {
      if (propMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "CSS Properties", please check "${property}" in "${relatedProperty}"`,
        )

      if (styledPropMap.includes(property))
        throw new Error(
          `Shorthand Prop already exists in "UI Props", please check "${property}" in "${relatedProperty}"`,
        )
    })
  })
}
