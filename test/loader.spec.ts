/*
 * @adonisjs/config
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import fsExtra from 'fs-extra'
import { join } from 'node:path'
import { test } from '@japa/runner'
import { fileURLToPath } from 'node:url'
import { ConfigLoader } from '../src/loader.js'

const BASE_URL = new URL('./app', import.meta.url)
const BASE_PATH = fileURLToPath(BASE_URL)

test.group('Config loader', (group) => {
  group.each.teardown(async () => {
    await fsExtra.remove(BASE_PATH)
  })

  test('return empty object when config directory is missing', async ({ assert }) => {
    const loader = new ConfigLoader(BASE_URL)
    const config = await loader.load()
    assert.deepEqual(config, {})
  })

  test('return empty object when config directory is empty', async ({ assert }) => {
    await fsExtra.ensureDir(join(BASE_PATH, 'config'))

    const loader = new ConfigLoader(BASE_URL)
    const config = await loader.load()
    assert.deepEqual(config, {})
  })

  test('collect all scripts files from a directory', async ({ assert }) => {
    await fsExtra.outputFile(
      join(BASE_PATH, 'app.ts'),
      `export default {
      loaded: true
    }`
    )
    await fsExtra.outputFile(join(BASE_PATH, 'server.ts'), 'export const loaded = true')
    await fsExtra.outputFile(join(BASE_PATH, 'config.cjs'), 'module.exports = { loaded: true }')
    await fsExtra.outputFile(join(BASE_PATH, 'main.json'), '{ "loaded": true }')

    const loader = new ConfigLoader(BASE_URL)
    const config = await loader.load()
    assert.deepEqual(config, {
      app: { loaded: true },
      server: { loaded: true },
      config: { loaded: true },
      main: { loaded: true },
    })
  })
})
