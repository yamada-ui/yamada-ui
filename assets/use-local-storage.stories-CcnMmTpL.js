import{j as S}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as f}from"./index-CAEk4Lu7.js";import{r as n}from"./index-BwDkhjyp.js";import{X as b}from"./factory-CJjTzqIw.js";import{W as B}from"./flex-DpdDxX4h.js";import{B as h}from"./button-cU1-KhRx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-Csjor6vV.js";import"./index-yOmqRA4W.js";import"./motion-DkeuV4DN.js";import"./motion-CH0CplCl.js";import"./loading-BQdsdx3B.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./theme-provider-QhVoByOm.js";import"./use-component-style-BHPJug4L.js";const j=(e,i)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},N=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},W=(e,i)=>{const s="ui-local-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=N,serialize:w=c=>j(c,i)})=>{const c=n.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]===null||o)return r??"";const u=window[e].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,a]=n.useState(c(d)),g=n.useCallback(o=>{b(o)?a(u=>{const v=o(u);return window[e].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:o(u)}})),v}):(window[e].setItem(t,w(o)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:o}})),a(o))},[t,w]),L=n.useCallback(()=>{window[e].removeItem(t),a(r)},[r,t]);return f("storage",o=>{o.storageArea===window[e]&&o.key===t&&a(p(o.newValue??void 0))}),f(s,o=>{o.detail.key===t&&a(o.detail.value)}),n.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),n.useEffect(()=>{d&&a(c())},[d,c]),[l===void 0?r:l,g,L]}},J=e=>W("localStorage","use-local-storage")(e),T={title:"Hooks / useLocalStorage"},m=()=>{const[e,i,s]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",e]}),S.jsx(h,{colorScheme:"danger",onClick:s,children:"Reset Local Storage value"})]})};var C,E,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1
  });
  return <Wrap gap="md">
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const U=["basic"];export{U as __namedExportsOrder,m as basic,T as default};
