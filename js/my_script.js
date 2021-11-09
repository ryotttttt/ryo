//Page3のレスポンシブ対応
var LR=1;
$(window).resize(rsp);
function rsp(){
  if (window.matchMedia('(min-width: 1651px)').matches) {
       if(LR==1){
        $(".page3pros1").css('margin','5% 0 0 25%')
        $(".page3cons1").css('margin','5% 0 0 25%')
        $(".page3pros2").css('margin','5% 0 0 62%')
        $(".page3cons2").css('margin','5% 0 0 62%')
       }else if(LR==2){
        $(".page3pros1").css('margin','5% 0 0 62%')
        $(".page3cons1").css('margin','5% 0 0 62%')
        $(".page3pros2").css('margin','5% 0 0 25%')
        $(".page3cons2").css('margin','5% 0 0 25%')
       }
}else if (window.matchMedia('(min-width: 1601px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','275px 0 0 15%')
    $(".page3cons1").css('margin','275px 0 0 15%')
    $(".page3pros2").css('margin','275px 0 0 62%')
    $(".page3cons2").css('margin','275px 0 0 62%')
   }else if(LR==2){
    $(".page3pros1").css('margin','275px 0 0 62%')
    $(".page3cons1").css('margin','275px 0 0 62%')
    $(".page3pros2").css('margin','275px 0 0 15%')
    $(".page3cons2").css('margin','275px 0 0 15%')
   }
}else if (window.matchMedia('(min-width: 1551px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin',"275px 0 0 240px")
    $(".page3cons1").css('margin',"275px 0 0 240px")
    $(".page3pros2").css('margin',"275px 0 0 900px")
    $(".page3cons2").css('margin',"275px 0 0 900px")
   }else if(LR==2){
    $(".page3pros1").css('margin',"275px 0 0 900px")
    $(".page3cons1").css('margin',"275px 0 0 900px")
    $(".page3pros2").css('margin',"275px 0 0 240px")
    $(".page3cons2").css('margin',"275px 0 0 240px")
   }
}else if (window.matchMedia('(min-width: 1401px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 220px')
    $(".page3cons1").css('margin','290px 0 0 220px')
    $(".page3pros2").css('margin','290px 0 0 800px')
    $(".page3cons2").css('margin','290px 0 0 800px')
   }else if(LR==2){
    $(".page3pros1").css('margin','290px 0 0 800px')
    $(".page3cons1").css('margin','290px 0 0 800px')
    $(".page3pros2").css('margin','290px 0 0 220px')
    $(".page3cons2").css('margin','290px 0 0 220px')
   }
}else if (window.matchMedia('(min-width: 1351px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 150px')
    $(".page3cons1").css('margin','290px 0 0 150px')
    $(".page3pros2").css('margin','290px 0 0 740px')
    $(".page3cons2").css('margin','290px 0 0 740px')
   }else if(LR==2){
    $(".page3pros1").css('margin','290px 0 0 740px')
    $(".page3cons1").css('margin','290px 0 0 740px')
    $(".page3pros2").css('margin','290px 0 0 150px')
    $(".page3cons2").css('margin','290px 0 0 150px')
   }
}else if (window.matchMedia('(min-width: 1201px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 160px')
    $(".page3cons1").css('margin','290px 0 0 160px')
    $(".page3pros2").css('margin','1050px 0 0 600px')
    $(".page3cons2").css('margin','1050px 0 0 600px')
   }else if(LR==2){
    $(".page3pros1").css('margin','1050px 0 0 160px')
    $(".page3cons1").css('margin','1050px 0 0 160px')
    $(".page3pros2").css('margin','290px 0 0 600px')
    $(".page3cons2").css('margin','290px 0 0 600px')
   }
}else if (window.matchMedia('(min-width: 1101px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 50px')
    $(".page3cons1").css('margin','290px 0 0 50px')
    $(".page3pros2").css('margin','1050px 0 0 490px')
    $(".page3cons2").css('margin','1050px 0 0 490px')
   }else if(LR==2){
    $(".page3pros1").css('margin','1050px 0 0 50px')
    $(".page3cons1").css('margin','1050px 0 0 50px')
    $(".page3pros2").css('margin','290px 0 0 490px')
    $(".page3cons2").css('margin','290px 0 0 490px')
   }
}else if (window.matchMedia('(min-width: 1001px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 50px')
    $(".page3cons1").css('margin','290px 0 0 50px')
    $(".page3pros2").css('margin','950px 0 0 490px')
    $(".page3cons2").css('margin','950px 0 0 490px')
   }else if(LR==2){
    $(".page3pros1").css('margin','950px 0 0 50px')
    $(".page3cons1").css('margin','950px 0 0 50px')
    $(".page3pros2").css('margin','290px 0 0 490px')
    $(".page3cons2").css('margin','290px 0 0 490px')
   }
}else if (window.matchMedia('(min-width: 901px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 50px')
    $(".page3cons1").css('margin','290px 0 0 50px')
    $(".page3pros2").css('margin','950px 0 0 420px')
    $(".page3cons2").css('margin','950px 0 0 420px')
   }else if(LR==2){
    $(".page3pros1").css('margin','950px 0 0 50px')
    $(".page3cons1").css('margin','950px 0 0 50px')
    $(".page3pros2").css('margin','290px 0 0 420px')
    $(".page3cons2").css('margin','290px 0 0 420px')
   }
}else if (window.matchMedia('(min-width: 851px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 10px')
    $(".page3cons1").css('margin','290px 0 0 10px')
    $(".page3pros2").css('margin','950px 0 0 380px')
    $(".page3cons2").css('margin','950px 0 0 380px')
   }else if(LR==2){
    $(".page3pros1").css('margin','950px 0 0 10px')
    $(".page3cons1").css('margin','950px 0 0 10px')
    $(".page3pros2").css('margin','290px 0 0 380px')
    $(".page3cons2").css('margin','290px 0 0 380px')
   }
}else if (window.matchMedia('(min-width: 801px)').matches) {
  if(LR==1){
    $(".page3pros1").css('margin','290px 0 0 10px')
    $(".page3cons1").css('margin','290px 0 0 10px')
    $(".page3pros2").css('margin','950px 0 0 310px')
    $(".page3cons2").css('margin','950px 0 0 310px')
   }else if(LR==2){
    $(".page3pros1").css('margin','950px 0 0 10px')
    $(".page3cons1").css('margin','950px 0 0 10px')
    $(".page3pros2").css('margin','290px 0 0 310px')
    $(".page3cons2").css('margin','290px 0 0 310px')
   }
}else if (window.matchMedia('(min-width: 701px)').matches) {
    $(".page3pros1").css('margin','290px 0 0 50px')
    $(".page3cons1").css('margin','2160px 0 0 230px')
    $(".page3pros2").css('margin','900px 0 0 230px')
    $(".page3cons2").css('margin','1550px 0 0 50px')
}else if (window.matchMedia('(min-width: 651px)').matches) {
  $(".page3pros1").css('margin','290px 0 0 50px')
  $(".page3cons1").css('margin','2160px 0 0 180px')
  $(".page3pros2").css('margin','900px 0 0 180px')
  $(".page3cons2").css('margin','1550px 0 0 50px')
}else if (window.matchMedia('(min-width: 601px)').matches) {
  $(".page3pros1").css('margin','290px 0 0 50px')
  $(".page3cons1").css('margin','2160px 0 0 130px')
  $(".page3pros2").css('margin','900px 0 0 130px')
  $(".page3cons2").css('margin','1550px 0 0 50px')
}else if (window.matchMedia('(min-width: 551px)').matches) {
  $(".page3pros1").css('margin','290px 0 0 50px')
  $(".page3cons1").css('margin','2160px 0 0 80px')
  $(".page3pros2").css('margin','900px 0 0 80px')
  $(".page3cons2").css('margin','1550px 0 0 50px')
}else if (window.matchMedia('(min-width: 421px)').matches) {
  $(".page3pros1").css('margin','290px 0 0 20px')
  $(".page3cons1").css('margin','2160px 0 0 20px')
  $(".page3pros2").css('margin','900px 0 0 20px')
  $(".page3cons2").css('margin','1550px 0 0 20px')
}else if (window.matchMedia('(min-width: 281px)').matches) {
  $(".page3pros1").css('margin','290px auto 0 auto')
  $(".page3cons1").css('margin','1760px auto 0 auto')
  $(".page3pros2").css('margin','750px auto 0 auto')
  $(".page3cons2").css('margin','1300px auto 0 auto')
}else if (window.matchMedia('(min-width: 1px)').matches) {
  $(".page3pros1").css('margin','290px auto 0 auto')
  $(".page3cons1").css('margin','1550px auto 0 auto')
  $(".page3pros2").css('margin','650px auto 0 auto')
  $(".page3cons2").css('margin','1100px auto 0 auto')
}
}


