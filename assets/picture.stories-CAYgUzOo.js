import{j as t}from"./jsx-runtime-CfatFE5O.js";import{r as S}from"./index-ClcD9ViR.js";import{I as Q}from"./image-yu_o7gXX.js";import{f as D}from"./forward-ref-D13m8o2p.js";import{u as T}from"./theme-provider-Bsm-0rKu.js";import{E as u,ad as E,a as j}from"./factory-BPYpkDor.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-image-CBC5QSIF.js";import"./use-component-style-CYL4T5vM.js";const G=(i,n)=>{let o="";return i?(o=`(min-width: ${i}px)`,n&&(o+=` and (max-width: ${n}px)`)):o=`(max-width: ${n}px)`,o},m=D(({children:i,enableSorting:n=!0,sources:o=[],pictureProps:l,...f},h)=>{var z;const{theme:g}=T(),{queries:a}=g.__breakpoints??{},{direction:p="down",identifier:w="@media screen"}=((z=g.__config)==null?void 0:z.breakpoint)??{},W=w==="@media screen"?"@media screen and ":`${w} `,P=S.useCallback((e,r)=>{const s=p==="down"?"maxW":"minW";return u(e[s])&&!u(r[s])?-1:!u(e[s])&&u(r[s])?1:p==="down"?Number(e.maxW)-Number(r.maxW):Number(r.minW)-Number(e.minW)},[p]),k=S.useMemo(()=>{const e=o.map(({maxW:r,media:s,minW:c,...N})=>{if(s){const{maxW:q,minW:v,query:y}=(a==null?void 0:a.find(B=>B.breakpoint===s))??{};return y&&(s=y.replace(W,"")),{...N,maxW:q,media:s,minW:v}}else return c&&(c=E(c)),r&&(r=E(r)),s=G(c,r),{...N,maxW:r,media:s,minW:c}});return n?e.sort(P):e},[a,W,o,P,n]),U=S.useMemo(()=>k.map(({maxW:e,minW:r,...s},c)=>t.jsx(j.source,{...s},c)),[k]);return t.jsx(j.picture,{...l,children:i??t.jsxs(t.Fragment,{children:[U,t.jsx(Q,{ref:h,...f})]})})});m.displayName="Picture";m.__ui__="Picture";const d=({media:i,...n})=>{var a;const{theme:o}=T(),{queries:l}=o.__breakpoints??{},{identifier:f="@media screen"}=((a=o.__config)==null?void 0:a.breakpoint)??{},h=f==="@media screen"?"@media screen and ":`${f} `,{query:g}=(l==null?void 0:l.find(p=>p.breakpoint===i))??{};return g&&(i=g.replace(h,"")),t.jsx(j.source,{media:i,...n})};d.displayName="Source";d.__ui__="Source";const rt={component:m,title:"Components / Media And Icons / Picture"},x=()=>t.jsxs(t.Fragment,{children:[t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",boxSize:"xl",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}]}),t.jsxs(m,{children:[t.jsx(d,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_4.png",media:"md"}),t.jsx(d,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"}),t.jsx(d,{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"xl"}),t.jsx(Q,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",boxSize:"xl"})]})]}),b=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",boxSize:"xl",sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",media:"(max-width: 480px)"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_5.png",maxW:"4xl"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",maxW:"976px"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",maxW:1280}]}),_=()=>t.jsx(m,{src:"https://dragon-ball-official.com/assets/img/intro/intro_1.png",alt:"ドラゴンボール",boxSize:"xl",enableSorting:!1,sources:[{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_3.png",media:"lg"},{srcSet:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",media:"(max-width: 1280px)"}]});var M,$,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <>
      <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" boxSize="xl" sources={[{
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
      media: "xl"
    }, {
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
      media: "lg"
    }, {
      srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_4.png",
      media: "md"
    }]} />

      <Picture>
        <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_4.png" media="md" />
        <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_3.png" media="lg" />
        <Source srcSet="https://dragon-ball-official.com/assets/img/intro/intro_2.png" media="xl" />
        <Image src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" boxSize="xl" />
      </Picture>
    </>;
}`,...(I=($=x.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var C,F,R;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" boxSize="xl" sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
    media: "(max-width: 480px)"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_5.png",
    maxW: "4xl"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    maxW: "976px"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    maxW: 1280
  }]} />;
}`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var V,A,O;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Picture src="https://dragon-ball-official.com/assets/img/intro/intro_1.png" alt="ドラゴンボール" boxSize="xl" enableSorting={false} sources={[{
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_3.png",
    media: "lg"
  }, {
    srcSet: "https://dragon-ball-official.com/assets/img/intro/intro_2.png",
    media: "(max-width: 1280px)"
  }]} />;
}`,...(O=(A=_.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const ot=["basic","customMedia","disableSorting"];export{ot as __namedExportsOrder,x as basic,b as customMedia,rt as default,_ as disableSorting};
