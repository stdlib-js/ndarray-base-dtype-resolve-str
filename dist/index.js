"use strict";var i=function(r,u){return function(){try{return u||r((u={exports:{}}).exports,u),u.exports}catch(t){throw (u=0, t)}};};var n=i(function(v,e){
var s=require('@stdlib/assert-is-struct-constructor-like/dist'),o=require('@stdlib/ndarray-base-dtype-enum2str/dist'),l=require('@stdlib/ndarray-base-dtype-str2enum/dist');function a(r){var u=typeof r;return u==="string"?l(r)===null?null:r:u==="number"?o(r):u==="object"&&r?String(r):s(r)?r.layout:null}e.exports=a
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
