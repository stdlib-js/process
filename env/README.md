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

# ENV

> Object containing the user environment.

<section class="usage">

## Usage

```javascript
var ENV = require( '@stdlib/process/env' );
```

#### ENV

`Object` containing the user environment.

```javascript
var user = ENV.USER;
// returns <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   See [environ(7)][man-environ].
-   Modifications to `ENV` are local to the process in which `ENV` is modified.
-   On Windows systems, environment variables are case insensitive.
-   In browser environments, `ENV` is an **empty** object.
-   Be careful when modifying environment variables as the environment variable object represents shared state. Accordingly, modifications affect all environment variable consumers. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ENV = require( '@stdlib/process/env' );

console.dir( ENV );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/process/argv`][@stdlib/process/argv]</span><span class="delimiter">: </span><span class="description">array containing command-line arguments passed when launching the calling process.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[man-environ]: http://man7.org/linux/man-pages/man7/environ.7.html

<!-- <related-links> -->

[@stdlib/process/argv]: https://github.com/stdlib-js/process/tree/main/argv

<!-- </related-links> -->

</section>

<!-- /.links -->
