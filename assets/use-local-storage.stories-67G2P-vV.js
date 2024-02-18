import{a as v,j as B}from"./jsx-runtime-TtYKBvr-.js";import{u as f}from"./index-5OTRYkfJ.js";import{r as n}from"./index-IybTgENJ.js";import{T as x}from"./factory-ilkGXtBr.js";import{W as N}from"./flex-wW0IFTfm.js";import{B as h}from"./button-IfON6BpW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-jT9FMMYK.js";import"./index-dKw0visz.js";import"./motion-RGBG165B.js";import"./motion-HpRHdgWC.js";import"./loading-lL0YWT3j.js";import"./index-U5zsdkbG.js";import"./theme-provider-xH9zRqO9.js";import"./index-quyfJ-i_.js";import"./index-Kgfi2DNL.js";import"./icon-tcOP_kzz.js";import"./use-component-style-Ji6G5y4B.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},V=(o,i)=>{const a=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=n.useState(c(d)),g=n.useCallback(e=>{x(e)?s(u=>{const S=e(u);return window[o].setItem(t,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e(u)}})),S}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e}})),s(e))},[t,w]),b=n.useCallback(()=>{window[o].removeItem(t),s(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&s(p(e.newValue??void 0))}),f(a,e=>{e.detail.key===t&&s(e.detail.value)}),n.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,b]}},j=o=>V("localStorage","use-local-storage")(o),z={title:"Hooks / useLocalStorage"},m=()=>{const[o,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",o]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,E,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const F=["basic"];export{F as __namedExportsOrder,m as basic,z as default};