//Page3のConsのアニメーションのソース(1)
$('.conslist a').on('click',function(){
  if (window.matchMedia('(min-width: 1651px)').matches) {
      $(".page3cons1").css('z-index','3')
      $(".page3cons2").css('z-index','3')
      $(".page3pros1")
      .animate({marginLeft:'62%'})
      $(".page3cons1")
      .animate({marginLeft:'62%'})
      $(".page3pros2")
      .animate({marginLeft:'25%'})
      $(".page3cons2")
      .animate({marginLeft:'25%'})
      LR=2;
}else if (window.matchMedia('(min-width: 1601px)').matches) {
    $(".page3cons1").css('z-index','3')
    $(".page3cons2").css('z-index','3')
    $(".page3pros1")
    .animate({marginLeft:'62%'})
    $(".page3cons1")
    .animate({marginLeft:'62%'})
    $(".page3pros2")
    .animate({marginLeft:'15%'})
    $(".page3cons2")
    .animate({marginLeft:'15%'})
    LR=2;
}else if (window.matchMedia('(min-width: 1551px)').matches) {
    $(".page3cons1").css('z-index','3')
    $(".page3cons2").css('z-index','3')
    $(".page3pros1")
    .animate({marginLeft:'900px'})
    $(".page3cons1")
    .animate({marginLeft:'900px'})
    $(".page3pros2")
    .animate({marginLeft:'240px'})
    $(".page3cons2")
    .animate({marginLeft:'240px'})
    LR=2;
}else if (window.matchMedia('(min-width: 1401px)').matches) {
    $(".page3cons1").css('z-index','3')
    $(".page3cons2").css('z-index','3')
    $(".page3pros1")
    .animate({marginLeft:'800px'})
    $(".page3cons1")
    .animate({marginLeft:'800px'})
    $(".page3pros2")
    .animate({marginLeft:'220px'})
    $(".page3cons2")
    .animate({marginLeft:'220px'})
    LR=2;
}else if (window.matchMedia('(min-width: 1351px)').matches) {
    $(".page3cons1").css('z-index','3')
    $(".page3cons2").css('z-index','3')
    $(".page3pros1")
    .animate({marginLeft:'740px'})
    $(".page3cons1")
    .animate({marginLeft:'740px'})
    $(".page3pros2")
    .animate({marginLeft:'150px'})
    $(".page3cons2")
    .animate({marginLeft:'150px'})
    LR=2;
}
console.log("LR=",LR);
});


