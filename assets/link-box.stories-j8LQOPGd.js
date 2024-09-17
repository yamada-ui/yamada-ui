import{j as e}from"./extends-CwFRzn3r.js";import{r as L}from"./index-BwDkhjyp.js";import{af as P,ai as z,F as H,m as W,aj as G,l as M,b as A,c as O,ak as F}from"./factory-CPqzzHTm.js";import{f as _}from"./forward-ref-BWI-Phbn.js";import{a as I}from"./use-component-style-CMyamFpN.js";import{o as V}from"./theme-provider-DVkG1YcR.js";import{T as x}from"./text-DDc7b8zK.js";import{H as T}from"./heading-CFzNXB4W.js";import{L as q}from"./link-BFCdmxAg.js";import"./_commonjsHelpers-BosuxZz1.js";const N=(s,r)=>`${s}-${r}`,J=(s,r,o=N)=>{const t=L.useContext(P);return L.useMemo(()=>K(s,r,o)(t),[s,r,o,t])},K=(s,r,o=N)=>t=>{const i=[];let n={};if(!t.__breakpoints)return[i,n];const{isResponsive:d}=t.__breakpoints,c=z(s,{separator:"$$",shouldProcess:a=>!d(a)});return Object.entries(c).forEach(([a,m],h)=>{const u=a.split("$$");if(!u.some(b=>r.includes(b)))return;const f=u.at(-1),E=o(f,h),B=G[f],R=H(B)?B.token:void 0;i.push({name:E,token:R,value:m});const S=u.reduceRight((b,$)=>({[$]:b}),`$${E}`);n=W(n,S)}),[i,n]},[Q,U]=M({name:"LinkBoxContext",errorMessage:`useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`}),D=_(({className:s,isExternal:r,target:o,rel:t,href:i,children:n,...d},c)=>{const{styles:a,variableProps:m}=U(),h={position:"static",_before:{content:'""',cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%",...m},...a.overlay};return e.jsx(A.a,{ref:c,target:r?"_blank":o,rel:r?"noopener":t,className:O("ui-link-box__overlay",s),href:i,__css:h,...d,children:n})}),k=_((s,r)=>{const[o,t]=I("LinkBox",s),{className:i,children:n,...d}=V(t),[c,a]=J(d,F),m={position:"relative","a[href]:not(.ui-link-box__overlay), abbr[title]":{position:"relative",zIndex:"fallback(yamcha, 1)"},vars:c,...o.container};return e.jsx(Q,{value:{styles:o,variableProps:a},children:e.jsx(A.div,{ref:r,className:O("ui-link-box",i),__css:m,...d,children:n})})}),ae={title:"Components / Navigation / LinkBox",component:k},l=()=>e.jsxs(k,{as:"article",maxW:"sm",p:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsx(x,{as:"span",children:"鳥山明"}),e.jsx(T,{size:"md",my:"sm",children:e.jsx(D,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(x,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"})]}),p=()=>e.jsxs(k,{as:"article",maxW:"sm",p:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsx(x,{as:"span",children:"鳥山明"}),e.jsx(T,{size:"md",my:"sm",children:e.jsx(D,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(x,{mb:"sm",children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"}),e.jsx(q,{href:"https://dragon-ball-official.com/",isExternal:!0,fontWeight:"bold",children:"オフィシャルサイト"})]});var j,g,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <LinkBox as="article" maxW="sm" p="md" rounded="md" border="1px solid" borderColor="inherit" boxShadow="md">
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB" isExternal>
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>
    </LinkBox>;
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,C,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <LinkBox as="article" maxW="sm" p="md" rounded="md" border="1px solid" borderColor="inherit" boxShadow="md">
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB" isExternal>
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text mb="sm">
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>

      <Link href="https://dragon-ball-official.com/" isExternal fontWeight="bold">
        オフィシャルサイト
      </Link>
    </LinkBox>;
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const de=["basic","withNestedLink"];export{de as __namedExportsOrder,l as basic,ae as default,p as withNestedLink};
