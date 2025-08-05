import{d as ke,r as b,h as fe,$ as q,f as Re,u as ce,i as ye,j as e,S as Ae,a0 as ve,a1 as Le,s as Se,p as We,a2 as A,v as Fe,T as F}from"./iframe-DiGnZRjA.js";import{B as r}from"./button-BKZEusiz.js";import{W as re}from"./wrap-DEV4d2-K.js";import{F as ne}from"./for-Cftywx3K.js";import{I as He}from"./image-CEsXdZTe.js";import{H as Pe}from"./heading-Dm27pN13.js";import{u as Ne}from"./index-DEMdQNgc.js";import{m as U,u as Ge,F as ze}from"./use-modal-V75m1tNM.js";import{f as Me}from"./fade-CezDPEpk.js";import{S as _e}from"./slide-Bkk5jmh4.js";import{C as Ee}from"./close-button-CQOeG5-R.js";import{u as te}from"./use-disclosure-gtldHA3M.js";import{C as Ie,a as Xe,b as Ye}from"./container-BsG7zMtR.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-50SMBN3h.js";import"./rings-Dw5EsMos.js";import"./flex-CwyW4tB2.js";import"./use-breakpoint-Cywl6-NW.js";import"./use-breakpoint-value-D_2QFCwq.js";import"./use-color-mode-value-BSecYB6h.js";import"./transition-DsLH2JdX.js";import"./icon-button-BnRMOhp-.js";import"./x-icon-CSQNQOXl.js";import"./createLucideIcon-7V4h5xro.js";const Ze=ke({base:{...U.base,body:{...U.base?.body,overflow:"auto"},content:{...U.base?.content,position:"fixed",rounded:"l4"},dragBar:{bg:"bg.subtle",position:"absolute",rounded:"full"}},props:{placement:{"block-end":{content:{maxW:"full",roundedBottom:"0"},dragBar:{left:"50%",minH:"2",top:"md",transform:"translateX(-50%)",w:"3xs"}},"block-start":{content:{maxW:"full",roundedTop:"0"},dragBar:{bottom:"md",left:"50%",minH:"2",transform:"translateX(-50%)",w:"3xs"}},"inline-end":{content:{roundedRight:"0"},dragBar:{h:"3xs",left:"md",minW:"2",top:"50%",transform:"translateY(-50%)"}},"inline-start":{content:{roundedLeft:"0"},dragBar:{h:"3xs",minW:"2",right:"md",top:"50%",transform:"translateY(-50%)"}}}},sizes:{xs:{content:{maxW:"xs"}},sm:{content:{maxW:"sm"}},md:{content:{maxW:"md"}},lg:{content:{maxW:"lg"}},xl:{content:{maxW:"xl"}},"2xl":{content:{maxW:"2xl"}},"3xl":{content:{maxW:"3xl"}},"4xl":{content:{maxW:"4xl"}},"5xl":{content:{maxW:"5xl"}},"6xl":{content:{maxW:"6xl"}},full:{content:{minH:"dvh",minW:"vw",rounded:"0"}}},compounds:[{css:{content:{pb:"md",_after:{bg:"bg.panel",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",top:"calc(-100dvh + 1px)",w:"full"}}},closeOnDrag:!0,placement:"block-start",withDragBar:!0},{css:{content:{pt:"md",_after:{bg:"bg.panel",bottom:"calc(-100dvh + 1px)",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",w:"full"}}},closeOnDrag:!0,placement:"block-end",withDragBar:!0},{css:{content:{ps:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",position:"absolute",right:"calc(-100% + 1px)",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-end",withDragBar:!0},{css:{content:{pe:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",left:"calc(-100% + 1px)",position:"absolute",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-start",withDragBar:!0}],defaultProps:{size:"lg",placement:"inline-end"}}),$e=({closeOnDrag:n=!1,closeOnEsc:t,closeOnOverlay:s,dragConstraints:a=0,dragElastic:i=.1,dragOffset:o=80,dragVelocity:m=100,placement:c="inline-end",onEsc:T,...k}={})=>{const{getContentProps:d,onClose:u,...v}=Ge({closeOnEsc:t,closeOnOverlay:s,onEsc:T,...k}),L=b.useMemo(()=>{if(!n)return!1;switch(c){case"block-start":case"block-end":return"y";case"inline-start":case"inline-end":return"x"}},[c,n]),R=b.useCallback(h=>{switch(c){case"block-start":return{bottom:h};case"block-end":return{top:h};case"inline-start":return{right:h};case"inline-end":return{left:h}}},[c]),y=b.useCallback((h,j)=>{switch(c){case"block-start":(j.velocity.y<=m*-1||j.offset.y<=o*-1)&&u();break;case"block-end":(j.velocity.y>=m||j.offset.y>=o)&&u();break;case"inline-start":(j.velocity.x<=m*-1||j.offset.x<=o*-1)&&u();break;case"inline-end":(j.velocity.x>=m||j.offset.x>=o)&&u();break}},[c,m,o,u]),S=b.useCallback((h={})=>({drag:L,dragConstraints:R(a),dragElastic:R(i),dragMomentum:!1,dragSnapToOrigin:!0,...q(d(q(h))),onDragEnd:fe(h.onDragEnd,y)}),[L,R,a,i,y,d]),W=b.useCallback(h=>({...h}),[]);return{...v,closeOnDrag:n,getContentProps:S,getDragBarProps:W,onClose:u}},{ComponentContext:qe,useComponentContext:B,withContext:O,withProvider:Je}=Re("drawer",Ze),l=Je(({allowPinchZoom:n=!1,autoFocus:t,blockScrollOnMount:s=!0,body:a,cancel:i,children:o,closeOnDrag:m,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,duration:u={enter:.4,exit:.3},finalFocusRef:v,footer:L,header:R,initialFocusRef:y,lockFocusAcrossFrames:S=!0,middle:W,placement:h,restoreFocus:j,success:de,title:ue,trigger:oe,withCloseButton:ae=!m,withDragBar:se=!0,withOverlay:pe=!0,portalProps:De,onCancel:me,onCloseComplete:he,onMiddle:xe,onSuccess:we,...ge})=>{const J=Ne(h),[K,Be,je]=ce(o,C,ee),Ce=ye(K)&&!!K.length,{open:Q,getRootProps:Oe,...ie}=$e({closeOnDrag:m,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,placement:J,...ge}),be=oe?e.jsx(C,{children:oe}):null,Te=b.useMemo(()=>({duration:u,open:Q,placement:J,withCloseButton:ae,withDragBar:se,...ie}),[u,Q,se,J,ae,ie]);return e.jsxs(qe,{value:Te,children:[Be??be,e.jsx(Ae,{onExitComplete:he,children:Q?e.jsx(ve,{...De,children:e.jsx(ze,{autoFocus:t,finalFocusRef:v,initialFocusRef:y,lockFocusAcrossFrames:S,restoreFocus:j,children:e.jsx(Le,{allowPinchZoom:n,enabled:s,forwardProps:!0,children:e.jsxs(Se.div,{...Oe(),children:[je??(pe?e.jsx(ee,{}):null),Ce?K:e.jsx(Ke,{body:a,cancel:i,footer:L,header:R,middle:W,success:de,title:ue,onCancel:me,onMiddle:xe,onSuccess:we})]})})})}):null})]})},"root",{transferProps:["placement"]})(),C=O("button",{name:"OpenTrigger",slot:["trigger","open"]})(void 0,n=>{const{getOpenTriggerProps:t}=B();return{asChild:!0,...t(n)}}),f=O("button",{name:"CloseTrigger",slot:["trigger","close"]})(void 0,n=>{const{getCloseTriggerProps:t}=B();return{asChild:!0,...t(n)}}),V=O(Ee,"closeButton")(void 0,n=>{const{getCloseButtonProps:t}=B();return{...t(n)}}),ee=O(n=>{const{duration:t,getOverlayProps:s}=B();return e.jsx(We.div,{animate:"enter",custom:{duration:t},exit:"exit",initial:"exit",variants:Me,...q(s(q(n)))})},"overlay")(),x=O(({children:n,...t})=>{const{closeOnDrag:s,duration:a,open:i,placement:o,withCloseButton:m,withDragBar:c,getContentProps:T}=B(),[k,d,u]=ce(n,V,le);return e.jsxs(_e,{as:"section",duration:a,open:i,placement:o,...T(t),children:[d??(m?e.jsx(V,{}):null),u??(c&&s?e.jsx(le,{}):null),k]})},"content")(),Ke=({body:n,cancel:t,footer:s,header:a,middle:i,success:o,title:m,onCancel:c,onMiddle:T,onSuccess:k})=>{const{onClose:d}=B(),u=A(p,a),v=A(w,m),L=A(g,n),R=A(D,s),y=A(r,t,{variant:"ghost",onClick:()=>c?c(d):d()}),S=A(r,i,{colorScheme:"secondary",onClick:()=>T?T(d):d()}),W=A(r,o,{colorScheme:"primary",onClick:()=>k?k(d):d()});return e.jsxs(x,{children:[u??(v?e.jsx(p,{children:v}):null),L,R??(y||S||W?e.jsxs(D,{children:[y,S,W]}):null)]})},le=O("div","dragBar")(void 0,n=>{const{getDragBarProps:t}=B();return{...t(n)}}),p=O("header","header")(void 0,n=>{const{getHeaderProps:t}=B();return{...t(n)}}),w=O("h2","title")(void 0,n=>{const{getTitleProps:t}=B();return{...t(n)}}),g=O("div","body")(void 0,n=>{const{getBodyProps:t}=B();return{...t(n)}}),D=O("footer","footer")(void 0,n=>{const{getFooterProps:t}=B();return{...t(n)}}),Cr={component:l,title:"Components / Drawer"},H=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),P=()=>e.jsx(l,{body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:"とじる",success:"Wikipedia",title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"}),onCancel:n=>n(),onSuccess:Fe}),N=()=>{const[n,t]=b.useState("md"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["xs","sm","md","lg","xl","full"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{size:n,open:s,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},G=()=>e.jsxs(l,{duration:.7,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),z=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{open:s,placement:n,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},M=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{closeOnDrag:!0,open:s,placement:n,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},_=()=>e.jsxs(l,{closeOnDrag:!0,withCloseButton:!0,withDragBar:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),E=()=>e.jsxs(l,{withCloseButton:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),I=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(V,{colorScheme:"red"}),e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),X=()=>e.jsxs(l,{withOverlay:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Y=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsx(ee,{backdropFilter:"blur(4px)"}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Z=()=>e.jsx(l,{size:"lg",body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:{colorScheme:"danger",variant:"solid",children:"とじる"},middle:{colorScheme:"info",children:"あらすじ"},success:{colorScheme:"success",children:"Wikipedia"},title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"})}),$=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{blockScrollOnMount:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(f,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),e.jsxs(Ie,{alignItems:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"md",textAlign:"center",children:[e.jsxs(Xe,{flexDirection:"column",children:[e.jsx(He,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",alt:"ドラゴンボール",maxW:"md"}),e.jsx(Pe,{size:"3xl",children:"『ドラゴンボール』（DRAGON BALL）"})]}),e.jsxs(Ye,{children:[e.jsx(F,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsx(F,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),e.jsx(F,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),e.jsx(F,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),e.jsx(F,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),e.jsx(F,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]})]})]});H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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

      <Container.Root alignItems="center" border="1px solid" borderColor="inherit" boxShadow="md" gap="md" p="md" rounded="md" textAlign="center">
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
}`,...$.parameters?.docs?.source}}};const Or=["Basic","PropsPattern","Size","Duration","Placement","CloseOnDrag","HiddenDragBar","HiddenCloseButton","CustomCloseButton","HiddenOverlay","CustomOverlay","CustomButton","ScrollOnMount"];export{H as Basic,M as CloseOnDrag,Z as CustomButton,I as CustomCloseButton,Y as CustomOverlay,G as Duration,E as HiddenCloseButton,_ as HiddenDragBar,X as HiddenOverlay,z as Placement,P as PropsPattern,$ as ScrollOnMount,N as Size,Or as __namedExportsOrder,Cr as default};
