import{a as v,j as B}from"./jsx-runtime-29545a09.js";import{u as f}from"./index-05ce3be4.js";import{r as n}from"./index-76fb7be0.js";import{E as x}from"./factory-5f559ecf.js";import{W as N}from"./flex-b48ca9be.js";import{B as h}from"./button-c5f6c9cf.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./theme-ee3e3fce.js";import"./loading-f83bd05e.js";import"./index-d06ecb96.js";import"./index-e993c520.js";import"./index-a4d0044e.js";import"./icon-96427744.js";import"./use-component-style-5e7d3fa1.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},V=(o,i)=>{const a=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:r,defaultValue:t=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return t??"";const u=window[o].getItem(r);return u!==null?p(u):t??""},[r,p,t]),[l,s]=n.useState(c(d)),g=n.useCallback(e=>{x(e)?s(u=>{const S=e(u);return window[o].setItem(r,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:r,value:e(u)}})),S}):(window[o].setItem(r,w(e)),window.dispatchEvent(new CustomEvent(a,{detail:{key:r,value:e}})),s(e))},[r,w]),b=n.useCallback(()=>{window[o].removeItem(r),s(t)},[t,r]);return f("storage",e=>{e.storageArea===window[o]&&e.key===r&&s(p(e.newValue??void 0))}),f(a,e=>{e.detail.key===r&&s(e.detail.value)}),n.useEffect(()=>{t!==void 0&&l===void 0&&g(t)},[t,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?t:l,g,b]}},j=o=>V("localStorage","use-local-storage")(o),U={title:"Hooks / useLocalStorage"},m=()=>{const[o,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(r=>r+1),children:["Current Local Storage value: ",o]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,E,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: 'value',
    defaultValue: 1
  });
  return <Wrap gap='md'>
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme='danger' onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const X=["basic"];export{X as __namedExportsOrder,m as basic,U as default};
//# sourceMappingURL=use-local-storage.stories-5d93e1e9.js.map
