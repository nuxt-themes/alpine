import{a as i,o as a,i as d,k as u,t as o,x as m}from"./entry.5069b23d.js";const f=["for"],r=["id","name","value","type","placeholder"],c=["id","name","value","type","placeholder"],y=i({__name:"Input",props:{modelValue:{type:String,required:!0},field:{type:Object,required:!0,validator:e=>!!e.name}},emits:["update:modelValue"],setup(e){return(n,t)=>(a(),d("div",null,[u("label",{for:e.field.name},o(e.field.label),9,f),e.field.type!=="textarea"?(a(),d("input",{key:0,id:e.field.name,name:e.field.name,value:e.modelValue,type:e.field.type?e.field.type:"text",placeholder:e.field.placeholder?e.field.placeholder:"",onInput:t[0]||(t[0]=l=>n.$emit("update:modelValue",l.target.value))},null,40,r)):(a(),d("textarea",{key:1,id:e.field.name,name:e.field.name,value:e.modelValue,type:e.field.type?e.field.type:"text",placeholder:e.field.placeholder?e.field.placeholder:"",onInput:t[1]||(t[1]=l=>n.$emit("update:modelValue",l.target.value))},null,40,c))]))}});const v=m(y,[["__scopeId","data-v-d1bc9653"]]);export{v as default};