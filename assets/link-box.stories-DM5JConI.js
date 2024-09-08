import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as A}from"./index-BwDkhjyp.js";import{o as C,d as _}from"./theme-provider-BTK0d_tQ.js";import{l as T,b as L,c as g,a6 as N}from"./factory-CKqVSKj1.js";import{f as j}from"./forward-ref-DKTvpK5d.js";import{a as O}from"./use-component-style-DIJQBRrz.js";import{T as t}from"./text-C6Eawobj.js";import{H as y}from"./heading-D75YTYe9.js";import{L as D}from"./link-MDDp9iT1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";const[S,z]=T({name:"LinkBoxContext",errorMessage:`useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`}),v=j(({className:a,isExternal:o,target:s,rel:d,href:m,children:l,...r},c)=>{const{styles:x,variableProps:p}=z(),w={position:"static",_before:{content:'""',cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%",...p},...x.overlay};return e.jsx(L.a,{ref:c,target:o?"_blank":s,rel:o?"noopener":d,className:g("ui-link-box__overlay",a),href:m,__css:w,...r,children:l})}),h=j((a,o)=>{const[s,d]=O("LinkBox",a),{className:m,children:l,...r}=C(d),[c,x]=A.useMemo(()=>_(r,N),[r]),p={position:"relative","a[href]:not(.ui-link-box__overlay), abbr[title]":{position:"relative",zIndex:"fallback(yamcha, 1)"},vars:c,...s.container};return e.jsx(S,{value:{styles:s,variableProps:x},children:e.jsx(L.div,{ref:o,className:g("ui-link-box",m),__css:p,...r,children:l})})}),K={title:"Components / Navigation / LinkBox",component:h},n=()=>e.jsxs(h,{as:"article",maxW:"sm",p:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(t,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"})]}),i=()=>e.jsxs(h,{as:"article",maxW:"sm",p:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(t,{mb:"sm",children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"}),e.jsx(D,{href:"https://dragon-ball-official.com/",isExternal:!0,fontWeight:"bold",children:"オフィシャルサイト"})]});var u,k,B;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var E,b,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Q=["basic","withNestedLink"];export{Q as __namedExportsOrder,n as basic,K as default,i as withNestedLink};
