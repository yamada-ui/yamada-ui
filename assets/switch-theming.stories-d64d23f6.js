import{a as e,j as r}from"./jsx-runtime-03b4ddbf.js";import{e as y}from"./extend-config-5db7d4c8.js";import{d as f}from"./index-b4b39f92.js";import{B as m}from"./badge-70148855.js";import{e as i}from"./extend-theme-a38f19e5.js";import{U as B}from"./ui-provider-5688b1ba.js";import{u as k}from"./theme-provider-175f48f0.js";import{V as P,H as C}from"./stack-0a07b454.js";import{B as n}from"./button-62455070.js";import{C as x}from"./container-a42c6ddf.js";import{H as D}from"./heading-7f7bb6dc.js";import{W as t}from"./flex-22dcfc91.js";import{T as c}from"./tag-bb886ce2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-8dd5dfe0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-592ec7b6.js";import"./environment-provider-e7faa3f8.js";import"./loading-provider-f1db9b7f.js";import"./index-c411739d.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-88f5c377.js";import"./motion-90200a2f.js";import"./loading-1c74febc.js";import"./index-56ac2d53.js";import"./index-1ecf7d73.js";import"./index-ffde792d.js";import"./icon-431b64e8.js";import"./index-033cf86e.js";import"./container-portal-d0b622c6.js";import"./index-d3ea75b5.js";import"./notice-c3f8fa58.js";import"./alert-d0b56e3b.js";import"./close-button-51be532f.js";import"./index-07f7fdf5.js";import"./index-89edd44a.js";const de={title:"System / Theme / Switch Theming"},a=()=>{const d=i({semantics:{colorSchemes:{primary:"pink",secondary:"violet"}}})(),s=i({semantics:{colorSchemes:{primary:"purple",secondary:"teal"}}})(),g=i({semantics:{colorSchemes:{primary:"green",secondary:"cyan"}}})(),S={Default:f,Pink:d,Purple:s,Green:g},u=y({initialThemeScheme:"Default"});return e(B,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return r(P,{children:[r(C,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(x,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(D,{children:[T," Theme"]}),r(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,p,l;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=switch-theming.stories-d64d23f6.js.map
