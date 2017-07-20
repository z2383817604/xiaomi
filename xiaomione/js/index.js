//初始化Swiper对象			

			var mySwiper = new Swiper(".swiper_content", {

				pagination: ".swiper-pagination",

				//小圆点点击

				paginationClickable: true,

				//垂直方向

				direction: 'horizontal',

				//当前页数 从0开始

				initialSlide: 0,
				//左右按钮
				nextButton: '.next',
				
				prevButton: '.prev',

				//自动轮播

//				autoplay: 2000,

				autoplayDisableOnInteraction: false,

				loop:false,

			});
			
			
			var Swiper = new Swiper(".swiper_banner", {

				//垂直方向

				direction: 'horizontal',

				//当前页数 从0开始

				initialSlide: 0,
				//左右按钮
				nextButton: '.button-next',
				
				prevButton: '.button-prev',

				//自动轮播

				autoplay: 5000,


				loop: false,

			});
//			End




$(function(){
    $("#con_con_left ul li").hover(
        function(){
            $(this).find(".zj").show();
        }
        ,
        function(){
            $(this).find(".zj").hide();
        }
    )
});
$(function(){
    $("#con_hea_content ul li").hover(
        function(){
            $(this).find(".list_xl").stop(true,true).slideDown();
        }
        ,
        function(){
            $(this).find(".list_xl").stop(true,true).slideUp();
        }
    )
});
$("#hea_inp").focus(function(){
	$(".hea_span1").hide();
})
$("#hea_inp").blur(function(){
	$(".hea_span1").show();
})
//焦点图轮播
function changeImg(){
    var index =0;
    var stop = false;
    var $imgLi = $('.banner_ul').children('li');
    var $numLi = $('.disc').children('li');
    var $prev=$(".click_prev");
    var $next=$(".click_next");
    function change(){
        if(stop) return;
        index ++;
        if(index>=$imgLi.length){
            index = 0;
        }
        $imgLi.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $numLi.eq(index).addClass("on").stop(true,true).siblings().removeClass('on');
    }
    function changes(){
        if(stop) return;
        index --;
        if(index<0){
            index = 4;
            console.log(index);
        }
        $imgLi.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $numLi.eq(index).addClass("on").stop(true,true).siblings().removeClass('on');
    }
    $numLi.mouseover(function(){
    	clearInterval(timer);
        stop = true;
        index=$numLi.index($(this));
        $imgLi.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $(this).addClass("on").stop(true,true).siblings().removeClass('on');
    }).mouseout(function(){
        stop =false;
        timer = setInterval(change,3000);
    });
    $prev.click(function(){
    	clearInterval(timer);
    	changes();
    	timer = setInterval(change,3000);
    })
    $next.click(function(){
    	change();
    	timer = setInterval(change,3000);
    })
    var timer = setInterval(change,3000);
//  var timers = setInterval(changes,3000);
    
}
changeImg();
