var mejsL10n = {
	"language": "en",
	"strings": {
		"mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/",
		"mejs.fullscreen-off": "Turn off Fullscreen",
		"mejs.fullscreen-on": "Go Fullscreen",
		"mejs.download-video": "Download Video",
		"mejs.fullscreen": "Fullscreen",
		"mejs.time-jump-forward": ["Jump forward 1 second", "Jump forward %1 seconds"],
		"mejs.loop": "Toggle Loop",
		"mejs.play": "Play",
		"mejs.pause": "Pause",
		"mejs.close": "Close",
		"mejs.time-slider": "Time Slider",
		"mejs.time-help-text": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.",
		"mejs.time-skip-back": ["Skip back 1 second", "Skip back %1 seconds"],
		"mejs.captions-subtitles": "Captions\/Subtitles",
		"mejs.captions-chapters": "Chapters",
		"mejs.none": "None",
		"mejs.mute-toggle": "Mute Toggle",
		"mejs.volume-help-text": "Use Up\/Down Arrow keys to increase or decrease volume.",
		"mejs.unmute": "Unmute",
		"mejs.mute": "Mute",
		"mejs.volume-slider": "Volume Slider",
		"mejs.video-player": "Video Player",
		"mejs.audio-player": "Audio Player",
		"mejs.ad-skip": "Skip ad",
		"mejs.ad-skip-info": ["Skip in 1 second", "Skip in %1 seconds"],
		"mejs.source-chooser": "Source Chooser",
		"mejs.stop": "Stop",
		"mejs.speed-rate": "Speed Rate",
		"mejs.live-broadcast": "Live Broadcast",
		"mejs.afrikaans": "Afrikaans",
		"mejs.albanian": "Albanian",
		"mejs.arabic": "Arabic",
		"mejs.belarusian": "Belarusian",
		"mejs.bulgarian": "Bulgarian",
		"mejs.catalan": "Catalan",
		"mejs.chinese": "Chinese",
		"mejs.chinese-simplified": "Chinese (Simplified)",
		"mejs.chinese-traditional": "Chinese (Traditional)",
		"mejs.croatian": "Croatian",
		"mejs.czech": "Czech",
		"mejs.danish": "Danish",
		"mejs.dutch": "Dutch",
		"mejs.english": "English",
		"mejs.estonian": "Estonian",
		"mejs.filipino": "Filipino",
		"mejs.finnish": "Finnish",
		"mejs.french": "French",
		"mejs.galician": "Galician",
		"mejs.german": "German",
		"mejs.greek": "Greek",
		"mejs.haitian-creole": "Haitian Creole",
		"mejs.hebrew": "Hebrew",
		"mejs.hindi": "Hindi",
		"mejs.hungarian": "Hungarian",
		"mejs.icelandic": "Icelandic",
		"mejs.indonesian": "Indonesian",
		"mejs.irish": "Irish",
		"mejs.italian": "Italian",
		"mejs.japanese": "Japanese",
		"mejs.korean": "Korean",
		"mejs.latvian": "Latvian",
		"mejs.lithuanian": "Lithuanian",
		"mejs.macedonian": "Macedonian",
		"mejs.malay": "Malay",
		"mejs.maltese": "Maltese",
		"mejs.norwegian": "Norwegian",
		"mejs.persian": "Persian",
		"mejs.polish": "Polish",
		"mejs.portuguese": "Portuguese",
		"mejs.romanian": "Romanian",
		"mejs.russian": "Russian",
		"mejs.serbian": "Serbian",
		"mejs.slovak": "Slovak",
		"mejs.slovenian": "Slovenian",
		"mejs.spanish": "Spanish",
		"mejs.swahili": "Swahili",
		"mejs.swedish": "Swedish",
		"mejs.tagalog": "Tagalog",
		"mejs.thai": "Thai",
		"mejs.turkish": "Turkish",
		"mejs.ukrainian": "Ukrainian",
		"mejs.vietnamese": "Vietnamese",
		"mejs.welsh": "Welsh",
		"mejs.yiddish": "Yiddish"
	}
};
var _wpmejsSettings = {
	"pluginPath": "\/wp-includes\/js\/mediaelement\/",
	"classPrefix": "mejs-",
	"stretching": "responsive"
};
var ajaxRevslider;
jQuery(document).ready(function() {
	// CUSTOM AJAX CONTENT LOADING FUNCTION
	ajaxRevslider = function(obj) {
		// obj.type : Post Type
		// obj.id : ID of Content to Load
		// obj.aspectratio : The Aspect Ratio of the Container / Media
		// obj.selector : The Container Selector where the Content of Ajax will be injected. It is done via the Essential Grid on Return of Content
		var content = "";
		data = {};
		data.action = 'revslider_ajax_call_front';
		data.client_action = 'get_slider_html';
		data.token = '173052ebf1';
		data.type = obj.type;
		data.id = obj.id;
		data.aspectratio = obj.aspectratio;
		// SYNC AJAX REQUEST
		jQuery.ajax({
			type: "post",
			url: "//shaha.ancorathemes.com/wp-admin/admin-ajax.php",
			dataType: 'json',
			data: data,
			async: false,
			success: function(ret, textStatus, XMLHttpRequest) {
				if (ret.success == true) content = ret.data;
			},
			error: function(e) {
				console.log(e);
			}
		});
		// FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
		return content;
	};
	// CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
	var ajaxRemoveRevslider = function(obj) {
		return jQuery(obj.selector + " .rev_slider").revkill();
	};
	// EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
	var extendessential = setInterval(function() {
		if (jQuery.fn.tpessential != undefined) {
			clearInterval(extendessential);
			if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
				jQuery.fn.tpessential.defaults.ajaxTypes.push({
					type: "revslider",
					func: ajaxRevslider,
					killfunc: ajaxRemoveRevslider,
					openAnimationSpeed: 0.3
				});
				// type:  Name of the Post to load via Ajax into the Essential Grid Ajax Container
				// func: the Function Name which is Called once the Item with the Post Type has been clicked
				// killfunc: function to kill in case the Ajax Window going to be removed (before Remove function !
				// openAnimationSpeed: how quick the Ajax Content window should be animated (default is 0.3)
			}
		}
	}, 30);
});

