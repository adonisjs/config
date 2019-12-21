/*
* @adonisjs/config
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Core/Config' {
  export interface ConfigContract {
    /**
     * Get value for a key from the config store
     */
    get (key: string, defaultValue?: any): any

    /**
     * Merge values for a key with the default values
     */
    merge (key: string, defaultValues: object, customizer?: Function): any

    /**
     * Set value for a key
     */
    set (key: string, value: any): void

    /**
     * Define defaults that will be merged with the user defined config.
     */
    defaults (key: string, value: any): void
  }

  const Config: ConfigContract
  export default Config
}
