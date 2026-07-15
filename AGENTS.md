<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Architecture

This project strictly follows a feature-sliced architecture. When creating new components, pages, or features, you **MUST** read and adhere to the guidelines specified in the `feature-sliced-architecture` skill.

You can find the full rules in `.agents/skills/feature-sliced-architecture/SKILL.md`. Always trigger or read this skill before restructuring files or building new features.

# File Naming Convention

This project strictly enforces **100% kebab-case** for ALL files and directories, without exception.

- Components: `hero.tsx` (NOT `Hero.tsx`)
- Hooks: `use-auth.ts`
- Utilities/Config: `home.config.ts`
- Directories: `ui/components/`

Do not use PascalCase or camelCase for file names. The exported symbol inside the file (e.g. `export function Hero()`) may still use PascalCase/camelCase — only the **filename** must be kebab-case.
