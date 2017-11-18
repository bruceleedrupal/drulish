(function ($) {
	
	function hierarchicalForbidLevel2(){
		  var level2=$('.hierarchical-select-wrapper select').not(':first');
		  if(level2.length>=2)
			  	for(i=1;i<level2.length;i++){
			  		level2[i].remove();
			  	}
		  level2.unbind();
	}
	
	
	Drupal.behaviors.jilingwang = {
			  attach: function (context, settings) {						
				  hierarchicalForbidLevel2();
			  }
	};
	
	Drupal.behaviors.addProdcut= {
			attach:function (context, settings) {
				$('.hierarchical-select').on('change','select[name="profile_qiyerenzheng[field_suoshuhangye][und][hierarchical_select][selects][1]"]',function(){
				console.log($(this).val());
				});
			}
	};
	
	
	
	Drupal.ajax.prototype.commands.hierarchicalForbidLevel2 = function(ajax, response, status,hsid) {
		  // Replace the old HTML with the (relevant part of) retrieved HTML.
		hierarchicalForbidLevel2();
		};
	
	
})(jQuery);

