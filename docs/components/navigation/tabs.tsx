import { Tabs as UITabs, TabsProps as UITabsProps, Tab, forwardRef } from '@yamada-ui/react'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { usePage } from 'contexts'

export type TabsProps = UITabsProps & { tab?: string }

export const Tabs = memo(
  forwardRef<TabsProps, 'div'>(({ tab, ...rest }, ref) => {
    const { tabs = [] } = usePage()
    const { push } = useRouter()

    return tabs.length ? (
      <UITabs
        ref={ref}
        colorScheme='brand'
        index={tabs.findIndex((child) => child.tab === tab)}
        mt='lg'
        overflowX='auto'
        {...rest}
      >
        {tabs.map(({ tab, menu, title, slug }) => (
          <Tab key={slug} onClick={() => push(slug)}>
            {tab ?? menu ?? title}
          </Tab>
        ))}
      </UITabs>
    ) : null
  }),
)
