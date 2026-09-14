import path from "path"
import { copyFile, mkdir } from "node:fs/promises"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { projectSlugs } from './src/data/projectSlugs'

function emitCaseStudyEntries(): Plugin {
  let outputDirectory = ''

  return {
    name: 'emit-case-study-entries',
    apply: 'build',
    configResolved(config) {
      outputDirectory = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const appEntry = path.join(outputDirectory, 'index.html')

      await Promise.all(
        projectSlugs.map(async (slug) => {
          const routeDirectory = path.join(outputDirectory, 'case-studies', slug)
          await mkdir(routeDirectory, { recursive: true })
          await copyFile(appEntry, path.join(routeDirectory, 'index.html'))
        }),
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react(), emitCaseStudyEntries()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