//Page3のProsのアニメーションのソース(1)
$('.proslist a').on('click',function(){
  if (window.matchMedia('(min-width: 1651px)').matches) {
    $(".page3cons1").css('z-index','1')
    $(".page3cons2").css('z-index','1')
    $(".page3pros1")
    .animate({marginLeft:'25%'})
    $(".page3cons1")
    .animate({marginLeft:'25%'})
    $(".page3pros2")
    .animate({marginLeft:'62%'})
    $(".page3cons2")
    .animate({marginLeft:'62%'})
    LR=1;
}else if (window.matchMedia('(min-width: 1601px)').matches) {
  $(".page3cons1").css('z-index','1')
    $(".page3cons2").css('z-index','1')
    $(".page3pros1")
    .animate({marginLeft:'15%'})
    $(".page3cons1")
    .animate({marginLeft:'15%'})
    $(".page3pros2")
    .animate({marginLeft:'62%'})
    $(".page3cons2")
    .animate({marginLeft:'62%'})
    LR=1;
}else if (window.matchMedia('(min-width: 1551px)').matches) {
  $(".page3cons1").css('z-index','1')
    $(".page3cons2").css('z-index','1')
    $(".page3pros1")
    .animate({marginLeft:'240px'})
    $(".page3cons1")
    .animate({marginLeft:'240px'})
    $(".page3pros2")
    .animate({marginLeft:'900px'})
    $(".page3cons2")
    .animate({marginLeft:'900px'})
    LR=1;
}else if (window.matchMedia('(min-width: 1401px)').matches) {
  $(".page3cons1").css('z-index','1')
    $(".page3cons2").css('z-index','1')
    $(".page3pros1")
    .animate({marginLeft:'220px'})
    $(".page3cons1")
    .animate({marginLeft:'220px'})
    $(".page3pros2")
    .animate({marginLeft:'800px'})
    $(".page3cons2")
    .animate({marginLeft:'800px'})
    LR=1;
}else if (window.matchMedia('(min-width: 1351px)').matches) {
  $(".page3cons1").css('z-index','1')
  $(".page3cons2").css('z-index','1')
  $(".page3pros1")
  .animate({marginLeft:'150px'})
  $(".page3cons1")
  .animate({marginLeft:'150px'})
  $(".page3pros2")
  .animate({marginLeft:'740px'})
  $(".page3cons2")
  .animate({marginLeft:'740px'})
  LR=1;
}
console.log("LR=",LR);
});


