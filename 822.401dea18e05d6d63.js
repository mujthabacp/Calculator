"use strict";(self.webpackChunkCalculator=self.webpackChunkCalculator||[]).push([[822],{630:(f,r,s)=>{s.r(r),s.d(r,{BmiModule:()=>g});var a=s(895),o=s(433),m=s(736),t=s(256);function d(n,e){if(1&n&&(t.TgZ(0,"div",8)(1,"div"),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA()()),2&n){const i=t.oxw();t.xp6(2),t.hij(" BMI : ",i.bmiText," "),t.xp6(2),t.hij(" Status : ",i.status," "),t.xp6(2),t.AsE("Your normal weight is between ",i.weightloverRange," Kg and ",i.weightUpperRange," Kg")}}class l{constructor(){this.bmi=0,this.isResultVisible=!1}ngOnInit(){}onSubmit(){this.bmi=1e4*this.weight/(this.height*this.height),this.status=this.getStatus(this.bmi),this.setWeightRanges(),this.isResultVisible=!0,this.bmiText=this.bmi.toFixed(2)}getStatus(e){return e<18.5?`${(this.height*this.height*(18.5-e)/1e4).toFixed(2)} Kg Under weight`:e>24.9?`${(this.height*this.height*(e-24.9)/1e4).toFixed(2)} Kg Over weight`:"Normal"}setWeightRanges(){this.weightloverRange=(18.5*this.height*this.height/1e4).toFixed(2),this.weightUpperRange=(24.9*this.height*this.height/1e4).toFixed(2)}}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-bmi"]],decls:15,vars:3,consts:[[1,"container","mb-4"],[1,"form-group"],["for","weight"],["type","number","step","0.01","placeholder","Enter weight in Kg","name","weight",1,"form-control","input-s",3,"ngModel","ngModelChange"],["for","pwd"],["type","number","step","0.01","placeholder","Enter height in cm","name","height",1,"form-control","input-s",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"click"],["class","result",4,"ngIf"],[1,"result"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"BMI Calculator"),t.qZA(),t.TgZ(3,"form")(4,"div",1)(5,"label",2),t._uU(6,"Weight"),t.qZA(),t.TgZ(7,"input",3),t.NdJ("ngModelChange",function(u){return i.weight=u}),t.qZA()(),t.TgZ(8,"div",1)(9,"label",4),t._uU(10,"Height"),t.qZA(),t.TgZ(11,"input",5),t.NdJ("ngModelChange",function(u){return i.height=u}),t.qZA()(),t.TgZ(12,"button",6),t.NdJ("click",function(){return i.onSubmit()}),t._uU(13,"Calculate"),t.qZA()(),t.YNc(14,d,7,4,"div",7),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngModel",i.weight),t.xp6(4),t.Q6J("ngModel",i.height),t.xp6(3),t.Q6J("ngIf",i.isResultVisible))},dependencies:[o._Y,o.Fj,o.wV,o.JJ,o.JL,o.On,o.F,a.O5],styles:[".result[_ngcontent-%COMP%]{margin-top:50px}"]});const c=[{path:"",component:l}];class h{}h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=t.oAB({type:h}),h.\u0275inj=t.cJS({imports:[m.Bz.forChild(c),m.Bz]});class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[o.u5,a.ez,h]})}}]);