/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var str2enum = require( '@stdlib/ndarray-base-dtype-str2enum' );
var resolve = require( './../../dist' );


// VARIABLES //

// List of native C types which should be supported...
var DTYPES = [
	'int8',
	'uint8',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'int64',
	'uint64',

	'float32',
	'float64',

	'complex64',
	'complex128'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolve, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the data type string associated with an ndarray data type value', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < DTYPES.length; i++ ) {
		v = str2enum( DTYPES[ i ] );
		t.strictEqual( resolve( DTYPES[ i ] ), DTYPES[ i ], 'returns expected value' );
		t.strictEqual( resolve( v ), DTYPES[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `null` if unable to resolve a data type string', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar',
		-99999999,
		-9999999999,
		-9999999999999
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( resolve( values[ i ] ), null, 'returns expected value' );
	}
	t.end();
});
