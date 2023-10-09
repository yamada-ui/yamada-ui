import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{e as y}from"./extend-config-58d14f6c.js";import{d as f}from"./index-dcf282fd.js";import{B as m}from"./badge-e437985e.js";import{e as i}from"./extend-theme-32f0f6a9.js";import{U as B}from"./ui-provider-07c2d7ab.js";import{u as k}from"./theme-8ffbcb8d.js";import{V as P,H as C}from"./stack-23c26cc7.js";import{B as n}from"./button-26cd920e.js";import{C as x}from"./container-f2e7b46d.js";import{H as D}from"./heading-19cd7ccc.js";import{W as t}from"./flex-be25ebe6.js";import{T as c}from"./tag-bb85d622.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-1710cdec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-41572cdb.js";import"./environment-provider-16be50e4.js";import"./loading-provider-321e31fa.js";import"./index-463d8b9a.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d7d6e7aa.js";import"./motion-90200a2f.js";import"./loading-2f69458e.js";import"./index-9e3e25b4.js";import"./index-1b18eee5.js";import"./index-93cf4015.js";import"./icon-a96e6c8c.js";import"./index-033cf86e.js";import"./container-portal-1f290143.js";import"./index-d3ea75b5.js";import"./notice-5a8655b9.js";import"./alert-44a24153.js";import"./close-button-262cf133.js";import"./index-cb46c9fe.js";import"./index-e925522b.js";const de={title:"System / Theme / Switch Theming"},a=()=>{const d=i({semantics:{colorSchemes:{primary:"pink",secondary:"violet"}}})(),s=i({semantics:{colorSchemes:{primary:"purple",secondary:"teal"}}})(),g=i({semantics:{colorSchemes:{primary:"green",secondary:"cyan"}}})(),S={Default:f,Pink:d,Purple:s,Green:g},u=y({initialThemeScheme:"Default"});return e(B,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return r(P,{children:[r(C,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(x,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(D,{children:[T," Theme"]}),r(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,p,l;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=switch-theming.stories-dc8e1d00.js.map
