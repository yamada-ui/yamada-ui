import assert from "node:assert/strict"
import test from "node:test"

import {
  listChangedCatalogDeps,
  listChangedReleaseDeps,
  shouldCreateDependencyChangeset,
} from "./generate-dependency-changesets.mjs"

test("listChangedReleaseDeps ignores devDependencies changes", () => {
  const baseManifest = {
    dependencies: { react: "^19.0.0" },
    devDependencies: { "@types/yamljs": "^0.2.33" },
  }
  const headManifest = {
    dependencies: { react: "^19.0.0" },
    devDependencies: { "@types/yamljs": "^0.2.34" },
  }

  assert.deepEqual(listChangedReleaseDeps(baseManifest, headManifest), [])
})

test("shouldCreateDependencyChangeset returns true for release dependency updates", () => {
  const baseManifest = { dependencies: { commander: "^13.0.0" } }
  const headManifest = { dependencies: { commander: "^14.0.0" } }

  assert.equal(
    shouldCreateDependencyChangeset({
      pkg: "cli",
      baseManifest,
      headManifest,
      changedCatalogDeps: new Set(),
    }),
    true,
  )
})

test("shouldCreateDependencyChangeset ignores react special-case direct changes", () => {
  const baseManifest = { dependencies: { "lucide-react": "1.5.0" } }
  const headManifest = { dependencies: { "lucide-react": "1.6.0" } }

  assert.equal(
    shouldCreateDependencyChangeset({
      pkg: "react",
      baseManifest,
      headManifest,
      changedCatalogDeps: new Set(),
    }),
    false,
  )
})

test("shouldCreateDependencyChangeset ignores catalog updates used only in devDependencies", () => {
  const baseManifest = {
    devDependencies: { react: "catalog:" },
    peerDependencies: { react: ">=19" },
  }
  const headManifest = {
    devDependencies: { react: "catalog:" },
    peerDependencies: { react: ">=19" },
  }

  assert.equal(
    shouldCreateDependencyChangeset({
      pkg: "utils",
      baseManifest,
      headManifest,
      changedCatalogDeps: new Set(["react"]),
    }),
    false,
  )
})

test("shouldCreateDependencyChangeset detects catalog updates used in release sections", () => {
  const baseManifest = {
    dependencies: { commander: "catalog:" },
  }
  const headManifest = {
    dependencies: { commander: "catalog:" },
  }

  assert.equal(
    shouldCreateDependencyChangeset({
      pkg: "cli",
      baseManifest,
      headManifest,
      changedCatalogDeps: new Set(["commander"]),
    }),
    true,
  )
})

test("listChangedCatalogDeps tracks changed catalog entries structurally", () => {
  const baseWorkspaceYaml = `packages:\n  - \"packages/**\"\ncatalog:\n  react: ^19.2.3\n  \"@types/yamljs\": ^0.2.33\nminimumReleaseAge: 1440\n`
  const headWorkspaceYaml = `packages:\n  - \"packages/**\"\ncatalog:\n  react: ^19.2.4\n  \"@types/yamljs\": ^0.2.34\nminimumReleaseAge: 1440\n`

  assert.deepEqual(
    [...listChangedCatalogDeps(baseWorkspaceYaml, headWorkspaceYaml)].sort(),
    ["@types/yamljs", "react"],
  )
})
