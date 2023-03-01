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

# Process

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Process utilities.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/process@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ARGV, ENV, EXEC_PATH, NODE_VERSION, chdir, cwd, getegid, geteuid, getgid, getuid, stdin, umask } from 'https://cdn.jsdelivr.net/gh/stdlib-js/process@esm/index.mjs';
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/process@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/process.svg
[npm-url]: https://npmjs.org/package/@stdlib/process

[test-image]: https://github.com/stdlib-js/process/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/process/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/process/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/process?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/process.svg
[dependencies-url]: https://david-dm.org/stdlib-js/process/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/process/tree/deno
[umd-url]: https://github.com/stdlib-js/process/tree/umd
[esm-url]: https://github.com/stdlib-js/process/tree/esm
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
