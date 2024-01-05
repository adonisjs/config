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
 * Config module eases the process of using configuration inside your AdonisJS
 * applications.
 *
 * The config files are stored inside a dedicated directory, which are loaded and cached
 * on application boot. Later you can access the values using the `dot` syntax.
 *
 * ## Access values
 *
 * 1. **Given the config file is stored as `config/app.ts` with following content**
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
 * const config = new Config(configTree)
 * config.get('app.appKey')
 * ```
 */
export class Config {
  #config: Record<any, any>

  constructor(config: Record<any, any> = {}) {
    this.#config = config
  }

  /**
   * Get a tree of config imported from the config directory
   */
  all() {
    return this.#config
  }

  /**
   * Check if config value exists for a given key
   *
   * ```ts
   * config.has('database.mysql')
   * ```
   */
  has(key: string): boolean {
    return lodash.has(this.#config, key)
  }

  /**
   * Read value from the config. Make use of the `dot notation`
   * syntax to read nested values.
   *
   * The `defaultValue` is returned when the original value
   * is `undefined`.
   *
   * ```ts
   * config.get('database.mysql')
   * ```
   */
  get<T>(key: string, defaultValue?: any): T {
    return lodash.get(this.#config, key, defaultValue)
  }

  /**
   * Define defaults for a config key. The defaults are merged
   * with the value of the config key.
   */
  defaults(key: string, value: any): void {
    const existingValue = this.get(key)
    if (existingValue !== undefined) {
      lodash.mergeWith(value, existingValue)
    }

    this.set(key, value)
  }

  /**
   * Update value for a key. No changes are made on the disk
   *
   * ```ts
   * config.set('database.host', '127.0.0.1')
   * ```
   */
  set(key: string, value: any): void {
    lodash.set(this.#config, key, value)
  }
}
