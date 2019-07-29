/*

 DHTML Suite for Applications.
 Copyright (C)2006  Alf Magne Kalleland(post@dhtmlgoodies.com)

 www.dhtmlgoodies.com
 Alf Magne Kalleland
*/
if(!window.DHTMLSuite)var DHTMLSuite={};DHTMLSuite.menuItem=function(){this.layoutCSS="menu-item.css";this.cssPrefix="DHTMLSuite_";try{standardObjectsCreated||DHTMLSuite.createStandardObjects()}catch(a){alert("You need to include the dhtmlSuite-common.js file")}this.objectIndex=DHTMLSuite.variableStorage.arrayDSObjects.length};
DHTMLSuite.menuItem.prototype={createItem:function(a){DHTMLSuite.commonObj.loadCSS(this.layoutCSS);DHTMLSuite.variableStorage.arrayDSObjects[this.objectIndex]=this;this.modelItemRef=a;this.divElement="DHTMLSuite_menuItem"+a.id;var b=document.createElement("DIV");document.body.appendChild(b);b.id=this.divElement;b.className=this.cssPrefix+"menuItem_"+a.type+"_regular";b.onselectstart=function(){return!1};if(a.helpText)b.title=a.helpText;a.type=="top"&&this.__createMenuElementsOfTypeTop(b);a.type==
"sub"&&this.__createMenuElementsOfTypeSub(b);if(a.separator)b.className=this.cssPrefix+"menuItem_separator_"+a.type,b.innerHTML="<span></span>";else{var c=this.objectIndex/1;b.onclick=function(a){DHTMLSuite.variableStorage.arrayDSObjects[c].__navigate(a)};b.onmousedown=this.__clickMenuItem;b.onmouseup=this.__rolloverMenuItem;b.onmouseover=this.__rolloverMenuItem;b.onmouseout=this.__rolloutMenuItem}DHTMLSuite.commonObj.__addEventEl(b);return b},setLayoutCss:function(a){this.layoutCSS=a},__createMenuElementsOfTypeTop:function(a){if(this.modelItemRef.itemIcon){var b=
document.createElement("DIV");b.innerHTML='<img src="'+this.modelItemRef.itemIcon+'">';b.id="menuItemIcon"+this.modelItemRef.id;a.appendChild(b)}if(this.modelItemRef.itemText)b=document.createElement("DIV"),b.innerHTML=this.modelItemRef.itemText,b.className=this.cssPrefix+"menuItem_textContent",b.id="menuItemText"+this.modelItemRef.id,a.appendChild(b);if(this.modelItemRef.hasSubs)b=document.createElement("DIV"),b.className=this.cssPrefix+"menuItem_top_arrowShowSub",b.id="DHTMLSuite_menuBar_arrow"+
this.modelItemRef.id,a.appendChild(b),this.expandElement=b.id},__createMenuElementsOfTypeSub:function(a){if(this.modelItemRef.itemIcon)a.style.backgroundImage="url('"+this.modelItemRef.itemIcon+"')",a.style.backgroundRepeat="no-repeat",a.style.backgroundPosition="left center";if(this.modelItemRef.itemText){var b=document.createElement("DIV");b.className="DHTMLSuite_textContent";b.innerHTML=this.modelItemRef.itemText;b.className=this.cssPrefix+"menuItem_textContent";b.id="menuItemText"+this.modelItemRef.id;
a.appendChild(b)}if(this.modelItemRef.hasSubs)b=document.createElement("DIV"),b.className=this.cssPrefix+"menuItem_sub_arrowShowSub",a.appendChild(b),b.id="DHTMLSuite_menuBar_arrow"+this.modelItemRef.id,this.expandElement=b.id,b.previousSibling.style.paddingRight="15px"},setCssPrefix:function(a){this.cssPrefix=a},setIcon:function(a){this.modelItemRef.setIcon(a);if(this.modelItemRef.type=="top"){var b=document.getElementById("menuItemIcon"+this.modelItemRef.id),c=b.getElementsByTagName("IMG")[0];c||
(c=document.createElement("IMG"),b.appendChild(c));(c.src=a)||DHTMLSuite.discardElement(c)}if(this.modelItemRef.type=="sub")document.getElementById(this.divElement).style.backgroundImage="url('"+a+"')"},setText:function(a){this.modelItemRef.setText(a);document.getElementById("menuItemText"+this.modelItemRef.id).innerHTML=a},__clickMenuItem:function(){this.className=this.className.replace("_regular","_click");this.className=this.className.replace("_over","_click")},__rolloverMenuItem:function(){this.className=
this.className.replace("_regular","_over");this.className=this.className.replace("_click","_over")},__rolloutMenuItem:function(){this.className=this.className.replace("_over","_regular")},setState:function(a){document.getElementById(this.divElement).className=this.cssPrefix+"menuItem_"+this.modelItemRef.type+"_"+a;this.modelItemRef.setState(a)},getState:function(){var a=this.modelItemRef.getState();a||(document.getElementById(this.divElement).className.indexOf("_over")>=0&&(a="over"),document.getElementById(this.divElement).className.indexOf("_click")>=
0&&(a="click"),this.modelItemRef.setState(a));return a},__setHasSub:function(a){(this.modelItemRef.hasSubs=a)?document.getElementById(this.cssPrefix+"menuBar_arrow"+this.modelItemRef.id).style.display="block":document.getElementById(this.cssPrefix+"menuBar_arrow"+this.modelItemRef.id).style.display="none"},hide:function(){this.modelItemRef.setVisibility(!1);document.getElementById(this.divElement).style.display="none"},show:function(){this.modelItemRef.setVisibility(!0);document.getElementById(this.divElement).style.display=
"block"},__hideGroup:function(){if(this.modelItemRef.parentId&&(document.getElementById(this.divElement).parentNode.style.visibility="hidden",DHTMLSuite.clientInfoObj.isMSIE))try{var a=document.getElementById(this.divElement).parentNode.id.replace(/[^0-9]/gi,"");document.getElementById("DHTMLSuite_menuBarIframe_"+a).style.visibility="hidden"}catch(b){}},__navigate:function(a){document.all&&(a=event);if(!(a&&DHTMLSuite.commonObj.getSrcElement(a).id.indexOf("arrow")>=0)&&this.modelItemRef.state!="disabled"){if(this.modelItemRef.url)location.href=
this.modelItemRef.url;if(this.modelItemRef.jsFunction)if(this.modelItemRef.jsFunction instanceof Function)this.modelItemRef.jsFunction.apply(this,this.modelItemRef.jsArgs);else try{eval(this.modelItemRef.jsFunction)}catch(b){alert("Defined Javascript code for the menu item( "+this.modelItemRef.jsFunction+" )cannot be executed")}}}};
