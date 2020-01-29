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
		'icon_basegrid_1': '&#xe96c;',
		'icon_basegrid_2': '&#xe96d;',
		'icon_basegrid_3': '&#xe96e;',
		'icon_basegrid_4': '&#xe96f;',
		'icon_basegrid_5': '&#xe970;',
		'icon_basegrid_6': '&#xe971;',
		'icon_basegrid_7': '&#xe972;',
		'icon_basegrid_8': '&#xe973;',
		'icon_basegrid_9': '&#xe974;',
		'icon_basegrid_10': '&#xe975;',
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
		'icon_ask_info': '&#xe90c;',
		'icon_audio': '&#xe90d;',
		'icon_bell': '&#xe90e;',
		'icon_binocular': '&#xe90f;',
		'icon_books': '&#xe910;',
		'icon_broke': '&#xe911;',
		'icon_bus_back': '&#xe912;',
		'icon_bus': '&#xe913;',
		'icon_calendar': '&#xe914;',
		'icon_call': '&#xe915;',
		'icon_car_crash': '&#xe916;',
		'icon_check': '&#xe917;',
		'icon_clock': '&#xe918;',
		'icon_close': '&#xe919;',
		'icon_coincidence': '&#xe91a;',
		'icon_contrast': '&#xe91b;',
		'icon_departure_time': '&#xe91c;',
		'icon_deviation': '&#xe91d;',
		'icon_display': '&#xe91e;',
		'icon_doc_folder': '&#xe91f;',
		'icon_doc_page': '&#xe920;',
		'icon_doc_table': '&#xe921;',
		'icon_dog': '&#xe922;',
		'icon_download_log': '&#xe923;',
		'icon_download_mobile': '&#xe924;',
		'icon_download': '&#xe925;',
		'icon_edit': '&#xe926;',
		'icon_error': '&#xe927;',
		'icon_exit': '&#xe928;',
		'icon_expand_1': '&#xe929;',
		'icon_expand': '&#xe92a;',
		'icon_filter': '&#xe92b;',
		'icon_garbage': '&#xe92c;',
		'icon_gps': '&#xe92d;',
		'icon_help': '&#xe92e;',
		'icon_home': '&#xe92f;',
		'icon_info': '&#xe930;',
		'icon_insert': '&#xe931;',
		'icon_linear_view': '&#xe932;',
		'icon_list': '&#xe933;',
		'icon_lock': '&#xe934;',
		'icon_login': '&#xe935;',
		'icon_logout': '&#xe936;',
		'icon_mail': '&#xe937;',
		'icon_maintenance': '&#xe938;',
		'icon_map_route': '&#xe939;',
		'icon_map': '&#xe93a;',
		'icon_match': '&#xe93b;',
		'icon_medical': '&#xe93c;',
		'icon_menu': '&#xe93d;',
		'icon_message': '&#xe93e;',
		'icon_minimize': '&#xe93f;',
		'icon_more': '&#xe940;',
		'icon_narrow': '&#xe941;',
		'icon_navigator': '&#xe942;',
		'icon_people': '&#xe943;',
		'icon_pin': '&#xe944;',
		'icon_planification': '&#xe945;',
		'icon_play': '&#xe946;',
		'icon_radar': '&#xe947;',
		'icon_reduce': '&#xe948;',
		'icon_refresh': '&#xe949;',
		'icon_remove': '&#xe94a;',
		'icon_restart': '&#xe94b;',
		'icon_road_block': '&#xe94c;',
		'icon_road_in': '&#xe94d;',
		'icon_road_off': '&#xe94e;',
		'icon_satellite': '&#xe94f;',
		'icon_save': '&#xe950;',
		'icon_search': '&#xe951;',
		'icon_settings': '&#xe952;',
		'icon_shift_failed': '&#xe953;',
		'icon_shift': '&#xe954;',
		'icon_sign': '&#xe955;',
		'icon_sort_asc': '&#xe956;',
		'icon_sort_desc': '&#xe957;',
		'icon_stats': '&#xe958;',
		'icon_status': '&#xe959;',
		'icon_stop': '&#xe95a;',
		'icon_switch_on': '&#xe95b;',
		'icon_table': '&#xe95c;',
		'icon_text': '&#xe95d;',
		'icon_thetis_logo': '&#xe95e;',
		'icon_Touch': '&#xe95f;',
		'icon_traffic_light': '&#xe960;',
		'icon_tram_dis': '&#xe961;',
		'icon_tram': '&#xe962;',
		'icon_trash': '&#xe963;',
		'icon_upload': '&#xe964;',
		'icon_user_add': '&#xe965;',
		'icon_user_remove': '&#xe966;',
		'icon_user': '&#xe967;',
		'icon_users': '&#xe968;',
		'icon_walk': '&#xe969;',
		'icon_wheelchair': '&#xe96a;',
		'icon_wifi': '&#xe96b;',
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
