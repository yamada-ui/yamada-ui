import type { ButtonProps, FlexProps, LinkProps, Merge } from "@yamada-ui/react"
import type { FC } from "react"
import { Button, forwardRef, Link, Wrap } from "@yamada-ui/react"
import { Github, Npm } from "components/media-and-icons"
import { CONSTANT } from "constant"
import { useI18n, usePage } from "contexts"
import { memo } from "react"

export interface RelatedLinksProps extends FlexProps {}

export const RelatedLinks = memo(
  forwardRef<RelatedLinksProps, "div">(({ ...rest }, ref) => {
    const { package_name } = usePage()
    const { t } = useI18n()

    const isHidden = !package_name

    if (isHidden) return null

    const [, dirName] = package_name.split("/")

    const isHook = !!dirName?.startsWith("use-")

    return (
      <Wrap ref={ref} gap="md" mt="4" {...rest}>
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
      _hover={{
        bg: [`blackAlpha.50`, `whiteAlpha.50`],
        color: ["blackAlpha.700", "whiteAlpha.600"],
        textDecoration: "none",
      }}
      alignItems="center"
      borderColor="border"
      borderWidth="1px"
      color="muted"
      cursor="pointer"
      display="inline-flex"
      fontSize="sm"
      fontWeight="normal"
      h="8"
      isExternal
      lineHeight="1.2"
      px="3"
      rounded="md"
      textDecoration="inherit"
      transitionDuration="slower"
      transitionProperty="common"
      variant="outline"
      {...rest}
    />
  )
})

DocumentLink.displayName = "DocumentLink"
