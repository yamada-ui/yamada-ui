import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Et as n,F as r,Kt as i,N as a,Ot as ee,i as o,jt as s,kt as te,lt as ne,o as c,ot as re,st as l,tn as u,ut as ie,xt as ae}from"./props-sAZv67b_.js";import{i as oe,r as se}from"./i18n-provider-CVU3vuxJ.js";import{t as ce}from"./jsx-runtime-BdxMnOeJ.js";import{E as le,T as ue,d as de,f as fe}from"./utils-DU-a_DAF.js";import{d,i as f,n as pe,r as p}from"./create-component-CMKj7xAv.js";import{n as m,r as h,t as g}from"./icon-xw_sbHRh.js";import{n as me,t as _}from"./createLucideIcon-ByMcIZ7k.js";import{r as he,t as v}from"./use-controllable-state-CXBwLLzy.js";import{r as y,t as b}from"./button-AV9CQoi4.js";import{n as x,t as S}from"./box-BWNVNFaI.js";import{n as ge,t as C}from"./image-DiHj02Mj.js";import{n as _e,t as w}from"./separator-DDtVF-2k.js";import{n as T,t as ve}from"./h-stack-CJ3-YqDh.js";import{n as E,t as ye}from"./v-stack-DiF-BdkI.js";import{n as D,t as be}from"./wrap-PvKd6sRH.js";import{n as xe,t as O}from"./props-table-DnYpWynU.js";import{n as Se,t as k}from"./iconBase-DPgFeGTw.js";var A,Ce;function we(){return(we=e((()=>{me(),A={name:`pause`,size:24,node:[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]},A.node,Ce=_(A)})))()}var j,Te;function Ee(){return(Ee=e((()=>{me(),j={name:`play`,size:24,node:[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]},j.node,Te=_(j)})))()}var De;function Oe(){return(Oe=e((()=>{we(),h(),De=m(g)({as:Ce})})))()}var ke;function Ae(){return(Ae=e((()=>{Ee(),h(),ke=m(g)({as:Te})})))()}var je;function Me(){return(Me=e((()=>{d(),je=f({base:{content:{"&:not([data-ready])":{animationName:`none`},alignItems:`center`,animationDelay:`{delay}`,animationDirection:`{direction}`,animationDuration:`{duration}`,animationFillMode:`both`,animationIterationCount:`{loop-count}`,animationPlayState:`{play-state}`,animationTimingFunction:`linear`,display:`flex`,flex:`0 0 auto`,minW:`0`,position:`relative`,_horizontal:{w:`max-content`},_keyframes:{to:{transform:`translate({translate-x}, {translate-y})`}},_mediaReduceMotion:{animationName:`none`},_vertical:{flexDirection:`column`,h:`max-content`}},edge:{pointerEvents:`none`,position:`absolute`,zIndex:`1`,_horizontal:{bottom:`0`,top:`0`,w:`{edge-size}`,_end:{bgGradient:`linear(to-l, {edge-color}, transparent)`,insetInlineEnd:`0`,_rtl:{bgGradient:`linear(to-r, {edge-color}, transparent)`}},_start:{bgGradient:`linear(to-r, {edge-color}, transparent)`,insetInlineStart:`0`,_rtl:{bgGradient:`linear(to-l, {edge-color}, transparent)`}}},_vertical:{h:`{edge-size}`,insetInline:`0`,_end:{bgGradient:`linear(to-t, {edge-color}, transparent)`,bottom:`0`},_start:{bgGradient:`linear(to-b, {edge-color}, transparent)`,top:`0`}}},group:{"&[data-clone]":{display:`{clone-display, flex}`,position:`absolute`,_horizontal:{transform:`translateX(calc({copy-offset-x} * {index}))`,w:`max-content`},_vertical:{transform:`translateY(calc({distance} * {index}))`,w:`full`}},alignItems:`center`,display:`flex`,flex:`0 0 auto`,gap:`{gap}`,_horizontal:{pe:`{gap}`},_mediaReduceMotion:{"&[data-clone]":{display:`none`}},_vertical:{flexDirection:`column`,pb:`{gap}`}},item:{flexShrink:0},root:{"&[data-pause-on-focus]":{_nativeFocusWithin:{"& > [data-marquee-content]":{transform:`none !important`},"--clone-display":`none`,"--play-state":`paused`,overflow:`auto`}},"&[data-pause-on-hover]":{_hover:{"--play-state":`paused`}},"--copy-offset-x":`{distance}`,"--edge-color":`colors.bg`,"--edge-size":`20%`,"--gap":`spaces.4`,"--play-state":`running`,"--translate-x":`calc({distance} * -1)`,"--translate-y":`0px`,overflow:`hidden`,position:`relative`,rounded:`l2`,w:`full`,_complete:{"& > [data-marquee-content]":{transform:`none !important`},"--clone-display":`none`,overflow:`auto`},_horizontal:{"&[dir=rtl]":{"--copy-offset-x":`calc({distance} * -1)`,"--translate-x":`{distance}`}},_mediaReduceMotion:{overflow:`auto`},_paused:{"--play-state":`paused`},_vertical:{"--translate-x":`0px`,"--translate-y":`calc({distance} * -1)`}}}})})))()}function Ne({controlRef:e,defaultPaused:t=!1,delay:n=0,dir:r,direction:a=`start`,duration:ee,loopCount:o=0,orientation:s=`horizontal`,paused:te,pauseOnFocus:l=!1,pauseOnHover:u=!1,reverse:ae=!1,speed:se=50,onComplete:ce,onLoopComplete:le,onPauseChange:ue,...de}={}){let{dir:fe}=oe(),d=r??fe,f=s===`vertical`,pe=(0,M.useRef)(null),p=(0,M.useRef)(null),m=(0,M.useRef)(null),[h,g]=(0,M.useState)(!1),[me,_]=(0,M.useState)(!1),[v,y]=(0,M.useState)(!1),[b,x]=he({defaultValue:t,value:te,onChange:ue}),S=ie(ce),ge=ie(le),[C,_e]=(0,M.useState)({content:0,root:0}),w=ee??(se>0?C.content/se:0),T=C.content>0&&Number.isFinite(w)&&w>0,ve=Math.max(1,C.content>0?Math.ceil(C.root/C.content):1),E=Number.isFinite(o)&&o>0?o:0,ye=a===`end`===ae?`normal`:`reverse`,D=b||u&&h||l&&me||v||!T,be=(0,M.useCallback)(()=>x(!0),[x]),xe=(0,M.useCallback)(()=>x(!1),[x]),O=(0,M.useCallback)(()=>x(e=>!e),[x]),Se=(0,M.useCallback)(()=>{m.current?.getAnimations().forEach(e=>{e.currentTime=0}),y(!1)},[]),k=(0,M.useMemo)(()=>({pause:be,paused:D,restart:Se,resume:xe,togglePause:O}),[D,be,Se,xe,O]);re(e,k),(0,M.useEffect)(()=>{let e=pe.current,t=p.current;if(!e||!t)return;let n=new ResizeObserver(t=>{t.forEach(({target:t,borderBoxSize:n})=>{let r=n[0];if(!r)return;let i=t===e?`root`:`content`,a=f?r.blockSize:r.inlineSize;_e(e=>e[i]===a?e:{...e,[i]:a})})});return n.observe(e,{box:`border-box`}),n.observe(t,{box:`border-box`}),()=>n.disconnect()},[f]);let A=(0,M.useCallback)((e={})=>c({style:{"--delay":`${Number.isFinite(n)?n:0}s`,"--direction":ye,"--distance":`${C.content}px`,"--duration":`${T?w:0}s`,"--loop-count":E||`infinite`},"aria-keyshortcuts":`Space`,"aria-live":`off`,"aria-roledescription":`marquee`,role:`region`,tabIndex:0},de,e,{ref:pe,"data-complete":i(v),"data-end":i(a===`end`),"data-orientation":s,"data-pause-on-focus":i(l),"data-pause-on-hover":i(u),"data-paused":i(D),"data-start":i(a===`start`),dir:d,onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||(_(!1),l&&(e.currentTarget.scrollLeft=0,e.currentTarget.scrollTop=0))},onFocusCapture:()=>_(!0),onKeyDown:e=>{e.target!==e.currentTarget||e.key!==` `||e.altKey||e.ctrlKey||e.metaKey||e.repeat||(e.preventDefault(),O())},onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1)})(),[de,a,s,l,u,D,v,T,d,w,ye,n,E,C.content,O]);return{control:k,copies:ve,getContentProps:(0,M.useCallback)((e={})=>c(e,{ref:m,"data-marquee-content":``,"data-orientation":s,"data-ready":i(T),onAnimationEnd:e=>{e.target===e.currentTarget&&E&&(y(!0),S())},onAnimationIteration:e=>{e.target===e.currentTarget&&ge()}})(),[s,T,E,S,ge]),getEdgeProps:(0,M.useCallback)(({direction:e=`start`,...t}={})=>c(t,{"aria-hidden":!0,"data-end":i(e===`end`),"data-orientation":s,"data-start":i(e===`start`),dir:d,inert:!0})(),[d,s]),getGroupProps:(0,M.useCallback)(({id:e,ref:t,index:n=0,...r}={})=>c({style:{"--index":n}},r,{id:n?void 0:e,ref:n?void 0:ne(t,p),"aria-hidden":n?!0:void 0,"data-clone":i(!!n),"data-orientation":s,inert:n?!0:void 0})(),[s]),getRootProps:A}}var M,Pe,Fe;function Ie(){return(Ie=e((()=>{M=t(),o(),v(),se(),l(),le(),u(),[Pe,Fe]=ue({name:`MarqueeContext`})})))()}var Le,N,Re,ze,P,Be,F,I,Ve,L,He;function Ue(){return(Ue=e((()=>{Le=t(),p(),de(),a(),ae(),Me(),Ie(),N=ce(),{PropsContext:Re,usePropsContext:ze,withContext:P,withProvider:Be}=pe(`marquee`,je),F=Be(({children:e,contentProps:t,...r})=>{let i=s(e),a=n(i,I),o=te(i,L),ne=ee(i,L),{copies:c,getContentProps:re,getEdgeProps:l,getGroupProps:u,getRootProps:ie}=Ne(r),ae=(0,Le.useMemo)(()=>({copies:c,getContentProps:re,getEdgeProps:l,getGroupProps:u}),[c,re,l,u]);return(0,N.jsx)(Pe,{value:ae,children:(0,N.jsx)(fe.div,{...ie(),children:a?e:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(I,{...t,children:o}),ne]})})})},`root`)(void 0,({edgeColor:e,edgeSize:t,gap:n,...i})=>({...i,"--edge-color":r(e,`colors`),"--edge-size":r(t,`sizes`),"--gap":r(n,`spaces`)})),I=P(({children:e,...t})=>{let{copies:n,getContentProps:r,getGroupProps:i}=Fe();return(0,N.jsx)(fe.div,{...r(t),children:Array.from({length:n+1},(t,n)=>(0,N.jsx)(Ve,{...i({index:n}),children:e},n))})},`content`)(),Ve=P(`div`,`group`)(),L=P(`div`,`item`)(),He=P(`div`,`edge`)(void 0,e=>{let{getEdgeProps:t}=Fe();return t(e)})})))()}function We(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z`},child:[]}]})(e)}function Ge(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`m12 1.608 12 20.784H0Z`},child:[]}]})(e)}function Ke(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z`},child:[]}]})(e)}function qe(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z`},child:[]}]})(e)}function Je(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z`},child:[]}]})(e)}function Ye(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z`},child:[]}]})(e)}function Xe(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z`},child:[]}]})(e)}function Ze(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z`},child:[]}]})(e)}function Qe(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`},child:[]}]})(e)}function $e(e){return k({tag:`svg`,attr:{role:`img`,viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{d:`M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z`},child:[]}]})(e)}function et(){return(et=e((()=>{Se()})))()}var tt,R,nt,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,rt;function it(){return(it=e((()=>{tt=t(),et(),xe(),x(),y(),h(),Oe(),Ae(),ge(),_e(),T(),E(),D(),Ue(),R=ce(),nt={component:F,title:`Components / Marquee`},z=[{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript`,color:`#f7df1e`,icon:Xe,label:`JavaScript`},{href:`https://www.typescriptlang.org`,color:`#3178c6`,icon:Ke,label:`TypeScript`},{href:`https://github.com`,color:`currentColor`,icon:Qe,label:`GitHub`},{href:`https://gitlab.com`,color:`#fc6d26`,icon:Ze,label:`GitLab`},{href:`https://vercel.com`,color:`currentColor`,icon:Ge,label:`Vercel`},{href:`https://react.dev`,color:`#61dafb`,icon:Je,label:`React`},{href:`https://nextjs.org`,color:`currentColor`,icon:Ye,label:`Next.js`},{href:`https://storybook.js.org`,color:`#ff4785`,icon:qe,label:`Storybook`},{href:`https://www.figma.com`,color:`#F24E1E`,icon:$e,label:`Figma`},{href:`https://x.com`,color:`currentColor`,icon:We,label:`X`}],B=()=>(0,R.jsx)(F,{"aria-label":`Brand logos`,gap:`xl`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),V=()=>(0,R.jsx)(O,{variant:`stack`,rows:[`horizontal`,`vertical`],children:(e,t,n)=>(0,R.jsx)(F,{"aria-label":`${t} brand logos`,contain:`inline-size`,gap:`xl`,h:t===`vertical`?`xl`:void 0,orientation:t,children:z.map(({color:e,icon:n,label:r})=>(0,R.jsx)(L,{px:t===`vertical`?`sm`:`xl`,py:t===`vertical`?`xl`:`sm`,children:(0,R.jsx)(g,{as:n,"aria-hidden":!1,"aria-label":r,color:e,fontSize:`6xl`})},r))},n)}),H=()=>(0,R.jsx)(O,{variant:`stack`,rows:[`start`,`end`],children:(e,t,n)=>(0,R.jsx)(F,{"aria-label":`Brand logos moving toward ${t}`,contain:`inline-size`,direction:t,gap:`xl`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))},n)}),U=()=>(0,R.jsx)(O,{variant:`stack`,rows:[`25`,`50`,`100`],children:(e,t,n)=>(0,R.jsx)(F,{"aria-label":`Brand logos at ${t} pixels per second`,contain:`inline-size`,gap:`xl`,speed:Number(t),children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))},n)}),W=()=>(0,R.jsx)(F,{duration:10,gap:`xl`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),G=()=>(0,R.jsx)(F,{delay:2,gap:`xl`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),K=()=>(0,R.jsx)(F,{"aria-label":`Brand logos scrolling three times`,gap:`xl`,loopCount:3,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),q=()=>(0,R.jsx)(F,{gap:`xl`,reverse:!0,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),J=()=>(0,R.jsx)(F,{"aria-label":`Brand links`,gap:`xl`,pauseOnHover:!0,children:z.map(({href:e,color:t,icon:n,label:r})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(b,{as:`a`,href:e,variant:`ghost`,"aria-label":r,color:t,h:`auto`,px:`2rem`,py:`2`,children:(0,R.jsx)(g,{as:n,fontSize:`6xl`})})},r))}),Y=()=>(0,R.jsx)(F,{"aria-label":`Brand links`,gap:`xl`,pauseOnFocus:!0,children:z.map(({href:e,color:t,icon:n,label:r})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(b,{as:`a`,href:e,variant:`ghost`,"aria-label":r,color:t,h:`auto`,px:`2rem`,py:`2`,children:(0,R.jsx)(g,{as:n,fontSize:`6xl`})})},r))}),X=()=>(0,R.jsxs)(F,{"aria-label":`Brand logos with gradient edges`,gap:`xl`,rounded:`l2`,children:[(0,R.jsx)(He,{direction:`start`}),(0,R.jsx)(I,{children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),(0,R.jsx)(He,{direction:`end`})]}),Z=()=>(0,R.jsx)(S,{containerType:`inline-size`,overflow:`hidden`,w:`full`,children:(0,R.jsx)(F,{"aria-label":`Brand logos`,bg:`bg.panel`,gap:`xl`,mx:`-lg`,my:`calc({spaces.lg} + 50cqw * sin(2deg))`,py:`lg`,rounded:`0`,transform:`rotate(-2deg)`,w:`calc(100% + {spaces.lg} * 2)`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))})}),Q=()=>{let e=[{src:`https://www.ghibli.jp/gallery/chihiro015.jpg`,alt:`Scene from Spirited Away`},{src:`https://www.ghibli.jp/gallery/howl049.jpg`,alt:`Scene from Howl's Moving Castle`},{src:`https://www.ghibli.jp/gallery/totoro036.jpg`,alt:`Scene from My Neighbor Totoro`},{src:`https://www.ghibli.jp/gallery/mononoke033.jpg`,alt:`Scene from Princess Mononoke`},{src:`https://www.ghibli.jp/gallery/laputa047.jpg`,alt:`Scene from Castle in the Sky`},{src:`https://www.ghibli.jp/gallery/porco025.jpg`,alt:`Scene from Porco Rosso`}];return(0,R.jsx)(S,{containerType:`size`,h:`lg`,overflow:`hidden`,perspective:`{sizes.lg}`,position:`relative`,w:`full`,children:(0,R.jsx)(ve,{h:`calc(100cqh * cos(9deg) + 100cqw * sin(9deg))`,left:`50%`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%) rotate(9deg)`,w:`calc(100cqw * cos(9deg) + 100cqh * sin(9deg))`,children:[0,1,2].map(t=>(0,R.jsx)(F,{"aria-label":`Image gallery, column ${t+1}`,direction:t%2?`end`:`start`,flex:`1`,gap:`lg`,h:`full`,minW:`0`,orientation:`vertical`,speed:30+t*10,contentProps:{alignItems:`stretch`},children:e.map((n,r)=>{let{src:i,alt:a}=e[(r+t*2)%e.length];return(0,R.jsx)(L,{w:`full`,children:(0,R.jsx)(C,{src:i,alt:a,boxShadow:`md`,h:`3xs`,objectFit:`cover`,rounded:`l2`,w:`full`})},i)})},t))})})},$=()=>{let[e,t]=(0,tt.useState)(!1),n=(0,tt.useRef)(null);return(0,R.jsxs)(ye,{alignItems:`start`,children:[(0,R.jsx)(F,{"aria-label":`Controlled brand logos`,gap:`xl`,paused:e,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),(0,R.jsx)(b,{startIcon:e?(0,R.jsx)(ke,{}):(0,R.jsx)(De,{}),onClick:()=>t(e=>!e),children:e?`Resume`:`Pause`}),(0,R.jsx)(w,{}),(0,R.jsx)(F,{"aria-label":`Brand logos with imperative controls`,controlRef:n,gap:`xl`,children:z.map(({color:e,icon:t,label:n})=>(0,R.jsx)(L,{px:`xl`,py:`sm`,children:(0,R.jsx)(g,{as:t,"aria-hidden":!1,"aria-label":n,color:e,fontSize:`6xl`})},n))}),(0,R.jsxs)(be,{gap:`md`,children:[(0,R.jsx)(b,{onClick:()=>n.current?.pause(),children:`Pause`}),(0,R.jsx)(b,{onClick:()=>n.current?.resume(),children:`Resume`}),(0,R.jsx)(b,{onClick:()=>n.current?.togglePause(),children:`Toggle pause`}),(0,R.jsx)(b,{onClick:()=>n.current?.restart(),children:`Restart`})]})]})},rt=[`Basic`,`Orientation`,`Direction`,`Speed`,`Duration`,`Delay`,`LoopCount`,`Reverse`,`PauseOnHover`,`PauseOnFocus`,`Edge`,`Diagonal`,`ImageGallery`,`CustomControl`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root aria-label="Brand logos" gap="xl">
      {items.map(({
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["horizontal", "vertical"]}>
      {(_, row, key) => <Marquee.Root key={key} aria-label={\`\${row} brand logos\`} contain="inline-size" gap="xl" h={row === "vertical" ? "xl" : undefined} orientation={row}>
          {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px={row === "vertical" ? "sm" : "xl"} py={row === "vertical" ? "xl" : "sm"}>
              <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
            </Marquee.Item>)}
        </Marquee.Root>}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, row, key) => <Marquee.Root key={key} aria-label={\`Brand logos moving toward \${row}\`} contain="inline-size" direction={row} gap="xl">
          {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
              <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
            </Marquee.Item>)}
        </Marquee.Root>}
    </PropsTable>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["25", "50", "100"]}>
      {(_, row, key) => <Marquee.Root key={key} aria-label={\`Brand logos at \${row} pixels per second\`} contain="inline-size" gap="xl" speed={Number(row)}>
          {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
              <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
            </Marquee.Item>)}
        </Marquee.Root>}
    </PropsTable>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root duration={10} gap="xl">
      {items.map(({
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root delay={2} gap="xl">
      {items.map(({
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root aria-label="Brand logos scrolling three times" gap="xl" loopCount={3}>
      {items.map(({
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root gap="xl" reverse>
      {items.map(({
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root aria-label="Brand links" gap="xl" pauseOnHover>
      {items.map(({
      href,
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Button as="a" href={href} variant="ghost" aria-label={label} color={color} h="auto" px="2rem" py="2">
            <Icon as={icon} fontSize="6xl" />
          </Button>
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root aria-label="Brand links" gap="xl" pauseOnFocus>
      {items.map(({
      href,
      color,
      icon,
      label
    }) => <Marquee.Item key={label} px="xl" py="sm">
          <Button as="a" href={href} variant="ghost" aria-label={label} color={color} h="auto" px="2rem" py="2">
            <Icon as={icon} fontSize="6xl" />
          </Button>
        </Marquee.Item>)}
    </Marquee.Root>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <Marquee.Root aria-label="Brand logos with gradient edges" gap="xl" rounded="l2">
      <Marquee.Edge direction="start" />
      <Marquee.Content>
        {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
            <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
          </Marquee.Item>)}
      </Marquee.Content>
      <Marquee.Edge direction="end" />
    </Marquee.Root>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <Box containerType="inline-size" overflow="hidden" w="full">
      <Marquee.Root aria-label="Brand logos" bg="bg.panel" gap="xl" mx="-lg" my="calc({spaces.lg} + 50cqw * sin(2deg))" py="lg" rounded="0" transform="rotate(-2deg)" w="calc(100% + {spaces.lg} * 2)">
        {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
            <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
          </Marquee.Item>)}
      </Marquee.Root>
    </Box>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const images = [{
    src: "https://www.ghibli.jp/gallery/chihiro015.jpg",
    alt: "Scene from Spirited Away"
  }, {
    src: "https://www.ghibli.jp/gallery/howl049.jpg",
    alt: "Scene from Howl's Moving Castle"
  }, {
    src: "https://www.ghibli.jp/gallery/totoro036.jpg",
    alt: "Scene from My Neighbor Totoro"
  }, {
    src: "https://www.ghibli.jp/gallery/mononoke033.jpg",
    alt: "Scene from Princess Mononoke"
  }, {
    src: "https://www.ghibli.jp/gallery/laputa047.jpg",
    alt: "Scene from Castle in the Sky"
  }, {
    src: "https://www.ghibli.jp/gallery/porco025.jpg",
    alt: "Scene from Porco Rosso"
  }];
  return <Box containerType="size" h="lg" overflow="hidden" perspective="{sizes.lg}" position="relative" w="full">
      <HStack h="calc(100cqh * cos(9deg) + 100cqw * sin(9deg))" left="50%" position="absolute" top="50%" transform="translate(-50%, -50%) rotate(9deg)" w="calc(100cqw * cos(9deg) + 100cqh * sin(9deg))">
        {[0, 1, 2].map(column => <Marquee.Root key={column} aria-label={\`Image gallery, column \${column + 1}\`} direction={column % 2 ? "end" : "start"} flex="1" gap="lg" h="full" minW="0" orientation="vertical" speed={30 + column * 10} contentProps={{
        alignItems: "stretch"
      }}>
            {images.map((_, index) => {
          const {
            src,
            alt
          } = images[(index + column * 2) % images.length]!;
          return <Marquee.Item key={src} w="full">
                  <Image src={src} alt={alt} boxShadow="md" h="3xs" objectFit="cover" rounded="l2" w="full" />
                </Marquee.Item>;
        })}
          </Marquee.Root>)}
      </HStack>
    </Box>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [paused, setPaused] = useState(false);
  const controlRef = useRef<Marquee.Control>(null);
  return <VStack alignItems="start">
      <Marquee.Root aria-label="Controlled brand logos" gap="xl" paused={paused}>
        {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
            <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
          </Marquee.Item>)}
      </Marquee.Root>

      <Button startIcon={paused ? <PlayIcon /> : <PauseIcon />} onClick={() => setPaused(prev => !prev)}>
        {paused ? "Resume" : "Pause"}
      </Button>
      <Separator />
      <Marquee.Root aria-label="Brand logos with imperative controls" controlRef={controlRef} gap="xl">
        {items.map(({
        color,
        icon,
        label
      }) => <Marquee.Item key={label} px="xl" py="sm">
            <Icon as={icon} aria-hidden={false} aria-label={label} color={color} fontSize="6xl" />
          </Marquee.Item>)}
      </Marquee.Root>
      <Wrap gap="md">
        <Button onClick={() => controlRef.current?.pause()}>Pause</Button>
        <Button onClick={() => controlRef.current?.resume()}>Resume</Button>
        <Button onClick={() => controlRef.current?.togglePause()}>
          Toggle pause
        </Button>
        <Button onClick={() => controlRef.current?.restart()}>Restart</Button>
      </Wrap>
    </VStack>;
}`,...$.parameters?.docs?.source}}}})))()}it();export{B as Basic,$ as CustomControl,G as Delay,Z as Diagonal,H as Direction,W as Duration,X as Edge,Q as ImageGallery,K as LoopCount,V as Orientation,Y as PauseOnFocus,J as PauseOnHover,q as Reverse,U as Speed,rt as __namedExportsOrder,nt as default};