---
mode: agent
---
# Reorganize Project Structure

## Description
Comprehensive project structure analysis and reorganization according to modern best practices. Analyzes file/folder organization, identifies duplicates, fixes naming conventions, and restructures the project using latest industry standards from Microsoft Docs and web research.

## Usage
Use this prompt when your project structure needs cleanup, standardization, or modernization according to current best practices.

## Prompt
REORGANIZE PROJECT: [project-name]

Analyze project structure, identify organization issues, duplicates, and naming problems. Reorganize according to modern best practices and fix any issues caused by reorganization.

## Context
This prompt activates:
- Deep project structure analysis and best practices research
- Microsoft Docs MCP integration for official guidance
- Web search for latest industry standards and conventions
- Automated file/folder duplicate detection and cleanup
- Intelligent naming convention standardization
- Structure reorganization with dependency tracking
- Automated fixing of broken imports and references
- Validation and testing of reorganized structure

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

## Workflow Sequence
```
1. REORGANIZE PROJECT: [project-name]
2. VALIDATE STRUCTURE: [project-name] (verify reorganization)
3. FIX ISSUE: broken imports/references in [project-name] (if needed)
4. SETUP TESTING: structure validation for [project-name]
```

## Examples
```
REORGANIZE PROJECT: TaskMaster
```

```
REORGANIZE PROJECT: EcommerceHub React application
```

```
REORGANIZE PROJECT: NodeAPI backend service
```

## Analysis & Reorganization Phases

### Phase 1: Memory-First Context Discovery
- Check existing structure: `mcp_memoraimcp_recall("project_structure organization [project]")`
- Check previous reorganization: `mcp_memoraimcp_recall("reorganization refactor structure")`
- Check best practices: `mcp_memoraimcp_recall("best_practices file_organization")`
- Check project type: `mcp_memoraimcp_recall("[project] type stack framework")`

### Phase 2: Project Structure Analysis
**Current State Assessment:**
- Map complete file and folder structure
- Identify project type (React, Node.js, Next.js, Vue, Angular, etc.)
- Detect framework-specific patterns and conventions
- Catalog all files by type, purpose, and relationships
- Identify configuration files and their proper locations

**Issue Detection:**
- Duplicate files with different names or locations
- Incorrectly named files and folders
- Files in wrong directories
- Missing standard directories
- Inconsistent naming conventions
- Orphaned or unused files
- Improper separation of concerns

### Phase 3: Best Practices Research
**Microsoft Docs Integration:**
```javascript
// Research official Microsoft guidance
await mcp_microsoftdocs_microsoft_docs_search({
  query: "project structure best practices [framework] organization"
});

await mcp_microsoftdocs_microsoft_docs_search({
  query: "folder naming conventions [language] [framework]"
});

await mcp_microsoftdocs_microsoft_docs_search({
  query: "file organization patterns enterprise applications"
});
```

**Web Research for Latest Standards:**
```javascript
// Get current industry best practices
await mcp_cautaimcp_search_web({
  query: "[framework] project structure best practices 2025"
});

await mcp_cautaimcp_search_web({
  query: "modern [language] folder organization conventions"
});

await mcp_cautaimcp_search_web({
  query: "enterprise [project-type] file structure standards"
});
```

### Phase 4: Structure Classification & Standards

#### **Frontend Applications (React/Vue/Angular)**
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components
│   ├── forms/           # Form components
│   └── layout/          # Layout components
├── pages/               # Page components (Next.js) or views/
├── hooks/               # Custom React hooks
├── services/            # API services and external integrations
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
├── styles/              # CSS/SCSS files
├── assets/              # Static assets (images, fonts, etc.)
├── contexts/            # React contexts
├── store/               # State management (Redux, Zustand, etc.)
└── __tests__/           # Test files
```

#### **Backend Applications (Node.js/Express)**
```
src/
├── controllers/         # Request handlers
├── models/              # Data models and schemas
├── services/            # Business logic
├── middleware/          # Express middleware
├── routes/              # API routes
├── utils/               # Utility functions
├── types/               # TypeScript types
├── config/              # Configuration files
├── validators/          # Input validation schemas
├── database/            # Database configurations and migrations
└── __tests__/           # Test files
```

#### **Full-Stack Applications**
```
apps/                    # Application packages
├── web/                 # Frontend application
├── api/                 # Backend API
└── mobile/              # Mobile app (if applicable)
packages/                # Shared packages
├── ui/                  # Shared UI components
├── utils/               # Shared utilities
├── types/               # Shared types
└── config/              # Shared configurations
libs/                    # Internal libraries
docs/                    # Documentation
tools/                   # Build tools and scripts
```

#### **Configuration Files Location**
```
Root Level:
- package.json, tsconfig.json, .eslintrc.js
- .gitignore, README.md, LICENSE
- docker-compose.yml, Dockerfile
- .env.example, .env.local

