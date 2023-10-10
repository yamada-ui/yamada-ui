import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{e as y}from"./extend-config-7e5ffb12.js";import{d as f}from"./index-ba0263e7.js";import{B as m}from"./badge-a8490840.js";import{e as i}from"./extend-theme-27025ce7.js";import{U as B}from"./ui-provider-a4e9fb75.js";import{u as k}from"./theme-provider-29c1af7d.js";import{V as P,H as C}from"./stack-1862a88a.js";import{B as n}from"./button-40cb76bd.js";import{C as x}from"./container-4d67f425.js";import{H as D}from"./heading-7e39c8d1.js";import{W as t}from"./flex-ce1ed7e5.js";import{T as c}from"./tag-f4fa8966.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-bced6cdc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-76eb80d8.js";import"./environment-provider-689d0b96.js";import"./loading-provider-3e72270c.js";import"./index-b7b61e0f.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-cf248fef.js";import"./motion-90200a2f.js";import"./loading-8fed7a7a.js";import"./index-2efa400f.js";import"./index-7fac9d85.js";import"./index-dad2a763.js";import"./icon-3797bc47.js";import"./index-033cf86e.js";import"./container-portal-6da291d6.js";import"./index-d3ea75b5.js";import"./notice-db5d9491.js";import"./alert-66a8b31e.js";import"./close-button-2309a4fa.js";import"./index-971aec45.js";import"./index-d467ae88.js";const de={title:"System / Theme / Switch Theming"},a=()=>{const d=i({semantics:{colorSchemes:{primary:"pink",secondary:"violet"}}})(),s=i({semantics:{colorSchemes:{primary:"purple",secondary:"teal"}}})(),g=i({semantics:{colorSchemes:{primary:"green",secondary:"cyan"}}})(),S={Default:f,Pink:d,Purple:s,Green:g},u=y({initialThemeScheme:"Default"});return e(B,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return r(P,{children:[r(C,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(x,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(D,{children:[T," Theme"]}),r(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,p,l;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const pinkTheme = extendTheme({
    semantics: {
      colorSchemes: {
        primary: 'pink',
        secondary: 'violet'
      }
    }
  })();
  const purpleTheme = extendTheme({
    semantics: {
      colorSchemes: {
        primary: 'purple',
        secondary: 'teal'
      }
    }
  })();
  const greenTheme = extendTheme({
    semantics: {
      colorSchemes: {
        primary: 'green',
        secondary: 'cyan'
      }
    }
  })();
  const theme = {
    Default: defaultTheme,
    Pink: pinkTheme,
    Purple: purpleTheme,
    Green: greenTheme
  };
  const config = extendConfig({
    initialThemeScheme: 'Default'
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme('Default')}>
            Default Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme('Pink')}>
            Pink Theme
          </Button>
          <Button colorScheme='purple' onClick={() => changeThemeScheme('Purple')}>
            Purple Theme
          </Button>
          <Button colorScheme='green' onClick={() => changeThemeScheme('Green')}>
            Green Theme
          </Button>
        </HStack>

        <Container p='md' gap='md' rounded='md' border='1px solid' borderColor='inherit' boxShadow='md'>
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap='md'>
            <Badge colorScheme='primary'>Primary</Badge>
            <Badge colorScheme='secondary'>Secondary</Badge>
            <Badge colorScheme='warning'>Warning</Badge>
            <Badge colorScheme='danger'>Danger</Badge>
          </Wrap>

          <Wrap gap='md'>
            <Tag colorScheme='primary'>Primary</Tag>
            <Tag colorScheme='secondary'>Secondary</Tag>
            <Tag colorScheme='warning'>Warning</Tag>
            <Tag colorScheme='danger'>Danger</Tag>
          </Wrap>

          <Wrap gap='md'>
            <Button colorScheme='primary' size='sm'>
              Primary
            </Button>
            <Button colorScheme='secondary' size='sm'>
              Secondary
            </Button>
            <Button colorScheme='warning' size='sm'>
              Warning
            </Button>
            <Button colorScheme='danger' size='sm'>
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>;
  };
  return <UIProvider theme={theme} config={config}>
      <App />
    </UIProvider>;
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const se=["basic"];export{se as __namedExportsOrder,a as basic,de as default};
//# sourceMappingURL=switch-theming.stories-3b455d28.js.map
