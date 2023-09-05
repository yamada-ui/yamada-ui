import{j as e,a as n}from"./jsx-runtime-e6a661ac.js";import{d as y}from"./index-559e4391.js";import{e as i}from"./extend-theme-4c96dbde.js";import{e as B}from"./extend-config-e13eba9d.js";import{U as f}from"./ui-provider-ce873809.js";import{u as k}from"./theme-19663a53.js";import{V as D,H as P}from"./stack-8e40de81.js";import{B as r}from"./button-b34f397c.js";import{C}from"./container-81e9b390.js";import{H as x}from"./heading-19bfca25.js";import{W as t}from"./flex-69bc912b.js";import{B as m}from"./badge-4cae9d9a.js";import{T as c}from"./tag-b43f108b.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./factory-e819892b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./environment-provider-5e70bf46.js";import"./loading-provider-a82cb32c.js";import"./index-df6b7dd3.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-ed40a994.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";import"./index-6bcd17ac.js";import"./container-portal-cbbe0bc5.js";import"./index-2801d3c9.js";import"./notice-4f737ae2.js";import"./alert-ccabac55.js";import"./use-component-style-195b7054.js";import"./close-button-b1ad4075.js";import"./index-0a32702e.js";import"./index-1979c968.js";const se={title:"System / Theme / Dynamic Theming"},a=()=>{const l=i({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),s=i({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),g=i({colors:{primary:"#38A169",secondary:"#48BB78"}})(),S={Default:y,Pink:l,Purple:s,Green:g},u=B({initialThemeScheme:"Default"});return e(f,{theme:S,config:u,children:e(()=>{const{themeScheme:T,changeThemeScheme:o}=k();return n(D,{children:[n(P,{children:[e(r,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(r,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(r,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(r,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),n(C,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[n(x,{children:[T," Theme"]}),n(t,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),n(t,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),n(t,{gap:"md",children:[e(r,{colorScheme:"primary",size:"sm",children:"Primary"}),e(r,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(r,{colorScheme:"warning",size:"sm",children:"Warning"}),e(r,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var h,p,d;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ge=["basic"];export{ge as __namedExportsOrder,a as basic,se as default};
//# sourceMappingURL=dynamic-theming.stories-802623d5.js.map
