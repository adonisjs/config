/*
 * @adonisjs/config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import lodash from '@poppinss/utils/lodash'

/**
 * Config module eases the process of using configuration inside your AdonisJs
 * applications.
 *
 * The config files are stored inside a dedicated directory, which are loaded and cached
 * on application boot. Later you can access the values using the `dot` syntax.
 *
 * ## Access values
 *
 * 1. **Given the config file is stored as `config/app.js` with following content**
 *
 * ```js
 * module.exports = {
 *  appKey: ''
 * }
 * ```
 *
 * 2. **You access the appKey as follows**
 *
 * ```js
 * Config.get('app.appKey')
 * ```
 *
 * **NOTE:**
 * The `get` method doesn't raise runtime exceptions when top level objects are missing.
 */
export class Config {
  #config: Record<any, any>

  constructor(config: Record<any, any> = {}) {
    this.#config = config
  }

  /**
   * Get all the config files as a tree of key-value pair
   */
  all() {
    return this.#config
  }

  /**
   * Read value from the config. Make use of the `dot notation`
   * syntax to read nested values.
   *
   * The `defaultValue` is returned when original value is `undefined`.
   *
   * ```ts
   * Config.get('database.mysql')
   * ```
   */
  get<T extends any>(key: string, defaultValue?: any): T {
    return lodash.get(this.#config, key, defaultValue)
  }

  /**
   * Define the defaults for the a given key. If the value for the given
   * key exists, then it will be merged with the defaults.
   */
  defaults(key: string, value: any): void {
    const existingValue = this.get(key)
    if (existingValue !== undefined) {
      lodash.mergeWith(value, existingValue)
    }

    this.set(key, value)
  }

  /**
   * Update in memory value of the pre-loaded config
   *
   * ```ts
   * Config.set('database.host', '127.0.0.1')
   * ```
   */
  set(key: string, value: any): void {
    lodash.set(this.#config, key, value)
  }
}
