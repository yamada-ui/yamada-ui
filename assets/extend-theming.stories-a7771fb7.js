import{j as t,a as v}from"./jsx-runtime-e6a661ac.js";import{B as I}from"./badge-4cae9d9a.js";import{e as c,b as z,a as C,c as j,d as U,f as O,g as F}from"./extend-theme-4c96dbde.js";import{m as u,l as d}from"./factory-e819892b.js";import{U as l}from"./ui-provider-ce873809.js";import{W as E}from"./flex-69bc912b.js";import{T as A}from"./tag-b43f108b.js";import{B as W}from"./button-b34f397c.js";import{C as V}from"./center-d0a65a31.js";import{I as _}from"./image-3297791d.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-c496b87d.js";import"./use-component-style-195b7054.js";import"./theme-19663a53.js";import"./index-559e4391.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./environment-provider-5e70bf46.js";import"./loading-provider-a82cb32c.js";import"./index-df6b7dd3.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-ed40a994.js";import"./motion-fb190baf.js";import"./loading-e9b5f4eb.js";import"./index-b1b61640.js";import"./index-d4d0bfa0.js";import"./index-b2e0077e.js";import"./icon-c22f2933.js";import"./index-6bcd17ac.js";import"./container-portal-cbbe0bc5.js";import"./index-2801d3c9.js";import"./notice-4f737ae2.js";import"./alert-ccabac55.js";import"./close-button-b1ad4075.js";import"./index-0a32702e.js";import"./index-1979c968.js";import"./use-image-72f885bd.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},Ie={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(E,{gap:"md",align:"flex-start",children:[t(I,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=z("resetStyle",{}),n=C("colors",{}),o=j("Button",{}),r={baseStyle:{},variants:U("Tag",{}),sizes:O("Tag",{}),defaultProps:F("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true,
    // If false, not merge default themes
    omit: [],
    // Tokens of default themes you want to omit in the merge
    pick: [] // Tokens of default themes you want to pick in the merge
  });

  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: '#1F2123'
    }
  }, {
    colors: {
      white: '#F6F6F6'
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,S,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: 'lg',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: 'solid',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: 'primary',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  })
  // or
  // withDefaultProps({
  //   defaultProps: {
  //     size: 'xl',
  //     variant: 'outline',
  //     colorScheme: 'primary',
  //   },
  //   components: ['Badge', 'Tag', 'Button'],
  // }),
  )();

  return <UIProvider theme={theme}>
      <Wrap gap='md' align='flex-start'>
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,D,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle('resetStyle', {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken('colors', {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent('Button', {
    /**
     * Define the layout you want to customize
     */
  });
  const Tag: ComponentStyle = {
    baseStyle: {
      /**
       * Define a new style
       */
    },
    variants: extendComponentVariant('Tag', {
      /**
       * Define the token you want to customize
       */
    }),
    sizes: extendComponentSize('Tag', {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps('Tag', {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    styles: {
      resetStyle
    },
    colors,
    components: {
      Button,
      Tag
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const ze=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{ze as __namedExportsOrder,a as basic,Ie as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
//# sourceMappingURL=extend-theming.stories-a7771fb7.js.map
