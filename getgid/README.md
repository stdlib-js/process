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

# getgid

> Return the numeric group identity of the calling process.

<section class="usage">

## Usage

```javascript
var getgid = require( '@stdlib/process/getgid' );
```

#### getgid()

Returns the numeric group identity of the calling process.

```javascript
var id = getgid();
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **only** returns an `integer` group identity on POSIX platforms. For all other platforms (e.g., Windows, browsers, and Android), the function returns `null`. 
-   See [getgid(2)][getgid].

</section>

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var getgid = require( '@stdlib/process/getgid' );

var gid = getgid();
console.log( 'gid: %d', gid );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/process/getegid`][@stdlib/process/getegid]</span><span class="delimiter">: </span><span class="description">return the effective numeric group identity of a calling process.</span>
-   <span class="package-name">[`@stdlib/process/geteuid`][@stdlib/process/geteuid]</span><span class="delimiter">: </span><span class="description">return the effective numeric user identity of a calling process.</span>
-   <span class="package-name">[`@stdlib/process/getuid`][@stdlib/process/getuid]</span><span class="delimiter">: </span><span class="description">return the numeric user identity of a calling process.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[getgid]: http://man7.org/linux/man-pages/man2/getgid.2.html

<!-- <related-links> -->

[@stdlib/process/getegid]: https://github.com/stdlib-js/process/tree/main/getegid

[@stdlib/process/geteuid]: https://github.com/stdlib-js/process/tree/main/geteuid

[@stdlib/process/getuid]: https://github.com/stdlib-js/process/tree/main/getuid

<!-- </related-links> -->

</section>

<!-- /.links -->
