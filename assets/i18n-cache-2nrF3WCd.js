const i=a=>{const e=new Map;return function(n,t){const r=n+(t?Object.entries(t).sort((s,o)=>s[0]<o[0]?-1:1).join():"");if(e.has(r))return e.get(r);const c=new a(n,t);return e.set(r,c),c}};export{i};
