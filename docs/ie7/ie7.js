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
		'add': '&#xe900;',
		'alert': '&#xe901;',
		'arrow_down_long': '&#xe902;',
		'arrow_down': '&#xe903;',
		'arrow_left_long': '&#xe904;',
		'arrow_left': '&#xe905;',
		'arrow_right_long': '&#xe906;',
		'arrow_right': '&#xe907;',
		'arrow_up_long': '&#xe908;',
		'arrow_up': '&#xe909;',
		'bell': '&#xe90a;',
		'binocular': '&#xe90b;',
		'books': '&#xe90c;',
		'bus': '&#xe90d;',
		'calendar': '&#xe90e;',
		'call': '&#xe90f;',
		'check': '&#xe910;',
		'close': '&#xe911;',
		'coincidence': '&#xe912;',
		'deviation': '&#xe913;',
		'display': '&#xe914;',
		'download': '&#xe915;',
		'edit': '&#xe916;',
		'error': '&#xe917;',
		'filter': '&#xe918;',
		'gps': '&#xe919;',
		'help': '&#xe91a;',
		'home': '&#xe91b;',
		'info': '&#xe91c;',
		'insert': '&#xe91d;',
		'linear_view': '&#xe91e;',
		'list': '&#xe91f;',
		'login': '&#xe920;',
		'logout': '&#xe921;',
		'maintenance': '&#xe922;',
		'map': '&#xe923;',
		'match': '&#xe924;',
		'menu': '&#xe925;',
		'message': '&#xe926;',
		'narrow': '&#xe927;',
		'pin': '&#xe928;',
		'planification': '&#xe929;',
		'play': '&#xe92a;',
		'radar': '&#xe92b;',
		'refresh': '&#xe92c;',
		'remove': '&#xe92d;',
		'restart': '&#xe92e;',
		'search': '&#xe92f;',
		'sort_asc': '&#xe930;',
		'sort_desc': '&#xe931;',
		'stats': '&#xe932;',
		'status': '&#xe933;',
		'stop': '&#xe934;',
		'table': '&#xe935;',
		'trash': '&#xe936;',
		'upload': '&#xe937;',
		'user_add': '&#xe938;',
		'user_remove': '&#xe939;',
		'user': '&#xe93a;',
		'users': '&#xe93b;',
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
