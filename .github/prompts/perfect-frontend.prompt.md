---
mode: agent
---
# Perfect Frontend Design

## Description
Comprehensive frontend design analysis, planning, and systematic implementation using modern best practices. Creates complete design systems, wireframes, and user flows while fixing all design gaps through a structured todo-driven loop until perfection is achieved.

## Usage
Use this prompt to analyze and perfect all aspects of frontend design, from wireframes to implementation, ensuring complete design consistency and user experience excellence.

## Prompt
PERFECT FRONTEND: [project-name]

Analyze project design comprehensively, research latest best practices, create complete design system and wireframes, then systematically fix all frontend design issues until perfect.

## Context
This prompt activates:
- Complete frontend design analysis and gap identification
- Microsoft Docs MCP and web research for latest design practices
- Comprehensive design system creation with patterns and guidelines
- Wireframe creation for all pages, sections, and components
- User flow analysis and navigation optimization
- Todo-driven systematic implementation loop
- Continuous validation and improvement until all issues resolved
- Memory-persistent design decisions and progress tracking

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY
1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.

## Workflow Sequence
```
1. PERFECT FRONTEND: [project-name]
   └── Runs comprehensive analysis and creates master plan
   └── Enters systematic todo-driven implementation loop
   └── Continues until all design issues are resolved
2. VALIDATE DESIGN: [project-name] (final validation)
3. SAVE STATE: [project-name] (preserve design system)
```

## Examples
```
PERFECT FRONTEND: TaskMaster
```

```
PERFECT FRONTEND: EcommerceHub user interface
```

```
PERFECT FRONTEND: DashboardApp admin panel
```

## Implementation Strategy

### Phase 1: Memory-First Design Discovery
```javascript
// Check existing design context
await mcp_memoraimcp_recall({
  query: "design_system wireframes [project] ui_patterns"
});

await mcp_memoraimcp_recall({
  query: "user_flows navigation [project] design_gaps"
});

await mcp_memoraimcp_recall({
  query: "frontend_specs design_requirements [project]"
});
```

### Phase 2: Comprehensive Design Research
**Microsoft Docs Integration:**
```javascript
// Research official Microsoft design guidance
await mcp_microsoftdocs_microsoft_docs_search({
  query: "modern web design patterns user interface best practices"
});

await mcp_microsoftdocs_microsoft_docs_search({
  query: "responsive design accessibility guidelines WCAG 2.1"
});

await mcp_microsoftdocs_microsoft_docs_search({
  query: "design systems component libraries enterprise applications"
});
```

**Latest Industry Best Practices:**
```javascript
// Get cutting-edge design trends and practices
await mcp_cautaimcp_search_web({
  query: "frontend design best practices 2025 modern UI UX trends"
});

await mcp_cautaimcp_search_web({
  query: "design system examples 2025 component libraries"
});

await mcp_cautaimcp_search_web({
  query: "user experience patterns navigation design 2025"
});
```

### Phase 3: Complete Design Analysis & Todo Planning

#### **Design System Analysis**
```javascript
// Create comprehensive todo list for design system
await manage_todo_list({
  operation: "write",
  todoList: [
    {
      id: 1,
      title: "Analyze Current Design State",
      description: "Complete audit of existing UI components, styles, patterns, and design inconsistencies",
      status: "not-started"
    },
    {
      id: 2,
      title: "Research Design Best Practices",
      description: "Gather latest design trends, accessibility guidelines, and industry standards using MCP research",
      status: "not-started"
    },
    {
      id: 3,
      title: "Create Design Specifications",
      description: "Define complete design system: colors, typography, spacing, components, patterns",
      status: "not-started"
    },
    {
      id: 4,
      title: "Design All Wireframes",
      description: "Create wireframes for every page, section, component, and user flow scenario",
      status: "not-started"
    },
    {
      id: 5,
      title: "Map Complete User Flows",
      description: "Document all possible user journeys, navigation paths, and interaction patterns",
      status: "not-started"
    },
    {
      id: 6,
      title: "Implement Design System",
      description: "Create design tokens, CSS variables, component library with consistent styling",
      status: "not-started"
    },
    {
      id: 7,
      title: "Build All Components",
      description: "Implement every UI component according to wireframes and design specifications",
      status: "not-started"
    },
    {
      id: 8,
      title: "Perfect All Pages",
      description: "Implement complete page layouts with responsive design and accessibility",
      status: "not-started"
    },
    {
      id: 9,
      title: "Fix Navigation Systems",
      description: "Implement seamless navigation with proper states, transitions, and error handling",
      status: "not-started"
    },
    {
      id: 10,
      title: "Validate Complete Design",
      description: "Test all flows, check accessibility, validate responsive behavior across devices",
      status: "not-started"
    }
  ]
});
```

