import{j as t}from"./jsx-runtime-CfatFE5O.js";import{e as p,b,a as v,c as I,d as z,f as C,g as U}from"./extend-theme-39cid9jV.js";import{U as u}from"./ui-provider-edvKUWiw.js";import{m as l,P as d}from"./factory-Nur_zO5a.js";import{W as O}from"./flex-D0g4BNvT.js";import{B as E}from"./badge-Dhfu5VTn.js";import{T as F}from"./tag-DXoEf_E7.js";import{B as A}from"./button-CCbGPPx6.js";import{C as W}from"./center-DbI1M6cv.js";import{I as V}from"./image-C8hXf6L7.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BKO6AKac.js";import"./theme-provider-BsBO7Bt7.js";import"./i18n-provider-CHVVk7pM.js";import"./proxy-BYKFXsWv.js";import"./loading-provider-Cgn_kgsf.js";import"./index-BNtkqexU.js";import"./Combination-CkmEMpJG.js";import"./loading-Bz0vGPrC.js";import"./icon-M07mMfJs.js";import"./use-component-style-DXYrx7jC.js";import"./use-var-BmU0CMcq.js";import"./forward-ref-D13m8o2p.js";import"./index-BkD6i14w.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-C7oui4wX.js";import"./notice-BxRycEFA.js";import"./alert-Ol2ee-1X.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./index-Ci6jtn_l.js";import"./index-DdZUI5bP.js";import"./use-image-CmKgOqFG.js";function _({size:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})}}function M({variant:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})}}function R({colorScheme:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})}}const Pe={title:"System / Theme / Extend Theming"},a=()=>{const e=p({})({merge:!0,omit:[],pick:[]});return t.jsx(u,{theme:e,children:t.jsx(f,{})})},m=()=>{const e=p({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t.jsx(u,{theme:e,children:t.jsx(f,{})})},i=()=>{const e=p(_({size:"lg",components:["Badge","Tag","Button"]}),M({variant:"solid",components:["Badge","Tag","Button"]}),R({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t.jsx(u,{theme:e,children:t.jsxs(O,{align:"flex-start",gap:"md",children:[t.jsx(E,{children:"Badge"}),t.jsx(F,{children:"Tag"}),t.jsx(A,{children:"Button"})]})})},c=()=>{const e=b("resetStyle",{}),n=v("colors",{}),o=I("Button",{}),r={baseStyle:{},sizes:z("Tag",{}),variants:C("Tag",{}),defaultProps:U("Tag",{})},s=p({colors:n,components:{Button:o,Tag:r},styles:{resetStyle:e}})({merge:!1});return t.jsx(u,{theme:s,children:t.jsx(f,{})})},f=()=>t.jsx(W,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:t.jsx(V,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"32rem",w:"full"})});var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,T,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: "#1F2123"
    }
  }, {
    colors: {
      white: "#F6F6F6"
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var w,S,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: "lg",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: "solid",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
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
      <Wrap align="flex-start" gap="md">
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,k,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent("Button", {
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
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    variants: extendComponentVariant("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps("Tag", {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    colors,
    components: {
      Button,
      Tag
    },
    styles: {
      resetStyle
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const ke=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{ke as __namedExportsOrder,a as basic,Pe as default,c as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
