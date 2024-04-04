import{j as S}from"./jsx-runtime-CKrituN3.js";import{u as f}from"./index-DD-q29lx.js";import{r as n}from"./index-CBqU2yxZ.js";import{U as b}from"./factory-BVMa8fXZ.js";import{W as B}from"./flex-CB3lumw3.js";import{B as h}from"./button-Dx5nl3ZL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-D6WSMWHz.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CvgaHKJY.js";import"./loading-CvwcjMtk.js";import"./index-BtoBQEmV.js";import"./theme-provider-BXaPRWNI.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./icon-BlEaeaZb.js";import"./use-component-style-DFx-AFMQ.js";const j=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},N=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},W=(o,i)=>{const s=o==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=N,serialize:w=c=>j(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[m,a]=n.useState(c(d)),g=n.useCallback(e=>{b(e)?a(u=>{const v=e(u);return window[o].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:e(u)}})),v}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:e}})),a(e))},[t,w]),L=n.useCallback(()=>{window[o].removeItem(t),a(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&a(p(e.newValue??void 0))}),f(s,e=>{e.detail.key===t&&a(e.detail.value)}),n.useEffect(()=>{r!==void 0&&m===void 0&&g(r)},[r,m,g]),n.useEffect(()=>{d&&a(c())},[d,c]),[m===void 0?r:m,g,L]}},J=o=>W("localStorage","use-local-storage")(o),Z={title:"Hooks / useLocalStorage"},l=()=>{const[o,i,s]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",o]}),S.jsx(h,{colorScheme:"danger",onClick:s,children:"Reset Local Storage value"})]})};var C,E,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const z=["basic"];export{z as __namedExportsOrder,l as basic,Z as default};