### Phase 4: Systematic Implementation Loop

#### **Loop Strategy: Todo-Driven Perfection**
The agent will work through each todo systematically:

1. **Mark todo as in-progress**
2. **Execute the specific design task**
3. **Validate the implementation**
4. **Mark todo as completed**
5. **Move to next todo**
6. **Continue until all todos are completed**

#### **Design System Creation**

**Color System:**
```css
:root {
  /* Primary Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Semantic Colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #06b6d4;
  
  /* Neutral Scale */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-900: #111827;
}
```

**Typography System:**
```css
:root {
  /* Font Families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

**Spacing System:**
```css
:root {
  /* Spacing Scale */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
}
```

#### **Component Specifications**

**Button Component:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

// Styling specifications
const buttonStyles = {
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2',
  variants: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-200',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-200',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-200'
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
};
```

#### **Wireframe Templates**

**Page Wireframes Required:**
1. **Landing/Home Page**
   - Hero section with CTA
   - Feature highlights
   - Navigation header
   - Footer with links

2. **Authentication Pages**
   - Login form with validation
   - Registration with steps
   - Password reset flow
   - Success/error states

3. **Dashboard/Main App**
   - Sidebar navigation
   - Main content area
   - User profile section
   - Notifications area

4. **Content Pages**
   - List views with filtering
   - Detail views with actions
   - Forms with validation
   - Empty states and loading

5. **Error Pages**
   - 404 Not Found
   - 500 Server Error
   - Network Error
   - Maintenance mode

#### **User Flow Mapping**

**Complete Flow Documentation:**
```markdown
# User Flow: Authentication
1. Landing Page → "Sign In" button
2. Login Form → Email/Password fields
3. Validation → Error states or success
4. Success → Redirect to dashboard
5. Dashboard → Welcome state for new users

# User Flow: Main Application
1. Dashboard → Overview of user data
2. Navigation → Access to all features
3. Feature Pages → Specific functionality
4. Actions → Create, edit, delete operations
5. Feedback → Success/error notifications

# User Flow: Error Handling
1. Network Error → Retry button with feedback
2. Validation Error → Inline error messages
3. Server Error → Graceful error page
4. Not Found → Helpful 404 with navigation
```

### Phase 5: Implementation Validation & Loop Control

#### **Continuous Validation:**
```javascript
// After each todo completion, validate the implementation
const validateImplementation = async (todoId) => {
  // Check component functionality
  // Validate responsive design
  // Test accessibility compliance
  // Verify design system consistency
  // Test user flows and navigation
  
  if (validationFails) {
    // Add specific fix todos and continue loop
    await addFixTodos(issuesFound);
    return false;
  }
  return true;
};
```

#### **Loop Continuation Logic:**
```javascript
// The agent continues until all criteria are met:
const completionCriteria = {
  allTodosCompleted: true,
  noDesignInconsistencies: true,
  allFlowsWorking: true,
  accessibilityCompliant: true,
  responsiveDesignPerfect: true,
  wireframesImplemented: true,
  designSystemComplete: true
};
```

### Phase 6: Comprehensive Design Deliverables

#### **Design System Documentation:**
1. **Color Palette**: Complete color system with usage guidelines
2. **Typography**: Font hierarchy and text styles
3. **Spacing**: Consistent spacing scale and usage
4. **Components**: Library of all UI components with variants
5. **Icons**: Icon system and usage guidelines
6. **Layout**: Grid system and responsive breakpoints

