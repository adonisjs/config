/*
 * @adonisjs/config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { fsImportAll } from '@poppinss/utils'

/**
 * The config loader imports all the script files from a given directory
 * and returns their exports as a tree of objects.
 *
 * Following file extensions are considered script files.
 *
 * - .js
 * - .ts (without .d.ts)
 * - .json
 * - .cjs
 * - .mjs
 */
export class ConfigLoader {
  #appRoot: string | URL

  constructor(appRoot: string | URL) {
    this.#appRoot = appRoot
  }

  /**
   * Load config files as a tree from a given path.
   */
  load() {
    return fsImportAll(this.#appRoot, {
      ignoreMissingRoot: true,
    })
  }
}
