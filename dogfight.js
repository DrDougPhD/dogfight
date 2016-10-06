/**
 * @author Doug McGeehan <djmvfb@mst.edu>
 * @version v2.beta "Cleaning up"
 * @copyright Doug McGeehan 2016, but some of this stuff may be Disney's. I
 * claim fair use?
 */

/**
 * @namespace
 */
dogfight = {
	// constants
	delay: 500,

	//TODO: use fancy unicode to make it look better
	x_fighter: '>o<',
	tie_fighter: '|o|',
	_: '&nbsp;',
	bang: '*',
	pew: '-',

	// functions
	init: function() {
		// initialize x-wing fighter
		var xwing = document.createElement('span');

		var x_fighter = document.createElement('span');
		x_fighter.setAttribute('name', 'fighter');
		x_fighter.appendChild(document.createTextNode(dogfight.x_fighter));
		xwing.appendChild(x_fighter);

		var x_bang = document.createElement('span');
		x_bang.setAttribute('name', 'bang');
		xwing.appendChild(x_bang);


		// initialize tie fighter, in reverse order
		var tie = document.createElement('span');

		var t_bang = document.createElement('span');
		t_bang.setAttribute('name', 'bang');
		tie.appendChild(t_bang);

		var t_fighter = document.createElement('span');
		t_fighter.setAttribute('name', 'fighter');
		t_fighter.appendChild(document.createTextNode(dogfight.tie_fighter));
		tie.appendChild(t_fighter);

		// pew-line between the two
		var pew = document.createElement('span');
		pew.setAttribute('id', 'pew');

		var bangs = [x_bang, t_fighter];

		// add to the dom
		var div = document.getElementById('inner');
		div.appendChild(xwing);
		div.appendChild(pew);
		div.appendChild(tie);

		// set bangs and pews
		bangs.forEach(function(e, i, q) {
			e.innerHTML = dogfight._;
		});
		pew.innerHTML = dogfight._;

		// assign elements to namespace
		dogfight.bang_spans = bangs;
		dogfight.pew_span = pew;
	},
};


window.onload = function() {
	// initialize content
	dogfight.init();

	// it's really stupid how JavaScript doesn't have a synchronous delay
	var bangs = dogfight.bang_spans;
	var pew = dogfight.pew_span;
	var i = 0;
	var fight = function() {
		bangs[i].innerHTML = dogfight.pew;

		setTimeout(function(){
			bangs[i].innerHTML = dogfight._;
			pew.innerHTML = dogfight.pew;

			setTimeout(function (){
				// flip between 0 and 1
				i = (i+1)%2;

				pew.innerHTML = dogfight._;
				bangs[i].innerHTML = dogfight.bang;

				setTimeout(function (){
					bangs[i].innerHTML = dogfight._;
				}, dogfight.delay);
			}, dogfight.delay);
		}, dogfight.delay);
	};

	// kicking off the dogfight
	fight();
	setInterval(fight, 4*dogfight.delay);
};