#### **Wireframe Collection:**
1. **Low-fidelity wireframes** for all pages and components
2. **High-fidelity mockups** with real content and styling
3. **Interactive prototypes** showing user flows and transitions
4. **Responsive wireframes** for mobile, tablet, and desktop

#### **Implementation Guidelines:**
1. **Component usage patterns** and best practices
2. **Accessibility implementation** checklist
3. **Responsive design** breakpoints and behavior
4. **Animation and transition** specifications
5. **Performance optimization** guidelines

## Advanced Design Considerations

### **Accessibility (WCAG 2.1 AA Compliance)**
- Color contrast ratios (minimum 4.5:1)
- Keyboard navigation support
- Screen reader compatibility
- Focus management and indicators
- Alternative text for images
- Semantic HTML structure

### **Responsive Design**
```css
/* Mobile First Approach */
.component {
  /* Mobile styles (320px+) */
}

@media (min-width: 640px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

@media (min-width: 1280px) {
  /* Large desktop styles */
}
```

### **Performance Optimization**
- Image optimization and lazy loading
- CSS and JavaScript code splitting
- Critical CSS inlining
- Font loading optimization
- Animation performance (60fps)

### **Modern CSS Features**
```css
/* CSS Grid for layouts */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
}

/* CSS Custom Properties for theming */
.theme-dark {
  --color-bg: var(--color-gray-900);
  --color-text: var(--color-gray-100);
}

/* Container queries for responsive components */
@container (min-width: 300px) {
  .card {
    flex-direction: row;
  }
}
```

## Quality Assurance Checklist

### **Design System Validation**
- [ ] All colors follow accessibility contrast requirements
- [ ] Typography scale is consistent and readable
- [ ] Spacing system is applied consistently
- [ ] Components have all necessary variants and states
- [ ] Design tokens are properly implemented

### **Wireframe Implementation**
- [ ] Every page has corresponding wireframe
- [ ] All wireframes are implemented accurately
- [ ] Responsive behavior matches wireframe specifications
- [ ] Interactive elements function as designed
- [ ] Content hierarchy follows wireframe structure

### **User Flow Testing**
- [ ] All navigation paths work correctly
- [ ] Form submissions and validations function properly
- [ ] Error states and loading states are implemented
- [ ] User feedback and notifications work
- [ ] Authentication and authorization flows complete

### **Cross-browser Compatibility**
- [ ] Chrome/Chromium browsers
- [ ] Firefox
- [ ] Safari (including mobile Safari)
- [ ] Edge
- [ ] Mobile browsers (iOS/Android)

### **Performance Metrics**
- [ ] Page load times under 3 seconds
- [ ] First Contentful Paint under 1.5 seconds
- [ ] Largest Contentful Paint under 2.5 seconds
- [ ] Cumulative Layout Shift under 0.1
- [ ] First Input Delay under 100ms

## References
- #file:E:/GitHub/workspace-ai/.github/instructions/initial.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/mcp-usage.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/external-integrations.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/validation-feedback-system.instructions.md
- #file:E:/GitHub/workspace-ai/.github/instructions/multi-agent-coordination.instructions.md

## Expected Output
- Complete design system with specifications and implementation
- Comprehensive wireframe collection for all pages and components
- Fully implemented frontend with perfect design consistency
- All user flows working without errors or design breaks
- Responsive design working across all device sizes
- Accessibility compliance (WCAG 2.1 AA) verified
- Performance optimized frontend meeting modern standards
- Design documentation and guidelines for future development
- Todo-driven implementation log showing systematic completion
- Memory storage of all design decisions and patterns

## Success Criteria
- 100% wireframe coverage for all pages and components
- Zero design inconsistencies across the entire application
- All user flows and navigation paths working flawlessly
- Complete design system implemented and documented
- Accessibility compliance verified and tested
- Responsive design perfect across all device breakpoints
- Performance metrics meeting modern web standards
- Todo list completion with systematic validation
- Design pattern documentation for future maintenance
- User experience excellence validated through testing