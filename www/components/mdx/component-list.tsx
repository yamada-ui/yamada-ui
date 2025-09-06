import type { GridProps } from "@yamada-ui/react"
import { Grid } from "@yamada-ui/react"
import { useMemo } from "react"
import { getDocMap } from "@/data"
import { useLocale } from "@/i18n"
import { NextLink } from "../next-link"

export interface ComponentListProps extends GridProps {}

export function ComponentList(props: ComponentListProps) {
  const { locale } = useLocale()
  const components = useMemo(() => {
    const docMap = getDocMap(locale)
    const { items } =
      docMap.items?.find(({ segment }) => segment === "components") ?? {}

    return (
      items
        ?.filter(({ items }) => !!items)
        .flatMap(({ items }) => items ?? []) ?? []
    )
  }, [locale])

  return (
    <Grid
      fontSize="sm"
      gap={{ base: "lg", sm: "md" }}
      my="lg"
      templateColumns={{
        base: "repeat(3, 1fr)",
        sm: "1fr",
        lg: "repeat(2, 1fr)",
      }}
      {...props}
    >
      {components.map(({ pathname, segment, title }) => (
        <NextLink key={segment} href={pathname}>
          {title}
        </NextLink>
      ))}
    </Grid>
  )
}
