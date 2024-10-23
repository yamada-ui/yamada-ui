import{j as e}from"./extends-CwFRzn3r.js";import{p as C,b as L,c as g,ad as A}from"./factory-DBrfn43w.js";import{f as j}from"./forward-ref-BWI-Phbn.js";import{a as _}from"./use-component-style-DhRiPQIp.js";import{o as T}from"./theme-provider-Cr3m0r8P.js";import{u as N}from"./use-var-DcJHaFAf.js";import{T as t}from"./text-LaTineB_.js";import{H as y}from"./heading-B-6akxoC.js";import{L as O}from"./link-BNbhB-py.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const[D,S]=C({name:"LinkBoxContext",errorMessage:`useLinkBox returned is 'undefined'. Seems you forgot to wrap the components in "<LinkBox />"`}),v=j(({href:a,target:d,className:r,children:m,isExternal:o,rel:l,...s},c)=>{const{styles:x,variableProps:p}=S(),w={position:"static",_before:{content:'""',cursor:"inherit",display:"block",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:0,...p},...x.overlay};return e.jsx(L.a,{ref:c,href:a,target:o?"_blank":d,className:g("ui-link-box__overlay",r),rel:o?"noopener":l,__css:w,...s,children:m})}),h=j((a,d)=>{const[r,m]=_("LinkBox",a),{className:o,children:l,...s}=T(m),[c,x]=N(s,A),p={"a[href]:not(.ui-link-box__overlay), abbr[title]":{position:"relative",zIndex:"fallback(yamcha, 1)"},position:"relative",vars:c,...r.container};return e.jsx(D,{value:{styles:r,variableProps:x},children:e.jsx(L.div,{ref:d,className:g("ui-link-box",o),__css:p,...s,children:l})})}),J={component:h,title:"Components / Navigation / LinkBox"},n=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(t,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"})]}),i=()=>e.jsxs(h,{as:"article",border:"1px solid",borderColor:"inherit",boxShadow:"md",maxW:"sm",p:"md",rounded:"md",children:[e.jsx(t,{as:"span",children:"鳥山明"}),e.jsx(y,{size:"md",my:"sm",children:e.jsx(v,{href:"https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%9C%E3%83%BC%E3%83%AB",isExternal:!0,children:"ドラゴンボール"})}),e.jsx(t,{mb:"sm",children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。略称は『DB』。"}),e.jsx(O,{href:"https://dragon-ball-official.com/",fontWeight:"bold",isExternal:!0,children:"オフィシャルサイト"})]});var u,k,B;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <LinkBox as="article" border="1px solid" borderColor="inherit" boxShadow="md" maxW="sm" p="md" rounded="md">
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
  return <LinkBox as="article" border="1px solid" borderColor="inherit" boxShadow="md" maxW="sm" p="md" rounded="md">
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

      <Link href="https://dragon-ball-official.com/" fontWeight="bold" isExternal>
        オフィシャルサイト
      </Link>
    </LinkBox>;
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const K=["basic","withNestedLink"];export{K as __namedExportsOrder,n as basic,J as default,i as withNestedLink};
