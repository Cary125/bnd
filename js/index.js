 $(document).ready(function (){

/**
 * [isMobile 判断平台]
 * @param test: 0:iPhone    1:Android
 */
//function ismobile(test){
//  var u = navigator.userAgent, app = navigator.appVersion;
//  if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
//   if(window.location.href.indexOf("?mobile")<0){
//    try{
//     if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)){
//      return '0';
//     }else{
//      return '1';
//     }
//    }catch(e){}
//   }
//  }else if( u.indexOf('iPad') > -1){
//      return '0';
//  }else{
//      return '1';
//  }
//};
$('.btn_temp').on('click',function(){
	var name_Men=$('#nameMen').val();
	var name_Women=$('#nameWomen').val();
	sessionStorage.setItem('nameM',name_Men);
	sessionStorage.setItem('nameW',name_Women)
	window.location.href='index2.html';
	
});

$('.imgs li').on('click',function(){
	var imglist=$(this).attr('title');
	$(this).attr('class','selected').siblings().attr('class','');
	$('.btn_full').on('click',function(){
		sessionStorage.setItem('Img',imglist);
		window.location.href='index3.html';
	})
});

$('.btn_generate').on('click',function(){
		var sent_txt=$('.ble_con').val();
		sessionStorage.setItem('sent_txt',sent_txt);
		window.location.href='index4.html';
});
	var name_Men=sessionStorage.getItem('nameM');
	var name_Women=sessionStorage.getItem('nameW');
	var imgList=sessionStorage.getItem('Img');
	var senfont=sessionStorage.getItem('sent_txt');
	$('.show_img ').attr('src',imgList);
	$('.show_name #name1').html(name_Men);
	$('.show_name #name2').html(name_Women);
	$('.show_txt .sent').html(senfont);
	$('.btn_share').on('click',function(){
		$('.share_date').show()
		$('.share_date_con').animate({bottom:0});
		$('.share_date_con ').on('click',function(){
			var thisHeight=$('.share_date_con').height()
			$('.share_date_con').animate({bottom:-thisHeight});
			$('.share_date').hide()
		})
	})
})