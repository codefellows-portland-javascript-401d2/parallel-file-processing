var foo = require( '../' );
var assert = require( 'assert' );

it( 'try\'s so hard', () => {
	assert.equal( foo(), 'foo' );	
});