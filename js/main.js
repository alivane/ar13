
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		// tabs elemes
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content > section' ) );
		// current index
		this.current = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
			} );
		} );
	};

	CBPFWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = '';
			this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};

	// add to global namespace
	window.CBPFWTabs = CBPFWTabs;

})( window );


$(document).ready(function(){
	myFunction()
	function cambiarFondo(){
		$('header').css('background-image','url(img/header/foto.jpg)')//cambia el fondo
		$('header a').html('<h1>Primer titulo</h1>')//aqui van los titulos
	}
	function cambiarFondo1(){
		$('header').css('background-image','url(img/header/gwen.jpg)')//cambia el fondo1
		$('header a').html('<h1>segundo titulo</h1>')
	}
	function cambiarFondo2(){
		$('header').css('background-image','url(img/header/crespita.jpg)')//cambia el fondo2
		$('header a').html('<h1>Tercero titulo</h1>')
	}
	var nuevoFondo;
	function myFunction(){
		nuevoFondo = setInterval(cambiarFondo,10000);
		nuevoFondo = setInterval(cambiarFondo1,20000);
		nuevoFondo = setInterval(cambiarFondo2,30000);
	}
});

$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});

/*scrolling*/


$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#loading').show();

			// Uncomment this AJAX call to test it
			/*
			$.ajax({
				url: 'get-post.php',
				dataType: 'html',
				success: function(html) {
					$('#posts').append(html);
					$('#loading').hide();
				}
			});
			*/

			$('#posts').append(randomPost());
			$('#loading').hide();
		}
	});
});

// Generate a random post
/*function randomPost() {
	// Paragraphs that will appear in the post
	var paragraphs = [
		'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae suscipit arcu. Praesent pretium orci neque, non egestas massa suscipit non. In urna ligula, pretium ac magna in, consectetur venenatis dui. Etiam id commodo neque, vel semper nunc. Vivamus porttitor condimentum pulvinar. Quisque et consequat mi. Suspendisse luctus, quam in dapibus venenatis, velit erat malesuada lacus, dapibus tincidunt neque ex vitae leo. Suspendisse fermentum sit amet urna eu dignissim. Curabitur vel nibh quis justo volutpat porttitor et tempus sem.</p>',
		'<p>In a luctus purus, in tempus mi. Integer vulputate tincidunt arcu quis aliquet. Maecenas sollicitudin nec nisi sit amet dictum. Curabitur sagittis nulla id sem vulputate, eget blandit nibh ullamcorper. Nam feugiat elementum pharetra. Vestibulum a purus eget mi mattis tincidunt a sed felis. Sed pretium dignissim elementum. Cras est arcu, posuere et justo in, vehicula rutrum elit. Phasellus dictum risus libero, non cursus neque faucibus a. Nunc dignissim at purus vitae condimentum. Curabitur in libero mi.</p>',
		'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tristique nibh, sed congue ligula. Curabitur eu porttitor tellus. Aliquam eu mollis tortor. Donec tortor sapien, molestie eu turpis vel, ultrices pulvinar orci. Aenean sagittis sem sit amet viverra maximus. Morbi id enim ipsum. Curabitur luctus placerat erat ut volutpat. In quis eros mattis, rutrum neque ut, malesuada neque.</p>',
		'<p>Integer erat eros, vestibulum at tortor vitae, sollicitudin finibus est. Aliquam ornare, elit nec gravida sagittis, sapien nibh elementum felis, eu eleifend eros lectus non mi. Nulla vel nisl scelerisque, consectetur nibh vel, malesuada lacus. Nam lobortis accumsan nisl consequat dictum. Praesent eget lobortis lorem. Ut sed ultrices enim. Nam nec ultricies felis.</p>',
		'<p>Donec hendrerit dolor id auctor ullamcorper. Curabitur ut mauris dolor. Quisque vitae cursus eros, ac rutrum sem. Aenean in turpis turpis. Fusce sit amet libero id massa dictum fermentum at eget arcu. Vestibulum eget blandit urna. In eu tristique augue. Phasellus augue risus, porttitor vel arcu nec, tincidunt laoreet tellus. Nam ornare leo dapibus ipsum dictum interdum.</p>',
		'<p>Nulla molestie porttitor justo vitae pharetra. Proin non convallis lacus, eget malesuada metus. Duis aliquam eu massa molestie rhoncus. Vestibulum a malesuada nulla. Morbi at libero tempus, hendrerit quam vitae, auctor eros. Vivamus tincidunt enim a est tincidunt, sed fringilla erat placerat. Nulla cursus, eros sed posuere sagittis, dui est lobortis tellus, id dapibus dui sem eget enim. Vestibulum eleifend lacus velit, ut suscipit nisi bibendum at. Nulla facilisi. Aenean luctus tellus eget nisi vestibulum, eget interdum lectus efficitur.</p>',
		'<p>Quisque facilisis aliquet dui, ut blandit odio vulputate et. Ut ac nisl turpis. Pellentesque scelerisque massa sit amet ipsum commodo cursus. Aenean eget ante et neque gravida tempor. Phasellus aliquam, purus quis malesuada vestibulum, sem mi cursus justo, a convallis purus dolor non lorem. Nunc dapibus vehicula nisi, eget egestas tellus lacinia vel. Nullam nisl ipsum, vehicula dignissim feugiat eu, semper nec arcu. Duis porttitor ut ex eget commodo. Curabitur accumsan diam ac euismod tincidunt. Cras dui urna, volutpat quis vehicula vitae, rhoncus a lacus. Curabitur ut purus aliquet, venenatis felis in, laoreet massa. Nullam lobortis sollicitudin aliquam. Quisque nec nisl eu sem vulputate venenatis. Proin sagittis erat sit amet sem vestibulum vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'
	];

	// Shuffle the paragraphs
	for (var i = paragraphs.length - 1; !!i; --i) {
		var j = Math.floor(Math.random() * i);
		var p = paragraphs[i];
		paragraphs[i] = paragraphs[j];
		paragraphs[j] = p;
	}

	// Generate the post
	var post = '<li>';
	post += '<article>';
	post += '<header><h1>Random Article!</h1></header>';
	post += paragraphs.join('');
	post += '</article>';
	post += '</li>';

	return post;
}
*/
//inicio de comentarios
function search(){
	var box = document.getElementsByClassName("mediabox");
	var input = document.getElementById("buscar-input").value.toLowerCase();
	var text = "";
	var found=false;
	var compareWith="";
	// Recorremos los box 
	for (var i = 0; i < box.length; i++) {

		text = box[i].getElementsByTagName("h3");
		found = false;
		// Recorremos los textos
		for (var j = 0; j < text.length && !found; j++) {

			compareWith = text[j].innerHTML.toLowerCase().replace(/í/gi,"i");
			// Buscamos el texto en el contenido
			if (input.length == 0 || (compareWith.indexOf(input) > -1)) {
				found = true;

			}
		}
			if(found) {
				box[i].style.display = '';

			} else {
				// si no ha encontrado ninguna coincidencia, no muestra nada
				box[i].style.display = 'none';


			}

		}
}


//termino de comentario
//video
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	fjs.parentNode.insertBefore(js,fjs);}
}(document, 'script', 'twitter-wjs');