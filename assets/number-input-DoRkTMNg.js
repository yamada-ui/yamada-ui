import{j as P}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{t as ke,a as ye,c as Ge}from"./number-CcP_arM8.js";import{k as F,V as qe,f as ze,u as We,a as te,t as He,h as N,o as Xe,b as Q,c as K}from"./factory-BFmlPmGv.js";import{u as Ye}from"./index-C3wYSRXL.js";import{u as $e}from"./index-DgxtypUL.js";import{u as Je,f as Qe}from"./form-control-aTmtpG9F.js";import{c as _e}from"./icon-C9JvswpF.js";import{f as U}from"./forward-ref-BWI-Phbn.js";import{a as Ze}from"./use-component-style-EAJDzyrD.js";import{o as et}from"./theme-provider-BxuddooS.js";const tt=({min:t=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER,keepWithinRange:o=!0,...n}={})=>{const i=F(n.onChange),[d,m]=s.useState(()=>n.defaultValue==null?"":ne(n.defaultValue,n.step??1,n.precision)??""),b=typeof n.value<"u",c=b?n.value:d,x=Re(R(c),n.step??1),h=n.precision??x,a=s.useCallback(l=>{l!==c&&(b||m(l.toString()),i(l.toString(),R(l)))},[i,b,c]),f=s.useCallback(l=>{let u=l;return o&&(u=Ge(u,t,r)),ke(u,h)},[h,o,r,t]),C=s.useCallback((l=n.step??1)=>{let u;c===""?u=R(l):u=R(c)+l,u=f(u),a(u)},[f,n.step,a,c]),O=s.useCallback((l=n.step??1)=>{let u;c===""?u=R(-l):u=R(c)-l,u=f(u),a(u)},[f,n.step,a,c]),y=s.useCallback(()=>{let l;n.defaultValue==null?l="":l=ne(n.defaultValue,n.step??1,n.precision)??t,a(l)},[n.defaultValue,n.precision,n.step,a,t]),M=s.useCallback(l=>{const u=ne(l,n.step??1,h)??t;a(u)},[h,n.step,a,t]),V=R(c);return{isOut:V<t||r<V,isMax:V===r,isMin:V===t,precision:h,value:c,valueAsNumber:V,update:a,reset:y,increment:C,decrement:O,clamp:f,cast:M,setValue:m}},R=t=>parseFloat(t.toString().replace(/[^\w.-]+/g,"")),Re=(t,r)=>Math.max(ye(r),ye(t)),ne=(t,r,o)=>(t=R(t),Number.isNaN(t)?void 0:ke(t,o??Re(t,r))),nt=t=>/^[Ee0-9+\-.]$/.test(t),st=({key:t,ctrlKey:r,altKey:o,metaKey:n},i)=>{if(t==null)return!0;const d=r||o||n;return!(t.length===1)||d?!0:i(t)},we=({ctrlKey:t,shiftKey:r,metaKey:o})=>{let n=1;return(o||t)&&(n=.1),r&&(n=10),n},rt=(t={})=>{const{id:r,name:o,value:n,defaultValue:i,inputMode:d="decimal",pattern:m="[0-9]*(.[0-9]+)?",focusInputOnChange:b=!0,clampValueOnBlur:c=!0,keepWithinRange:x=!0,allowMouseWheel:h,min:a=Number.MIN_SAFE_INTEGER,max:f=Number.MAX_SAFE_INTEGER,step:C,precision:O,parse:y,format:M,onInvalid:V,isValidCharacter:se,getAriaValueText:re,onChange:oe,...l}=Je(t),{required:u,disabled:w,readOnly:I,"aria-invalid":ae,onFocus:Ae,onBlur:Me,...T}=qe(l,Qe),Te=u,je=I,Fe=w,[Oe,ue]=s.useState(!1),B=!(I||w),D=s.useRef(null),G=s.useRef(null),ce=s.useRef(null),ie=s.useRef(null),le=F(N(Ae,e=>{var p;ue(!0),G.current&&(e.target.selectionStart=G.current.start??((p=e.currentTarget.value)==null?void 0:p.length),e.currentTarget.selectionEnd=G.current.end??e.currentTarget.selectionStart)})),fe=F(N(Me,()=>{ue(!1),c&&Le()})),A=F(V),q=F(re),z=F(se??nt),{isMin:me,isMax:de,isOut:pe,value:g,valueAsNumber:v,setValue:ee,update:L,cast:be,...W}=tt({value:n,defaultValue:i,step:C,min:a,max:f,precision:O,keepWithinRange:x,onChange:oe}),Ce=s.useMemo(()=>{let e=q==null?void 0:q(g);return e??(e=g.toString(),e||void 0)},[g,q]),H=s.useCallback(e=>e.split("").filter(z).join(""),[z]),X=s.useCallback(e=>(y==null?void 0:y(e))??e,[y]),j=s.useCallback(e=>((M==null?void 0:M(e))??e).toString(),[M]),Y=s.useCallback((e=C??1)=>{B&&W.increment(e)},[B,W,C]),$=s.useCallback((e=C??1)=>{B&&W.decrement(e)},[B,W,C]),Le=s.useCallback(()=>{let e=g;if(g==="")return;/^[eE]/.test(g.toString())?ee(""):(v<a&&(e=a),v>f&&(e=f),be(e))},[be,f,a,ee,g,v]),ge=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const p=X(e.currentTarget.value);L(H(p)),G.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd}},[X,L,H]),xe=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;st(e,z)||e.preventDefault();const p=we(e)*(C??1),S={ArrowUp:()=>Y(p),ArrowDown:()=>$(p),Home:()=>L(a),End:()=>L(f)}[e.key];S&&(e.preventDefault(),S(e))},[$,Y,z,f,a,C,L]),{up:ve,down:Ne,stop:E,isSpinning:Pe}=at(Y,$);Ee(ce,["disabled"],Pe,E),Ee(ie,["disabled"],Pe,E);const J=s.useCallback(()=>{b&&requestAnimationFrame(()=>{var e;(e=D.current)==null||e.focus()})},[b]),he=s.useCallback(e=>{e.preventDefault(),ve(),J()},[J,ve]),Se=s.useCallback(e=>{e.preventDefault(),Ne(),J()},[J,Ne]);ze(()=>{(v>f||v<a)&&(A==null||A("rangeOverflow",j(g),v))},[v,g,j,A]),We(()=>{if(!D.current||!(D.current.value!=g))return;const p=X(D.current.value);ee(H(p))},[X,H]),Ye(()=>D.current,"wheel",e=>{var Ie;const k=(((Ie=D.current)==null?void 0:Ie.ownerDocument)??document).activeElement===D.current;if(!h||!k)return;e.preventDefault();const S=we(e)*(C??1),_=Math.sign(e.deltaY);_===-1?Y(S):_===1&&$(S)},{passive:!1});const Ke=s.useCallback((e={},p=null)=>({id:r,name:o,type:"text",role:"spinbutton",inputMode:d,pattern:m,required:u,disabled:w,readOnly:I,...T,...e,min:a,max:f,step:C,ref:te(D,p),value:j(g),"aria-valuemin":a,"aria-valuemax":f,"aria-valuenow":Number.isNaN(v)?void 0:v,"aria-valuetext":Ce,"aria-invalid":He(ae??pe),autoComplete:"off",autoCorrect:"off",onChange:N(e.onChange,ge),onKeyDown:N(e.onKeyDown,xe),onFocus:N(e.onFocus,le),onBlur:N(e.onBlur,fe)}),[r,o,d,m,u,w,I,T,a,f,C,j,g,v,Ce,ae,pe,ge,xe,le,fe]),Ue=s.useCallback((e={},p=null)=>{var S;const k=w||x&&de;return{required:u,readOnly:I,disabled:k,...T,...e,style:{...e.style,cursor:I?"not-allowed":(S=e.style)==null?void 0:S.cursor},ref:te(p,ce),tabIndex:-1,onPointerDown:N(e.onPointerDown,_=>{_.button===0&&!k&&he(_)}),onPointerLeave:N(e.onPointerLeave,E),onPointerUp:N(e.onPointerUp,E)}},[w,x,de,u,I,T,E,he]),Be=s.useCallback((e={},p=null)=>{var S;const k=w||x&&me;return{required:u,readOnly:I,disabled:k,...T,...e,style:{...e.style,cursor:I?"not-allowed":(S=e.style)==null?void 0:S.cursor},ref:te(p,ie),tabIndex:-1,onPointerDown:N(e.onPointerDown,_=>{_.button===0&&!k&&Se(_)}),onPointerLeave:N(e.onPointerLeave,E),onPointerUp:N(e.onPointerUp,E)}},[w,x,me,u,I,T,E,Se]);return{props:l,value:j(g),valueAsNumber:v,isFocused:Oe,isRequired:Te,isReadOnly:je,isDisabled:Fe,getInputProps:Ke,getIncrementProps:Ue,getDecrementProps:Be}},ot=50,De=300,at=(t,r)=>{const[o,n]=s.useState(!1),[i,d]=s.useState(null),[m,b]=s.useState(!0),c=s.useRef(null),x=()=>clearTimeout(c.current);$e(()=>{i==="increment"&&t(),i==="decrement"&&r()},o?ot:null);const h=s.useCallback(()=>{m&&t(),c.current=setTimeout(()=>{b(!1),n(!0),d("increment")},De)},[t,m]),a=s.useCallback(()=>{m&&r(),c.current=setTimeout(()=>{b(!1),n(!0),d("decrement")},De)},[r,m]),f=s.useCallback(()=>{b(!0),n(!1),x()},[]);return s.useEffect(()=>()=>x(),[]),{up:h,down:a,stop:f,isSpinning:o}},Ee=(t,r,o,n)=>{s.useEffect(()=>{if(!t.current||!o)return;const i=t.current.ownerDocument.defaultView??window,d=new i.MutationObserver(m=>{for(const{type:b,attributeName:c}of m)b==="attributes"&&c&&r.includes(c)&&n()});return d.observe(t.current,{attributes:!0,attributeFilter:r}),()=>d.disconnect()})},[ut,Z]=Xe({strict:!1,name:"NumberInputContext"}),St=U((t,r)=>{const[o,n]=Ze("NumberInput",t),{className:i,isStepper:d=!0,containerProps:m,addonProps:b,incrementProps:c,decrementProps:x,...h}=et(n),{getInputProps:a,getIncrementProps:f,getDecrementProps:C,props:O}=rt(h),y={position:"relative",zIndex:0,...o.container};return P.jsx(ut,{value:{getInputProps:a,getIncrementProps:f,getDecrementProps:C,styles:o},children:P.jsxs(Q.div,{className:K("ui-number-input",i),__css:y,...m,children:[P.jsx(ct,{...a(O,r)}),d?P.jsxs(it,{...b,children:[P.jsx(lt,{...c}),P.jsx(ft,{...x})]}):null]})})}),ct=U(({className:t,...r},o)=>{const{styles:n}=Z(),i={width:"100%",...n.field};return P.jsx(Q.input,{ref:o,className:K("ui-number-input__field",t),__css:i,...r})}),it=U(({className:t,...r},o)=>{const{styles:n}=Z(),i={display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:"fallback(yamcha, 1)",...n.addon};return P.jsx(Q.div,{ref:o,className:K("ui-number-input__addon",t),"aria-hidden":!0,__css:i,...r})}),Ve=Q("button",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),lt=U(({className:t,children:r,...o},n)=>{const{getIncrementProps:i,styles:d}=Z(),m={...d.stepper};return P.jsx(Ve,{className:K("ui-number-input__stepper--up",t),...i(o,n),__css:m,children:r??P.jsx(_e,{__css:{transform:"rotate(180deg)"}})})}),ft=U(({className:t,children:r,...o},n)=>{const{getDecrementProps:i,styles:d}=Z(),m={...d.stepper};return P.jsx(Ve,{className:K("ui-number-input__stepper--down",t),...i(o,n),__css:m,children:r??P.jsx(_e,{})})});export{St as N,rt as u};