/*
* @poppinss/request
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Src/Config' {
  /// <reference path="./src/contracts.ts" />
  import { ConfigContract as BaseContract } from '@poppinss/config/contracts'
  interface ConfigContract extends BaseContract {}

  const Config: ConfigContract
  export default Config
}
