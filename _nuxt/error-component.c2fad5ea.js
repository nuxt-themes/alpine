import{o as _,c as d,n as l,g as m,u as r,d as o,_ as a}from"./entry.5069b23d.js";const E={__name:"nuxt-error-page",props:{error:Object},setup(f){(error.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const t=Number(error.statusCode||500),s=t===404,n=error.statusMessage??(s?"Page Not Found":"Internal Server Error"),c=error.message||error.toString(),u=void 0,i=s?o(()=>a(()=>import("./error-404.0478b03d.js"),["./error-404.0478b03d.js","./entry.5069b23d.js","./entry.215d2ef1.css","./error-404.e9605a21.css"],import.meta.url).then(e=>e.default||e)):o(()=>a(()=>import("./error-500.d0cf9de5.js"),["./error-500.d0cf9de5.js","./entry.5069b23d.js","./entry.215d2ef1.css","./error-500.45277b0d.css"],import.meta.url).then(e=>e.default||e));return(e,p)=>(_(),d(r(i),l(m({statusCode:r(t),statusMessage:r(n),description:r(c),stack:r(u)})),null,16))}},v=E;export{v as default};