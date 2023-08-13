import{j as e,a as r}from"./jsx-runtime-e6a661ac.js";import{d as D}from"./index-02774241.js";import{e as a}from"./extend-theme-be4001c2.js";import{e as P}from"./extend-config-141c4ae5.js";import{U as C}from"./ui-provider-2a96b827.js";import{u as A}from"./theme-2199e320.js";import{V as W,H as x}from"./stack-cb01ca35.js";import{B as n}from"./button-73490b67.js";import{C as w}from"./container-5d042483.js";import{H as z}from"./heading-3effb058.js";import{W as i}from"./flex-af7b5bf9.js";import{B as c}from"./badge-26913ece.js";import{T as m}from"./tag-63b69e2a.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./environment-provider-ca813800.js";import"./loading-provider-9b0281b0.js";import"./index-121a462f.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./notice-6a6f87ef.js";import"./alert-efbb756e.js";import"./use-component-style-277e16ba.js";import"./close-button-922cce2a.js";import"./index-da5324ab.js";import"./index-993965ad.js";const Te={title:"System / Theme / Dynamic Theming"},h=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s={Default:D,Pink:d,Purple:l,Green:p},g=P({initialThemeScheme:"Default"});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[S," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})},t=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s=[D,d,l,p],g=P({initialThemeScheme:0});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o(0),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o(1),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o(2),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o(3),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[(()=>{switch(S){case 0:return"Default";case 1:return"Pink";case 2:return"Purple";case 3:return"Green"}})()," ","Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var u,T,y;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const ye=["basic","useArray"];export{ye as __namedExportsOrder,h as basic,Te as default,t as useArray};
//# sourceMappingURL=dynamic-theming.stories-9782beec.js.map
