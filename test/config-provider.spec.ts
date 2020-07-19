/*
 * @adonisjs/events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import { join } from 'path'
import { Registrar, Ioc } from '@adonisjs/fold'
import { Application } from '@adonisjs/application'

import { Config } from '../src/Config'

test.group('ConfigProvider', () => {
	test('register config provider', async (assert) => {
		const ioc = new Ioc()

		ioc.bind('Adonis/Core/Application', () => {
			return new Application(__dirname, ioc, {}, {})
		})

		const registrar = new Registrar(ioc, join(__dirname, '..'))

		await registrar.useProviders(['./providers/ConfigProvider']).registerAndBoot()

		assert.instanceOf(ioc.use('Adonis/Core/Config'), Config)
		assert.deepEqual(ioc.use('Adonis/Core/Config'), ioc.use('Adonis/Core/Config'))
		assert.deepEqual(ioc.use('Adonis/Core/Config').all(), {
			app: { appName: 'AdonisJS' },
		})
	})
})
