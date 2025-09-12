import{d as ke,r as b,h as fe,E as J,g as Re,u as ce,i as ye,j as e,Z as Ae,ar as Le,aL as ve,s as Se,q as We,aM as A,w as Fe,T as F}from"./iframe-Bn8cMbTR.js";import{B as r}from"./button-BuVkzRhm.js";import{W as re}from"./wrap-DwiabKAS.js";import{F as ne}from"./for-DbXOaV0m.js";import{I as He}from"./image-Brz5wNS8.js";import{H as Pe}from"./heading-Dcpj3_ac.js";import{u as Ne}from"./index-BcSg2jSG.js";import{m as $,u as Ge,F as ze}from"./use-modal-CUjB0WyR.js";import{f as Me}from"./fade-BxjOQ3bk.js";import{S as _e}from"./slide-BYlBd7Ki.js";import{C as Ee}from"./close-button-CWLh_QZS.js";import{u as te}from"./use-disclosure-CbupGkcW.js";import{C as Ie,a as Ze,b as Xe}from"./container-KR0ffown.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";import"./flex-MN_M9PAs.js";import"./use-breakpoint-eUizr5Li.js";import"./use-breakpoint-value-ItGV-DAn.js";import"./use-color-mode-value-bM_ELEgZ.js";import"./transition-DpqajPmD.js";import"./icon-button-CMJ7K4VL.js";import"./x-icon-CUNqek_Z.js";import"./createLucideIcon-C--YS6xs.js";const Ye=ke({base:{...$.base,body:{...$.base?.body,overflow:"auto"},content:{...$.base?.content,position:"fixed",rounded:"l4"},dragBar:{bg:"bg.subtle",position:"absolute",rounded:"full"}},props:{placement:{"block-end":{content:{maxW:"full",roundedBottom:"0"},dragBar:{left:"50%",minH:"2",top:"md",transform:"translateX(-50%)",w:"3xs"}},"block-start":{content:{maxW:"full",roundedTop:"0"},dragBar:{bottom:"md",left:"50%",minH:"2",transform:"translateX(-50%)",w:"3xs"}},"inline-end":{content:{roundedRight:"0"},dragBar:{h:"3xs",left:"md",minW:"2",top:"50%",transform:"translateY(-50%)"}},"inline-start":{content:{roundedLeft:"0"},dragBar:{h:"3xs",minW:"2",right:"md",top:"50%",transform:"translateY(-50%)"}}}},sizes:{xs:{content:{maxW:"xs"}},sm:{content:{maxW:"sm"}},md:{content:{maxW:"md"}},lg:{content:{maxW:"lg"}},xl:{content:{maxW:"xl"}},"2xl":{content:{maxW:"2xl"}},"3xl":{content:{maxW:"3xl"}},"4xl":{content:{maxW:"4xl"}},"5xl":{content:{maxW:"5xl"}},"6xl":{content:{maxW:"6xl"}},full:{content:{minH:"dvh",minW:"vw",rounded:"0"}}},compounds:[{css:{content:{pb:"md",_after:{bg:"bg.panel",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",top:"calc(-100dvh + 1px)",w:"full"}}},closeOnDrag:!0,placement:"block-start",withDragBar:!0},{css:{content:{pt:"md",_after:{bg:"bg.panel",bottom:"calc(-100dvh + 1px)",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",w:"full"}}},closeOnDrag:!0,placement:"block-end",withDragBar:!0},{css:{content:{ps:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",position:"absolute",right:"calc(-100% + 1px)",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-end",withDragBar:!0},{css:{content:{pe:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",left:"calc(-100% + 1px)",position:"absolute",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-start",withDragBar:!0}],defaultProps:{size:"lg",placement:"inline-end"}}),qe=({closeOnDrag:n=!1,closeOnEsc:t,closeOnOverlay:s,dragConstraints:a=0,dragElastic:i=.1,dragOffset:o=80,dragVelocity:h=100,placement:c="inline-end",onEsc:T,...k}={})=>{const{getContentProps:d,onClose:u,...L}=Ge({closeOnEsc:t,closeOnOverlay:s,onEsc:T,...k}),v=b.useMemo(()=>{if(!n)return!1;switch(c){case"block-start":case"block-end":return"y";case"inline-start":case"inline-end":return"x"}},[c,n]),R=b.useCallback(m=>{switch(c){case"block-start":return{bottom:m};case"block-end":return{top:m};case"inline-start":return{right:m};case"inline-end":return{left:m}}},[c]),y=b.useCallback((m,j)=>{switch(c){case"block-start":(j.velocity.y<=h*-1||j.offset.y<=o*-1)&&u();break;case"block-end":(j.velocity.y>=h||j.offset.y>=o)&&u();break;case"inline-start":(j.velocity.x<=h*-1||j.offset.x<=o*-1)&&u();break;case"inline-end":(j.velocity.x>=h||j.offset.x>=o)&&u();break}},[c,h,o,u]),S=b.useCallback((m={})=>({drag:v,dragConstraints:R(a),dragElastic:R(i),dragMomentum:!1,dragSnapToOrigin:!0,...J(d(J(m))),onDragEnd:fe(m.onDragEnd,y)}),[v,R,a,i,y,d]),W=b.useCallback(m=>({...m}),[]);return{...L,closeOnDrag:n,getContentProps:S,getDragBarProps:W,onClose:u}},{ComponentContext:Je,useComponentContext:B,withContext:O,withProvider:Ke}=Re("drawer",Ye),l=Ke(({allowPinchZoom:n=!1,autoFocus:t,blockScrollOnMount:s=!0,body:a,cancel:i,children:o,closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,duration:u={enter:.4,exit:.3},finalFocusRef:L,footer:v,header:R,initialFocusRef:y,lockFocusAcrossFrames:S=!0,middle:W,placement:m,restoreFocus:j,success:de,title:ue,trigger:oe,withCloseButton:ae=!h,withDragBar:se=!0,withOverlay:pe=!0,portalProps:De,onCancel:he,onCloseComplete:me,onMiddle:we,onSuccess:xe,...ge})=>{const K=Ne(m),[Q,Be,je]=ce(o,C,ee),Ce=ye(Q)&&!!Q.length,{open:U,getRootProps:Oe,...ie}=qe({closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,placement:K,...ge}),be=oe?e.jsx(C,{children:oe}):null,Te=b.useMemo(()=>({duration:u,open:U,placement:K,withCloseButton:ae,withDragBar:se,...ie}),[u,U,se,K,ae,ie]);return e.jsxs(Je,{value:Te,children:[Be??be,e.jsx(Ae,{onExitComplete:me,children:U?e.jsx(Le,{...De,children:e.jsx(ze,{autoFocus:t,finalFocusRef:L,initialFocusRef:y,lockFocusAcrossFrames:S,restoreFocus:j,children:e.jsx(ve,{allowPinchZoom:n,enabled:s,forwardProps:!0,children:e.jsxs(Se.div,{...Oe(),children:[je??(pe?e.jsx(ee,{}):null),Ce?Q:e.jsx(Qe,{body:a,cancel:i,footer:v,header:R,middle:W,success:de,title:ue,onCancel:he,onMiddle:we,onSuccess:xe})]})})})}):null})]})},"root",{transferProps:["placement"]})(),C=O("button",{name:"OpenTrigger",slot:["trigger","open"]})(void 0,n=>{const{getOpenTriggerProps:t}=B();return{asChild:!0,...t(n)}}),f=O("button",{name:"CloseTrigger",slot:["trigger","close"]})(void 0,n=>{const{getCloseTriggerProps:t}=B();return{asChild:!0,...t(n)}}),V=O(Ee,"closeButton")(void 0,n=>{const{getCloseButtonProps:t}=B();return{...t(n)}}),ee=O(n=>{const{duration:t,getOverlayProps:s}=B();return e.jsx(We.div,{animate:"enter",custom:{duration:t},exit:"exit",initial:"exit",variants:Me,...J(s(J(n)))})},"overlay")(),w=O(({children:n,...t})=>{const{closeOnDrag:s,duration:a,open:i,placement:o,withCloseButton:h,withDragBar:c,getContentProps:T}=B(),[k,d,u]=ce(n,V,le);return e.jsxs(_e,{as:"section",duration:a,open:i,placement:o,...T(t),children:[d??(h?e.jsx(V,{}):null),u??(c&&s?e.jsx(le,{}):null),k]})},"content")(),Qe=({body:n,cancel:t,footer:s,header:a,middle:i,success:o,title:h,onCancel:c,onMiddle:T,onSuccess:k})=>{const{onClose:d}=B(),u=A(p,a),L=A(x,h),v=A(g,n),R=A(D,s),y=A(r,t,{variant:"ghost",onClick:()=>c?c(d):d()}),S=A(r,i,{colorScheme:"secondary",onClick:()=>T?T(d):d()}),W=A(r,o,{colorScheme:"primary",onClick:()=>k?k(d):d()});return e.jsxs(w,{children:[u??(L?e.jsx(p,{children:L}):null),v,R??(y||S||W?e.jsxs(D,{children:[y,S,W]}):null)]})},le=O("div","dragBar")(void 0,n=>{const{getDragBarProps:t}=B();return{...t(n)}}),p=O("header","header")(void 0,n=>{const{getHeaderProps:t}=B();return{...t(n)}}),x=O("h2","title")(void 0,n=>{const{getTitleProps:t}=B();return{...t(n)}}),g=O("div","body")(void 0,n=>{const{getBodyProps:t}=B();return{...t(n)}}),D=O("footer","footer")(void 0,n=>{const{getFooterProps:t}=B();return{...t(n)}}),Or={component:l,title:"Components / Drawer"},H=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),P=()=>e.jsx(l,{body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:"とじる",success:"Wikipedia",title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"}),onCancel:n=>n(),onSuccess:Fe}),N=()=>{const[n,t]=b.useState("md"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["xs","sm","md","lg","xl","full"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{size:n,open:s,onClose:a,children:e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},G=()=>e.jsxs(l,{duration:.7,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),z=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{open:s,placement:n,onClose:a,children:e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},M=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{closeOnDrag:!0,open:s,placement:n,onClose:a,children:e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},_=()=>e.jsxs(l,{closeOnDrag:!0,withCloseButton:!0,withDragBar:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),E=()=>e.jsxs(l,{withCloseButton:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),I=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(V,{colorScheme:"red"}),e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Z=()=>e.jsxs(l,{withOverlay:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),X=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsx(ee,{backdropFilter:"blur(4px)"}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Y=()=>e.jsx(l,{size:"lg",body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:{colorScheme:"danger",variant:"solid",children:"とじる"},middle:{colorScheme:"info",children:"あらすじ"},success:{colorScheme:"success",children:"Wikipedia"},title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"})}),q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{blockScrollOnMount:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(w,{children:[e.jsx(p,{children:e.jsx(x,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),e.jsxs(Ie,{alignItems:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"l2",textAlign:"center",children:[e.jsxs(Ze,{flexDirection:"column",children:[e.jsx(He,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",alt:"ドラゴンボール",maxW:"md"}),e.jsx(Pe,{size:"3xl",children:"『ドラゴンボール』（DRAGON BALL）"})]}),e.jsxs(Xe,{children:[e.jsx(F,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsx(F,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),e.jsx(F,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),e.jsx(F,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),e.jsx(F,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),e.jsx(F,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]})]})]});H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root body="『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。" cancel="とじる" success="Wikipedia" title="ドラゴンボール" trigger={<Button>Open Drawer</Button>} onCancel={onClose => onClose()} onSuccess={noop} />;
}`,...P.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [size, setSize] = useState<Drawer.RootProps["size"]>("md");
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <For each={["xs", "sm", "md", "lg", "xl", "full"] as const}>
          {size => <Button key={size} onClick={() => {
          setSize(size);
          onOpen();
        }}>
              Open "{size}" Drawer
            </Button>}
        </For>
      </Wrap>

      <Drawer.Root size={size} open={open} onClose={onClose}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>;
}`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root duration={0.7}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...G.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [placement, setPlacement] = useState<Drawer.RootProps["placement"]>("inline-end");
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <For each={["block-start", "block-end", "inline-start", "inline-end"] as const}>
          {placement => <Button key={placement} onClick={() => {
          setPlacement(placement);
          onOpen();
        }}>
              Open "{placement}" Drawer
            </Button>}
        </For>
      </Wrap>

      <Drawer.Root open={open} placement={placement} onClose={onClose}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>;
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [placement, setPlacement] = useState<Drawer.RootProps["placement"]>("inline-end");
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Wrap gap="md">
        <For each={["block-start", "block-end", "inline-start", "inline-end"] as const}>
          {placement => <Button key={placement} onClick={() => {
          setPlacement(placement);
          onOpen();
        }}>
              Open "{placement}" Drawer
            </Button>}
        </For>
      </Wrap>

      <Drawer.Root closeOnDrag open={open} placement={placement} onClose={onClose}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Button variant="ghost" onClick={onClose}>
              とじる
            </Button>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    </>;
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root closeOnDrag withCloseButton withDragBar={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root withCloseButton={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.CloseButton colorScheme="red" />

        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...I.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root withOverlay={false}>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...Z.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root>
      <Drawer.OpenTrigger>
        <Button>Open Drawer</Button>
      </Drawer.OpenTrigger>

      <Drawer.Overlay backdropFilter="blur(4px)" />

      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>ドラゴンボール</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          『ドラゴンボール』（DRAGON
          BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
        </Drawer.Body>

        <Drawer.Footer>
          <Drawer.CloseTrigger>
            <Button variant="ghost">とじる</Button>
          </Drawer.CloseTrigger>
          <Button>Wikipedia</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>;
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <Drawer.Root size="lg" body="『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。" cancel={{
    colorScheme: "danger",
    variant: "solid",
    children: "とじる"
  }} middle={{
    colorScheme: "info",
    children: "あらすじ"
  }} success={{
    colorScheme: "success",
    children: "Wikipedia"
  }} title="ドラゴンボール" trigger={<Button>Open Drawer</Button>} />;
}`,...Y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Drawer.Root blockScrollOnMount={false}>
        <Drawer.OpenTrigger>
          <Button>Open Drawer</Button>
        </Drawer.OpenTrigger>

        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>ドラゴンボール</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Drawer.Body>

          <Drawer.Footer>
            <Drawer.CloseTrigger>
              <Button variant="ghost">とじる</Button>
            </Drawer.CloseTrigger>
            <Button>Wikipedia</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>

      <Container.Root alignItems="center" border="1px solid" borderColor="inherit" boxShadow="md" gap="md" p="md" rounded="l2" textAlign="center">
        <Container.Header flexDirection="column">
          <Image src="https://dragon-ball-official.com/assets/img/intro/intro_2.png" alt="ドラゴンボール" maxW="md" />
          <Heading size="3xl">『ドラゴンボール』（DRAGON BALL）</Heading>
        </Container.Header>

        <Container.Body>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>

          <Text>
            1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。
            連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超
            ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。
          </Text>

          <Text>
            1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。
          </Text>

          <Text>
            単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。
          </Text>

          <Text>
            ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。
          </Text>

          <Text>
            2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。
          </Text>
        </Container.Body>
      </Container.Root>
    </>;
}`,...q.parameters?.docs?.source}}};const br=["Basic","PropsPattern","Size","Duration","Placement","CloseOnDrag","HiddenDragBar","HiddenCloseButton","CustomCloseButton","HiddenOverlay","CustomOverlay","CustomButton","ScrollOnMount"];export{H as Basic,M as CloseOnDrag,Y as CustomButton,I as CustomCloseButton,X as CustomOverlay,G as Duration,E as HiddenCloseButton,_ as HiddenDragBar,Z as HiddenOverlay,z as Placement,P as PropsPattern,q as ScrollOnMount,N as Size,br as __namedExportsOrder,Or as default};
