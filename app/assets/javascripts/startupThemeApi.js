function themeAPI(obj) {

	let primaryColor = obj.palette[0]
	let secondaryColor = obj.palette[1]
	if (!secondaryColor) {
		secondaryColor = primaryColor
	}
	// TODO all primary-text-color to palette Primary Color

	$( '.primary-text-color' ).each(function () {
	    this.style.setProperty( 'color', primaryColor, 'important' );
	});
	// for heading
	$( '.reveal section h1,h2,h3,h4,h5,h6' ).each(function () {
	    this.style.setProperty( 'color', primaryColor);
	});


	// TODO all background-color to palette Primary Color

	$('.dark-background').each(function() {
		this.style.setProperty('background-color',primaryColor,'important')
	});


	// TODO all link color to palette secondary Color
	$( '.reveal a' ).each(function () {
	    this.style.setProperty( 'color', secondaryColor);
	});

	// TODO progress bar to primary color
	$( '.reveal .progress' ).each(function () {
	    this.style.setProperty( 'color', secondaryColor);
	});

	// TODO controls to primary color
	$( '.reveal .controls' ).each(function () {
	    this.style.setProperty( 'color', secondaryColor);
	});

	// TODO color change for edit button

}