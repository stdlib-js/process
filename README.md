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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Process

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Process utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/process
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/process' );
```

#### ns

Namespace containing process utilities.

```javascript
var proc = ns;
// returns {...}
```

The namespace contains process utilities:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`ARGV`][@stdlib/process/argv]</span><span class="delimiter">: </span><span class="description">array containing command-line arguments passed when launching the calling process.</span>
-   <span class="signature">[`chdir( path )`][@stdlib/process/chdir]</span><span class="delimiter">: </span><span class="description">change the current working directory.</span>
-   <span class="signature">[`cwd()`][@stdlib/process/cwd]</span><span class="delimiter">: </span><span class="description">return the current working directory.</span>
-   <span class="signature">[`ENV`][@stdlib/process/env]</span><span class="delimiter">: </span><span class="description">object containing the user environment.</span>
-   <span class="signature">[`EXEC_PATH`][@stdlib/process/exec-path]</span><span class="delimiter">: </span><span class="description">absolute pathname of the executable which started the current Node.js process.</span>
-   <span class="signature">[`getegid()`][@stdlib/process/getegid]</span><span class="delimiter">: </span><span class="description">return the effective numeric group identity of the calling process.</span>
-   <span class="signature">[`geteuid()`][@stdlib/process/geteuid]</span><span class="delimiter">: </span><span class="description">return the effective numeric user identity of the calling process.</span>
-   <span class="signature">[`getgid()`][@stdlib/process/getgid]</span><span class="delimiter">: </span><span class="description">return the numeric group identity of the calling process.</span>
-   <span class="signature">[`getuid()`][@stdlib/process/getuid]</span><span class="delimiter">: </span><span class="description">return the numeric user identity of the calling process.</span>
-   <span class="signature">[`NODE_VERSION`][@stdlib/process/node-version]</span><span class="delimiter">: </span><span class="description">node version.</span>
-   <span class="signature">[`stdin( [encoding,] clbk )`][@stdlib/process/read-stdin]</span><span class="delimiter">: </span><span class="description">read data from `stdin`.</span>
-   <span class="signature">[`umask( [mask,] [options] )`][@stdlib/process/umask]</span><span class="delimiter">: </span><span class="description">get/set the process mask.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/process' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/process.svg
[npm-url]: https://npmjs.org/package/@stdlib/process

[test-image]: https://github.com/stdlib-js/process/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/process/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/process/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/process?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/process.svg
[dependencies-url]: https://david-dm.org/stdlib-js/process/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/process/tree/deno
[deno-readme]: https://github.com/stdlib-js/process/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/process/tree/umd
[umd-readme]: https://github.com/stdlib-js/process/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/process/tree/esm
[esm-readme]: https://github.com/stdlib-js/process/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/process/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/process/main/LICENSE

<!-- <toc-links> -->

[@stdlib/process/argv]: https://github.com/stdlib-js/process/tree/main/argv

[@stdlib/process/chdir]: https://github.com/stdlib-js/process/tree/main/chdir

[@stdlib/process/cwd]: https://github.com/stdlib-js/process/tree/main/cwd

[@stdlib/process/env]: https://github.com/stdlib-js/process/tree/main/env

[@stdlib/process/exec-path]: https://github.com/stdlib-js/process/tree/main/exec-path

[@stdlib/process/getegid]: https://github.com/stdlib-js/process/tree/main/getegid

[@stdlib/process/geteuid]: https://github.com/stdlib-js/process/tree/main/geteuid

[@stdlib/process/getgid]: https://github.com/stdlib-js/process/tree/main/getgid

[@stdlib/process/getuid]: https://github.com/stdlib-js/process/tree/main/getuid

[@stdlib/process/node-version]: https://github.com/stdlib-js/process/tree/main/node-version

[@stdlib/process/read-stdin]: https://github.com/stdlib-js/process/tree/main/read-stdin

[@stdlib/process/umask]: https://github.com/stdlib-js/process/tree/main/umask

<!-- </toc-links> -->

</section>

<!-- /.links -->
