import{j as t}from"./extends-CwFRzn3r.js";import{u as Ne}from"./index-BJROMb8v.js";import{r as h}from"./index-BwDkhjyp.js";import{u as De,o as Re,U as Me,k as Ce,a1 as oe,f as se,h as E,c as H,b as N,r as Te,z as Ve}from"./factory-BFmlPmGv.js";import{u as Ae,f as He}from"./form-control-aTmtpG9F.js";import{e as Oe,c as re,h as Q,i as Be,r as Le,p as Ie,j as Fe,k as We,o as ze}from"./theme-provider-BxuddooS.js";import{I as $e}from"./icon-button-F6ie_BL2.js";import{b as Ge}from"./icon-C9JvswpF.js";import{f as O}from"./forward-ref-BWI-Phbn.js";import{A as Ue}from"./alpha-slider-BVq1HPLR.js";import{H as qe}from"./hue-slider-DZ00peRB.js";import{C as _e}from"./color-swatch-CgTvKzqr.js";import{I as Ze}from"./input-CMTvid_t.js";import{S as Je}from"./saturation-slider-CqhQtOdV.js";import{a as Ke}from"./use-component-style-EAJDzyrD.js";const Qe=()=>{const[o,u]=h.useState(!1);De(()=>{u(typeof window<"u"&&"EyeDropper"in window)},[]);const l=h.useCallback((n={})=>o?new window.EyeDropper().open(n):Promise.resolve(void 0),[o]);return{supported:o,onOpen:l}},me=(o,u)=>{let[l,n,c,i]=Ie(o,u)??[0,0,1,1];return i>1&&(i=1),{h:l,s:n,l:c,a:i}},fe=(o,u)=>{let[l,n,c,i]=Fe(o,u)??[255,255,255,1];return l>255&&(l=255),n>255&&(n=255),c>255&&(c=255),i>1&&(i=1),{r:l,g:n,b:c,a:i}},ae=(o,u)=>{const[l,n,c,i]=We(o,u);return{h:l,s:n,v:c,a:i}},[Xe,F]=Re({name:"ColorSelectorContext",errorMessage:`useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`}),Ye=({isInvalid:o,...u})=>{const{id:l,name:n,value:c,defaultValue:i,fallbackValue:s,onChange:d,onChangeStart:f,onChangeEnd:x,format:b,onSwatchClick:_,...g}=Ae({isInvalid:o,...u}),[{"aria-readonly":D,required:v,disabled:C,readOnly:S,...B},G]=Me(g,He),U=Ce(f),q=Ce(x),{supported:X,onOpen:Z}=Qe(),[V,J]=Ne({value:c,defaultValue:i??s,onChange:d}),m=h.useMemo(()=>b??Oe(V??"#ffffff"),[V,b]),P=re(V,"#ffffff")(m),W=h.useRef(void 0),L=h.useRef(!1),[A,z]=h.useState(ae(P,s)),{h:k,s:R,v:M,a:$}=A,K=m.endsWith("a"),ge=!(C||S),ye=h.useMemo(()=>{if(P.startsWith("hsl")){const{h:e,s:a,l:r,a:p}=me(P,s);let y=[{label:"H",space:"h",value:Math.round(e),min:0,max:360},{label:"S(%)",space:"s",value:Math.round(a*100),min:0,max:100},{label:"L(%)",space:"l",value:Math.round(r*100),min:0,max:100}];return K&&(y=[...y,{label:"A(%)",space:"a",value:Math.round(p*100),min:0,max:100}]),y}else{const{r:e,g:a,b:r,a:p}=fe(P,s);let y=[{label:"R",space:"r",value:Math.round(e),min:0,max:255},{label:"G",space:"g",value:Math.round(a),min:0,max:255},{label:"B",space:"b",value:Math.round(r),min:0,max:255}];return K&&(y=[...y,{label:"A(%)",space:"a",value:Math.round(p*100),min:0,max:100}]),y}},[P,K,s]),j=h.useCallback(e=>{oe(e)?z(ae(e,s)):z(a=>({...a,...e}))},[s]),I=h.useCallback(e=>{window.clearTimeout(W.current),L.current=!0;const{h:a,s:r,v:p,a:y}={...A,...e},T=Q([a,r,p,y],s)(m);T&&U(T)},[U,s,A,m]),w=h.useCallback(e=>{window.clearTimeout(W.current),W.current=window.setTimeout(()=>{L.current=!1},200);let a;if(oe(e))a=re(e,s)(m);else{const{h:r,s:p,v:y,a:T}={...A,...e};a=Q([r,p,y,T],s)(m)}a&&q(a)},[q,s,A,m]),he=h.useCallback((e,a)=>{let r=Math.floor(parseFloat(e.target.value));isNaN(r)&&(r=0),["s","l","a"].includes(a)&&(r=r/100);let p;if(P.startsWith("hsl")){const{h:y,s:T,l:Y,a:ee}=Object.assign(me(P,s),{[a]:r});p=Be([y,T,Y,ee],s)(m)}else{const{r:y,g:T,b:Y,a:ee}=Object.assign(fe(P,s),{[a]:r});p=Le([y,T,Y,ee],s)(m)}p&&(j(p),w(p))},[P,j,w,s,m]),de=h.useCallback(async()=>{try{const{sRGBHex:e}=await Z()??{};if(!e)return;j(e),w(e)}catch{}},[Z,j,w]);se(()=>{const e=Q([k,R,M,$],s)(m);e&&J(e)},[k,R,M,$]),se(()=>{L.current||c&&z(ae(c,s))},[c]),se(()=>{if(!m||!V)return;const e=re(V,s)(m);e&&J(e)},[m]);const xe=h.useCallback((e={},a=null)=>({...e,ref:a,...B,...G}),[G,B]),be=h.useCallback((e={},a=null)=>({...B,"aria-readonly":D,...e,id:l,ref:a,type:"hidden",name:n,value:P,required:v,disabled:C,readOnly:S}),[B,D,l,n,P,v,C,S]),ve=h.useCallback((e={},a=null)=>({required:v,disabled:C,readOnly:S,isInvalid:o,...e,ref:a,value:[k,R,M],onChange:E(e.onChange,([,r,p])=>j({s:r,v:p})),onChangeStart:E(e.onChangeStart,([,r,p])=>I({s:r,v:p})),onChangeEnd:E(e.onChangeEnd,([,r,p])=>w({s:r,v:p}))}),[v,C,S,o,k,R,M,j,I,w]),Pe=h.useCallback((e={},a=null)=>({required:v,disabled:C,readOnly:S,isInvalid:o,...e,ref:a,value:k,onChange:E(e.onChange,r=>j({h:r})),onChangeStart:E(e.onChangeStart,r=>I({h:r})),onChangeEnd:E(e.onChangeEnd,r=>w({h:r}))}),[v,C,S,o,k,j,I,w]),je=h.useCallback((e={},a=null)=>({required:v,disabled:C,readOnly:S,isInvalid:o,...e,ref:a,value:$,color:Q([k,R,M,$],s)(m),onChange:E(e.onChange,r=>j({a:r})),onChangeStart:E(e.onChangeStart,r=>I({a:r})),onChangeEnd:E(e.onChangeEnd,r=>w({a:r}))}),[s,v,C,S,o,m,k,R,M,$,j,I,w]),we=h.useCallback(({space:e,...a},r=null)=>({required:v,disabled:C,readOnly:S,isInvalid:o,...a,ref:r,type:"number",step:1,onChange:E(a.onChange,p=>he(p,e))}),[v,C,S,o,he]),Ee=h.useCallback((e={},a=null)=>({disabled:C,"aria-label":"Pick a color",...e,ref:a,onClick:E(e.onClick,de)}),[C,de]),ke=h.useCallback(({color:e,...a}={},r=null)=>({"aria-label":`Select ${e} as the color`,disabled:C,readOnly:S,...a,ref:r,color:e,onClick:E(a.onClick,()=>{oe(e)&&(_==null||_(e),j(e),w(e))})}),[C,S,_,j,w]);return{value:P,onChange:j,eyeDropperSupported:X,withAlpha:K,isInteractive:ge,disabled:C,readOnly:S,channels:ye,getContainerProps:xe,getInputProps:be,getSaturationSliderProps:ve,getHueSliderProps:Pe,getAlphaSliderProps:je,getEyeDropperProps:Ee,getChannelProps:we,getSwatchProps:ke}},le=O(({className:o,...u},l)=>{const{getEyeDropperProps:n,readOnly:c,size:i,styles:s}=F(),d={h:"auto",minW:"auto",pointerEvents:c?"none":void 0,...s.eyeDropper};return t.jsx($e,{className:H("ui-color-selector__eye-dropper",o),variant:"outline",size:i,__css:d,...n(u,l),children:t.jsx(te,{className:"ui-color-selector__eye-dropper__icon"})})});le.displayName="ColorSelectorEyeDropper";le.__ui__="ColorSelectorEyeDropper";const te=({...o})=>t.jsxs(Ge,{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[t.jsx("path",{d:"m2 22 1-1h3l9-9"}),t.jsx("path",{d:"M3 21v-3l9-9"}),t.jsx("path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"})]});te.displayName="EyeDropperIcon";te.__ui__="EyeDropperIcon";const ne=O(({className:o,hueSliderRef:u,hueSliderProps:l,alphaSliderRef:n,alphaSliderProps:c,...i},s)=>{let{size:d,withAlpha:f,getHueSliderProps:x,getAlphaSliderProps:b,styles:_}=F();d==="full"&&(d="lg");const g={display:"flex",flexDirection:"column",..._.sliders};return t.jsxs(N.div,{ref:s,className:H("ui-color-selector__sliders",o),__css:g,...i,children:[t.jsx(qe,{size:d,className:"ui-color-selector__hue-slider",__css:{..._.hueSlider},...x(l,u)}),f?t.jsx(Ue,{size:d,className:"ui-color-selector__alpha-slider",__css:{..._.alphaSlider},...b(c,n)}):null]})});ne.displayName="ColorSelectorSliders";ne.__ui__="ColorSelectorSliders";const ce=O(({className:o,withEyeDropper:u=!0,withResult:l,eyeDropperRef:n,eyeDropperProps:c,hueSliderRef:i,hueSliderProps:s,alphaSliderRef:d,alphaSliderProps:f,...x},b)=>{const{value:_,eyeDropperSupported:g,styles:D}=F(),v={display:"flex",w:"100%",...D.body};return t.jsxs(N.div,{ref:b,className:H("ui-color-selector__body",o),__css:v,...x,children:[t.jsx(ne,{hueSliderRef:i,hueSliderProps:s,alphaSliderRef:d,alphaSliderProps:f}),u&&g?t.jsx(le,{ref:n,...c}):null,l?t.jsx(_e,{className:"ui-color-selector__result",color:_,__css:{...D.result}}):null]})});ce.displayName="ColorSelectorBody";ce.__ui__="ColorSelectorBody";const ie=O(({className:o,channelProps:u,...l},n)=>{const{withAlpha:c,channels:i,getChannelProps:s,styles:d}=F(),f={display:"grid",gridTemplateColumns:`repeat(${c?"4":"3"}, 1fr)`,...d.channels};return t.jsx(N.div,{ref:n,className:H("ui-color-selector__channels",o),__css:f,...l,children:i.map(({label:x,space:b,value:_,min:g,max:D})=>t.jsx(ue,{channelLabel:x,...s({...u,space:b,value:_,min:g,max:D})},x))})});ie.displayName="ColorSelectorChannels";ie.__ui__="ColorSelectorChannels";const ue=O(({className:o,channelLabel:u,...l},n)=>{const c=h.useId();let{size:i,disabled:s,readOnly:d,styles:f}=F();i==="full"&&(i="lg");const x={...f.channel};return t.jsxs(N.div,{className:H("ui-color-selector__channel",o),children:[u?t.jsx(N.label,{htmlFor:c,style:{cursor:s?"not-allowed":void 0},__css:{display:"block",pointerEvents:d?"none":void 0,...f.channelLabel},children:u}):null,t.jsx(Ze,{ref:n,id:c,size:i,__css:x,...l})]})});ue.displayName="ColorSelectorChannel";ue.__ui__="ColorSelectorChannel";const pe=O(({className:o,swatchesLabel:u,swatches:l,swatchesContainerProps:n,swatchProps:c,swatchesColumns:i,...s},d)=>{const{getSwatchProps:f,readOnly:x,styles:b}=F(),_={display:"grid",gridTemplateColumns:Te(i,g=>g!=null?`repeat(${g}, minmax(0, 1fr))`:void 0),...b.swatches};return l!=null&&l.length?t.jsxs(N.div,{...n,children:[u?t.jsx(N.p,{className:"ui-color-selector__swatches__label",__css:{...b.swatchesLabel},children:u}):null,t.jsx(N.div,{ref:d,className:H("ui-color-selector__swatches",o),__css:_,...s,children:l.map(g=>t.jsx(_e,{as:"button",__css:{boxSize:"100%",pointerEvents:x?"none":void 0,...b.swatch},...f({color:g,...c})},g))})]}):null});pe.displayName="ColorSelectorSwatches";pe.__ui__="ColorSelectorSwatches";const Se=O(({size:o,...u},l)=>{const[n,c]=Ke("ColorSelector",{size:o,...u}),{className:i,children:s,withResult:d=!0,withPicker:f=!0,withChannel:x=!0,swatches:b,swatchesColumns:_=7,inputProps:g,withEyeDropper:D,eyeDropperRef:v,eyeDropperProps:C,saturationSliderRef:S,saturationSliderProps:B,hueSliderRef:G,hueSliderProps:U,alphaSliderRef:q,alphaSliderProps:X,swatchesLabel:Z,swatchProps:V,swatchesProps:J,channelsProps:m,channelProps:P,...W}=ze(c),{value:L,getContainerProps:A,getInputProps:z,getSaturationSliderProps:k,...R}=Ye(W),M={display:"flex",flexDirection:"column",...n.container};return t.jsx(Xe,{value:{styles:n,size:o,value:L,...R},children:t.jsxs(N.div,{ref:l,className:H("ui-color-selector",i),__css:M,...A(),children:[t.jsx(N.input,{...z(g,l)}),f?t.jsx(Je,{size:o,className:"ui-color-selector__saturation-slider",__css:{...n.saturationSlider},...k(B,S)}):null,f?t.jsx(ce,{withResult:d,withEyeDropper:D,eyeDropperRef:v,eyeDropperProps:C,hueSliderRef:G,hueSliderProps:U,alphaSliderRef:q,alphaSliderProps:X}):null,f&&x?t.jsx(ie,{channelProps:P,...m}):null,t.jsx(pe,{swatchesLabel:Z,swatches:b,swatchesColumns:_,swatchProps:V,...J}),Ve(s,{value:L})]})})});Se.displayName="ColorSelector";Se.__ui__="ColorSelector";export{Se as C,te as E,Qe as u};