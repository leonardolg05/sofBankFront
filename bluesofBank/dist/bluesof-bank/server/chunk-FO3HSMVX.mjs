import './polyfills.server.mjs';
import{D as A,G as S,H as b,I as w,a as s,b as a,c,d as m,e as o,f as t,g as l,h as n,i as d,j as u,o as f,r as v,t as C,u as g,v as h,w as D,z as y}from"./chunk-BGGIM64A.mjs";function T(i,r){if(i&1&&(o(0,"div",5)(1,"h3"),n(2),t(),o(3,"nav")(4,"button",6),n(5,"Ir"),t()()()),i&2){let e=r.$implicit;a(2),d(e.title),a(2),m("routerLink",e.route)}}var p=class i{options=[{title:"Consultar el saldo de la cuenta",route:"dashboard"},{title:"Consultar los movimientos m\xE1s recientes",route:"accounts"},{title:"Generar extractos mensuales",route:"/dashboard"}];currentAccount={type:"Savings",balance:5e3};transaction=[{date:new Date,type:"Deposit",amount:1e3},{date:new Date,type:"Withdrawal",amount:500}];transactionSimp={date:new Date,type:"Deposit",amount:1e3};selectedMonth="October";monthlyStatement=[{date:new Date,description:"Deposit",amount:2e3},{date:new Date,description:"Withdrawal",amount:700}];topCustomers=[{name:"John Doe",transactions:25},{name:"Jane Smith",transactions:18}];outOfCityWithdrawals=[{name:"Alice Brown",totalWithdrawals:12e5}];handleTransaction(r){console.log("Transaction received:",r)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=s({type:i,selectors:[["app-root"]],standalone:!0,features:[u],decls:11,vars:1,consts:[[1,"container"],[1,"home-container"],["routerLink","accounts"],[1,"options-grid"],["class","option-card",4,"ngFor","ngForOf"],[1,"option-card"],[3,"routerLink"]],template:function(e,F){e&1&&(o(0,"div",0)(1,"h1"),n(2,"Bienvenidos a Bluesoft Bank"),t(),o(3,"div",1)(4,"p"),n(5,"Seleccione una opci\xF3n:"),t(),o(6,"button",2),n(7,"Contact"),t(),o(8,"div",3),c(9,T,6,2,"div",4),t()(),l(10,"router-outlet"),t()),e&2&&(a(9),m("ngForOf",F.options))},dependencies:[A,C,w,S]})};var x=[];var R={providers:[f({eventCoalescing:!0}),b(x),D(h())]};var k={providers:[y()]},E=v(R,k);var O=()=>g(p,E),Y=O;export{Y as a};