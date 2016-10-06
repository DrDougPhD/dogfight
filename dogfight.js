/**
 * @author Doug McGeehan <djmvfb@mst.edu>
 * @version v1.alpha "Cowboy coding"
 * @copyright Doug McGeehan 2016, but some of this stuff may be Disney's. I
 * claim fair use?
 */

window.onload = function() {
	// initialize x-wing fighter
	var xwing = document.createElement('span');

	var x_fighter = document.createElement('span');
	x_fighter.setAttribute('name', 'fighter');
	x_fighter.appendChild(document.createTextNode('>o<'));
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
	t_fighter.appendChild(document.createTextNode('|o|'));
	tie.appendChild(t_fighter);

	// add to the dom
	var div = document.getElementById('inner');
	div.appendChild(xwing);

	var pew = document.createElement('span');
	pew.setAttribute('id', 'pew');
	pew.innerHTML = '&nbsp;'
	div.appendChild(pew);

	div.appendChild(tie);

	// set bangs and pews
	var bangs = document.getElementsByName('bang');
	bangs.forEach(function(e, i, q) {
		e.innerHTML = '&nbsp;';
	});

	// it's really stupid how JavaScript doesn't have a synchronous delay
	var i = 0;
	var delay = 500;
	var fight = function() {
		bangs[i].innerHTML = '-';

		setTimeout(function(){
			bangs[i].innerHTML = '&nbsp;';
			pew.innerHTML = '-';

			setTimeout(function (){
				// flip between 0 and 1
				i = (i+1)%2;

				pew.innerHTML = '&nbsp;';
				bangs[i].innerHTML = '*';

				setTimeout(function (){
					bangs[i].innerHTML = '&nbsp;';
				}, delay);
			}, delay);
		}, delay);
	};

	// kicking off the dogfight
	fight();
	setInterval(fight, 4*delay);
};

