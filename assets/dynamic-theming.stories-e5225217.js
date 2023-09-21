import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{d as y}from"./index-fad5103e.js";import{e as i}from"./extend-theme-8a277c4c.js";import{e as B}from"./extend-config-4bcec52c.js";import{U as f}from"./ui-provider-494adcb9.js";import{u as k}from"./theme-f3d0af46.js";import{V as D,H as P}from"./stack-b1b08758.js";import{B as n}from"./button-900c3cb1.js";import{C}from"./container-73c9a84e.js";import{H as x}from"./heading-061f842d.js";import{W as t}from"./flex-9401cdf4.js";import{B as m}from"./badge-cc2839ae.js";import{T as c}from"./tag-0d9a3907.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-eeae9a72.js";import"./loading-provider-f5540443.js";import"./index-065321ef.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-54b001af.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-a8f76bf0.js";import"./index-d953af92.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./icon-2298db64.js";import"./index-033cf86e.js";import"./container-portal-ebea413f.js";import"./index-d3ea75b5.js";import"./notice-9f128b39.js";import"./alert-34b55442.js";import"./use-component-style-fb710021.js";import"./close-button-9cffda7a.js";import"./index-e7c2820a.js";import"./index-9451f140.js";const le={title:"System / Theme / Dynamic Theming"},a=()=>{const l=i({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),s=i({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),g=i({colors:{primary:"#38A169",secondary:"#48BB78"}})(),S={Default:y,Pink:l,Purple:s,Green:g},u=B({initialThemeScheme:"Default"});return e(f,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return r(D,{children:[r(P,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(C,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(x,{children:[T," Theme"]}),r(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,d,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const pinkTheme = extendTheme({
    colors: {
      primary: '#D53F8C',
      secondary: '#ED64A6'
    }
  })();
  const purpleTheme = extendTheme({
    colors: {
      primary: '#805AD5',
      secondary: '#9F7AEA'
    }
  })();
  const greenTheme = extendTheme({
    colors: {
      primary: '#38A169',
      secondary: '#48BB78'
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const se=["basic"];export{se as __namedExportsOrder,a as basic,le as default};
//# sourceMappingURL=dynamic-theming.stories-e5225217.js.map
