import{b as t,a as e,u as s,c as a,a1 as u,o as l,q as r,w as p,r as n,n as o,k as f,l as d,s as c,_ as i,m as g,d as b,y,a2 as m,i as $,a3 as h}from"./index-CqIXyYLK.js";const j=Symbol("rowContextKey"),v=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),N=e({name:"ElRow"});const x=g(i(e({...N,props:v,setup(t){const e=t,i=s("row"),g=a((()=>e.gutter));u(j,{gutter:g});const b=a((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft=`-${e.gutter/2}px`,t):t})),y=a((()=>[i.b(),i.is(`justify-${e.justify}`,"start"!==e.justify),i.is(`align-${e.align}`,!!e.align)]));return(t,e)=>(l(),r(c(t.tag),{class:o(f(y)),style:d(f(b))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]])),_=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:b([Number,Object]),default:()=>y({})},sm:{type:b([Number,Object]),default:()=>y({})},md:{type:b([Number,Object]),default:()=>y({})},lg:{type:b([Number,Object]),default:()=>y({})},xl:{type:b([Number,Object]),default:()=>y({})}}),w=e({name:"ElCol"});const E=g(i(e({...w,props:_,setup(t){const e=t,{gutter:u}=m(j,{gutter:a((()=>0))}),i=s("col"),g=a((()=>{const t={};return u.value&&(t.paddingLeft=t.paddingRight=u.value/2+"px"),t})),b=a((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const a=e[s];$(a)&&("span"===s?t.push(i.b(`${e[s]}`)):a>0&&t.push(i.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{$(e[s])?t.push(i.b(`${s}-${e[s]}`)):h(e[s])&&Object.entries(e[s]).forEach((([e,a])=>{t.push("span"!==e?i.b(`${s}-${e}-${a}`):i.b(`${s}-${a}`))}))})),u.value&&t.push(i.is("guttered")),[i.b(),t]}));return(t,e)=>(l(),r(c(t.tag),{class:o(f(b)),style:d(f(g))},{default:p((()=>[n(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]]));export{x as E,E as a};