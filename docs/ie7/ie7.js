/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'thetis_icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_g': '&#xe900;',
		'icon_add': '&#xe901;',
		'icon_alert': '&#xe902;',
		'icon_arrival_time': '&#xe903;',
		'icon_arrow_down_long': '&#xe904;',
		'icon_arrow_down': '&#xe905;',
		'icon_arrow_left_long': '&#xe906;',
		'icon_arrow_left': '&#xe907;',
		'icon_arrow_right_long': '&#xe908;',
		'icon_arrow_right': '&#xe909;',
		'icon_arrow_up_long': '&#xe90a;',
		'icon_arrow_up': '&#xe90b;',
		'icon_bell': '&#xe90c;',
		'icon_binocular': '&#xe90d;',
		'icon_books': '&#xe90e;',
		'icon_bus': '&#xe90f;',
		'icon_calendar': '&#xe910;',
		'icon_call': '&#xe911;',
		'icon_check': '&#xe912;',
		'icon_close': '&#xe913;',
		'icon_coincidence': '&#xe914;',
		'icon_departure_time': '&#xe915;',
		'icon_deviation': '&#xe916;',
		'icon_display': '&#xe917;',
		'icon_doc_folder': '&#xe918;',
		'icon_doc_page': '&#xe919;',
		'icon_doc_table': '&#xe91a;',
		'icon_download_log': '&#xe91b;',
		'icon_download_mobile': '&#xe91c;',
		'icon_download': '&#xe91d;',
		'icon_edit': '&#xe91e;',
		'icon_error': '&#xe91f;',
		'icon_expand_1': '&#xe920;',
		'icon_expand': '&#xe921;',
		'icon_filter': '&#xe922;',
		'icon_gps': '&#xe923;',
		'icon_help': '&#xe924;',
		'icon_home': '&#xe925;',
		'icon_info': '&#xe926;',
		'icon_insert': '&#xe927;',
		'icon_linear_view': '&#xe928;',
		'icon_list': '&#xe929;',
		'icon_login': '&#xe92a;',
		'icon_logout': '&#xe92b;',
		'icon_mail': '&#xe92c;',
		'icon_maintenance': '&#xe92d;',
		'icon_map': '&#xe92e;',
		'icon_match': '&#xe92f;',
		'icon_menu': '&#xe930;',
		'icon_message': '&#xe931;',
		'icon_minimize': '&#xe932;',
		'icon_more': '&#xe933;',
		'icon_narrow': '&#xe934;',
		'icon_navigator': '&#xe935;',
		'icon_pin': '&#xe936;',
		'icon_planification': '&#xe937;',
		'icon_play': '&#xe938;',
		'icon_radar': '&#xe939;',
		'icon_reduce': '&#xe93a;',
		'icon_refresh': '&#xe93b;',
		'icon_remove': '&#xe93c;',
		'icon_restart': '&#xe93d;',
		'icon_satellite': '&#xe93e;',
		'icon_search': '&#xe93f;',
		'icon_sort_asc': '&#xe940;',
		'icon_sort_desc': '&#xe941;',
		'icon_stats': '&#xe942;',
		'icon_status': '&#xe943;',
		'icon_stop': '&#xe944;',
		'icon_table': '&#xe945;',
		'icon_thetis_logo': '&#xe946;',
		'icon_traffic_light': '&#xe947;',
		'icon_trash': '&#xe948;',
		'icon_upload': '&#xe949;',
		'icon_user_add': '&#xe94a;',
		'icon_user_remove': '&#xe94b;',
		'icon_user': '&#xe94c;',
		'icon_users': '&#xe94d;',
		'icon_walk': '&#xe94e;',
		'icon_wifi': '&#xe94f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
