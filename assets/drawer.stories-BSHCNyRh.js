import{d as pr,r as b,h as Dr,L as q,g as hr,u as Ke,i as xr,j as e,a6 as mr,ar as wr,aX as gr,s as Br,t as jr,aY as A,D as Cr,Q as r,E as Or,T as F}from"./iframe-LqombrNM.js";import{W as re}from"./wrap-DK7EupBs.js";import{F as ne}from"./for-CkWl_ugB.js";import{I as br}from"./image-BALZFFgX.js";import{H as Tr}from"./heading-Bq_Y6181.js";import{u as kr}from"./index-CM3S4n_z.js";import{m as $,u as Rr,F as fr}from"./use-modal-Bjcv5VI6.js";import{f as yr}from"./fade-H29d4_sJ.js";import{S as Ar}from"./slide-tw9c1ED-.js";import{u as te}from"./use-disclosure-CW_ifDRS.js";import{C as Lr,a as vr,b as Sr}from"./container-w9QzqZyP.js";import"./preload-helper-C1FmrZbK.js";import"./flex-ksADg7SB.js";import"./use-breakpoint-Cd5iIj4S.js";import"./use-breakpoint-value-hp_pLYBn.js";import"./use-color-mode-value-C3KP8KHB.js";import"./transition-pNAeQrmt.js";var ce,de;const Wr=pr({base:{...$.base,body:{...(ce=$.base)==null?void 0:ce.body,overflow:"auto"},content:{...(de=$.base)==null?void 0:de.content,position:"fixed",rounded:"l4"},dragBar:{bg:"bg.subtle",position:"absolute",rounded:"full"}},props:{placement:{"block-end":{content:{maxW:"full",roundedBottom:"0"},dragBar:{left:"50%",minH:"2",top:"md",transform:"translateX(-50%)",w:"3xs"}},"block-start":{content:{maxW:"full",roundedTop:"0"},dragBar:{bottom:"md",left:"50%",minH:"2",transform:"translateX(-50%)",w:"3xs"}},"inline-end":{content:{roundedRight:"0"},dragBar:{h:"3xs",left:"md",minW:"2",top:"50%",transform:"translateY(-50%)"}},"inline-start":{content:{roundedLeft:"0"},dragBar:{h:"3xs",minW:"2",right:"md",top:"50%",transform:"translateY(-50%)"}}}},sizes:{xs:{content:{maxW:"xs"}},sm:{content:{maxW:"sm"}},md:{content:{maxW:"md"}},lg:{content:{maxW:"lg"}},xl:{content:{maxW:"xl"}},"2xl":{content:{maxW:"2xl"}},"3xl":{content:{maxW:"3xl"}},"4xl":{content:{maxW:"4xl"}},"5xl":{content:{maxW:"5xl"}},"6xl":{content:{maxW:"6xl"}},full:{content:{minH:"dvh",minW:"vw",rounded:"0"}}},compounds:[{css:{content:{pb:"md",_after:{bg:"bg.panel",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",top:"calc(-100dvh + 1px)",w:"full"}}},closeOnDrag:!0,placement:"block-start",withDragBar:!0},{css:{content:{pt:"md",_after:{bg:"bg.panel",bottom:"calc(-100dvh + 1px)",display:"block",h:"dvh",left:"0",position:"absolute",right:"0",w:"full"}}},closeOnDrag:!0,placement:"block-end",withDragBar:!0},{css:{content:{ps:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",position:"absolute",right:"calc(-100% + 1px)",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-end",withDragBar:!0},{css:{content:{pe:"md",_after:{bg:"bg.panel",bottom:"0",display:"block",h:"dvh",left:"calc(-100% + 1px)",position:"absolute",top:"0",w:"full"}}},closeOnDrag:!0,placement:"inline-start",withDragBar:!0}],defaultProps:{size:"lg",placement:"inline-end"}}),Fr=({closeOnDrag:n=!1,closeOnEsc:t,closeOnOverlay:s,dragConstraints:a=0,dragElastic:i=.1,dragOffset:o=80,dragVelocity:h=100,placement:c="inline-end",onEsc:T,...k}={})=>{const{getContentProps:d,onClose:u,...L}=Rr({closeOnEsc:t,closeOnOverlay:s,onEsc:T,...k}),v=b.useMemo(()=>{if(!n)return!1;switch(c){case"block-start":case"block-end":return"y";case"inline-start":case"inline-end":return"x"}},[c,n]),f=b.useCallback(x=>{switch(c){case"block-start":return{bottom:x};case"block-end":return{top:x};case"inline-start":return{right:x};case"inline-end":return{left:x}}},[c]),y=b.useCallback((x,j)=>{switch(c){case"block-start":(j.velocity.y<=h*-1||j.offset.y<=o*-1)&&u();break;case"block-end":(j.velocity.y>=h||j.offset.y>=o)&&u();break;case"inline-start":(j.velocity.x<=h*-1||j.offset.x<=o*-1)&&u();break;case"inline-end":(j.velocity.x>=h||j.offset.x>=o)&&u();break}},[c,h,o,u]),S=b.useCallback((x={})=>({drag:v,dragConstraints:f(a),dragElastic:f(i),dragMomentum:!1,dragSnapToOrigin:!0,...q(d(q(x))),onDragEnd:Dr(x.onDragEnd,y)}),[v,f,a,i,y,d]),W=b.useCallback(x=>({...x}),[]);return{...L,closeOnDrag:n,getContentProps:S,getDragBarProps:W,onClose:u}},{ComponentContext:Hr,useComponentContext:B,withContext:O,withProvider:Pr}=hr("drawer",Wr),l=Pr(({allowPinchZoom:n=!1,autoFocus:t,blockScrollOnMount:s=!0,body:a,cancel:i,children:o,closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,duration:u={enter:.4,exit:.3},finalFocusRef:L,footer:v,header:f,initialFocusRef:y,lockFocusAcrossFrames:S=!0,middle:W,placement:x,restoreFocus:j,success:Ue,title:$e,trigger:oe,withCloseButton:ae=!h,withDragBar:se=!0,withOverlay:Ve=!0,portalProps:er,onCancel:rr,onCloseComplete:nr,onMiddle:tr,onSuccess:or,...ar})=>{const J=kr(x),[K,sr,ir]=Ke(o,C,ee),lr=xr(K)&&!!K.length,{open:U,getRootProps:cr,...ie}=Fr({closeOnDrag:h,dragConstraints:c,dragElastic:T,dragOffset:k,dragVelocity:d,placement:J,...ar}),dr=oe?e.jsx(C,{children:oe}):null,ur=b.useMemo(()=>({duration:u,open:U,placement:J,withCloseButton:ae,withDragBar:se,...ie}),[u,U,se,J,ae,ie]);return e.jsxs(Hr,{value:ur,children:[sr??dr,e.jsx(mr,{onExitComplete:nr,children:U?e.jsx(wr,{...er,children:e.jsx(fr,{autoFocus:t,finalFocusRef:L,initialFocusRef:y,lockFocusAcrossFrames:S,restoreFocus:j,children:e.jsx(gr,{allowPinchZoom:n,enabled:s,forwardProps:!0,children:e.jsxs(Br.div,{...cr(),children:[ir??(Ve?e.jsx(ee,{}):null),lr?K:e.jsx(Nr,{body:a,cancel:i,footer:v,header:f,middle:W,success:Ue,title:$e,onCancel:rr,onMiddle:tr,onSuccess:or})]})})})}):null})]})},"root",{transferProps:["placement"]})(),C=O("button",{name:"OpenTrigger",slot:["trigger","open"]})(void 0,n=>{const{getOpenTriggerProps:t}=B();return{asChild:!0,...t(n)}}),R=O("button",{name:"CloseTrigger",slot:["trigger","close"]})(void 0,n=>{const{getCloseTriggerProps:t}=B();return{asChild:!0,...t(n)}}),V=O(Cr,"closeButton")(void 0,n=>{const{getCloseButtonProps:t}=B();return{...t(n)}}),ee=O(n=>{const{duration:t,getOverlayProps:s}=B();return e.jsx(jr.div,{animate:"enter",custom:{duration:t},exit:"exit",initial:"exit",variants:yr,...q(s(q(n)))})},"overlay")(),m=O(({children:n,...t})=>{const{closeOnDrag:s,duration:a,open:i,placement:o,withCloseButton:h,withDragBar:c,getContentProps:T}=B(),[k,d,u]=Ke(n,V,le);return e.jsxs(Ar,{as:"section",duration:a,open:i,placement:o,...T(t),children:[d??(h?e.jsx(V,{}):null),u??(c&&s?e.jsx(le,{}):null),k]})},"content")(),Nr=({body:n,cancel:t,footer:s,header:a,middle:i,success:o,title:h,onCancel:c,onMiddle:T,onSuccess:k})=>{const{onClose:d}=B(),u=A(p,a),L=A(w,h),v=A(g,n),f=A(D,s),y=A(r,t,{colorScheme:"mono",variant:"ghost",onClick:()=>c?c(d):d()}),S=A(r,i,{colorScheme:"secondary",onClick:()=>T?T(d):d()}),W=A(r,o,{colorScheme:"primary",onClick:()=>k?k(d):d()});return e.jsxs(m,{children:[u??(L?e.jsx(p,{children:L}):null),v,f??(y||S||W?e.jsxs(D,{children:[y,S,W]}):null)]})},le=O("div","dragBar")(void 0,n=>{const{getDragBarProps:t}=B();return{...t(n)}}),p=O("header","header")(void 0,n=>{const{getHeaderProps:t}=B();return{...t(n)}}),w=O("h2","title")(void 0,n=>{const{getTitleProps:t}=B();return{...t(n)}}),g=O("div","body")(void 0,n=>{const{getBodyProps:t}=B();return{...t(n)}}),D=O("footer","footer")(void 0,n=>{const{getFooterProps:t}=B();return{...t(n)}}),rn={component:l,title:"Components / Drawer"},H=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),P=()=>e.jsx(l,{body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:"とじる",success:"Wikipedia",title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"}),onCancel:n=>n(),onSuccess:Or}),N=()=>{const[n,t]=b.useState("md"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["xs","sm","md","lg","xl","full"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{size:n,open:s,onClose:a,children:e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},G=()=>e.jsxs(l,{duration:.7,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),z=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{open:s,placement:n,onClose:a,children:e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},M=()=>{const[n,t]=b.useState("inline-end"),{open:s,onClose:a,onOpen:i}=te();return e.jsxs(e.Fragment,{children:[e.jsx(re,{gap:"md",children:e.jsx(ne,{each:["block-start","block-end","inline-start","inline-end"],children:o=>e.jsxs(r,{onClick:()=>{t(o),i()},children:['Open "',o,'" Drawer']},o)})}),e.jsx(l,{closeOnDrag:!0,open:s,placement:n,onClose:a,children:e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(r,{variant:"ghost",onClick:a,children:"とじる"}),e.jsx(r,{children:"Wikipedia"})]})]})})]})},_=()=>e.jsxs(l,{closeOnDrag:!0,withCloseButton:!0,withDragBar:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),E=()=>e.jsxs(l,{withCloseButton:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),I=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(V,{colorScheme:"red"}),e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),X=()=>e.jsxs(l,{withOverlay:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Y=()=>e.jsxs(l,{children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsx(ee,{backdropFilter:"blur(4px)"}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),Z=()=>e.jsx(l,{size:"lg",body:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。",cancel:{colorScheme:"danger",variant:"solid",children:"とじる"},middle:{colorScheme:"info",children:"あらすじ"},success:{colorScheme:"success",children:"Wikipedia"},title:"ドラゴンボール",trigger:e.jsx(r,{children:"Open Drawer"})}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{blockScrollOnMount:!1,children:[e.jsx(C,{children:e.jsx(r,{children:"Open Drawer"})}),e.jsxs(m,{children:[e.jsx(p,{children:e.jsx(w,{children:"ドラゴンボール"})}),e.jsx(g,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsxs(D,{children:[e.jsx(R,{children:e.jsx(r,{variant:"ghost",children:"とじる"})}),e.jsx(r,{children:"Wikipedia"})]})]})]}),e.jsxs(Lr,{alignItems:"center",border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"l2",textAlign:"center",children:[e.jsxs(vr,{flexDirection:"column",children:[e.jsx(br,{src:"https://dragon-ball-official.com/assets/img/intro/intro_2.png",alt:"ドラゴンボール",maxW:"md"}),e.jsx(Tr,{size:"3xl",children:"『ドラゴンボール』（DRAGON BALL）"})]}),e.jsxs(Sr,{children:[e.jsx(F,{children:"『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。"}),e.jsx(F,{children:"1986年から1996年までフジテレビ系列で『ドラゴンボール』、『ドラゴンボールZ』が放送され、11年間のシリーズ放送期間中、平均視聴率20%以上を記録した。また、全世界80か国以上で放送されるなど、世界中で絶大な人気を誇る、日本の漫画・アニメを代表する作品である。 連載終了後もテレビアニメ・映画・ゲームなどが展開しており、映画『ドラゴンボール超 ブロリー』が全世界興行収入135億円を記録し、各国で大ヒットした。"}),e.jsx(F,{children:"1991年に『週刊少年ジャンプ21・22合併号』で行われた読者アンケートでは、同誌のアンケート史上最大得票となる1000通中815票を獲得し、1995年3・4合併号（1994年12月発売）で同誌の発行部数は653万部を記録。本作の連載終了後は同誌の部数が急速に減少していくなど、連載作品の中でも特に影響は大きかった。"}),e.jsx(F,{children:"単行本の発行部数は完全版（2000万部）を含み国内で1億6000万部以上、全世界累計で2億6000万部を記録。"}),e.jsx(F,{children:"ゲームソフトは現在までにミリオンセラーを10本以上輩出し、シリーズ累計販売本数は全世界5000万本に達する。『スーパードラゴンボールヒーローズ』はカード累計出荷枚数10億枚、登録ユーザー数は400万人を突破し、デジタルキッズカードゲーム市場でNo.1の人気タイトルである。"}),e.jsx(F,{children:"2019年時点で、漫画・アニメシリーズ・ゲーム作品などを含めた総売上は230億ドル（約2兆5000億円）に達する。"})]})]})]});var ue,pe,De;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(De=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:De.source}}};var he,xe,me;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Drawer.Root body="『ドラゴンボール』（DRAGON BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。" cancel="とじる" success="Wikipedia" title="ドラゴンボール" trigger={<Button>Open Drawer</Button>} onCancel={onClose => onClose()} onSuccess={noop} />;
}`,...(me=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var we,ge,Be;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Be=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:Be.source}}};var je,Ce,Oe;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var be,Te,ke;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(ke=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};var Re,fe,ye;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(ye=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Ae,Le,ve;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(ve=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:ve.source}}};var Se,We,Fe;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Fe=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var He,Pe,Ne;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Ge,ze,Me;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Me=(ze=X.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var _e,Ee,Ie;Y.parameters={...Y.parameters,docs:{...(_e=Y.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ie=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Xe,Ye,Ze;Z.parameters={...Z.parameters,docs:{...(Xe=Z.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Qe,qe,Je;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Je=(qe=Q.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};const nn=["Basic","PropsPattern","Size","Duration","Placement","CloseOnDrag","HiddenDragBar","HiddenCloseButton","CustomCloseButton","HiddenOverlay","CustomOverlay","CustomButton","ScrollOnMount"];export{H as Basic,M as CloseOnDrag,Z as CustomButton,I as CustomCloseButton,Y as CustomOverlay,G as Duration,E as HiddenCloseButton,_ as HiddenDragBar,X as HiddenOverlay,z as Placement,P as PropsPattern,Q as ScrollOnMount,N as Size,nn as __namedExportsOrder,rn as default};
