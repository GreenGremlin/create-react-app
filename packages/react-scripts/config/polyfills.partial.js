// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// React depends on collection types Map and Set starting in version 16.
// We will include these dependencies explicitly until specified versions of
// browsers may be targeted.
require('core-js/es6/map');
require('core-js/es6/set');

// React also depends on requestAnimationFrame in version 16 and newer.
require('raf/polyfill');
