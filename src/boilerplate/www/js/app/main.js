define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    // var util = require('./util');

	var $ = require('jquery');
	var jqm = require('jquery.mobile');

    console.log('Require.js loaded');
	
	// test for jQuery
	if($('body')){
		console.log("jQuery loaded");
	}else{
		console.log("*** jQuery NOT loaded");
	}

	// test for jQueryMobile
	if(jqm.version === "1.1.1"){
		console.log("jQuery Mobile loaded");
	}else{
		console.log("*** jQuery Mbbile NOT loaded");
	}
		
	

});