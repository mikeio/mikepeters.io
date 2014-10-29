/*! WOW - v1.0.1 - 2014-09-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var e,t,n,r,i,s=function(e,t){return function(){return e.apply(t,arguments)}},o=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};t=function(){function e(){}return e.prototype.extend=function(e,t){var n,r;for(n in t)r=t[n],null==e[n]&&(e[n]=r);return e},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},e.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},e.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},e}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function e(){this.keys=[],this.values=[]}return e.prototype.get=function(e){var t,n,r,i,s;for(s=this.keys,t=r=0,i=s.length;i>r;t=++r)if(n=s[t],n===e)return this.values[t]},e.prototype.set=function(e,t){var n,r,i,s,o;for(o=this.keys,n=i=0,s=o.length;s>i;n=++i)if(r=o[n],r===e)return void (this.values[n]=t);return this.keys.push(e),this.values.push(t)},e}()),e=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(e=function(){function e(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return e.notSupported=!0,e.prototype.observe=function(){},e}()),r=this.getComputedStyle||function(e){return this.getPropertyValue=function(t){var n;return"float"===t&&(t="styleFloat"),i.test(t)&&t.replace(i,function(e,t){return t.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function i(e){null==e&&(e={}),this.scrollCallback=s(this.scrollCallback,this),this.scrollHandler=s(this.scrollHandler,this),this.start=s(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),this.animationNameCache=new n}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},i.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},i.prototype.start=function(){var t,n,r,i;if(this.stopped=!1,this.boxes=function(){var e,n,r,i;for(r=this.element.querySelectorAll("."+this.config.boxClass),i=[],e=0,n=r.length;n>e;e++)t=r[e],i.push(t);return i}.call(this),this.all=function(){var e,n,r,i;for(r=this.boxes,i=[],e=0,n=r.length;n>e;e++)t=r[e],i.push(t);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(i=this.boxes,n=0,r=i.length;r>n;n++)t=i[n],this.applyStyle(t,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?(new e(function(e){return function(t){var n,r,i,s,o;for(o=[],i=0,s=t.length;s>i;i++)r=t[i],o.push(function(){var e,t,i,s;for(i=r.addedNodes||[],s=[],e=0,t=i.length;t>e;e++)n=i[e],s.push(this.doSync(n));return s}.call(e));return o}}(this))).observe(document.body,{childList:!0,subtree:!0}):void 0},i.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.sync=function(){return e.notSupported?this.doSync(this.element):void 0},i.prototype.doSync=function(e){var t,n,r,i,s;if(!this.stopped){if(null==e&&(e=this.element),1!==e.nodeType)return;for(e=e.parentNode||e,i=e.querySelectorAll("."+this.config.boxClass),s=[],n=0,r=i.length;r>n;n++)t=i[n],o.call(this.all,t)<0?(this.applyStyle(t,!0),this.boxes.push(t),this.all.push(t),s.push(this.scrolled=!0)):s.push(void 0);return s}},i.prototype.show=function(e){return this.applyStyle(e),e.className=""+e.className+" "+this.config.animateClass},i.prototype.applyStyle=function(e,t){var n,r,i;return r=e.getAttribute("data-wow-duration"),n=e.getAttribute("data-wow-delay"),i=e.getAttribute("data-wow-iteration"),this.animate(function(s){return function(){return s.customStyle(e,t,r,n,i)}}(this))},i.prototype.animate=function(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),i.prototype.resetStyle=function(){var e,t,n,r,i;for(r=this.boxes,i=[],t=0,n=r.length;n>t;t++)e=r[t],i.push(e.setAttribute("style","visibility: visible;"));return i},i.prototype.customStyle=function(e,t,n,r,i){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),r&&this.vendorSet(e.style,{animationDelay:r}),i&&this.vendorSet(e.style,{animationIterationCount:i}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(e,t){var n,r,i,s;s=[];for(n in t)r=t[n],e[""+n]=r,s.push(function(){var t,s,o,u;for(o=this.vendors,u=[],t=0,s=o.length;s>t;t++)i=o[t],u.push(e[""+i+n.charAt(0).toUpperCase()+n.substr(1)]=r);return u}.call(this));return s},i.prototype.vendorCSS=function(e,t){var n,i,s,o,u,a;for(i=r(e),n=i.getPropertyCSSValue(t),a=this.vendors,o=0,u=a.length;u>o;o++)s=a[o],n=n||i.getPropertyCSSValue("-"+s+"-"+t);return n},i.prototype.animationName=function(e){var t;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=r(e).getPropertyValue("animation-name")}return"none"===t?"":t},i.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},i.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var e;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var t,n,r,i;for(r=this.boxes,i=[],t=0,n=r.length;n>t;t++)e=r[t],e&&(this.isVisible(e)?this.show(e):i.push(e));return i}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},i.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},i.prototype.isVisible=function(e){var t,n,r,i,s;return n=e.getAttribute("data-wow-offset")||this.config.offset,s=window.pageYOffset,i=s+Math.min(this.element.clientHeight,this.util().innerHeight())-n,r=this.offsetTop(e),t=r+e.clientHeight,i>=r&&t>=s},i.prototype.util=function(){return null!=this._util?this._util:this._util=new t},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}).call(this);