define("arale/tip/1.1.4/tip",["arale/popup/1.1.2/popup","$","arale/overlay/1.1.2/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events"],function(a,b,c){var d=a("arale/popup/1.1.2/popup"),e=d.extend({attrs:{content:null,direction:"up",distance:8,arrowShift:22,pointPos:"50%"},_setAlign:function(){var a={},b=this.get("arrowShift"),c=this.get("distance"),d=this.get("pointPos"),e=this.get("direction");0>b&&(b="100%"+b),"up"===e?(a.baseXY=[d,0],a.selfXY=[b,"100%+"+c]):"down"===e?(a.baseXY=[d,"100%+"+c],a.selfXY=[b,0]):"left"===e?(a.baseXY=[0,d],a.selfXY=["100%+"+c,b]):"right"===e&&(a.baseXY=["100%+"+c,d],a.selfXY=[0,b]),this.set("align",a)},setup:function(){e.superclass.setup.call(this),this._setAlign()},_onRenderContent:function(a){var b=this.$('[data-role="content"]');"string"!=typeof a&&(a=a.call(this)),b&&b.html(a)}});c.exports=e,c.exports.outerBoxClass="arale-tip-1_1_4"});