//Page3のConsのアニメーションのソース(2)
$('#nonecons').on('click',function(){
if (window.matchMedia('(min-width: 1101px)').matches) {
  $(".page3cons1").css('z-index','3')
  $(".page3cons2").css('z-index','3')
  $(".page3pros1")
  .animate({marginTop:'1050px'})
  $(".page3cons1")
  .animate({marginTop:'1050px'})
  $(".page3pros2")
  .animate({marginTop:'290px'})
  $(".page3cons2")
  .animate({marginTop:'290px'})
  LR=2;
}else if (window.matchMedia('(min-width: 501px)').matches) {
  $(".page3cons1").css('z-index','3')
  $(".page3cons2").css('z-index','3')
  $(".page3pros1")
  .animate({marginTop:'950px'})
  $(".page3cons1")
  .animate({marginTop:'950px'})
  $(".page3pros2")
  .animate({marginTop:'290px'})
  $(".page3cons2")
  .animate({marginTop:'290px'})
  LR=2;
}
console.log("LR=",LR);
});


//Page3のProsのアニメーションのソース(2)
$('#nonepros').on('click',function(){
  if (window.matchMedia('(min-width: 1101px)').matches) {
    $(".page3cons1").css('z-index','1')
      $(".page3cons2").css('z-index','1')
      $(".page3pros1")
      .animate({marginTop:'290px'})
      $(".page3cons1")
      .animate({marginTop:'290px'})
      $(".page3pros2")
      .animate({marginTop:'1050px'})
      $(".page3cons2")
      .animate({marginTop:'1050px'})
      LR=1;
  }else if (window.matchMedia('(min-width: 501px)').matches) {
    $(".page3cons1").css('z-index','1')
    $(".page3cons2").css('z-index','1')
    $(".page3pros1")
    .animate({marginTop:'290px'})
    $(".page3cons1")
    .animate({marginTop:'290px'})
    $(".page3pros2")
    .animate({marginTop:'950px'})
    $(".page3cons2")
    .animate({marginTop:'950px'})
    LR=1;
  }
  console.log("LR=",LR);
});

$(function(){
    　$(window).scroll(function (){
        $('.effect1').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});
    });

