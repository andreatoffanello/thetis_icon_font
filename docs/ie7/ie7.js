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
		'icon_arrival_time': '&#xe93c;',
		'icon_departure_time': '&#xe93d;',
		'icon_doc_folder': '&#xe93e;',
		'icon_doc_page': '&#xe93f;',
		'icon_doc_table': '&#xe940;',
		'icon_expand_1': '&#xe941;',
		'icon_expand': '&#xe942;',
		'icon_minimize': '&#xe943;',
		'icon_more': '&#xe944;',
		'icon_reduce': '&#xe945;',
		'icon_walk': '&#xe946;',
		'icon_add': '&#xe900;',
		'icon_alert': '&#xe901;',
		'icon_arrow_down_long': '&#xe902;',
		'icon_arrow_down': '&#xe903;',
		'icon_arrow_left_long': '&#xe904;',
		'icon_arrow_left': '&#xe905;',
		'icon_arrow_right_long': '&#xe906;',
		'icon_arrow_right': '&#xe907;',
		'icon_arrow_up_long': '&#xe908;',
		'icon_arrow_up': '&#xe909;',
		'icon_bell': '&#xe90a;',
		'icon_binocular': '&#xe90b;',
		'icon_books': '&#xe90c;',
		'icon_bus': '&#xe90d;',
		'icon_calendar': '&#xe90e;',
		'icon_call': '&#xe90f;',
		'icon_check': '&#xe910;',
		'icon_close': '&#xe911;',
		'icon_coincidence': '&#xe912;',
		'icon_deviation': '&#xe913;',
		'icon_display': '&#xe914;',
		'icon_download': '&#xe915;',
		'icon_edit': '&#xe916;',
		'icon_error': '&#xe917;',
		'icon_filter': '&#xe918;',
		'icon_gps': '&#xe919;',
		'icon_help': '&#xe91a;',
		'icon_home': '&#xe91b;',
		'icon_info': '&#xe91c;',
		'icon_insert': '&#xe91d;',
		'icon_linear_view': '&#xe91e;',
		'icon_list': '&#xe91f;',
		'icon_login': '&#xe920;',
		'icon_logout': '&#xe921;',
		'icon_maintenance': '&#xe922;',
		'icon_map': '&#xe923;',
		'icon_match': '&#xe924;',
		'icon_menu': '&#xe925;',
		'icon_message': '&#xe926;',
		'icon_narrow': '&#xe927;',
		'icon_pin': '&#xe928;',
		'icon_planification': '&#xe929;',
		'icon_play': '&#xe92a;',
		'icon_radar': '&#xe92b;',
		'icon_refresh': '&#xe92c;',
		'icon_remove': '&#xe92d;',
		'icon_restart': '&#xe92e;',
		'icon_search': '&#xe92f;',
		'icon_sort_asc': '&#xe930;',
		'icon_sort_desc': '&#xe931;',
		'icon_stats': '&#xe932;',
		'icon_status': '&#xe933;',
		'icon_stop': '&#xe934;',
		'icon_table': '&#xe935;',
		'icon_trash': '&#xe936;',
		'icon_upload': '&#xe937;',
		'icon_user_add': '&#xe938;',
		'icon_user_remove': '&#xe939;',
		'icon_user': '&#xe93a;',
		'icon_users': '&#xe93b;',
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
