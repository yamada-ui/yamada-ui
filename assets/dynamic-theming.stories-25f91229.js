import{j as e,a as r}from"./jsx-runtime-37f7df21.js";import{d as D}from"./index-d47dbc89.js";import{e as a}from"./extend-theme-03bdbd13.js";import{e as P}from"./extend-config-346154af.js";import{U as C}from"./ui-provider-25001f86.js";import{u as A}from"./theme-2b4f2a73.js";import{V as W,H as x}from"./stack-58a54e70.js";import{B as n}from"./button-664b0d8f.js";import{C as w}from"./container-3a4580a2.js";import{H as z}from"./heading-3d6a3dc0.js";import{W as i}from"./flex-4195fd55.js";import{B as c}from"./badge-d62556a7.js";import{T as m}from"./tag-316790e2.js";import"./index-f1f2c4b1.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./environment-provider-c122b435.js";import"./loading-provider-34b5a91f.js";import"./index-e8888536.js";import"./Combination-57c1ccd2.js";import"./tslib.es6-90f6c3e8.js";import"./motion-88bc75b0.js";import"./motion-16fcbfe3.js";import"./forward-ref-92ccee95.js";import"./loading-8fe548f5.js";import"./index-e84132d8.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";import"./icon-36765902.js";import"./index-b62ab4fb.js";import"./container-portal-07f4b31f.js";import"./index-c74c9f7f.js";import"./notice-57727710.js";import"./alert-f120eb93.js";import"./use-component-style-f03a93f0.js";import"./close-button-2f543ee4.js";import"./index-a86b0e54.js";import"./index-9082b512.js";const Se={title:"System / Theme / Dynamic Theming"},h=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s={Default:D,Pink:d,Purple:l,Green:p},g=P({initialThemeScheme:"Default"});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o("Default"),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("Pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("Purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("Green"),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[S," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})},t=()=>{const d=a({colors:{primary:"#D53F8C",secondary:"#ED64A6"}})(),l=a({colors:{primary:"#805AD5",secondary:"#9F7AEA"}})(),p=a({colors:{primary:"#38A169",secondary:"#48BB78"}})(),s=[D,d,l,p],g=P({initialThemeScheme:0});return e(C,{theme:s,config:g,children:e(()=>{const{themeScheme:S,changeThemeScheme:o}=A();return r(W,{children:[r(x,{children:[e(n,{colorScheme:"gray",onClick:()=>o(0),children:"Default Theme"}),e(n,{colorScheme:"pink",onClick:()=>o(1),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o(2),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o(3),children:"Green Theme"})]}),r(w,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(z,{children:[(()=>{switch(S){case 0:return"Default";case 1:return"Pink";case 2:return"Purple";case 3:return"Green"}})()," ","Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var u,T,y;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=dynamic-theming.stories-25f91229.js.map