.github/                 # GitHub workflows and templates
.vscode/                 # VS Code settings
scripts/                 # Build and deployment scripts
docs/                    # Project documentation
```

### Phase 5: Reorganization Execution

#### **Step 1: Duplicate Detection & Resolution**
- Scan for files with identical content
- Identify files with similar names serving same purpose
- Detect redundant configuration files
- Remove or consolidate duplicates based on best practices

#### **Step 2: Naming Convention Standardization**
**File Naming Standards:**
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Constants: `SCREAMING_SNAKE_CASE.ts` (e.g., `API_ENDPOINTS.ts`)
- Types: `PascalCase.types.ts` (e.g., `User.types.ts`)
- Tests: `*.test.ts` or `*.spec.ts`

**Folder Naming Standards:**
- Use lowercase with hyphens: `user-profile/`
- Or camelCase for modern projects: `userProfile/`
- Consistent approach throughout project

#### **Step 3: File Relocation & Organization**
- Move files to appropriate directories based on best practices
- Create missing standard directories
- Ensure logical grouping by functionality
- Maintain clear separation of concerns

#### **Step 4: Import/Reference Fixing**
- Update all import statements to reflect new file locations
- Fix relative import paths
- Update configuration file references
- Correct asset path references
- Update test file imports

#### **Step 5: Configuration Updates**
- Update `tsconfig.json` path mappings
- Fix build tool configurations (Webpack, Vite, etc.)
- Update linting and formatting rules
- Correct deployment scripts and CI/CD configurations

### Phase 6: Validation & Testing

#### **Structure Validation:**
- Verify all files are in correct locations
- Ensure naming conventions are consistent
- Check that no files are missing or orphaned
- Validate configuration file accuracy

#### **Functional Testing:**
- Run build process to ensure no errors
- Execute test suites to verify functionality
- Check development server startup
- Validate production build process

#### **Dependency Verification:**
- Verify all imports resolve correctly
- Check that assets load properly
- Ensure API endpoints and routes work
- Validate database connections and migrations

### Phase 7: Documentation & Guidelines

#### **Structure Documentation:**
- Create or update project structure documentation
- Document naming conventions and standards
- Provide guidelines for future file organization
- Create templates for common file types

#### **Developer Guidelines:**
- Establish folder organization rules
- Define file naming standards
- Create contribution guidelines
- Set up automated structure validation

## Common Reorganization Patterns

### **Issue: Mixed Concerns**
```
❌ Before:
src/
├── UserComponent.tsx
├── userService.ts
├── ProductComponent.tsx
├── productService.ts

✅ After:
src/
├── components/
│   ├── User.tsx
│   └── Product.tsx
└── services/
    ├── userService.ts
    └── productService.ts
```

### **Issue: Inconsistent Naming**
```
❌ Before:
src/
├── UserProfile.tsx
├── user-settings.tsx
├── User_Dashboard.tsx

✅ After:
src/components/
├── UserProfile.tsx
├── UserSettings.tsx
└── UserDashboard.tsx
```

### **Issue: Configuration Scattered**
```
❌ Before:
src/config.ts
webpack.config.js
eslint.config.js
src/utils/constants.ts

✅ After:
config/
├── webpack.config.js
├── eslint.config.js
└── constants.ts
```

## Framework-Specific Considerations

### **Next.js Applications**
- Use `app/` directory for App Router (Next.js 13+)
- Place `pages/` for Pages Router (legacy)
- `public/` for static assets
- `styles/` for global styles
- Follow Next.js file-based routing conventions

### **React Applications**
- `src/` as main source directory
- `public/` for static assets
- Component co-location patterns
- Feature-based organization for large apps

### **Node.js/Express APIs**
- MVC pattern organization
- Route-based folder structure
- Middleware organization
- Database layer separation

### **Monorepo Structures**
- Workspace organization (packages/, apps/)
- Shared library structure
- Tool and configuration sharing
- Build system optimization

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/initial.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/mcp-usage.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/external-integrations.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/validation-feedback-system.instructions.md

## Expected Output
- Complete project structure analysis report
- Detailed reorganization plan with before/after structure
- List of identified duplicates and naming issues
- Automated file movement and renaming execution
- Fixed import statements and configuration updates
- Updated documentation and developer guidelines
- Validation report confirming successful reorganization
- Best practices documentation for future maintenance
- Memory storage of reorganization decisions and patterns

## Success Criteria
- Zero duplicate files or redundant code
- 100% consistent naming conventions throughout project
- Optimal folder organization following latest best practices
- All imports and references working correctly post-reorganization
- Build and test processes functioning without errors
- Clear documentation of new structure and conventions
- Improved developer experience and code discoverability
- Automated validation rules to maintain structure integrity