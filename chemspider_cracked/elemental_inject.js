/*
  Copyright (C) 2010-2011 Dotmatics Ltd. - www.dotmatics.com
  
  This version of Dotmatics Elemental is solely licensed for use on the ChemSpider web site. 
  
*/ 
var DHTML_SUITE_JS_FOLDER = "elemental/dhtmlsuite/";
var DHTML_SUITE_THEME_FOLDER = "elemental/dhtmlsuite/themes/";
document.write('<!--[if IE]><script type="text/javascript" src="elemental/excanvas.js"></script><![endif]-->');
document.write('<script type="text/javascript" src="elemental/canvas.text.js?autoload=."></script>');
document.write('<script type="text/javascript" src="elemental/dhtmlsuite/dhtmlSuite-common.js"></script>');
document.write('<script type="text/javascript" src="elemental/dhtmlsuite/dhtmlSuite-contextMenu.js"></script>');
document.write('<script type="text/javascript" src="elemental/dhtmlsuite/dhtmlSuite-menuBar.js"></script>');
document.write('<script type="text/javascript" src="elemental/dhtmlsuite/dhtmlSuite-menuItem.js"></script>');
document.write('<script type="text/javascript" src="elemental/dhtmlsuite/dhtmlSuite-menuModel.js"></script>');
document.write('<script type="text/javascript" src="elemental/elemental-obf.js"></script>');
function injectElemental(width, height) {


	 var divId = "elemental";
	 if (window.elemental_div) {
	  divId = window.elemental_div;
	 }
	 if (!window.elemental_divs) {
	     var div = document.getElementById(divId);
	     if (width && height) {
	   div.style.width = width + 'px';
	   div.style.height = height + 'px';
	     }
}

    if (!window.elemental_divs) {
        window.editor = new Elemental(document.getElementById(divId), null, { ui: true, templateFile: "elemental/templates.sdf", iconDir: "elemental/icons/" });
	}else{
		window.elementals = new Array();
		for (var i in window.elementals_divs) {
			 var editor = new Elemental(document.getElementById(window.elemental_divs[i]), null, {ui: false});
			 window.elementals.push(editor);
		}
	}
};
