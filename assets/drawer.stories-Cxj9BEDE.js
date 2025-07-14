import{d as ve,r as b,h as ye,X as q,f as Ae,k as de,Y as J,j as e,R as Le,Z as Se,_ as We,s as Fe,v as He,$ as L,y as Pe,T as F}from"./iframe-DqV1pF0Y.js";import{B as r}from"./button-BhTpfwih.js";import{W as re}from"./wrap-CipR2sIR.js";import{F as ne}from"./for-Jc9KR5-P.js";import{I as Ne}from"./image-nMbyz3k2.js";import{H as Ge}from"./heading-Bb3j_Ov5.js";import{u as ze}from"./index-tKPH2zoG.js";import{m as U,u as _e,F as Me}from"./use-modal-BvGox2cy.js";import{f as Ee}from"./fade-C7dG6002.js";import{S as Ie}from"./slide-Pna4LBKQ.js";import{C as Xe}from"./close-button-CZ7viGSs.js";import{u as te}from"./use-disclosure-CuvDWEkN.js";import{C as Ye,a as Ze,b as $e}from"./container-BnLRh4KV.js";import"./use-ripple-DSVVW1dc.js";import"./rings-sHcC8uPJ.js";import"./flex-BBgO32zm.js";import"./use-breakpoint-C0qheGjm.js";import"./use-breakpoint-value-DSoUfoVJ.js";import"./use-color-mode-value-CfexdzMu.js";import"./transition-BwAODIZU.js";import"./icon-button-CMv0JSXn.js";import"./x-icon-CbMKLqhw.js";import"./createLucideIcon-dUf62_pT.js";const qe=ve({base:{...U.base,body:{...U.base?.body,overflow:"auto"},content:{...U.base?.content,position:"fixed",rounded:"l5"},dragBar:{bg:"bg.subtle",position:"absolute",rounded:"full"}},props:{placement:{"block-end":{content:{maxW:"full",roundedBottom:"0"},dragBar:{left:"50%",minH:"2",top:"md",transform:"translateX(-50%)",w:"3xs"}},"block-start":{content:{maxW:"full",roundedTop:"0"},dragBar:{bottom:"md",left:"50%",minH:"2",transform:"translateX(-50%)",w:"3xs"}},"inline-end":{content:{roundedRight:"0"},dragBar:{h:"3xs",left:"md",minW:"2",top:"50%",transform:"translateY(-50%)"}},"inline-start":{content:{roundedLeft:"0"},dragBar:{h:"3xs",minW:"2",right:"md",top:"50%",transform:"translateY(-50%)"}}}},sizes:{xs:{content:{maxW:"xs"}},sm:{content:{maxW:"sm"}},md:{content:{maxW:"md"}},lg:{content:{maxW:"lg"}},xl:{content:{maxW:"xl"}},"2xl":{content:{maxW:"2xl"}},"3xl":{content:{maxW:"3xl"}},"4xl":{content:{maxW:"4xl"}},"5xl":{content:{maxW:"5xl"}},"6xl":{content:{maxW:"6xl"}},full:{content:{minH:"dvh",minW:"vw",rounded:"0"}}},compounds:[{css:{content:{pb:"md",_after:{bg:"bg.panel",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",top:"calc(-100dvh + 1px)",w:"full"}}},closeOnDrag:!0,placement:"block-start",withDragBar:!0},{css:{content:{pt:"md",_after:{bg:"bg.panel",bottom:"calc(-100dvh + 1px)",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",w:"full"}}},closeOnDrag:!0,placement:"block-end",withDragBar:!0},{css:{content:{ps:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",position:"absolute",right:"calc(-100% + 1px)",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-end",withDragBar:!0},{css:{content:{pe:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",left:"calc(-100% + 1px)",position:"absolute",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-start",withDragBar:!0}],defaultProps:{size:"lg",placement:"inline-end"}}),Je=({closeOnDrag:n=!1,closeOnEsc:t,closeOnOverlay:s,dragConstraints:a=0,dragElastic:i=.1,dragOffset:o=80,dragVelocity:h=100,placement:c="inline-end",onEsc:T,...k}={})=>{const{getContentProps:d,onClose:u,...f}=_e({closeOnEsc:t,closeOnOverlay:s,onEsc:T,...k}),R=b.useMemo(()=>{if(!n)return!1;switch(c){case"block-start":case"block-end":return"y";case"inline-start":case"inline-end":return"x"}},[c,n]),y=b.useCallback(m=>{switch(c){case"block-start":return{bottom:m};case"block-end":return{top:m};case"inline-start":return{right:m};case"inline-end":return{left:m}}},[c]),A=b.useCallback((m,j)=>{switch(c){case"block-start":(j.velocity.y<=h*-1||j.offset.y<=o*-1)&&u();break;case"block-end":(j.velocity.y>=h||j.offset.y>=o)&&u();break;case"inline-start":(j.velocity.x<=h*-1||j.offset.x<=o*-1)&&u();break;case"inline-end":(j.velocity.x>=h||j.offset.x>=o)&&u();break}},[c,h,o,u]),S=b.useCallback((m={})=>({drag:R,dragConstraints:y(a),dragElastic:y(i),dragMomentum:!1,dragSnapToOrigin:!0,...q(d(q(m))),onDragEnd:ye(m.onDragEnd,A)}),[R,y,a,i,A,d]),W=b.useCallback(m=>({...m}),[]);return{...f,closeOnDrag:n,getContentProps:S,getDragBarProps:W,onClose:u}},{ComponentContext:Ke,useComponentContext:B,withContext:O,withProvider:Qe}=Ae("drawer",qe),l=Qe(({allowPinchZoom:n=!1,autoFocus:t,blockScrollOnMount:s=!0,body:a,cancel:i,children:o,closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,duration:u={enter:.4,exit:.3},finalFocusRef:f,footer:R,header:y,initialFocusRef:A,lockFocusAcrossFrames:S=!0,middle:W,placement:m,restoreFocus:j,success:ue,title:pe,trigger:oe,withCloseButton:ae=!h,withDragBar:se=!0,withOverlay:De=!0,portalProps:he,onCancel:me,onCloseComplete:xe,onMiddle:we,onSuccess:ge,...Be})=>{const K=ze(m),je=de(o),[Ce,...Oe]=J(je,C),[be,...ie]=J(Oe,ee),{open:Q,getRootProps:Te,...le}=Je({closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,placement:K,...Be}),ke=!!ie.length,fe=oe?e.jsx(C,{children:oe}):null,Re=b.useMemo(()=>({duration:u,open:Q,placement:K,withCloseButton:ae,withDragBar:se,...le}),[u,Q,se,K,ae,le]);return e.jsxs(Ke,{value:Re,children:[Ce??fe,e.jsx(Le,{onExitComplete:xe,children:Q?e.jsx(Se,{...he,children:e.jsx(Me,{autoFocus:t,finalFocusRef:f,initialFocusRef:A,lockFocusAcrossFrames:S,restoreFocus:j,children:e.jsx(We,{allowPinchZoom:n,enabled:s,forwardProps:!0,children:e.jsxs(Fe.div,{...Te(),children:[be??(De?e.jsx(ee,{}):null),ke?ie:e.jsx(Ue,{body:a,cancel:i,footer:R,header:y,middle:W,success:ue,title:pe,onCancel:me,onMiddle:we,onSuccess:ge})]})})})}):null})]})},"root",{transferProps:["placement"]})(),C=O("button",{name:"OpenTrigger",slot:["trigger","open"]})(void 0,n=>{const{getOpenTriggerProps:t}=B();return{asChild:!0,...t(n)}}),v=O("button",{name:"CloseTrigger",slot:["trigger","close"]})(void 0,n=>{const{getCloseTriggerProps:t}=B();return{asChild:!0,...t(n)}}),V=O(Xe,"closeButton")(void 0,n=>{const{getCloseButtonProps:t}=B();return{...t(n)}}),ee=O(n=>{const{duration:t,getOverlayProps:s}=B();return e.jsx(He.div,{animate:"enter",custom:{duration:t},exit:"exit",initial:"exit",variants:Ee,...q(s(q(n)))})},"overlay")(),x=O(({children:n,...t})=>{const{closeOnDrag:s,duration:a,open:i,placement:o,withCloseButton:h,withDragBar:c,getContentProps:T}=B(),k=de(n),[d,...u]=J(k,V),[f,...R]=J(u,ce);return e.jsxs(Ie,{as:"section",duration:a,open:i,placement:o,...T(t),children:[d??(h?e.jsx(V,{}):null),f??(c&&s?e.jsx(ce,{}):null),R]})},"content")(),Ue=({body:n,cancel:t,footer:s,header:a,middle:i,success:o,title:h,onCancel:c,onMiddle:T,onSuccess:k})=>{const{onClose:d}=B(),u=L(p,a),f=L(w,h),R=L(g,n),y=L(D,s),A=L(r,t,{variant:"ghost",onClick:()=>c?c(d):d()}),S=L(r,i,{colorScheme:"secondary",onClick:()=>T?T(d):d()}),W=L(r,o,{colorScheme:"primary",onClick:()=>k?k(d):d()});return e.jsxs(x,{children:[u??(f?e.jsx(p,{children:f}):null),R,y??(A||S||W?e.jsxs(D,{children:[A,S,W]}):null)]})},ce=O("div","dragBar")(void 0,n=>{const{getDragBarProps:t}=B();return{...t(n)}}),p=O("header","header")(void 0,n=>{const{getHeaderProps:t}=B();return{...t(n)}}),w=O("h2","title")(void 0,n=>{const{getTitleProps:t}=B();return{...t(n)}}),g=O("div","body")(void 0,n=>{const{getBodyProps:t}=B();return{...t(n)}}),D=O("footer","footer")(void 0,n=>{const{getFooterProps:t}=B();return{...t(n)}}),Or={component:l,title:"Components / Drawer"},H=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),P=()=>e.jsx(l,{body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:"とじる",success:"Wikipedia",title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"}),onCancel:n=>n(),onSuccess:Pe}),N=()=>{const[n,t]=b.useState("md"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["xs","sm","md","lg","xl","full"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{size:n,open:s,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},G=()=>e.jsxs(l,{duration:.7,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),z=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{open:s,placement:n,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},_=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{closeOnDrag:!0,open:s,placement:n,onClose:a,children:e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},M=()=>e.jsxs(l,{closeOnDrag:!0,withCloseButton:!0,withDragBar:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),E=()=>e.jsxs(l,{withCloseButton:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),I=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(V,{colorScheme:"red"}),e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),X=()=>e.jsxs(l,{withOverlay:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Y=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsx(ee,{backdropFilter:"blur(4px)"}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Z=()=>e.jsx(l,{size:"lg",body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:{colorScheme:"danger",variant:"solid",children:"とじる"},middle:{colorScheme:"info",children:"あらすじ"},success:{colorScheme:"success",children:"Wikipedia"},title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"})}),$=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{blockScrollOnMount:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(v,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),e.jsxs(Ye,{alignItems:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"md",textAlign:"center",children:[e.jsxs(Ze,{flexDirection:"column",children:[e.jsx(Ne,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",alt:"ドラゴンボール",maxW:"md"}),e.jsx(Ge,{size:"3xl",children:"『ドラゴンボール』（DRAGON BALL）"})]}),e.jsxs($e,{children:[e.jsx(F,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsx(F,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),e.jsx(F,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),e.jsx(F,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),e.jsx(F,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),e.jsx(F,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]})]})]});H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};const br=["Basic","PropsPattern","Size","Duration","Placement","CloseOnDrag","HiddenDragBar","HiddenCloseButton","CustomCloseButton","HiddenOverlay","CustomOverlay","CustomButton","ScrollOnMount"];export{H as Basic,_ as CloseOnDrag,Z as CustomButton,I as CustomCloseButton,Y as CustomOverlay,G as Duration,E as HiddenCloseButton,M as HiddenDragBar,X as HiddenOverlay,z as Placement,P as PropsPattern,$ as ScrollOnMount,N as Size,br as __namedExportsOrder,Or as default};
