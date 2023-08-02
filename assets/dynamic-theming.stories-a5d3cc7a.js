import{j as e,a as r}from"./jsx-runtime-276775ef.js";import{d as D}from"./index-c358cdd5.js";import{e as a}from"./extend-theme-8369480d.js";import{e as P}from"./extend-config-e0da9810.js";import{U as C}from"./ui-provider-eaa09156.js";import{u as A}from"./theme-ead977c1.js";import{V as W,H as x}from"./stack-952495ca.js";import{B as n}from"./button-ffa0d6e0.js";import{C as w}from"./container-fbdd2fb1.js";import{H as z}from"./heading-6c7ed537.js";import{W as i}from"./flex-7a5fc36c.js";import{B as c}from"./badge-96880273.js";import{T as m}from"./tag-e8d7c8f0.js";import"./index-1cdf6ce0.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./environment-provider-c1da5b39.js";import"./loading-provider-480dca76.js";import"./index-0b74cf33.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-211c7716.js";import"./motion-1ef152f4.js";import"./forward-ref-86842115.js";import"./loading-8f06ecf4.js";import"./index-553b807d.js";import"./index-e7dbc2a5.js";import"./index-4cdec95f.js";import"./icon-a990f23f.js";import"./index-f3237c2b.js";import"./container-portal-5153eba9.js";import"./index-a01a9712.js";import"./notice-25b0ea87.js";import"./alert-64325b88.js";import"./use-component-style-645da9e2.js";import"./close-button-cb99a846.js";import"./index-d3c113d0.js";import"./index-9326d079.js";const Se={title:"System / Theme / Dynamic Theming"},h=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s={Default:D,Pink:d,Purple:l,Green:p},g=P({initialThemeScheme:"Default"});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[S," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})},t=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s=[D,d,l,p],g=P({initialThemeScheme:0});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o(0),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o(1),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o(2),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o(3),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[(()=>{switch(S){case 0:return"Default";case 1:return"Pink";case 2:return"Purple";case 3:return"Green"}})()," ","Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var u,T,y;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(y=(T=h.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var B,k,f;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
  const theme = [defaultTheme, pinkTheme, purpleTheme, greenTheme];
  const config = extendConfig({
    initialThemeScheme: 0
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme(0)}>
            Default Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme(1)}>
            Pink Theme
          </Button>
          <Button colorScheme='purple' onClick={() => changeThemeScheme(2)}>
            Purple Theme
          </Button>
          <Button colorScheme='green' onClick={() => changeThemeScheme(3)}>
            Green Theme
          </Button>
        </HStack>

        <Container p='md' gap='md' rounded='md' border='1px solid' borderColor='inherit' boxShadow='md'>
          <Heading>
            {(() => {
            switch (themeScheme) {
              case 0:
                return 'Default';
              case 1:
                return 'Pink';
              case 2:
                return 'Purple';
              case 3:
                return 'Green';
            }
          })()}{' '}
            Theme
          </Heading>

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
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const ue=["basic","useArray"];export{ue as __namedExportsOrder,h as basic,Se as default,t as useArray};
//# sourceMappingURL=dynamic-theming.stories-a5d3cc7a.js.map
