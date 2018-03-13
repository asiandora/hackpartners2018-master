$(function () {
		
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.ui-ux .ai-data .innovation' // show app tab on first load
    		}     
			});								
		
		}

	};
	
	// Run the show!
	filterList.init();
	
});	