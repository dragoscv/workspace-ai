---
mode: agent
---
I want you to carefully clean and organize this project structure. Please follow these guidelines:

## 🎯 ANALYSIS PHASE (Required First)
1. **Examine the current project structure** - List all files in root directory
2. **Identify project type** (Next.js, React, Node.js, Python, etc.) and tech stack
3. **Check for existing organization patterns** (docs/, scripts/, deployment/, etc.)
4. **Analyze file relationships** - Don't break dependencies or imports

## 🔍 SAFE IDENTIFICATION (What to Clean)

### Files to REMOVE (Only if truly unnecessary):
- **Test artifacts**: test-*.js, demo-*.js, quick-test.*, verify-*.js
- **Build artifacts**: *.log, *.tmp, *.cache, output.*
- **Backup files**: *.bak, *.old, *.disabled, *.backup
- **Duplicate configs**: Multiple ESLint configs, PostCSS configs, etc.
- **Lock file duplicates**: Keep project's primary lock file
- **Environment duplicates**: Multiple .env.* files (keep .env.example, .env.production)

### Files to ORGANIZE (Move to proper directories):
- **Documentation**: *_REPORT.md, *_STATUS.md, *_GUIDE.md → docs/reports/
- **Deployment configs**: k8s-*.yaml, docker-compose.*, *.dockerfile → deployment/
- **Scripts**: Deployment scripts, startup scripts → deployment/ or scripts/
- **System docs**: Recovery plans, architecture docs → docs/

### Files to NEVER TOUCH:
- **Core configs**: package.json, tsconfig.json, next.config.js, vite.config.js
- **Framework files**: app/, src/, components/, pages/
- **Git files**: .gitignore, .github/
- **License & README**: LICENSE, README.md, CHANGELOG.md
- **Active dependencies**: node_modules/, .next/, dist/, build/

## ⚠️ SAFETY RULES

### Before removing ANY file:
1. **Check imports/references** - Search codebase for file usage
2. **Verify it's not in package.json scripts**
3. **Confirm it's not imported by other files**
4. **Check if it's referenced in configs**

### Before moving ANY file:
1. **Check relative path references**
2. **Update import statements if needed**
3. **Verify build/deployment scripts still work**

## 🎯 EXECUTION STEPS
1. **List current structure**: Show me what's in the root directory
2. **Categorize files**: Group files by type and purpose
3. **Safety check**: Verify each file's usage before action
4. **Create directories**: Make organized folder structure
5. **Move files**: Relocate files to proper directories
6. **Remove safely**: Only delete confirmed unnecessary files
7. **Update references**: Fix any broken imports/paths
8. **Verify**: Test that project still builds/runs
9. **Document**: Create cleanup summary

Please be EXTREMELY careful - only remove/move files you're 100% certain are safe to change. When in doubt, ask me first.