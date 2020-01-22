//樱花

	var deviceWidth = document.documentElement.clientWidth;
	// 计时
	var num=0;
	if (deviceWidth < 768) {
		var stop, staticx;
		var img = new Image();
		img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAHA0lEQVRoQ+2bW2wcVxnHf+fMzO7OXnxZu07ipnUMlVKiKMQSQqg8VxRBQUCVPFRBIIRAjSJUJHhBCAmVl6iICtQCirgjLi0IKQ/AQ3kAUqAEtRRSWEQhCXGCc9vY3svszpw5B82s13EaEs+4WmcCu0+29Z055//9///vO+fMWvB//BEbwf7i2I6xivJyGxk7iDGW7fqzi6cW0z47NfiXSzu2kjN/AVNJO9ng4kUz3wn23OOdO5NmjtTgj1emdxYdp5Zmks2I9bWam1s8+8c0c6UGf6wyuXPEcmuWlGnmGWhsqA2dwJt7c+viYMHXKtM7r6BqI447UEBpHt7wO2yx7bnZQTN/dnJ255Lyax0jyFtWmjUOJNYPQxw0U7nc3NTFU4NlPgJvCVF7uVmnmiuTu4UJCMKQi36T3eUqFnpzwNtS1rQx/LlxCSFsthXKCJG6fGxcCcaw0G2hdMCeyiRSCIQJNw98f+Wn28uc9FtsdUpM5NxESQi1phn6+DrEERYVO0eSAmqMoR54/LvbYiZfYodbWZ3vloCPkhCBeMVbZqHbxrVzTDkuZet6QAY47S1xptukIC1y0orHdrRiOl/mde4Yr9ZPaAwt5XM+8GirLlvzLvcURq+rN7cMfF8FEaPn/TYnu00aKsARNmUnR1nauNLhXLdBSUreUBqnYNmrQDuhotZeZEkpthdG8ExAK1Q0VDdOTsV22JEvsy1XvKFCbjn4a01saCvF5cBjwfeYDzq8pTLJtnzphl6/4HscW77AdqfAFsdlMudSjJKUoJ5kDPwajMZwymswUxy5TtZrMxHbor3EjDuSCPDasZkFH3UGozVWgrao0RgjsBKwfVuAN0Scgrgp71ehRPFJY/ujMst8D3oEPtknik8am3nwySC/tqjMMv/aYCUbPQS/GQebaG+fjI/NixoyP2Q+udrSdhSi83xq2RsQLsgtoM+D8f5LL+v3QxtEEUwjOYi4jd6KI22iJRrIPyQY+ZSFPgeLH1GE82sS4IA1Bbm3Stx9EutuwdLHFf6vo6wlmiHD4KP1G6getbHuFITzhiv7FUZB5dOSwgMWIgcm7AWqmmHpUIhOcROfXeZXwFOAsSctnDdK6u8NCP8FhfcIig9bhFcM/rMG76caloDocjgh69mW/doDnu75nw4QM90DKaeh8D6J+3YZ14TG4ZDg+P+C7HVP9vZeQfmgJKgZWl/RjH3BAimQd4C1DUROxHGxUHzD5XcqdP129LwNzm6B3A65PQJnr8SaAWGJmOn6AUXxgKRwv6TzrKZzVMe1oPq0g5CwfDik82O9moz1UpApz1uvh4mnndU1h5cN+GBtFfgvaRYfCXHuhbEjDv7vdCx1Z5fAmhaoU4b6Qyox8Ox53oLShyX2HoH/K03nZxGrNqIEVw4own8CDlR/YMf9X/3dEP7DoF4B/3lNeC66Ge3ZJUnhyxTzMeUrXo8WX/ygpHTIiuXdPNyrdKYFxQ/1aoBeMNizIk5WZJdIAcGfDM0nQvTC+gnIHviVFienYOKojXB6flfzBuGAf9wgJ8C5VyDHBEYYzCKYNshJ4vjuHzRLH+23hRs7P3vgI8nmoPp9O961EYFrr7S6lR4XvKRRfzO4+yxMw3DpbSr2f/WHdpyU9k9Cmo9F/fHmJS974AWUPiEp7pM0P68pPSLxvqPxXzAU7hcU3m1R3x/EO7uJZ5wewA50ntPYMyIugPWHFeqv/Y3/7cK86fm5dNCi8RkVF7w7jtm0vq5pf1WTf1Aw+lm7hyZ62atW+rtHzHb+Pol9l+DSgwH6wnqNLksHGw3ufknpY5LlT4b4zxlEFSZ/btP+pqb1pMa5TzD+lM3y50L0GcPoE3YMuvW4hgAmfmHH+/3L71CxVdb7ZEr2hXcJ/N+aVdbsXTD+bYf2t0JaX9TYuwTV79o0vxTi/94w/g0bdVKjL0L3l5ryo1b8c9zv1693GTvVRW2u/82V6Ej7gGDkMZv210JaT+l4t1eNfG4MWCLe1ZkO8UlPrrzRWq30CQ44mWL+GpkacD8gqByyaTwe4n1PI0Z77S84YfCeiba2oC8ZjN/7u1UVNL8c0j6irybxJtrPNHjnTYKxIxaLB0OC3/Sqd+lRif+86f3eZzeMtrwW9m5Bfb9Cn13P7SsHw8ze5Kysv/h+ifcjfbWARdaIQL9K1tZs7ypLnVh/Z9dPTXaZ769wbR1IRmjiqOyDTwwlfeAQ/PDePrlqEnTQax+2oXv75OvZcORQ9kPZJxfPUPbJc8XG3tWlmWCDsUPPDz2fXDpDzyfP1dDz6b+ckCa7G4wdFrxhwUsunWHBS54rOF+a3UJJnsAwlmbcIGONMMuh6uy9sz7g/6iMQJwevXu8ZOviIAGlebYX4N21PJ/wawxXn5xa9mkWlfXY/wBUPvht9qMvCAAAAABJRU5ErkJggg==";
			
		function Sakura(x, y, s, r, fn) {
			this.x = x;
			this.y = y;
			this.s = s;
			this.r = r;
			this.fn = fn;
		}
		
		Sakura.prototype.draw = function(cxt) {
			cxt.save();
			var xc = 40 * this.s / 40;
			cxt.translate(this.x, this.y);
			cxt.rotate(this.r);
			
			// 40 最大尺寸
			cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
			cxt.restore();
		}
			
		Sakura.prototype.update = function() {
			this.x = this.fn.x(this.x, this.y);
			this.y = this.fn.y(this.y, this.y);
			this.r = this.fn.r(this.r);
			if(this.x > window.innerWidth ||
				this.x < 0 ||
				this.y > window.innerHeight ||
				this.y < 0
			) {
				this.r = getRandom('fnr');
				if(Math.random() > 0.4) {
					this.x = getRandom('x');
					this.y = 0;
					this.s = getRandom('s');
					this.r = getRandom('r');
				} else {
					this.x = window.innerWidth;
					this.y = getRandom('y');
					this.s = getRandom('s');
					this.r = getRandom('r');
				}
			}
		}
		
		SakuraList = function() {
			this.list = [];
		}
		SakuraList.prototype.push = function(sakura) {
			this.list.push(sakura);
		}
		SakuraList.prototype.update = function() {
			// 计时10秒
			if(num>=10) {
				var child = document.getElementById("canvas_sakura");
				child.parentNode.removeChild(child);
				window.cancelAnimationFrame(stop);
				staticx = false;
				clearTimeout(timeclock);
			}
			for(var i = 0, len = this.list.length; i < len; i++) {
				this.list[i].update();
			}
		}
		SakuraList.prototype.draw = function(cxt) {
			for(var i = 0, len = this.list.length; i < len; i++) {
				this.list[i].draw(cxt);
			}
		}
		SakuraList.prototype.get = function(i) {
			return this.list[i];
		}
		SakuraList.prototype.size = function() {
			return this.list.length;
		}
		
		function getRandom(option) {
			var ret, random;
			switch(option) {
				case 'x':
					ret = Math.random() * window.innerWidth;
					break;
				case 'y':
					ret = Math.random() * window.innerHeight;
					break;
				case 's':
					ret = Math.random();
					break;
				case 'r':
					ret = Math.random() * 6;
					break;
				case 'fnx':
					random = -0.5 + Math.random() * 1;
					ret = function(x, y) {
						return x + 0.5 * random - 1.7;
					};
					break;
				case 'fny':
					random = 1.5 + Math.random() * 0.7
					ret = function(x, y) {
						return y + random;
					};
					break;
				case 'fnr':
					random = Math.random() * 0.03;
					ret = function(r) {
						return r + random;
					};
					break;
			}
			return ret;
		}
		
		function startSakura() {
		
			requestAnimationFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				window.oRequestAnimationFrame;
			var canvas = document.createElement('canvas'),
				cxt;
			staticx = true;
			canvas.height = window.innerHeight;
			canvas.width = window.innerWidth;
			canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
			canvas.setAttribute('id', 'canvas_sakura');
			document.getElementsByTagName('body')[0].appendChild(canvas);
			cxt = canvas.getContext('2d');
			var sakuraList = new SakuraList();
			
			// i 密度
			for(var i = 0; i < 10; i++) {
				var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
				randomX = getRandom('x');
				randomY = getRandom('y');
				randomR = getRandom('r');
				randomS = getRandom('s');
				randomFnx = getRandom('fnx');
				randomFny = getRandom('fny');
				randomFnR = getRandom('fnr');
				sakura = new Sakura(randomX, randomY, randomS, randomR, {
					x: randomFnx,
					y: randomFny,
					r: randomFnR
				});
				sakura.draw(cxt);
				sakuraList.push(sakura);
			}
			stop = requestAnimationFrame(function() {
				cxt.clearRect(0, 0, canvas.width, canvas.height);
				sakuraList.update();
				sakuraList.draw(cxt);
				stop = requestAnimationFrame(arguments.callee);
			})
		}
			
		window.onresize = function() {
			var canvasSnow = document.getElementById('canvas_snow');
			canvasSnow.width = window.innerWidth;
			canvasSnow.height = window.innerHeight;
		}
		
		img.onload = function() {
			startSakura();
		}
		
		function stopp() {
			if(staticx) {
				var child = document.getElementById("canvas_sakura");
				child.parentNode.removeChild(child);
				window.cancelAnimationFrame(stop);
				staticx = false;
			} else {
				startSakura();
			}
		}
		
		// 计时器
		function clock(){
			num++;
		}
		var timeclock=setInterval("clock()",1000);
				
	}