/*
 * @adonisjs/config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { getDirname } from '@poppinss/utils'

import { Config } from '../src/config.js'

const dirname = getDirname(import.meta.url)

test.group('Config', () => {
  test('update in-memory config value', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    config.set('app.logger', { driver: 'memory' })
    assert.deepEqual(config.get('app.logger'), { driver: 'memory' })
  })

  test('merge defaults with existing user defaults', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    config.defaults('app.logger', { filePath: dirname, driver: 'console' })

    assert.deepEqual(config.get('app.logger'), {
      filePath: dirname,
      driver: 'file',
    })
  })

  test('merge defaults with existing user defaults when they are missing', async ({ assert }) => {
    const config = new Config({
      app: {},
    })

    config.defaults('app.logger', { filePath: dirname })

    assert.deepEqual(config.get('app.logger'), {
      filePath: dirname,
    })
  })

  test('get complete config', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    assert.deepEqual(config.all(), {
      app: {
        logger: {
          driver: 'file',
        },
      },
    })
  })

  test('get value for a key', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    assert.deepEqual(config.get('app.logger.driver'), 'file')
  })

  test('return undefined when key parent is missing', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    assert.isUndefined(config.get('app.profiler.enabled'))
  })

  test('return default value when value is missing', async ({ assert }) => {
    const config = new Config({
      app: {
        logger: {
          driver: 'file',
        },
      },
    })

    assert.deepEqual(config.get('app.profiler.enabled', true), true)
  })
})
