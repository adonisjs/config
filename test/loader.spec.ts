/*
 * @adonisjs/config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { test } from '@japa/runner'
import { fileURLToPath } from 'node:url'
import { ConfigLoader } from '../src/loader.js'

const BASE_URL = new URL('./app', import.meta.url)
const BASE_PATH = fileURLToPath(BASE_URL)

test.group('Config loader', (group) => {
  group.each.setup(({ context }) => {
    context.fs.baseUrl = BASE_URL
    context.fs.basePath = BASE_PATH
  })

  test('return empty object when config directory is missing', async ({ assert, fs }) => {
    const loader = new ConfigLoader(fs.baseUrl)
    const config = await loader.load()
    assert.deepEqual(config, {})
  })

  test('return empty object when config directory is empty', async ({ assert, fs }) => {
    const loader = new ConfigLoader(fs.baseUrl)
    const config = await loader.load()
    assert.deepEqual(config, {})
  })

  test('collect all scripts files from a directory', async ({ assert, fs }) => {
    await fs.create(
      'app.ts',
      `export default {
      loaded: true
    }`
    )
    await fs.create('server.ts', 'export const loaded = true')
    await fs.create('config.cjs', 'module.exports = { loaded: true }')
    await fs.create('main.json', '{ "loaded": true }')

    const loader = new ConfigLoader(fs.baseUrl)
    const config = await loader.load()

    assert.deepEqual(config, {
      app: { loaded: true },
      server: { loaded: true },
      config: { loaded: true },
      main: { loaded: true },
    })
  })
})
