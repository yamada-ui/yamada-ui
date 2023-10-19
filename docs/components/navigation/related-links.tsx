import { Button, ButtonProps, FlexProps, forwardRef, Link, LinkProps, Wrap } from '@yamada-ui/react'
import { FC, memo } from 'react'
import { Github, Npm } from 'components/media-and-icons'
import { CONSTANT } from 'constant'
import { useI18n } from 'contexts/i18n-context'
import { usePage } from 'contexts/page-context'

export type RelatedLinksProps = FlexProps

export const RelatedLinks = memo(
  forwardRef<RelatedLinksProps, 'div'>(({ ...rest }, ref) => {
    const { package_name } = usePage()
    const { t } = useI18n()

    const isHidden = !package_name

    if (isHidden) return null

    const [, dirName] = package_name.split('/')

    const isHook = dirName.startsWith('use-')

    return (
      <Wrap ref={ref} mt='4' gap='md' {...rest}>
        {dirName ? (
          <DocumentLink
            href={`${CONSTANT.SNS.GITHUB.UI_EDIT_URL}/${
              isHook ? 'hooks' : 'components'
            }/${dirName}`}
            leftIcon={<Github boxSize='1rem' color={['gray.700', 'whiteAlpha.800']} />}
          >
            {t('component.doc-links.source')}
          </DocumentLink>
        ) : null}

        {package_name ? (
          <DocumentLink
            href={`https://www.npmjs.com/package/${package_name}`}
            leftIcon={<Npm boxSize='2rem' color='red.500' />}
          >
            {package_name}
          </DocumentLink>
        ) : null}
      </Wrap>
    )
  }),
)

type DocLinkProps = ButtonProps & LinkProps

const DocumentLink: FC<DocLinkProps> = memo(({ ...rest }) => {
  return (
    <Button
      as={Link}
      variant='outline'
      display='inline-flex'
      alignItems='center'
      h='8'
      rounded='md'
      borderWidth='1px'
      borderColor='border'
      px='3'
      fontSize='sm'
      fontWeight='normal'
      lineHeight='1.2'
      textDecoration='inherit'
      cursor='pointer'
      transitionProperty='common'
      transitionDuration='slower'
      color='muted'
      _hover={{
        color: ['gray.600', 'whiteAlpha.700'],
        bg: [`gray.100`, `whiteAlpha.200`],
        textDecoration: 'none',
      }}
      isExternal
      {...rest}
    />
  )
})

DocumentLink.displayName = 'DocumentLink'
