import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUseful() as any,
  ],
  shortcuts: [
    ['btn', 'py-2 px-4 font-semibold rounded-lg shadow-md'],
    ['btn-green', 'text-white bg-green-500 hover:bg-green-700'],
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
    [/^btn-expand-(.*)$/, ([, c]) => `hover-(bg-black text-(${c} xl)) bg-${c}-400 text-${c}-100 btn transition duration-350 b-(~ ${c})`],
  ],
  separators: ['_', '-', ':'],
})
