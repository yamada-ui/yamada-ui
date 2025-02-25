import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{B as A,b as E,c as g,ah as _}from"./factory-DbNU74ts.js";import{f as j}from"./forward-ref-Ukjd1cIW.js";import{a as T}from"./use-component-style-CpB_lyT3.js";import{o as N}from"./theme-provider-ChqdwXGn.js";import{u as O}from"./use-var-DlbRU9j0.js";import{T as t}from"./text-DKjBQKmK.js";import{H as y}from"./heading-DsYXOt72.js";import{L as D}from"./link-bQU4jIIG.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";const[S,z]=A({name:"LinkBoxContext",errorMessage:`useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`}),v=j(({href:a,target:d,className:r,children:m,isExternal:l,external:o=l,rel:n,...c},x)=>{const{styles:p,variableProps:w}=z(),C={position:"static",_before:{content:'""',cursor:"inherit",display:"block",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:0,...w},...p.overlay};return e.jsx(E.a,{ref:x,href:a,target:o?"_blank":d,className:g("ui-link-box__overlay",r),rel:o?"noopener":n,__css:C,...c,children:m})}),h=j((a,d)=>{const[r,m]=T("LinkBox",a),{className:l,children:o,...n}=N(m),[c,x]=O(n,_),p={"a[href]:not(.ui-link-box__overlay), abbr[title]":{position:"relative",zIndex:"fallback(yamcha, 1)"},position:"relative",vars:c,...r.container};return e.jsx(S,{value:{styles:r,variableProps:x},children:e.jsx(E.div,{ref:d,className:g("ui-link-box",l),__css:p,...n,children:o})})}),K={component:h,title:"Components / Navigation / LinkBox"},s=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",external:!0,children:"ドラゴンボール"})}),e.jsx(t,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"})]}),i=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",external:!0,children:"ドラゴンボール"})}),e.jsx(t,{mb:"sm",children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"}),e.jsx(D,{href:"https://dragon-ball-official.com/",external:!0,fontWeight:"bold",children:"オフィシャルサイト"})]});var u,B,k;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var b,f,L;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
