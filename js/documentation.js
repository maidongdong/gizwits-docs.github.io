+function(n){function t(t,i){var o;n(t).hover(function(){o=n(this).find(i+"-wrapper"),o.show()},function(){o=n(this).find(i+"-wrapper"),o.hide()})}n(function(){t(".levelA",".levelB"),t(".levelB",".levelC")})}(jQuery)+function(){function n(n){var t="; "+document.cookie,i=t.split("; "+n+"=");if(2==i.length)return i.pop().split(";").shift()}function t(n,t){var o=/zh/.test(navigator.userLanguage||navigator.language)?"zh-cn":"en-us";/zh-cn/.test(n)||/en-us/.test(n)?i=n:(i=o,t(i))}var i;if(localStorage){var o=localStorage.getItem("lang"),a=function(n){localStorage.setItem("lang",n)};t(o,a)}else{var o=n("lang"),e=function(n){document.cookie="lang="+n+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"};t(o,e)}"/"===location.pathname&&(location.href=i+"/overview/overview.html")}()+function(n){n(function(){n(".lang-switch").click(function(){var t=n(this).data("lang"),i=location.pathname.split("/").slice(2);i.unshift(t),location.href="/"+i.join("/"),localStorage?localStorage.setItem("lang",t):document.cookie="lang="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"})})}(jQuery)+function(n){n(function(){var t=location.pathname,i="https://github.com/gizwits-docs/gizwits-docs/edit/develop/source"+t.slice(0,t.length-4)+"md";n(".edit-link").attr("href",i)})}(jQuery)+function(n){n(function(){var t=n(".markdown-body").find("h1, h2"),i="<ol>";t.each(function(t){var o=n(this),a=o.prop("tagName").toLowerCase(),e=o.attr("id"),l=o.text(),c='<a class="'+a+'" href="#'+e+'">'+l+"</a>";switch(o.wrap('<a href="#'+e+'"></a>'),a){case"h1":i+=(t?"</ol></li>":"")+"<li>"+c+"<ol>";break;case"h2":i+="<li>"+c+"</li>"+(t===length-1?"</ol></li>":"")}}),i+="</ol>",i=i.replace(/<ol><\/ol>/g,""),n(".navigation").find(".nav").append(i)})}(jQuery)+function(n){n(function(){n(".navigation li:first").addClass("active");var t,i=n(".navigation").height();n(window).scroll(function(){clearTimeout(t),n(".navigation .active").length||n(".navigation li:first").addClass("active");var o=n(".navigation .active:last").position().top;t=setTimeout(function(){o+n(".navigation").scrollTop()>i?n(".navigation").animate({scrollTop:o+n(".navigation").scrollTop()}):o-i<376&&n(".navigation").animate({scrollTop:-o-n(".navigation").scrollTop()})},500),n(".navigation .active").each(function(){var t=n(this);t.find(".active").length&&t.css("background","#fcfcfc")})}),n("body").scrollspy({target:".navigation"})})}(jQuery)+function(n){n(function(){n(window).hashchange(function(){var t=n(".header").height();n(window).scrollTop(n(window).scrollTop()-t)})})}(jQuery)+function(n){n(function(){n(".code pre").prepend(n('<i class="fa fa-clone fa-lg tooltip" title="复制" aria-hidden="true"><i class="tooltiptext">已复制</i></i>')),new Clipboard(".fa-clone",{text:function(t){var i=n(t),o="",a=i.find(".tooltiptext");return i.parent().find(".line").each(function(){o+=n(this).text()+"\n"}),a.show(),setTimeout(function(){a.hide()},1e3),o}})})}(jQuery);