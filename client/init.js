var CurThread;

var $DOC = $(document);
var $name = $('#xD'), $email = $('#pogchamp');
var $ceiling = $('hr:first');

DEFINES.PAGE_BOTTOM = -1;
var menuOptions = ['Focus'];
var menuHandlers = {};

var syncs = {}, ownPosts = {};
var readOnly = ['archive'];

var connSM = new FSM('load');
var postSM = new FSM('none');
var TAB_ID = random_id();
var CONN_ID;

var oneeSama = new OneeSama(function (num) {
	var frag;
	if (this.links && num in this.links) {
		var op = this.links[num];
		var post = Threads.lookup(num, op);
		var desc = post && post.get('mine') && '(You)';
		frag = this.post_ref(num, op, desc);
	}
	else
		frag = '>>' + num;
	this.callback(frag);
});
oneeSama.full = oneeSama.op = THREAD;