//マウスストーカーのソース
$(function(){
        var cursor=$("#cursor");
        var stalker=$("#stalker");
        
        $(document).on("mousemove",function(e){
          var x=e.clientX;                      //ブラウザウィンドウ内でのカーソル座標の取得XとY
          var y=e.clientY;
          cursor.css({
            "opacity":"0.9",
            "top":y+"px",
            "left":x+"px"
          }); 
          setTimeout(function(){
            stalker.css({
              "opacity":"0.4",
              "top":y+"px",
              "left":x+"px"
            });
          },140);
        });
        $('.navlist a,#close_nav').on({
          "mouseenter": function() {
            cursor.addClass("active");
            stalker.addClass("active");
            $("#stalker").css('background-color','#fff')
            $("#cursor").css('background-color','#fff')
            $("#stalker").css('border','solid 2px #fff')
          },
          "mouseleave": function() {
            cursor.removeClass("active");
            stalker.removeClass("active");
            $("#stalker").css('background-color','')
          }
        });
        $(".list a,.proscons a").on({
            "mouseenter": function() {
              cursor.addClass("active");
              stalker.addClass("active");
              $("#stalker").css('background-color','#0f0f0f')
              $("#cursor").css('background-color','#000')
            },
            "mouseleave": function() {
              cursor.removeClass("active");
              stalker.removeClass("active");
              $("#stalker").css('background-color','')
            }
          });
          $('#nonepros,#nonecons').on({
            "mouseenter": function() {
              cursor.addClass("active");
              stalker.addClass("active");
              $("#stalker").css('background-color','#000')
              $("#cursor").css('background-color','#000')
            },
            "mouseleave": function() {
              cursor.removeClass("active");
              stalker.removeClass("active");
              $("#stalker").css('background-color','')
              $("#stalker").css('border','solid 2px #000')
            }
          });
          $('.hamburger').on({
            "mouseenter": function() {
              cursor.addClass("active");
              stalker.addClass("active");
              $("#stalker").css('background-color','#fff')
              $("#cursor").css('background-color','#fff')
            },
            "mouseleave": function() {
              cursor.removeClass("active");
              stalker.removeClass("active");
              $("#stalker").css('background-color','')
              $("#stalker").css('border','solid 2px #000')
            }
          });
        $('.whitebox,.subbody').on({
            "mouseenter": function() {
                $("#cursor").css('background-color','#000')
                $("#stalker").css('border','solid 2px #000')
            }
        });
        $('.blackbox').on({
            "mouseenter": function() {
                $("#cursor").css('background-color','#fff')
                $("#stalker").css('border','solid 2px #fff')
            }
        });
        $('#hoverwhite').on({
            "mouseenter": function() {
                $("#cursor").css('background-color','#fff')
                $("#stalker").css('border','solid 2px #fff')
            },
              "mouseleave": function() {
                $("#cursor").css('background-color','#000')
                $("#stalker").css('border','solid 2px #000')
            }
        });
        $('#nav').on({
          "mouseenter": function() {
              $("#cursor").css('background-color','#fff')
              $("#stalker").css('border','solid 2px #fff')
          }
      });
});


//ドロワー、ハンバーガーメニューのソース
var drower=1;

$(document).on('click',function(e) {
  if(!$(e.target).closest('#nav,#open_nav').length) {
    if(drower==2){
      $('#nav').toggleClass('show');
      $('.mainbody').toggleClass('op');
      $('.subbody').toggleClass('op');
      drower=1;
      console.log("drower=",drower);
}
  } else if(!$(e.target).closest('#close_nav,.navlist li').length){
    //#close_nav,.navlist li以外のclick処理
    $('#nav').toggleClass('show');
    $('.mainbody').toggleClass('op');
    $('.subbody').toggleClass('op');
    drower=2;
    console.log("drower=",drower);
  }else if($(e.target).closest('#close_nav,.navlist li').length){
    $('#nav').toggleClass('show');
    $('.mainbody').toggleClass('op');
    $('.subbody').toggleClass('op');
    drower=1;
    console.log("drower=",drower);
  }
});