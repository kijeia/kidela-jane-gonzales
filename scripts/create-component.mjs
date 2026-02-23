#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

const componentName = process.argv[2]

if (!componentName) {
  console.error('❌ Please provide a component name.')
  process.exit(1)
}

const basePath = join('components', componentName)

if (existsSync(basePath)) {
  console.error('❌ Component already exists.')
  process.exit(1)
}

mkdirSync(basePath, { recursive: true })

// Component file
const componentFile = `import React from "react";
import "./${componentName}.scss";

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      <h2>${componentName} Component</h2>
    </div>
  );
};

export default ${componentName};
`

writeFileSync(join(basePath, `${componentName}.tsx`), componentFile)

// CSS file
const cssFile = `.${componentName} {
  padding: 10px;
}
`

writeFileSync(join(basePath, `${componentName}.scss`), cssFile)

// Export file
const indexFile = `export { default } from "./${componentName}";
`

writeFileSync(join(basePath, 'index.ts'), indexFile)

console.log(`✅ Component "${componentName}" created successfully!`)
