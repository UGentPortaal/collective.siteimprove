define("/Users/alec/Development/bundles/collective.siteimprove/src/collective/siteimprove/browser/static/siteimprove.js",["jquery"],function(t){"use strict";var e={input:function(){this.url=canonical-url,this.method="input",this.call()},domain:function(){this.url=canonical-url,this.method="domain",this.call()},recheck:function(){this.url=canonical-url,this.method="recheck",this.call()},recrawl:function(){this.url=t("body").data("portal-url"),this.method="recrawl",this.call()},call:function(){window._siteimprove_token&&(window._si||[]).push([this.method,this.url,window._siteimprove_token])}};return t(".recheck-button").click(function(){return e.recheck(),!1}),e});
//# sourceMappingURL=siteimprove-compiled.js.map