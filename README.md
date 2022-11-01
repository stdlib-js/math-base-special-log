<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the base `b` [logarithm][logarithm].

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-log
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var log = require( '@stdlib/math-base-special-log' );
```

#### log( x, b )

Computes the base `b` logarithm of `x`.

```javascript
var v = log( 100.0, 10.0 );
// returns 2.0

v = log( 16.0, 2.0 );
// returns 4.0

v = log( 5.0, 1.0 );
// returns Infinity
```

For negative `x` or `b`, the [logarithm][logarithm] is **not** defined.

```javascript
var v = log( -4.0, 1.0 );
// returns NaN

v = log( 2.0, -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var log = require( '@stdlib/math-base-special-log' );

var b;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    b = round( randu() * 5.0 );
    console.log( 'log( %d, %d ) = %d', x, b, log( x, b ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">natural logarithm.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log10`][@stdlib/math/base/special/log10]</span><span class="delimiter">: </span><span class="description">common logarithm (base ten).</span>
-   <span class="package-name">[`@stdlib/math/base/special/log1p`][@stdlib/math/base/special/log1p]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of 1+x.</span>
-   <span class="package-name">[`@stdlib/math/base/special/log2`][@stdlib/math/base/special/log2]</span><span class="delimiter">: </span><span class="description">binary logarithm (base 2).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-log.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-log

[test-image]: https://github.com/stdlib-js/math-base-special-log/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-log/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-log/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-log?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-log.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-log/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-log/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-log/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-log/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-log/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-log/main/LICENSE

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math-base-special-exp

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln

[@stdlib/math/base/special/log10]: https://github.com/stdlib-js/math-base-special-log10

[@stdlib/math/base/special/log1p]: https://github.com/stdlib-js/math-base-special-log1p

[@stdlib/math/base/special/log2]: https://github.com/stdlib-js/math-base-special-log2

<!-- </related-links> -->

</section>

<!-- /.links -->
