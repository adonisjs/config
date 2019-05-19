/*
* @poppinss/config
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/// <reference path="./src/contracts.ts" />

declare module '@ioc:Adonis/Src/Config' {
  import { ConfigContract as BaseContract } from '@poppinss/config/contracts'
  export interface ConfigContract extends BaseContract {}

  const Config: ConfigContract
  export default Config
}
