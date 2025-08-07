import{c as tl,z as rl,r as n,i as F,R as Ne,k as Be,A as He,aP as ze,e as ol,h as _e,j as e,a as sl,B as cl,f as ul,D as Ke,s as Xe,C as il,F as k,T as ml,V as Je}from"./iframe-CDTQ5ROD.js";import{P as Qe}from"./props-table-B8uhL38C.js";import{u as Ye,C as Ze}from"./index.esm-C4tYERGP.js";import{B as el}from"./box-DHXTkPpQ.js";import{F as C}from"./for-B3jOju7X.js";import{T as dl}from"./tag-D_-2jrtX.js";import{B as ll}from"./button-DJ5m59RZ.js";import{u as pl,a as bl,c as vl,b as hl,C as Sl,d as xl,s as fl,e as jl,f as gl,g as Cl}from"./select.style-loZIq7NE.js";import{u as Il}from"./index-enh5qnq3.js";import{u as Ml,F as U}from"./use-field-props-DjiGD3ru.js";import{u as Ol}from"./input-BkgywB5Q.js";import{u as Rl}from"./group-D3c91OA4.js";import{u as Pl,P as Fl,a as kl,b as yl}from"./popover-DGyEaDIX.js";import{X as Gl}from"./x-icon-Br5DKOS7.js";import{u as Bl}from"./use-input-border-B-MKti-N.js";import{I,a as We,b as q}from"./input-group-Db8hMM5q.js";import{C as Dl}from"./check-icon-f0aVY7ms.js";import{C as wl}from"./chevron-down-icon-BVBvIvA7.js";import{U as M}from"./user-icon-Hdi0bVg7.js";import{C as Tl}from"./chevrons-down-icon-ztsbZH8y.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-CIpCdlsO.js";import"./grid-item-C-cNoi2G.js";import"./flex-BrTFS1Ax.js";import"./heading-dqd1jbYP.js";import"./index-X6oGNeqs.js";import"./index-CwV9TfzL.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";import"./index-CM_U0L8v.js";import"./use-disclosure-D7jE1FXj.js";import"./menu.style-CfHk6oXw.js";import"./native-select.style-B_iXUQ9G.js";import"./index-DiHcGD1N.js";import"./use-breakpoint-CMnSSNhN.js";import"./use-breakpoint-value-D9ZXJUvj.js";import"./use-color-mode-value-CFswxupI.js";import"./index-W8ugI876.js";import"./index-VIgT-dW9.js";import"./event-FkP6pOuW.js";import"./slide-fade-T7DBRmJ-.js";import"./transition-BQ9QLj2F.js";import"./fade-scale-BwIcW2YG.js";import"./createLucideIcon-D7lzYFmP.js";const Vl=({count:l,index:a,label:r,separator:s,value:i})=>{const p=l-1===a;return e.jsxs("span",{"data-placeholder":sl(i===""),children:[r,p?null:`${s} `]})},[Al,El]=tl({name:"SelectContext"}),Hl=(l={})=>{const{t:a}=rl("select"),{context:{labelId:r}={},props:{multiple:s=!1,closeOnSelect:i=!s,defaultValue:p=s?[]:"",disabled:d,items:u=[],max:S,placeholder:b,placeholderInOptions:O=!s,readOnly:y,render:G=Vl,separator:j=",",value:we,onChange:Te,...L},ariaProps:z,dataProps:g,eventProps:_}=Ml(l),[h,R]=Il({defaultValue:p,value:we,onChange:Te}),K=n.useCallback(o=>{R(c=>F(c)?c.includes(o)?c.filter(v=>v!==o):!Ne(S)||c.length<S?[...c,o]:c:o)},[S,R]),{descendants:Ve,interactive:$,open:N,getContentProps:B,getSeparatorProps:X,getTriggerProps:D,onActiveDescendant:J,onClose:x,onOpen:Ae,onSelect:Ee}=pl({closeOnSelect:i,disabled:d,initialFocusValue:F(h)?h[0]:h,readOnly:y,onChange:K,...z,...g,..._,...L}),E=n.useMemo(()=>{const o=[...u];return b&&o.unshift({hidden:!O,label:b,value:""}),o},[u,b,O]),w=n.useMemo(()=>{const o={};return E.forEach(c=>{"items"in c?c.items.forEach(v=>{v.value??=Be(v.label)?v.label:void 0,He(v.value)||(o[v.value]=v)}):(c.value??=Be(c.label)?c.label:void 0,He(c.value)||(o[c.value]=c))}),o},[E]),H=n.useMemo(()=>F(h)?h.length?ze(h.map(o=>w[o])):b?[{label:b,value:""}]:[]:Be(h)?ze(w[h]):[],[b,h,w]),W=n.useMemo(()=>{const o=H.length;return H.map((c,v)=>{const A=G({count:o,index:v,separator:j,...c});return n.isValidElement(A)?n.cloneElement(A,{...A.props,key:v}):A})},[G,H,j]),P=n.useCallback(()=>{R(o=>F(o)?[]:"")},[R]),Q=n.useCallback(o=>({...g,...o}),[g]),T=n.useCallback(({"aria-labelledby":o,...c}={})=>D({"aria-label":b,"aria-labelledby":ol(o,r),...c,children:W}),[W,D,r,b]),V=n.useCallback(o=>({...g,...o}),[g]),Y=n.useCallback((o={})=>V({"aria-label":a("Clear value"),role:"button",tabIndex:0,...o,onClick:_e(o.onClick,P),onKeyDown:_e(o.onKeyDown,c=>cl(c,{Enter:P,Space:P}))}),[V,P,a]);return{descendants:Ve,interactive:$,items:E,max:S,open:N,placeholder:b,placeholderInOptions:O,setValue:R,value:h,valueMap:w,getClearIconProps:Y,getContentProps:B,getFieldProps:T,getIconProps:V,getRootProps:Q,getSeparatorProps:X,onActiveDescendant:J,onChange:K,onClose:x,onOpen:Ae,onSelect:Ee}},Wl=({children:l,closeOnSelect:a,disabled:r,hidden:s,value:i,...p}={})=>{const{max:d,value:u}=El();i??=Be(l)?l:void 0;const S=F(u)?!He(i)&&u.includes(i):u===i,b=Ne(d)&&F(u)&&u.length>=d,{getIndicatorProps:O,getItemProps:y}=bl({children:l,closeOnSelect:a,disabled:r||s||b&&!S,hidden:s,selected:S,value:i,...p}),G=n.useCallback((j={})=>y(j),[y]);return{getIndicatorProps:O,getOptionProps:G}},{ComponentContext:Ul,useComponentContext:Ue,withContext:f,withProvider:ql}=ul("select",fl),t=ql(l=>{const[a,r]=Rl(l),[s,{className:i,css:p,colorScheme:d,children:u,clearable:S,clearIcon:b=e.jsx(Gl,{}),errorBorderColor:O,focusBorderColor:y,icon:G,items:j,contentProps:we,elementProps:Te,groupProps:L,iconProps:z,optionProps:g,placeholderProps:_,rootProps:h,...R}]=Pl(r,["disabled","open","defaultOpen","onOpen","onClose","openOnClick"]),K=n.useMemo(()=>j||vl(u,{Group:De,Label:qe,Option:m}),[j,u]),{descendants:Ve,interactive:$,items:N,max:B,open:X,placeholder:D,placeholderInOptions:J,value:x,getClearIconProps:Ae,getContentProps:Ee,getFieldProps:E,getIconProps:w,getRootProps:H,getSeparatorProps:W,onActiveDescendant:P,onChange:Q,onClose:T,onOpen:V,onSelect:Y}=Hl({items:K,...R}),o=n.useMemo(()=>({animationScheme:"block-start",autoFocus:!1,matchWidth:!0,openOnClick:!1,...s,disabled:!$,open:X,onClose:T,onOpen:V}),[$,T,V,X,s]),c=n.useMemo(()=>u?e.jsxs(e.Fragment,{children:[D?e.jsx(m,{..._,hidden:!J,value:"",children:D}):null,u]}):hl(N,{Group:De,Option:m}),[u,N,D,J,_]),v=Bl({errorBorderColor:O,focusBorderColor:y}),A=n.useMemo(()=>({max:B,value:x,onActiveDescendant:P,onChange:Q,onClose:T,onSelect:Y}),[B,P,Q,T,Y,x]),al=n.useMemo(()=>({max:B,value:x}),[B,x]),nl=n.useMemo(()=>({getSeparatorProps:W,groupProps:L,optionProps:g}),[W,L,g]),Le=F(x)?!!x.length:!!x;return e.jsx(Sl,{value:Ve,children:e.jsx(xl,{value:A,children:e.jsx(Al,{value:al,children:e.jsx(Ul,{value:nl,children:e.jsxs(Fl,{...o,children:[e.jsxs(I,{className:i,css:p,colorScheme:d,...H({...a,...h}),children:[e.jsx(kl,{children:e.jsx(Ll,{...E(v)})}),e.jsx(We,{clickable:S&&Le,...Te,children:S&&Le?e.jsx($e,{icon:b,...Ae(z)}):e.jsx($e,{icon:G,...w(z)})})]}),e.jsx(_l,{...Ke(Ee(Ke(we))),children:c})]})})})})})},"root")(l=>({...Ol(),...l})),Ll=f("div","field")({"data-group-propagate":""},({children:l,...a})=>({...a,children:e.jsx(zl,{children:l})})),$e=f("div","icon")(void 0,({children:l,icon:a,...r})=>({children:a||l||e.jsx(wl,{}),...r})),zl=f("span","valueText")(),_l=f(yl,"content")(),qe=f("span","label")(void 0,l=>{const{getLabelProps:a}=Cl();return a(l)}),De=f(({children:l,label:a,labelProps:r,...s})=>{const{groupProps:i}=Ue(),{getGroupProps:p,getLabelProps:d}=jl({...i,...s}),u=n.useMemo(()=>({getLabelProps:d}),[d]);return e.jsx(gl,{value:u,children:e.jsxs(Xe.div,{...p(),children:[a?e.jsx(qe,{...r,children:a}):null,l]})})},"group")(),m=f(({children:l,icon:a,...r})=>{const{optionProps:{icon:s,...i}={}}=Ue(),{getIndicatorProps:p,getOptionProps:d}=Wl({...i,...r});return e.jsxs(Xe.div,{...d(),children:[e.jsx(Kl,{...p(),children:a??s??e.jsx(Dl,{})}),l]})},"option")(),Kl=f("div","indicator")(),$l=f("hr","separator")(void 0,l=>{const{getSeparatorProps:a}=Ue();return a(l)}),Ea={component:t,title:"Components / Select"},Z=()=>e.jsxs(t,{placeholder:"Select a character",children:[e.jsx(m,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(m,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(m,{value:"七海麻美",children:"七海麻美"}),e.jsx(m,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(m,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(m,{value:"八重森みに",children:"八重森みに"})]}),ee=()=>e.jsxs(t,{placeholder:"Select a character",children:[e.jsxs(De,{children:[e.jsx(qe,{children:"主要人物"}),e.jsx(m,{value:"木ノ下和也",children:"木ノ下和也"}),e.jsx(m,{value:"一ノ瀬ちづる",children:"一ノ瀬ちづる"}),e.jsx(m,{value:"七海麻美",children:"七海麻美"}),e.jsx(m,{value:"更科瑠夏",children:"更科瑠夏"}),e.jsx(m,{value:"桜沢墨",children:"桜沢墨"}),e.jsx(m,{value:"八重森みに",children:"八重森みに"})]}),e.jsx($l,{}),e.jsxs(De,{label:"主要人物の関係者",children:[e.jsx(m,{value:"木ノ下和",children:"木ノ下和"}),e.jsx(m,{value:"一ノ瀬小百合",children:"一ノ瀬小百合"}),e.jsx(m,{value:"木部芳秋",children:"木部芳秋"}),e.jsx(m,{value:"栗林駿",children:"栗林駿"})]})]}),le=()=>{const l=n.useMemo(()=>[{label:"水原千鶴",value:"水原千鶴"},{items:[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],label:"主要人物"},{items:[{label:"木ノ下和",value:"木ノ下和"},{label:"一ノ瀬小百合",value:"一ノ瀬小百合"},{label:"木部芳秋",value:"木部芳秋"},{label:"栗林駿",value:"栗林駿"}],label:"主要人物の関係者"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character"})},ae=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Qe,{variant:"stack",columns:["outline","filled","flushed"],rows:il,children:(a,r,s)=>e.jsx(t,{colorScheme:r,variant:a,items:l,placeholder:k(a)},s)})},ne=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(Qe,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(a,r,s)=>e.jsx(t,{size:a,variant:r,items:l,placeholder:`Size (${a})`},s)})},te=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{defaultValue:"木ノ下和也",items:l,placeholder:"Select a character"})},re=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character"})},oe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{clearable:!0,items:l,multiple:!0,placeholder:"Select a character"})},se=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,max:2,multiple:!0,placeholder:"Select a character"})},ce=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",separator:";"})},ue=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,offset:[16,16],placeholder:"Select a character"})},ie=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{gutter:32,items:l,placeholder:"Select a character"})},me=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a character"})},de=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{animationScheme:"inline-start",items:l,placeholder:"Select a character",placement:"center-end",rootProps:{w:"xs"}})},pe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(el,{minH:"200dvh",w:"full",children:e.jsx(t,{blockScrollOnMount:!0,items:l,placeholder:"Select a character"})})},be=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(el,{minH:"200dvh",w:"full",children:e.jsx(t,{closeOnScroll:!0,items:l,placeholder:"Select a character"})})},ve=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character",placeholderInOptions:!1})},he=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{closeOnSelect:!0,label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnSelect:!1,items:l,placeholder:"Select a character"})},Se=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnBlur:!1,items:l,placeholder:"Select a character"})},xe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{closeOnEsc:!1,items:l,placeholder:"Select a character"})},fe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{disabled:!0,label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character"})},je=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,disabled:!0,items:l,placeholder:k(a)},r)}),e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(I,{variant:a,disabled:!0,children:[e.jsx(q,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:k(a)})]},r)}),e.jsx(U,{disabled:!0,label:"Who is your favorite character?",children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},ge=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,items:l,placeholder:k(a),readOnly:!0},r)}),e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(I,{variant:a,readOnly:!0,children:[e.jsx(q,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:k(a)})]},r)}),e.jsx(U,{label:"Who is your favorite character?",readOnly:!0,children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},Ce=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsx(t,{variant:a,invalid:!0,items:l,placeholder:k(a)},r)}),e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(I,{variant:a,invalid:!0,children:[e.jsx(q,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:k(a)})]},r)}),e.jsx(U,{errorMessage:"This is required.",invalid:!0,label:"Who is your favorite character?",children:e.jsx(t,{items:l,placeholder:"Select a character"})})]})},Ie=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(I,{variant:a,children:[e.jsx(q,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:"Select a character"})]},r)})},Me=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(C,{each:["outline","filled","flushed"],children:(a,r)=>e.jsxs(I,{variant:a,children:[e.jsx(We,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:"Select a character"})]},r)})},Oe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Default border color"}),e.jsx(t,{focusBorderColor:"green.500",items:l,placeholder:"Custom border color"}),e.jsxs(I,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(We,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]}),e.jsx(t,{errorBorderColor:"orange.500",invalid:!0,items:l,placeholder:"Custom border color"}),e.jsxs(I,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(q,{children:e.jsx(M,{})}),e.jsx(t,{items:l,placeholder:"Custom border color"})]})]})},Re=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(t,{items:l,placeholder:"Select a character",iconProps:{color:"orange"}}),e.jsx(t,{items:l,placeholder:"Select a character",iconProps:{children:e.jsx(Tl,{})}})]})},Pe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,placeholder:"Select a character",optionProps:{icon:e.jsx(M,{})}})},Fe=()=>{const l=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:l,multiple:!0,placeholder:"Select a character",render:({label:a,value:r})=>r===""?e.jsx(ml,{"data-placeholder":!0,children:a}):e.jsx(dl,{size:"sm",_notLast:{me:"1"},children:a})})},ke=()=>{const[l,a]=n.useState("木ノ下和也"),r=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]);return e.jsx(t,{items:r,placeholder:"Select a character",value:l,onChange:a})},ye=()=>{const{control:l,formState:{errors:a},handleSubmit:r,watch:s}=Ye(),i=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),p=d=>console.log("submit:",d);return console.log("watch:",s()),e.jsxs(Je,{as:"form",onSubmit:r(p),children:[e.jsx(U,{errorMessage:a.select?.message,invalid:!!a.select,label:"Who is your favorite character?",children:e.jsx(Ze,{name:"select",control:l,render:({field:d})=>e.jsx(t,{items:i,placeholder:"Select a character",...d}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ll,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Ge=()=>{const l={select:"木ノ下和也"},{control:a,formState:{errors:r},handleSubmit:s,watch:i}=Ye({defaultValues:l}),p=n.useMemo(()=>[{label:"木ノ下和也",value:"木ノ下和也"},{label:"一ノ瀬ちづる",value:"一ノ瀬ちづる"},{label:"七海麻美",value:"七海麻美"},{label:"更科瑠夏",value:"更科瑠夏"},{label:"桜沢墨",value:"桜沢墨"},{label:"八重森みに",value:"八重森みに"}],[]),d=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(Je,{as:"form",onSubmit:s(d),children:[e.jsx(U,{errorMessage:r.select?.message,invalid:!!r.select,label:"Who is your favorite character?",children:e.jsx(Ze,{name:"select",control:a,render:({field:u})=>e.jsx(t,{items:p,placeholder:"Select a character",...u}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ll,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...de.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`() => {
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
}`,...pe.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`() => {
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
}`,...be.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`() => {
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
  return <Select.Root items={items} placeholder="Select a character" placeholderInOptions={false} />;
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
}`,...Me.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Oe.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`() => {
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
}`,...Re.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ge.parameters?.docs?.source}}};const Ha=["Basic","Group","Items","Variant","Size","DefaultValue","Multiple","Clearable","Max","Separator","Offset","Gutter","AnimationScheme","Placement","BlockScrollOnMount","CloseOnScroll","DisabledPlaceholderInOptions","DisabledCloseOnSelect","DisabledCloseOnBlur","DisabledCloseOnEsc","DisabledOption","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomIcon","CustomOptionIcon","CustomRender","CustomControl","ReactHookForm","ReactHookFormDefaultValue"];export{Ie as Addon,me as AnimationScheme,Z as Basic,pe as BlockScrollOnMount,Oe as BorderColor,oe as Clearable,be as CloseOnScroll,ke as CustomControl,Re as CustomIcon,Pe as CustomOptionIcon,Fe as CustomRender,te as DefaultValue,je as Disabled,Se as DisabledCloseOnBlur,xe as DisabledCloseOnEsc,he as DisabledCloseOnSelect,fe as DisabledOption,ve as DisabledPlaceholderInOptions,Me as Element,ee as Group,ie as Gutter,Ce as Invalid,le as Items,se as Max,re as Multiple,ue as Offset,de as Placement,ye as ReactHookForm,Ge as ReactHookFormDefaultValue,ge as Readonly,ce as Separator,ne as Size,ae as Variant,Ha as __namedExportsOrder,Ea as default};
