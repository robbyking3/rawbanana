$(function(){$(".intro-text").bigtext(),$(".open-nav").on("click",function(){$("ul.nav").toggleClass("active")}),$("nav a").on("click",function(){$("nav a").parent().removeClass("active"),$(this).parent().addClass("active"),"#wedding"===$(this).attr("href")?$("nav").addClass("dark"):$("nav").removeClass("dark")}),$("#nav-wrapper").on("activate.bs.scrollspy",function(a){var b=a.target.firstElementChild.hash;"#wedding"==b?$("ul.nav").addClass("dark"):$("ul.nav").removeClass("dark")}),"#wedding"===window.location.hash&&$("nav").addClass("dark"),$.localScroll({target:"#my-container",duration:300,onBefore:function(){$("nav").removeClass("active")}}),window.sr=new scrollReveal({viewport:document.getElementById("my-container")}),L.mapbox.accessToken="pk.eyJ1Ijoicm9iYnlraW5nMyIsImEiOiJsNkRXdW1NIn0._YffoleW0ZBQP_BAJ59ADg";L.mapbox.map("map","robbyking3.k6feo31l")});