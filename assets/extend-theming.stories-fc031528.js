import{a as t,j as v}from"./jsx-runtime-03b4ddbf.js";import{m as u,n as d}from"./factory-b055fecf.js";import{e as c,b as I,a as z,c as C,d as j,f as U,g as O}from"./extend-theme-4564addf.js";import{U as l}from"./ui-provider-6d3a73e5.js";import{W as F}from"./flex-24e3ba3b.js";import{B as E}from"./badge-1a3e7eed.js";import{T as A}from"./tag-79137200.js";import{B as W}from"./button-55a1630a.js";import{C as V}from"./center-d68235fb.js";import{I as _}from"./image-2783e27d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-a2012da1.js";import"./theme-provider-87f127bc.js";import"./environment-provider-0fcba816.js";import"./loading-provider-727a0c58.js";import"./index-9495b79b.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-dc7fd126.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9bbac61f.js";import"./index-f35d6182.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./icon-4b40a161.js";import"./index-033cf86e.js";import"./container-portal-995940dd.js";import"./index-d3ea75b5.js";import"./notice-f764e754.js";import"./alert-45d3587e.js";import"./use-component-style-f62022c6.js";import"./close-button-c1250682.js";import"./index-69fece7f.js";import"./index-164135f7.js";import"./use-image-a5970db2.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},ve={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(F,{gap:"md",align:"flex-start",children:[t(E,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=I("resetStyle",{}),n=z("colors",{}),o=C("Button",{}),r={baseStyle:{},variants:j("Tag",{}),sizes:U("Tag",{}),defaultProps:O("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Ie=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{Ie as __namedExportsOrder,a as basic,ve as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
//# sourceMappingURL=extend-theming.stories-fc031528.js.map
