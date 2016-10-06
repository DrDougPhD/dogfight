/**
 * @author Doug McGeehan <djmvfb@mst.edu>
 * @version v2.beta "Cleaning up"
 * @copyright Doug McGeehan 2016, but some of this stuff may be Disney's. I
 * claim fair use?
 *
 * @todo JSDoc annotations
 * @todo Fighter object with fire_at method
 * @todo HTML title update?
 * @todo destroyed TIE fighter:
 *		>o< -*|-o-|
 *		>o<*- |-o-|
 *		>o< -*|-o-|
 *		>o<   |-x-|
 *		>o<
 *		>o<   /-x-\
 *		>o<
 *		>o<   /-x-\
 *		>o<
 *		>o<    ...
 */

dogfight = {
	// constants
	x_fighter: '&#5171;o&#5176;',		//  >o<
	tie_fighter: '&#9500;o&#9508;',	// |-o-|
	_: '&nbsp;',										//  ' ' (forced space)
	bang: '&#8727;',								//   *
	pew: '&mdash;',									//   -
	delay: 275,

	// functions
	init: function() {
		// initialize x-wing fighter
		var xwing = document.createElement('span');

		var x_fighter = document.createElement('span');
		x_fighter.innerHTML = dogfight.x_fighter;
		xwing.appendChild(x_fighter);

		var x_bang = document.createElement('span');
		xwing.appendChild(x_bang);


		// initialize tie fighter, in reverse order
		var tie = document.createElement('span');

		var t_bang = document.createElement('span');
		tie.appendChild(t_bang);

		var t_fighter = document.createElement('span');
		t_fighter.innerHTML = dogfight.tie_fighter;
		tie.appendChild(t_fighter);

		// pew-line between the two
		var pew = document.createElement('span');
		var bangs = [x_bang, t_bang];

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

	start: function() {
		var i = 0;

		// it's really stupid how JavaScript doesn't have a synchronous delay
		var fight = function() {
			var bangs = dogfight.bang_spans;
			var pew = dogfight.pew_span;
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
	},
};


window.onload = function() {
	// initialize content
	dogfight.init();

	// release the dogs
	dogfight.start();
};

