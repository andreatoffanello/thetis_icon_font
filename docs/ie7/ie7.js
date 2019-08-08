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
		'add_user': '&#xe900;',
		'add': '&#xe901;',
		'arrow_down': '&#xe902;',
		'arrow_left': '&#xe903;',
		'arrow_long_down': '&#xe904;',
		'arrow_long_left': '&#xe905;',
		'arrow_long_right': '&#xe906;',
		'arrow_long_top': '&#xe907;',
		'arrow_right': '&#xe908;',
		'arrow_top': '&#xe909;',
		'bino': '&#xe90a;',
		'bus_alt': '&#xe90b;',
		'bus_stop_alt': '&#xe90c;',
		'bus_stop': '&#xe90d;',
		'bus': '&#xe90e;',
		'calendar': '&#xe90f;',
		'call': '&#xe910;',
		'check': '&#xe911;',
		'close': '&#xe912;',
		'displaty_table_alt': '&#xe913;',
		'display_table': '&#xe914;',
		'docu': '&#xe915;',
		'download_alt': '&#xe916;',
		'download': '&#xe917;',
		'edit_alt': '&#xe918;',
		'edit': '&#xe919;',
		'filter': '&#xe91a;',
		'gps': '&#xe91b;',
		'list_alt': '&#xe91c;',
		'list_select': '&#xe91d;',
		'list': '&#xe91e;',
		'login_alt': '&#xe91f;',
		'login': '&#xe920;',
		'logout_alt': '&#xe921;',
		'logout': '&#xe922;',
		'menu': '&#xe923;',
		'message': '&#xe924;',
		'narrow': '&#xe925;',
		'package_upload': '&#xe926;',
		'pin_alt': '&#xe927;',
		'pin': '&#xe928;',
		'play': '&#xe929;',
		'radar': '&#xe92a;',
		'refresh': '&#xe92b;',
		'remove_user': '&#xe92c;',
		'remove': '&#xe92d;',
		'report': '&#xe92e;',
		'search': '&#xe92f;',
		'simul': '&#xe930;',
		'sort_asc': '&#xe931;',
		'sort_desc': '&#xe932;',
		'table': '&#xe933;',
		'trash_alt': '&#xe934;',
		'trash': '&#xe938;',
		'user_alt': '&#xe939;',
		'user': '&#xe93a;',
		'users_alt': '&#xe93b;',
		'users': '&#xe93c;',
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
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
