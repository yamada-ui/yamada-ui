import{j as e,a as r}from"./jsx-runtime-29545a09.js";import{d as y}from"./index-16b89318.js";import{e as i}from"./extend-theme-ea62e7da.js";import{e as B}from"./extend-config-f5a5d140.js";import{U as f}from"./ui-provider-230b9984.js";import{u as k}from"./theme-53967a8a.js";import{V as D,H as P}from"./stack-e0824e8f.js";import{B as n}from"./button-29566724.js";import{C}from"./container-c90dd710.js";import{H as x}from"./heading-1742f26b.js";import{W as t}from"./flex-7243abe6.js";import{B as m}from"./badge-702dd468.js";import{T as c}from"./tag-8e6d3f1b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-0893e977.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./environment-provider-d5d02e55.js";import"./loading-provider-007c3275.js";import"./index-ad143476.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-3a1a6555.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";import"./index-033cf86e.js";import"./container-portal-9ee8ff0f.js";import"./index-d3ea75b5.js";import"./notice-91eecb0f.js";import"./alert-ec0b3841.js";import"./use-component-style-1d64e7de.js";import"./close-button-69b575fd.js";import"./index-3b07572f.js";import"./index-cee88dbe.js";const le={title:"System / Theme / Dynamic Theming"},a=()=>{const l=i({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),s=i({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),g=i({colors:{primary:"#38A169",secondary:"#48BB78"}})(),S={Default:y,Pink:l,Purple:s,Green:g},u=B({initialThemeScheme:"Default"});return e(f,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return r(D,{children:[r(P,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(C,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(x,{children:[T," Theme"]}),r(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(t,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,d,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=dynamic-theming.stories-12f7fb77.js.map
