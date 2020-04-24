/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyNode, TSTypeQuery, tsTypeQuery} from '@romejs/js-ast';
import {Builder} from '@romejs/js-formatter';
import {Tokens, space, word} from '../../tokens';

export default function TSTypeQuery(builder: Builder, node: AnyNode): Tokens {
  node = tsTypeQuery.assert(node);

  return [word('typeof'), space, ...builder.tokenize(node.exprName, node)];
}
