import{j as e}from"./jsx-runtime-CfatFE5O.js";import{p as A,b as E,c as g,ae as _}from"./factory-CehSyZ2b.js";import{f as j}from"./forward-ref-D13m8o2p.js";import{a as T}from"./use-component-style-PhZ538dD.js";import{o as N}from"./theme-provider-BOnS9RWG.js";import{u as O}from"./use-var-C7Dt5UAR.js";import{T as t}from"./text-DxpipBZv.js";import{H as y}from"./heading-IeSrr5lO.js";import{L as D}from"./link-deCMFGJA.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const[S,z]=A({name:"LinkBoxContext",errorMessage:`useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`}),v=j(({href:a,target:d,className:o,children:m,external:r,isExternal:l,rel:n,...c},x)=>{const{styles:p,variableProps:w}=z();r??(r=l);const C={position:"static",_before:{content:'""',cursor:"inherit",display:"block",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:0,...w},...p.overlay};return e.jsx(E.a,{ref:x,href:a,target:r?"_blank":d,className:g("ui-link-box__overlay",o),rel:r?"noopener":n,__css:C,...c,children:m})}),h=j((a,d)=>{const[o,m]=T("LinkBox",a),{className:r,children:l,...n}=N(m),[c,x]=O(n,_),p={"a[href]:not(.ui-link-box__overlay), abbr[title]":{position:"relative",zIndex:"fallback(yamcha, 1)"},position:"relative",vars:c,...o.container};return e.jsx(S,{value:{styles:o,variableProps:x},children:e.jsx(E.div,{ref:d,className:g("ui-link-box",r),__css:p,...n,children:l})})}),K={component:h,title:"Components / Navigation / LinkBox"},s=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",external:!0,children:"ドラゴンボール"})}),e.jsx(t,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"})]}),i=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",external:!0,children:"ドラゴンボール"})}),e.jsx(t,{mb:"sm",children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"}),e.jsx(D,{href:"https://dragon-ball-official.com/",external:!0,fontWeight:"bold",children:"オフィシャルサイト"})]});var u,k,B;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <LinkBox as="article" border="1px solid" borderColor="inherit" boxShadow="md" maxW="sm" p="md" rounded="md">
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB" external>
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text>
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>
    </LinkBox>;
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var b,f,L;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <LinkBox as="article" border="1px solid" borderColor="inherit" boxShadow="md" maxW="sm" p="md" rounded="md">
      <Text as="span">鳥山明</Text>

      <Heading size="md" my="sm">
        <LinkOverlay href="https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB" external>
          ドラゴンボール
        </LinkOverlay>
      </Heading>

      <Text mb="sm">
        『ドラゴンボール』（DRAGON
        BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。
      </Text>

      <Link href="https://dragon-ball-official.com/" external fontWeight="bold">
        オフィシャルサイト
      </Link>
    </LinkBox>;
}`,...(L=(f=i.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};const Q=["basic","withNestedLink"];export{Q as __namedExportsOrder,s as basic,K as default,i as withNestedLink};
