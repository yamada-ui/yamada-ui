import{a as v,j as B}from"./jsx-runtime-5BUNAZ9W.js";import{u as f}from"./index-esIlLAXy.js";import{r as n}from"./index-4g5l5LRQ.js";import{T as x}from"./factory-cZuM5uc7.js";import{W as N}from"./flex-Q0N4NdJh.js";import{B as h}from"./button-fXXqKWAC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple--RYc3gC9.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-LsoKV39r.js";import"./loading-61VaiPw8.js";import"./index-R-iIN9fN.js";import"./theme-provider-YeTkYVXb.js";import"./index-_j_eT4tT.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./use-component-style-UguhvTUx.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},V=(o,i)=>{const a=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=n.useState(c(d)),g=n.useCallback(e=>{x(e)?s(u=>{const S=e(u);return window[o].setItem(t,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e(u)}})),S}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:e}})),s(e))},[t,w]),b=n.useCallback(()=>{window[o].removeItem(t),s(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&s(p(e.newValue??void 0))}),f(a,e=>{e.detail.key===t&&s(e.detail.value)}),n.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,b]}},j=o=>V("localStorage","use-local-storage")(o),Z={title:"Hooks / useLocalStorage"},m=()=>{const[o,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",o]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,E,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const z=["basic"];export{z as __namedExportsOrder,m as basic,Z as default};
