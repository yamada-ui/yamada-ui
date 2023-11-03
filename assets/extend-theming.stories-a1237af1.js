import{a as t,j as v}from"./jsx-runtime-b08f8875.js";import{m as u,h as d}from"./factory-ab7c3580.js";import{e as c,b as I,a as z,c as C,d as j,f as U,g as O}from"./extend-theme-358aa36c.js";import{U as l}from"./ui-provider-ccaef44f.js";import{W as F}from"./flex-eedf9e68.js";import{B as E}from"./badge-b298e472.js";import{T as A}from"./tag-3bb010aa.js";import{B as W}from"./button-3d1799ed.js";import{C as V}from"./center-d172a620.js";import{I as _}from"./image-4973800f.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-19f25cb1.js";import"./theme-provider-1097130b.js";import"./environment-provider-c01394a3.js";import"./loading-provider-ee662396.js";import"./index-76f20168.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";import"./forward-ref-cf7188bd.js";import"./motion-2d0d8241.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-d647f37d.js";import"./index-8bf7f4ad.js";import"./notice-c6d0d044.js";import"./alert-96f995e0.js";import"./use-component-style-07e84389.js";import"./close-button-b4ee3b21.js";import"./index-b013f003.js";import"./index-a3b565a7.js";import"./use-image-0efcb53a.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},De={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(F,{gap:"md",align:"flex-start",children:[t(E,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=I("resetStyle",{}),n=z("colors",{}),o=C("Button",{}),r={baseStyle:{},variants:j("Tag",{}),sizes:U("Tag",{}),defaultProps:O("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const be=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{be as __namedExportsOrder,a as basic,De as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
//# sourceMappingURL=extend-theming.stories-a1237af1.js.map
