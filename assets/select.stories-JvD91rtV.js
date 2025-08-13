import{c as tl,z as rl,r as n,i as k,S as Je,k as Be,A as Ue,aR as Ke,e as ol,h as $e,j as e,a as sl,B as cl,f as ul,D as Ne,s as Qe,C as il,F as y,T as ml,V as Ye}from"./iframe-BHZTlJ0V.js";import{P as Ze}from"./props-table-C4SE-e-6.js";import{u as el,C as ll}from"./index.esm-CFPRqPkB.js";import{B as al}from"./box-8pATHs1H.js";import{F as I}from"./for-VorXHFQH.js";import{T as dl}from"./tag-DrCpn2Jb.js";import{B as nl}from"./button-BB2ssYQZ.js";import{u as bl,a as pl,c as vl,b as hl,C as Sl,d as xl,s as fl,e as jl,f as gl,g as Cl}from"./select.style-DFMmZifn.js";import{u as Il}from"./index-hNShLvyX.js";import{u as Ml,F as L}from"./use-field-props-CVbuf8Se.js";import{u as Rl}from"./input-C6rXQcn1.js";import{u as Ol}from"./group-DVyg0qWk.js";import{u as Pl,P as Fl,a as kl,b as yl}from"./popover-BnP-7biB.js";import{X as Gl}from"./x-icon-DAt3WC61.js";import{u as Bl}from"./use-input-border-Bnt3lK9m.js";import{I as M,a as qe,b as z}from"./input-group-C__1TAHv.js";import{C as Dl}from"./check-icon-NGQ8t9jo.js";import{C as wl}from"./chevron-down-icon-Bx2YRiI_.js";import{U as R}from"./user-icon-DL1l8CmL.js";import{C as Tl}from"./chevrons-down-icon-CUlBaVuZ.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-ftZgIPsh.js";import"./grid-item-DzHPtOXT.js";import"./flex-DAlkda-X.js";import"./heading-CZleZHQ4.js";import"./index-D4EJAf_o.js";import"./index-Cmt_1U34.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./index-BHV2F0Os.js";import"./use-disclosure-ChtgJwpN.js";import"./menu.style-BYOELg0Q.js";import"./native-select.style-DJy9rgpS.js";import"./index-DBNyBkxR.js";import"./use-breakpoint-BHTgFfav.js";import"./use-breakpoint-value-DTZaut4a.js";import"./use-color-mode-value-ZthzxX7p.js";import"./index-B5IB_e67.js";import"./index-Di6m6aJF.js";import"./event-BpBfpFn5.js";import"./slide-fade-DMpQUH2f.js";import"./transition-4ErXAUgo.js";import"./fade-scale-SfbXXvhw.js";import"./createLucideIcon-D8IHT0xS.js";const Vl=({count:l,index:a,label:r,separator:s,value:i})=>{const b=l-1===a;return e.jsxs("span",{"data-placeholder":sl(i===""),children:[r,b?null:`${s} `]})},[Al,El]=tl({name:"SelectContext"}),Hl=(l={})=>{const{t:a}=rl("select"),{context:{labelId:r}={},props:{multiple:s=!1,closeOnSelect:i=!s,defaultValue:b=s?[]:"",disabled:d,includePlaceholder:u=!s,items:f=[],max:j,placeholder:p,readOnly:G,render:B=Vl,separator:g=",",value:we,onChange:Te,..._},ariaProps:K,dataProps:C,eventProps:$}=Ml(l),[h,O]=Il({defaultValue:b,value:we,onChange:Te}),N=n.useCallback(o=>{O(c=>k(c)?c.includes(o)?c.filter(v=>v!==o):!Je(j)||c.length<j?[...c,o]:c:o)},[j,O]),P=n.useMemo(()=>{const o=[...f];return p&&o.unshift({hidden:!u,label:p,value:""}),o},[f,p,u]),E=n.useMemo(()=>!P.filter(({hidden:o})=>!o).length,[P]),{descendants:X,interactive:J,open:D,getContentProps:H,getSeparatorProps:W,getTriggerProps:S,onActiveDescendant:Ve,onClose:Ae,onOpen:Ee,onSelect:He}=bl({closeOnSelect:i,disabled:d,initialFocusValue:k(h)?h[0]:h,readOnly:G,onChange:N,...K,...C,...$,..._}),w=n.useMemo(()=>{const o={};return P.forEach(c=>{"items"in c?c.items.forEach(v=>{v.value??=Be(v.label)?v.label:void 0,Ue(v.value)||(o[v.value]=v)}):(c.value??=Be(c.label)?c.label:void 0,Ue(c.value)||(o[c.value]=c))}),o},[P]),T=n.useMemo(()=>k(h)?h.length?Ke(h.map(o=>w[o])):p?[{label:p,value:""}]:[]:Be(h)?Ke(w[h]):[],[p,h,w]),U=n.useMemo(()=>{const o=T.length;return T.map((c,v)=>{const A=B({count:o,index:v,separator:g,...c});return n.isValidElement(A)?n.cloneElement(A,{...A.props,key:v}):A})},[B,T,g]),F=n.useCallback(()=>{O(o=>k(o)?[]:"")},[O]),V=n.useCallback(o=>({...C,...o}),[C]),Q=n.useCallback(({"aria-labelledby":o,...c}={})=>S({"aria-label":p,"aria-labelledby":ol(o,r),...c,children:U}),[U,S,r,p]),Y=n.useCallback(o=>H({hidden:E,...o}),[E,H]),q=n.useCallback(o=>({...C,...o}),[C]),We=n.useCallback((o={})=>q({"aria-label":a("Clear value"),role:"button",tabIndex:0,...o,onClick:$e(o.onClick,F),onKeyDown:$e(o.onKeyDown,c=>cl(c,{Enter:F,Space:F}))}),[q,F,a]);return{descendants:X,includePlaceholder:u,interactive:J,items:P,max:j,open:D,placeholder:p,setValue:O,value:h,valueMap:w,getClearIconProps:We,getContentProps:Y,getFieldProps:Q,getIconProps:q,getRootProps:V,getSeparatorProps:W,onActiveDescendant:Ve,onChange:N,onClose:Ae,onOpen:Ee,onSelect:He}},Wl=({children:l,closeOnSelect:a,disabled:r,hidden:s,value:i,...b}={})=>{const{max:d,value:u}=El();i??=Be(l)?l:void 0;const f=k(u)?!Ue(i)&&u.includes(i):u===i,j=Je(d)&&k(u)&&u.length>=d,{getIndicatorProps:p,getItemProps:G}=pl({children:l,closeOnSelect:a,disabled:r||s||j&&!f,hidden:s,selected:f,value:i,...b}),B=n.useCallback((g={})=>G(g),[G]);return{getIndicatorProps:p,getOptionProps:B}},{ComponentContext:Ul,useComponentContext:Le,withContext:x,withProvider:ql}=ul("select",fl),t=ql(l=>{const[a,r]=Ol(l),[s,{className:i,css:b,colorScheme:d,children:u,clearable:f,clearIcon:j=e.jsx(Gl,{}),errorBorderColor:p,focusBorderColor:G,icon:B,items:g,contentProps:we,elementProps:Te,groupProps:_,iconProps:K,optionProps:C,placeholderProps:$,rootProps:h,...O}]=Pl(r,["disabled","open","defaultOpen","onOpen","onClose","openOnClick"]),N=n.useMemo(()=>g||vl(u,{Group:De,Label:ze,Option:m}),[g,u]),{descendants:P,includePlaceholder:E,interactive:X,items:J,max:D,open:H,placeholder:W,value:S,getClearIconProps:Ve,getContentProps:Ae,getFieldProps:Ee,getIconProps:He,getRootProps:w,getSeparatorProps:T,onActiveDescendant:U,onChange:F,onClose:V,onOpen:Q,onSelect:Y}=Hl({items:N,...O}),q=n.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,openOnClick:!1,...s,disabled:!X,open:H,onClose:V,onOpen:Q}),[X,V,Q,H,s]),We=n.useMemo(()=>u?e.jsxs(e.Fragment,{children:[W?e.jsx(m,{...$,hidden:!E,value:"",children:W}):null,u]}):hl(J,{Group:De,Option:m}),[u,J,W,E,$]),o=Bl({errorBorderColor:p,focusBorderColor:G}),c=n.useMemo(()=>({max:D,value:S,onActiveDescendant:U,onChange:F,onClose:V,onSelect:Y}),[D,U,F,V,Y,S]),v=n.useMemo(()=>({max:D,value:S}),[D,S]),A=n.useMemo(()=>({getSeparatorProps:T,groupProps:_,optionProps:C}),[T,_,C]),_e=k(S)?!!S.length:!!S;return e.jsx(Sl,{value:P,children:e.jsx(xl,{value:c,children:e.jsx(Al,{value:v,children:e.jsx(Ul,{value:A,children:e.jsxs(Fl,{...q,children:[e.jsxs(M,{className:i,css:b,colorScheme:d,...w({...a,...h}),children:[e.jsx(kl,{children:e.jsx(Ll,{...Ee(o)})}),e.jsx(qe,{clickable:f&&_e,...Te,children:f&&_e?e.jsx(Xe,{icon:j,...Ve(K)}):e.jsx(Xe,{icon:B,...He(K)})})]}),e.jsx(_l,{...Ne(Ae(Ne(we))),children:We})]})})})})})},"root")(l=>({...Rl(),...l})),Ll=x("div","field")({"data-group-propagate":""},({children:l,...a})=>({...a,children:e.jsx(zl,{children:l})})),Xe=x("div","icon")(void 0,({children:l,icon:a,...r})=>({children:a||l||e.jsx(wl,{}),...r})),zl=x("span","valueText")(),_l=x(yl,"content")(),ze=x("span","label")(void 0,l=>{const{getLabelProps:a}=Cl();return a(l)}),De=x(({children:l,label:a,labelProps:r,...s})=>{const{groupProps:i}=Le(),{getGroupProps:b,getLabelProps:d}=jl({...i,...s}),u=n.useMemo(()=>({getLabelProps:d}),[d]);return e.jsx(gl,{value:u,children:e.jsxs(Qe.div,{...b(),children:[a?e.jsx(ze,{...r,children:a}):null,l]})})},"group")(),m=x(({children:l,icon:a,...r})=>{const{optionProps:{icon:s,...i}={}}=Le(),{getIndicatorProps:b,getOptionProps:d}=Wl({...i,...r});return e.jsxs(Qe.div,{...d(),children:[e.jsx(Kl,{...b(),children:a??s??e.jsx(Dl,{})}),l]})},"option")(),Kl=x("div","indicator")(),$l=x("hr","separator")(void 0,l=>{const{getSeparatorProps:a}=Le();return a(l)}),Ea={component:t,title:"Components / Select"},Z=()=>e.jsxs(t,{placeholder:"Select a character",children:[e.jsx(m,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(m,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(m,{value:"七海麻美",children:"七海麻美"}),e.jsx(m,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(m,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(m,{value:"八重森みに",children:"八重森みに"})]}),ee=()=>e.jsxs(t,{placeholder:"Select a character",children:[e.jsxs(De,{children:[e.jsx(ze,{children:"主要人物"}),e.jsx(m,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(m,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(m,{value:"七海麻美",children:"七海麻美"}),e.jsx(m,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(m,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(m,{value:"八重森みに",children:"八重森みに"})]}),e.jsx($l,{}),e.jsxs(De,{label:"主要人物の関係者",children:[e.jsx(m,{value:"木ノ下和",children:"木ノ下和"}),e.jsx(m,{value:"一ノ瀬小百合",children:"一ノ瀬小百合"}),e.jsx(m,{value:"木部芳秋",children:"木部芳秋"}),e.jsx(m,{value:"栗林駿",children:"栗林駿"})]})]}),le=()=>{const l=n.useMemo(()=>[{label:"水原千鶴",value:"水原千鶴"},{items:[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],label:"主要人物"},{items:[{label:"木ノ下和",value:"木ノ下和"},{label:"一ノ瀬小百合",value:"一ノ瀬小百合"},{label:"木部芳秋",value:"木部芳秋"},{label:"栗林駿",value:"栗林駿"}],label:"主要人物の関係者"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character"})},ae=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Ze,{variant:"stack",columns:["outline","filled","flushed"],rows:il,children:(a,r,s)=>e.jsx(t,{colorScheme:r,variant:a,items:l,placeholder:y(a)},s)})},ne=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Ze,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(a,r,s)=>e.jsx(t,{size:a,variant:r,items:l,placeholder:`Size (${a})`},s)})},te=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{defaultValue:"木ノ下和也",items:l,placeholder:"Select a character"})},re=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character"})},oe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{clearable:!0,items:l,multiple:!0,placeholder:"Select a character"})},se=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,max:2,multiple:!0,placeholder:"Select a character"})},ce=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",separator:";"})},ue=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a character"})},ie=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a character"})},me=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a character"})},de=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a character",placement:"center-end",rootProps:{w:"xs"}})},be=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(al,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a character"})})},pe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(al,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a character"})})},ve=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{includePlaceholder:!1,items:l,placeholder:"Select a character"})},he=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{closeOnSelect:!0,label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a character"})},Se=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a character"})},xe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a character"})},fe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{disabled:!0,label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character"})},je=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,disabled:!0,items:l,placeholder:y(a)},r)}),e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(M,{variant:a,disabled:!0,children:[e.jsx(z,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:y(a)})]},r)}),e.jsx(L,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},ge=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,items:l,placeholder:y(a),readOnly:!0},r)}),e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(M,{variant:a,readOnly:!0,children:[e.jsx(z,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:y(a)})]},r)}),e.jsx(L,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},Ce=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,invalid:!0,items:l,placeholder:y(a)},r)}),e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(M,{variant:a,invalid:!0,children:[e.jsx(z,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:y(a)})]},r)}),e.jsx(L,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite character?",children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},Ie=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(M,{variant:a,children:[e.jsx(z,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:"Select a character"})]},r)})},Me=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(I,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(M,{variant:a,children:[e.jsx(qe,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:"Select a character"})]},r)})},Re=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(M,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(qe,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(M,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(z,{children:e.jsx(R,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},Oe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a character",iconProps:{color:"orange"}}),e.jsx(t,{items:l,placeholder:"Select a character",iconProps:{children:e.jsx(Tl,{})}})]})},Pe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character",optionProps:{icon:e.jsx(R,{})}})},Fe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:a,value:r})=>r===""?e.jsx(ml,{"data-placeholder":!0,children:a}):e.jsx(dl,{size:"sm",_notLast:{me:"1"},children:a})})},ke=()=>{const[l,a]=n.useState("木ノ下和也"),r=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:r,placeholder:"Select a character",value:l,onChange:a})},ye=()=>{const{control:l,formState:{errors:a},handleSubmit:r,watch:s}=el(),i=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),b=d=>console.log("submit:",d);return console.log("watch:",s()),e.jsxs(Ye,{as:"form",onSubmit:r(b),children:[e.jsx(L,{errorMessage:a.select?.message,invalid:!!a.select,label:"Who is your favorite character?",children:e.jsx(ll,{name:"select",control:l,render:({field:d})=>e.jsx(t,{items:i,placeholder:"Select a character",...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(nl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ge=()=>{const l={select:"木ノ下和也"},{control:a,formState:{errors:r},handleSubmit:s,watch:i}=el({defaultValues:l}),b=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),d=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(Ye,{as:"form",onSubmit:s(d),children:[e.jsx(L,{errorMessage:r.select?.message,invalid:!!r.select,label:"Who is your favorite character?",children:e.jsx(ll,{name:"select",control:a,render:({field:u})=>e.jsx(t,{items:b,placeholder:"Select a character",...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(nl,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <Select.Root placeholder="Select a character">
      <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
      <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
      <Select.Option value="七海麻美">七海麻美</Select.Option>
      <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
      <Select.Option value="桜沢墨">桜沢墨</Select.Option>
      <Select.Option value="八重森みに">八重森みに</Select.Option>
    </Select.Root>;
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
  return <Select.Root placeholder="Select a character">
      <Select.Group>
        <Select.Label>主要人物</Select.Label>
        <Select.Option value="木ノ下和也">木ノ下和也</Select.Option>
        <Select.Option value="一ノ瀬ちづる">一ノ瀬ちづる</Select.Option>
        <Select.Option value="七海麻美">七海麻美</Select.Option>
        <Select.Option value="更科瑠夏">更科瑠夏</Select.Option>
        <Select.Option value="桜沢墨">桜沢墨</Select.Option>
        <Select.Option value="八重森みに">八重森みに</Select.Option>
      </Select.Group>

      <Select.Separator />

      <Select.Group label="主要人物の関係者">
        <Select.Option value="木ノ下和">木ノ下和</Select.Option>
        <Select.Option value="一ノ瀬小百合">一ノ瀬小百合</Select.Option>
        <Select.Option value="木部芳秋">木部芳秋</Select.Option>
        <Select.Option value="栗林駿">栗林駿</Select.Option>
      </Select.Group>
    </Select.Root>;
}`,...ee.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "水原千鶴",
    value: "水原千鶴"
  }, {
    items: [{
      label: "木ノ下和也",
      value: "木ノ下和也"
    }, {
      label: "一ノ瀬ちづる",
      value: "一ノ瀬ちづる"
    }, {
      label: "七海麻美",
      value: "七海麻美"
    }, {
      label: "更科瑠夏",
      value: "更科瑠夏"
    }, {
      label: "桜沢墨",
      value: "桜沢墨"
    }, {
      label: "八重森みに",
      value: "八重森みに"
    }],
    label: "主要人物"
  }, {
    items: [{
      label: "木ノ下和",
      value: "木ノ下和"
    }, {
      label: "一ノ瀬小百合",
      value: "一ノ瀬小百合"
    }, {
      label: "木部芳秋",
      value: "木部芳秋"
    }, {
      label: "栗林駿",
      value: "栗林駿"
    }],
    label: "主要人物の関係者"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" />;
}`,...le.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Select.Root key={key} colorScheme={row} variant={column} items={items} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...ae.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Select.Root key={key} size={column} variant={row} items={items} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...ne.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root defaultValue="木ノ下和也" items={items} placeholder="Select a character" />;
}`,...te.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" />;
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root clearable items={items} multiple placeholder="Select a character" />;
}`,...oe.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} max={2} multiple placeholder="Select a character" />;
}`,...se.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" separator=";" />;
}`,...ce.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} offset={[16, 16]} placeholder="Select a character" />;
}`,...ue.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root gutter={32} items={items} placeholder="Select a character" />;
}`,...ie.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root animationScheme="inline-start" items={items} placeholder="Select a character" />;
}`,...me.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root animationScheme="inline-start" items={items} placeholder="Select a character" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...de.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Box minH="200dvh" w="full">
      <Select.Root blockScrollOnMount items={items} placeholder="Select a character" />
    </Box>;
}`,...be.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Box minH="200dvh" w="full">
      <Select.Root closeOnScroll items={items} placeholder="Select a character" />
    </Box>;
}`,...pe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root includePlaceholder={false} items={items} placeholder="Select a character" />;
}`,...ve.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    closeOnSelect: true,
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnSelect={false} items={items} placeholder="Select a character" />;
}`,...he.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnBlur={false} items={items} placeholder="Select a character" />;
}`,...Se.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root closeOnEsc={false} items={items} placeholder="Select a character" />;
}`,...xe.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    disabled: true,
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" />;
}`,...fe.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} disabled items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="Who is your favorite character?">
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...je.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} items={items} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="Who is your favorite character?" readOnly>
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...ge.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Select.Root key={index} variant={variant} invalid items={items} placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <UserIcon />
            </InputGroup.Addon>
            <Select.Root items={items} placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="This is required." invalid label="Who is your favorite character?">
        <Select.Root items={items} placeholder="Select a character" />
      </Field.Root>
    </>;
}`,...Ce.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <UserIcon />
          </InputGroup.Addon>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>}
    </For>;
}`,...Ie.parameters?.docs?.source}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <UserIcon />
          </InputGroup.Element>
          <Select.Root items={items} placeholder="Select a character" />
        </InputGroup.Root>}
    </For>;
}`,...Me.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <Select.Root items={items} placeholder="Default border color" />

      <Select.Root focusBorderColor="green.500" items={items} placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <UserIcon />
        </InputGroup.Element>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>

      <Select.Root errorBorderColor="orange.500" invalid items={items} placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <UserIcon />
        </InputGroup.Addon>
        <Select.Root items={items} placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...Re.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <>
      <Select.Root items={items} placeholder="Select a character" iconProps={{
      color: "orange"
    }} />

      <Select.Root items={items} placeholder="Select a character" iconProps={{
      children: <ChevronsDownIcon />
    }} />
    </>;
}`,...Oe.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.ItemWithValue[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" optionProps={{
    icon: <UserIcon />
  }} />;
}`,...Pe.parameters?.docs?.source}}};Fe.parameters={...Fe.parameters,docs:{...Fe.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} multiple placeholder="Select a character" render={({
    label,
    value
  }) => value === "" ? <Text data-placeholder>{label}</Text> : <Tag size="sm" _notLast={{
    me: "1"
  }}>
            {label}
          </Tag>} />;
}`,...Fe.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("木ノ下和也");
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  return <Select.Root items={items} placeholder="Select a character" value={value} onChange={setValue} />;
}`,...ke.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <Controller name="select" control={control} render={({
        field
      }) => <Select.Root items={items} placeholder="Select a character" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...ye.parameters?.docs?.source}}};Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    select: string;
  }
  const defaultValues: Data = {
    select: "木ノ下和也"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const items = useMemo<Select.Item[]>(() => [{
    label: "木ノ下和也",
    value: "木ノ下和也"
  }, {
    label: "一ノ瀬ちづる",
    value: "一ノ瀬ちづる"
  }, {
    label: "七海麻美",
    value: "七海麻美"
  }, {
    label: "更科瑠夏",
    value: "更科瑠夏"
  }, {
    label: "桜沢墨",
    value: "桜沢墨"
  }, {
    label: "八重森みに",
    value: "八重森みに"
  }], []);
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.select?.message} invalid={!!errors.select} label="Who is your favorite character?">
        <Controller name="select" control={control} render={({
        field
      }) => <Select.Root items={items} placeholder="Select a character" {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Ge.parameters?.docs?.source}}};const Ha=["Basic","Group","Items","Variant","Size","DefaultValue","Multiple","Clearable","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","CloseOnScroll","DisabledIncludePlaceholder","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledOption","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Ie as Addon,me as AnimationScheme,Z as Basic,be as BlockScrollOnMount,Re as BorderColor,oe as Clearable,pe as CloseOnScroll,ke as CustomControl,Oe as CustomIcon,Pe as CustomOptionIcon,Fe as CustomRender,te as DefaultValue,je as Disabled,Se as DisabledCloseOnBlur,xe as DisabledCloseOnEsc,he as DisabledCloseOnSelect,ve as DisabledIncludePlaceholder,fe as DisabledOption,Me as Element,ee as Group,ie as Gutter,Ce as Invalid,le as Items,se as Max,re as Multiple,ue as Offset,de as Placement,ye as ReactHookForm,Ge as ReactHookFormDefaultValue,ge as Readonly,ce as Separator,ne as Size,ae as Variant,Ha as __namedExportsOrder,Ea as default};
