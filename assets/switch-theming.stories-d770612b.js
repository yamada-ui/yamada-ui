import{a as e,j as r}from"./jsx-runtime-03b4ddbf.js";import{e as g}from"./extend-config-65e674e3.js";import{B as c}from"./badge-12234a4d.js";import{e as S}from"./extend-theme-8cc7e146.js";import{U as y}from"./ui-provider-103e87c5.js";import{u}from"./theme-provider-a03ffa08.js";import{V as T,H as B}from"./stack-dbacd227.js";import{B as n}from"./button-0fc0cb94.js";import{C as k}from"./container-3a082035.js";import{H as f}from"./heading-3128b2c7.js";import{W as i}from"./flex-f4e471d5.js";import{T as m}from"./tag-3aae264d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-261cdc9e.js";import"./factory-c9bc4a28.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-ab2b35f8.js";import"./environment-provider-bc762e27.js";import"./loading-provider-13df117c.js";import"./index-634aeabf.js";import"./loading-24ec3d24.js";import"./index-f08d32bc.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./icon-e1655999.js";import"./motion-9f301354.js";import"./motion-90200a2f.js";import"./index-033cf86e.js";import"./container-portal-d8f11cbb.js";import"./index-d3ea75b5.js";import"./notice-efdd60c3.js";import"./alert-77d4448d.js";import"./close-button-7617767f.js";import"./index-78c604bb.js";import"./index-8d83eaa2.js";const me={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=g({initialThemeScheme:"pink"});return e(y,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,h,p;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    themeSchemes: {
      pink: {
        semantics: {
          colors: {
            primary: 'pink.500',
            secondary: 'violet.500'
          },
          colorSchemes: {
            primary: 'pink',
            secondary: 'violet'
          }
        }
      },
      purple: {
        semantics: {
          colors: {
            primary: 'purple.500',
            secondary: 'teal.500'
          },
          colorSchemes: {
            primary: 'purple',
            secondary: 'teal'
          }
        }
      },
      green: {
        semantics: {
          colors: {
            primary: 'green.500',
            secondary: 'cyan.500'
          },
          colorSchemes: {
            primary: 'green',
            secondary: 'cyan'
          }
        }
      }
    }
  })();
  const config = extendConfig({
    initialThemeScheme: 'pink'
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme('base')}>
            Base Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme('pink')}>
            Pink Theme
          </Button>
          <Button colorScheme='purple' onClick={() => changeThemeScheme('purple')}>
            Purple Theme
          </Button>
          <Button colorScheme='green' onClick={() => changeThemeScheme('green')}>
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
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const ae=["basic"];export{ae as __namedExportsOrder,a as basic,me as default};
//# sourceMappingURL=switch-theming.stories-d770612b.js.map
