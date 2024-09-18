import { Button, forwardRef, Link, Wrap } from "@yamada-ui/react"
import type { ButtonProps, FlexProps, LinkProps, Merge } from "@yamada-ui/react"
import { Github, Npm } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n, usePage } from "contexts"
import type { FC } from "react"
import { memo } from "react"

export interface RelatedLinksProps extends FlexProps {}

export const RelatedLinks = memo(
  forwardRef<RelatedLinksProps, "div">(({ ...rest }, ref) => {
    const { package_name } = usePage()
    const { t } = useI18n()

    const isHidden = !package_name

    if (isHidden) return null

    const [, dirName] = package_name.split("/")

    const isHook = dirName.startsWith("use-")

    return (
      <Wrap ref={ref} mt="4" gap="md" {...rest}>
        {dirName ? (
          <DocumentLink
            href={`${CONSTANT.SNS.GITHUB.UI_EDIT_URL}/${
              isHook ? "hooks" : "components"
            }/${dirName}`}
            leftIcon={
              <Github
                boxSize="1rem"
                color={["blackAlpha.700", "whiteAlpha.600"]}
              />
            }
          >
            {t("component.doc-links.source")}
          </DocumentLink>
        ) : null}

        {package_name ? (
          <DocumentLink
            href={`https://www.npmjs.com/package/${package_name}`}
            leftIcon={<Npm boxSize="2rem" color="red.500" />}
          >
            {package_name}
          </DocumentLink>
        ) : null}
      </Wrap>
    )
  }),
)

export interface DocLinkProps extends Merge<LinkProps, ButtonProps> {}

const DocumentLink: FC<DocLinkProps> = memo(({ ...rest }) => {
  return (
    <Button
      as={Link}
      variant="outline"
      display="inline-flex"
      alignItems="center"
      h="8"
      rounded="md"
      borderWidth="1px"
      borderColor="border"
      px="3"
      fontSize="sm"
      fontWeight="normal"
      lineHeight="1.2"
      textDecoration="inherit"
      cursor="pointer"
      transitionProperty="common"
      transitionDuration="slower"
      color="muted"
      _hover={{
        color: ["blackAlpha.700", "whiteAlpha.600"],
        bg: [`blackAlpha.50`, `whiteAlpha.50`],
        textDecoration: "none",
      }}
      isExternal
      {...rest}
    />
  )
})

DocumentLink.displayName = "DocumentLink"
