$( document ).ready( function() {
	var $leftMenu = $( '.leftHanging' );
	$leftMenu.makisu({
		selector: 'dd',
		overlap: 0.6,
		speed: 0.85
	});
	$( '.leftHanging' ).on( 'click', function() {
		$( '.leftHanging' ).makisu( 'toggle' );
	});

	var $middleMenu = $( '.frontalHanging' );
	$middleMenu.makisu({
		selector: 'dd',
		overlap: 0.6,
		speed: 0.85
	});
	$( '.frontalHanging' ).on( 'click', function() {
		$( '.frontalHanging' ).makisu( 'toggle' );
	});
});


/* Angular Stuff */
var myApp = angular.module( 'redpandatronicsApp', [ 'ngFitText', 'ui.bootstrap'] );

