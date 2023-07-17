import{j as v,a as B}from"./jsx-runtime-4d953e71.js";import{u as f}from"./index-888cd3c5.js";import{r as n}from"./index-de62f0e0.js";import{F as x}from"./factory-07cc9cf0.js";import{W as N}from"./flex-afbc05c2.js";import{B as h}from"./button-6d999cdb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./forward-ref-396247d7.js";import"./theme-326cd56d.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";import"./use-component-style-a395c77f.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},V=(o,i)=>{const a=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:r,defaultValue:t=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return t??"";const u=window[o].getItem(r);return u!==null?p(u):t??""},[r,p,t]),[l,s]=n.useState(c(d)),g=n.useCallback(e=>{x(e)?s(u=>{const S=e(u);return window[o].setItem(r,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:r,value:e(u)}})),S}):(window[o].setItem(r,w(e)),window.dispatchEvent(new CustomEvent(a,{detail:{key:r,value:e}})),s(e))},[r,w]),b=n.useCallback(()=>{window[o].removeItem(r),s(t)},[t,r]);return f("storage",e=>{e.storageArea===window[o]&&e.key===r&&s(p(e.newValue??void 0))}),f(a,e=>{e.detail.key===r&&s(e.detail.value)}),n.useEffect(()=>{t!==void 0&&l===void 0&&g(t)},[t,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?t:l,g,b]}},j=o=>V("localStorage","use-local-storage")(o),T={title:"Hooks / useLocalStorage"},m=()=>{const[o,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(r=>r+1),children:["Current Local Storage value: ",o]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,E,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const U=["basic"];export{U as __namedExportsOrder,m as basic,T as default};
//# sourceMappingURL=use-local-storage.stories-bcdf6387.js.map