function setREVStartSize(e) {
	try {
		var i = jQuery(window).width(),
			t = 9999,
			r = 0,
			n = 0,
			l = 0,
			f = 0,
			s = 0,
			h = 0;
		if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
			var u = (e.c.width(), jQuery(window).height());
			if (void 0 != e.fullScreenOffsetContainer) {
				var c = e.fullScreenOffsetContainer.split(",");
				if (c) jQuery.each(c, function(e, i) {
					u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
				}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
			}
			f = u
		} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
		e.c.closest(".rev_slider_wrapper").css({
			height: f
		})
	} catch (d) {
		console.log("Failure at Presize of Slider:" + d)
	}
};
window._wpemojiSettings = {
	"baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/",
	"ext": ".png",
	"svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/",
	"svgExt": ".svg",
	"source": {
		"concatemoji": "http:\/\/shaha.ancorathemes.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.8"
	}
};
! function(a, b, c) {
	function d(a, b) {
		var c = String.fromCharCode;
		l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0);
		var d = k.toDataURL();
		l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0);
		var e = k.toDataURL();
		return d === e
	}

	function e(a) {
		var b;
		if (!l || !l.fillText) return !1;
		switch (l.textBaseline = "top", l.font = "600 32px Arial", a) {
			case "flag":
				return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b);
			case "emoji":
				return b = d([55358, 56760, 9792, 65039], [55358, 56760, 8203, 9792, 65039]), !b
		}
		return !1
	}

	function f(a) {
		var c = b.createElement("script");
		c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
	}
	var g, h, i, j, k = b.createElement("canvas"),
		l = k.getContext && k.getContext("2d");
	for (j = Array("flag", "emoji"), c.supports = {
			everything: !0,
			everythingExceptFlag: !0
		}, i = 0; i < j.length; i++) c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]);
	c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
		c.DOMReady = !0
	}, c.supports.everything || (h = function() {
		c.readyCallback()
	}, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function() {
		"complete" === b.readyState && c.readyCallback()
	})), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji)))
}(window, document, window._wpemojiSettings);
document.getElementById("testf").innerHTML = new Date().getFullYear();
(function(body) {
	'use strict';
	body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
})(document.body);
/* <![CDATA[ */
var tribe_l10n_datatables = {
	"aria": {
		"sort_ascending": ": activate to sort column ascending",
		"sort_descending": ": activate to sort column descending"
	},
	"length_menu": "Show _MENU_ entries",
	"empty_table": "No data available in table",
	"info": "Showing _START_ to _END_ of _TOTAL_ entries",
	"info_empty": "Showing 0 to 0 of 0 entries",
	"info_filtered": "(filtered from _MAX_ total entries)",
	"zero_records": "No matching records found",
	"search": "Search:",
	"all_selected_text": "All items on this page were selected. ",
	"select_all_link": "Select all pages",
	"clear_selection": "Clear Selection.",
	"pagination": {
		"all": "All",
		"next": "Next",
		"previous": "Previous"
	},
	"select": {
		"rows": {
			"0": "",
			"_": ": Selected %d rows",
			"1": ": Selected 1 row"
		}
	},
	"datepicker": {
		"dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		"dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
		"monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"monthNamesShort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"nextText": "Next",
		"prevText": "Prev",
		"currentText": "Today",
		"closeText": "Done"
	}
}; /* ]]> */
(function() {
	function addEventListener(element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, handler);
		}
	}

	function maybePrefixUrlField() {
		if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
			this.value = "http://" + this.value;
		}
	}
	var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
	if (urlFields && urlFields.length > 0) {
		for (var j = 0; j < urlFields.length; j++) {
			addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
		}
	} /* test if browser supports date fields */
	var testInput = document.createElement('input');
	testInput.setAttribute('type', 'date');
	if (testInput.type !== 'date') {
		/* add placeholder & pattern to all date fields */
		var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
		for (var i = 0; i < dateFields.length; i++) {
			if (!dateFields[i].placeholder) {
				dateFields[i].placeholder = 'YYYY-MM-DD';
			}
			if (!dateFields[i].pattern) {
				dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
			}
		}
	}
})();
/* <![CDATA[ */
var TRX_ADDONS_STORAGE = {
	"ajax_url": "http:\/\/shaha.ancorathemes.com\/wp-admin\/admin-ajax.php",
	"ajax_nonce": "d5e85326f2",
	"site_url": "http:\/\/shaha.ancorathemes.com",
	"post_id": "2",
	"vc_edit_mode": "0",
	"popup_engine": "magnific",
	"animate_inner_links": "0",
	"menu_collapse": "1",
	"user_logged_in": "0",
	"email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
	"msg_ajax_error": "Invalid server answer!",
	"msg_magnific_loading": "Loading image",
	"msg_magnific_error": "Error loading image",
	"msg_error_like": "Error saving your like! Please, try again later.",
	"msg_field_name_empty": "The name can't be empty",
	"msg_field_email_empty": "Too short (or empty) email address",
	"msg_field_email_not_valid": "Invalid email address",
	"msg_field_text_empty": "The message text can't be empty",
	"msg_search_error": "Search error! Try again later.",
	"msg_send_complete": "Send message complete!",
	"msg_send_error": "Transmit failed!",
	"ajax_views": "",
	"menu_cache": [".menu_mobile_inner > nav > ul"],
	"login_via_ajax": "1",
	"msg_login_empty": "The Login field can't be empty",
	"msg_login_long": "The Login field is too long",
	"msg_password_empty": "The password can't be empty and shorter then 4 characters",
	"msg_password_long": "The password is too long",
	"msg_login_success": "Login success! The page should be reloaded in 3 sec.",
	"msg_login_error": "Login failed!",
	"msg_not_agree": "Please, read and check 'Terms and Conditions'",
	"msg_email_long": "E-mail address is too long",
	"msg_email_not_valid": "E-mail address is invalid",
	"msg_password_not_equal": "The passwords in both fields are not equal",
	"msg_registration_success": "Registration success! Please log in!",
	"msg_registration_error": "Registration failed!",
	"msg_sc_googlemap_not_avail": "Googlemap service is not available",
	"msg_sc_googlemap_geocoder_error": "Error while geocode address"
};
/* ]]> */
/* <![CDATA[ */
var Shaha_STORAGE = {
	"ajax_url": "http:\/\/shaha.ancorathemes.com\/wp-admin\/admin-ajax.php",
	"ajax_nonce": "d5e85326f2",
	"site_url": "http:\/\/shaha.ancorathemes.com",
	"theme_url": "http:\/\/shaha.ancorathemes.com\/wp-content\/themes\/shaha",
	"site_scheme": "scheme_default",
	"user_logged_in": "",
	"mobile_layout_width": "767",
	"mobile_device": "",
	"menu_side_stretch": "",
	"menu_side_icons": "",
	"background_video": "",
	"use_mediaelements": "1",
	"comment_maxlength": "1000",
	"admin_mode": "",
	"email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
	"strings": {
		"ajax_error": "Invalid server answer!",
		"error_global": "Error data validation!",
		"name_empty": "The name can&#039;t be empty",
		"name_long": "Too long name",
		"email_empty": "Too short (or empty) email address",
		"email_long": "Too long email address",
		"email_not_valid": "Invalid email address",
		"text_empty": "The message text can&#039;t be empty",
		"text_long": "Too long message text"
	},
	"alter_link_color": "#db9e30",
	"button_hover": "slide_left"
};
/* ]]> */
var mc4wp_forms_config = [];
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "<\/style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = ".tp-caption.Icon,.Icon{color:#ffffff;font-size:16px;line-height:27px;font-weight:400;font-style:normal;font-family:Roboto Slab;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px 0px 0px 0px;border-radius:0px 0px 0px 0px}.tp-caption.Title,.Title{color:#ffffff;font-size:62px;line-height:80px;font-weight:700;font-style:normal;font-family:Cinzel Decorative;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px 0px 0px 0px;border-radius:0px 0px 0px 0px}.tp-caption.Subtitle,.Subtitle{color:rgba(255,255,255,0.5);font-size:18px;line-height:27px;font-weight:400;font-style:normal;font-family:Roboto Slab;text-decoration:none;background-color:transparent;border-color:transparent;border-style:none;border-width:0px 0px 0px 0px;border-radius:0px 0px 0px 0px}.tp-caption.Button,.Button{color:#ffffff;font-size:16px;line-height:27px;font-weight:400;font-style:normal;font-family:Roboto Slab;text-decoration:none;background-color:#db9e30;border-color:#db9e30;border-style:solid;border-width:0px 0px 0px 0px;border-radius:6px 6px 6px 6px}.tp-caption.Button:hover,.Button:hover{color:rgba(255,255,255,1);text-decoration:none;background-color:#57a68f;border-color:#db9e30;border-style:solid;border-width:0px 0px 0px 0px;border-radius:6px 6px 6px 6px;cursor:pointer}";
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "<\/style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}
setREVStartSize({
	c: jQuery('#rev_slider_1_1'),
	responsiveLevels: [1240, 1024, 1024, 1024],
	gridwidth: [1240, 1024, 1024, 1024],
	gridheight: [970, 768, 768, 768],
	sliderLayout: 'auto'
});
var revapi1,
	tpj = jQuery;
tpj(document).ready(function() {
	if (tpj("#rev_slider_1_1").revolution == undefined) {
		revslider_showDoubleJqueryError("#rev_slider_1_1");
	} else {
		revapi1 = tpj("#rev_slider_1_1").show().revolution({
			sliderType: "standard",
			jsFileLocation: "//shaha.ancorathemes.com/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout: "auto",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					touchOnDesktop: "off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				bullets: {
					enable: true,
					hide_onmobile: true,
					hide_under: 1000,
					style: "custom",
					hide_onleave: false,
					direction: "horizontal",
					h_align: "center",
					v_align: "bottom",
					h_offset: 0,
					v_offset: 40,
					space: 13,
					tmp: ''
				}
			},
			responsiveLevels: [1240, 1024, 1024, 1024],
			visibilityLevels: [1240, 1024, 1024, 1024],
			gridwidth: [1240, 1024, 1024, 1024],
			gridheight: [970, 768, 768, 768],
			lazyType: "none",
			shadow: 0,
			spinner: "spinner0",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
}); /*ready*/
var htmlDivCss = unescape(".custom.tp-bullets%20%7B%0A%7D%0A.custom.tp-bullets%3Abefore%20%7B%0A%09content%3A%22%20%22%3B%0A%09position%3Aabsolute%3B%0A%09width%3A100%25%3B%0A%09height%3A100%25%3B%0A%09background%3Atransparent%3B%0A%09padding%3A10px%3B%0A%09margin-left%3A-10px%3Bmargin-top%3A-10px%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A.custom%20.tp-bullet%20%7B%0A%09width%3A12px%3B%0A%09height%3A12px%3B%0A%09position%3Aabsolute%3B%0A%09background%3A%23aaa%3B%0A%20%20%20%20background%3Argba%28125%2C125%2C125%2C0.5%29%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A.custom%20.tp-bullet%3Ahover%2C%0A.custom%20.tp-bullet.selected%20%7B%0A%09background%3Argb%28125%2C125%2C125%29%3B%0A%7D%0A.custom%20.tp-bullet-image%20%7B%0A%7D%0A.custom%20.tp-bullet-title%20%7B%0A%7D%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '<\/style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}