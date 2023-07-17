import{a as e,j as r}from"./jsx-runtime-4d953e71.js";import{e as a}from"./extend-theme-21f8bb03.js";import{e as D}from"./extend-config-3ee88182.js";import{U as P}from"./ui-provider-7833ec81.js";import{d as C}from"./index-667b1e1a.js";import{u as A}from"./theme-326cd56d.js";import{V as W,H as x}from"./stack-ac78d610.js";import{B as n}from"./button-6d999cdb.js";import{C as w}from"./container-0af2d7ee.js";import{H as z}from"./heading-879d80ae.js";import{W as i}from"./flex-afbc05c2.js";import{B as c}from"./badge-d502d06e.js";import{T as m}from"./tag-2f2e44d1.js";import"./index-de62f0e0.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./environment-provider-6d48ceb5.js";import"./loading-provider-9b746d4c.js";import"./index-37462a16.js";import"./Combination-8cb803a5.js";import"./tslib.es6-90f6c3e8.js";import"./motion-d07cf02b.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";import"./forward-ref-396247d7.js";import"./index-9f37637c.js";import"./container-portal-1a9228bd.js";import"./index-75381731.js";import"./notice-13a56f8c.js";import"./alert-47d654c2.js";import"./use-component-style-a395c77f.js";import"./close-button-5831b830.js";import"./index-f5798947.js";import"./index-690d7341.js";const ge={title:"System / Theme / Dynamic Theming"},h=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s={Default:C,Pink:d,Purple:l,Green:p},g=D({initialThemeScheme:"Default"});return e(P,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[S," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})},t=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s=[C,d,l,p],g=D({initialThemeScheme:0});return e(P,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o(0),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o(1),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o(2),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o(3),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[(()=>{switch(S){case 0:return"Default";case 1:return"Pink";case 2:return"Purple";case 3:return"Green"}})()," ","Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var u,T,y;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const Se=["basic","useArray"];export{Se as __namedExportsOrder,h as basic,ge as default,t as useArray};
//# sourceMappingURL=dynamic-theming.stories-e656d838.js.map
