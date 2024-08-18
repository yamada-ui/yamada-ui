import{j as S}from"./jsx-runtime-Nms4Y4qS.js";import{u as f}from"./index-D5c1hkSn.js";import{r as a}from"./index-BwDkhjyp.js";import{X as b}from"./factory-DijdQyQR.js";import{W as B}from"./flex-D8IuV5pI.js";import{B as h}from"./button-BD6Gh7Mm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-BJsxvLIA.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-CN2SKHl7.js";import"./loading-CnB_IFTn.js";import"./icon-BK_bL1Yg.js";import"./index-CBA1NDKY.js";import"./theme-provider-Bovkq8wz.js";import"./use-component-style-Bw-pmo7H.js";const j=(o,n)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},N=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},W=(o,n)=>{const i="ui-local-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=N,serialize:w=c=>j(c,n)})=>{const c=a.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[m,s]=a.useState(c(d)),g=a.useCallback(e=>{b(e)?s(u=>{const v=e(u);return window[o].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:e(u)}})),v}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:e}})),s(e))},[t,w]),L=a.useCallback(()=>{window[o].removeItem(t),s(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&s(p(e.newValue??void 0))}),f(i,e=>{e.detail.key===t&&s(e.detail.value)}),a.useEffect(()=>{r!==void 0&&m===void 0&&g(r)},[r,m,g]),a.useEffect(()=>{d&&s(c())},[d,c]),[m===void 0?r:m,g,L]}},J=o=>W("localStorage","use-local-storage")(o),U={title:"Hooks / useLocalStorage"},l=()=>{const[o,n,i]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",o]}),S.jsx(h,{colorScheme:"danger",onClick:i,children:"Reset Local Storage value"})]})};var C,E,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const Y=["basic"];export{Y as __namedExportsOrder,l as basic,U as default};
