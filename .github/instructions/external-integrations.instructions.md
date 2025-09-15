---
applyTo: "**/*"
---

# External Integrations and Knowledge Management System

## Overview
This system provides seamless integration with external knowledge sources, project management tools, and real-time updates to ensure AI agent instructions remain current, contextually aware, and aligned with evolving project requirements.

## Memory Management - CHECK FIRST
✅ **MEMORAI MCP PRODUCTION-READY**: The memorai MCP system is fully operational and optimized for external integrations.

Before implementing integrations, ALWAYS:
1. Search memory: `mcp_memoraimcp_recall("external integrations knowledge management")`
2. Check existing: `mcp_memoraimcp_recall("project tools integration status")`
3. Verify requirements: `mcp_memoraimcp_recall("integration requirements apis")`

Store in memory using `mcp_memoraimcp_remember`:
- Integration configurations and credentials (`metadata: {entityType: 'integration_config'}`)
- External knowledge sources and sync status (`metadata: {entityType: 'knowledge_source'}`)
- Context updates and change notifications (`metadata: {entityType: 'context_update'}`)
- Adaptive organization patterns (`metadata: {entityType: 'adaptive_organization'}`)
- Performance metrics and optimization insights (`metadata: {entityType: 'integration_performance'}`)

## 🌐 Real-Time Intelligence Integration - CAUTAI MCP

✅ **CAUTAI MCP PRODUCTION-READY**: Ultra-fast external information retrieval with sub-200ms response times for real-time intelligence.

### Real-Time Research Integration
CAUTAI MCP serves as the primary real-time intelligence layer for external information gathering, providing:

- **Speed-Critical Intelligence**: Sub-200ms response times for immediate external information needs
- **Multi-Language Research**: Global market intelligence with English and Romanian language support
- **Structured Analysis**: Intelligent answer composition with confidence scoring for decision-making
- **API Integration Ready**: Designed for automated workflows and external system integration

#### Integration Architecture:
```typescript
// External Intelligence Integration Layer
class ExternalIntelligenceIntegration {
  async gatherRealTimeIntelligence(requirement: string, context: string): Promise<IntelligenceReport> {
    // Check memory for existing intelligence
    const existingIntelligence = await mcp_memoraimcp_recall(`${requirement} intelligence reports`);
    
    // Fast real-time research using CAUTAI MCP
    const realTimeData = await mcp_cautaimcp_mcp_cautai_search_web({
      query: `${requirement} latest trends 2025 ${context}`,
      fastMode: true,  // Ultra-fast for real-time needs
      maxResults: 15,
      language: "en"
    });
    
    // Generate structured intelligence report
    const structuredReport = await mcp_cautaimcp_mcp_cautai_compose_answer({
      query: `Comprehensive intelligence analysis for ${requirement} in context of ${context}`,
      results: realTimeData.results.map(r => ({
        title: r.title,
        url: r.url,
        content: r.snippet,
        relevance: r.relevanceScore
      }))
    });
    
    // Store intelligence for future reference
    await mcp_memoraimcp_remember({
      agentId: "intelligence-integration",
      content: `Real-Time Intelligence - ${requirement}: ${structuredReport.answer}. Confidence: ${structuredReport.confidence}. Sources: ${structuredReport.sources.length}`,
      metadata: {
        entityType: 'external_intelligence',
        requirement: requirement,
        context: context,
        confidence: structuredReport.confidence,
        sourceCount: structuredReport.sources.length,
        responseTime: realTimeData.searchTime,
        timestamp: new Date().toISOString()
      }
    });
    
    return {
      requirement: requirement,
      context: context,
      intelligence: structuredReport.answer,
      confidence: structuredReport.confidence,
      sources: structuredReport.sources,
      responseTime: realTimeData.searchTime,
      recommendedActions: this.extractActionableIntelligence(structuredReport.answer),
      qualityScore: this.calculateIntelligenceQuality(structuredReport)
    };
  }
}
```

### External Intelligence Use Cases:
- **Market Intelligence**: Real-time competitive analysis and market trend research
- **Technology Assessment**: Current technology trends, API changes, and framework updates
- **Compliance Monitoring**: Latest regulatory changes and compliance requirements
- **Security Intelligence**: Emerging threats, vulnerability assessments, and security updates
- **Business Intelligence**: Industry insights, best practices, and strategic opportunities

## Core Integration Components

### 1. Knowledge Source Connectors

#### Documentation Synchronization
```typescript
// integrations/knowledge-sync.ts
interface KnowledgeSource {
  id: string;
  name: string;
  type: 'confluence' | 'notion' | 'github' | 'jira' | 'slack' | 'custom';
  config: Record<string, any>;
  syncFrequency: 'realtime' | 'hourly' | 'daily' | 'weekly';
  lastSync: Date;
  status: 'active' | 'inactive' | 'error';
}

interface KnowledgeItem {
  id: string;
  sourceId: string;
  title: string;
  content: string;
  tags: string[];
  lastModified: Date;
  author: string;
  relevanceScore: number;
  instructionMappings: string[];
}

class KnowledgeSourceConnector {
  private sources: Map<string, KnowledgeSource> = new Map();
  private items: Map<string, KnowledgeItem[]> = new Map();

  async registerSource(source: KnowledgeSource): Promise<void> {
    this.sources.set(source.id, source);
    await this.validateConnection(source);
    await this.performInitialSync(source);
  }

  async syncConfluence(sourceId: string): Promise<void> {
    const source = this.sources.get(sourceId);
    if (!source || source.type !== 'confluence') return;

    const api = new ConfluenceAPI(source.config);
    
    try {
      // Sync spaces relevant to development
      const spaces = await api.getSpaces({
        spaceKeys: source.config.spaceKeys || ['DEV', 'ARCH', 'API'],
        expand: 'description,homepage'
      });

      for (const space of spaces) {
        const pages = await api.getPages(space.key, {
          expand: 'body.storage,version,ancestors'
        });

        for (const page of pages) {
          const item: KnowledgeItem = {
            id: `confluence-${page.id}`,
            sourceId,
            title: page.title,
            content: this.extractTextFromConfluenceContent(page.body.storage.value),
            tags: this.extractTagsFromContent(page.title, page.body.storage.value),
            lastModified: new Date(page.version.when),
            author: page.version.by.displayName,
            relevanceScore: this.calculateRelevanceScore(page),
            instructionMappings: this.findRelevantInstructions(page.title, page.body.storage.value)
          };

          await this.storeKnowledgeItem(item);
        }
      }

      source.lastSync = new Date();
      source.status = 'active';
    } catch (error) {
      source.status = 'error';
      await this.handleSyncError(sourceId, error);
    }
  }

  async syncGitHubRepository(sourceId: string): Promise<void> {
    const source = this.sources.get(sourceId);
    if (!source || source.type !== 'github') return;

    const api = new GitHubAPI(source.config.token);
    
    try {
      // Sync README files, documentation, and wiki pages
      const repos = source.config.repositories || [];
      
      for (const repo of repos) {
        // Get README and documentation files
        const files = await api.getRepositoryContent(repo, {
          path: '',
          recursive: true
        });

        const docFiles = files.filter(file => 
          file.name.toLowerCase().includes('readme') ||
          file.name.toLowerCase().includes('doc') ||
          file.path.includes('docs/') ||
          file.name.endsWith('.md')
        );

        for (const file of docFiles) {
          const content = await api.getFileContent(repo, file.path);
          
          const item: KnowledgeItem = {
            id: `github-${repo}-${file.sha}`,
            sourceId,
            title: `${repo}/${file.path}`,
            content: content,
            tags: this.extractTagsFromGitHubFile(file.path, content),
            lastModified: new Date(file.lastModified || Date.now()),
            author: file.author || 'Unknown',
            relevanceScore: this.calculateGitHubRelevanceScore(file.path, content),
            instructionMappings: this.findRelevantInstructions(file.path, content)
          };

          await this.storeKnowledgeItem(item);
        }

        // Sync recent issues and discussions
        const issues = await api.getIssues(repo, {
          state: 'all',
          labels: ['documentation', 'help-wanted', 'question'],
          since: this.getLastSyncDate(sourceId)
        });

        for (const issue of issues) {
          const item: KnowledgeItem = {
            id: `github-issue-${issue.id}`,
            sourceId,
            title: `Issue: ${issue.title}`,
            content: `${issue.body}\n\n${issue.comments?.map(c => c.body).join('\n\n') || ''}`,
            tags: [...(issue.labels?.map(l => l.name) || []), 'issue', 'github'],
            lastModified: new Date(issue.updated_at),
            author: issue.user.login,
            relevanceScore: this.calculateIssueRelevanceScore(issue),
            instructionMappings: this.findRelevantInstructions(issue.title, issue.body)
          };

          await this.storeKnowledgeItem(item);
        }
      }

      source.lastSync = new Date();
      source.status = 'active';
    } catch (error) {
      source.status = 'error';
      await this.handleSyncError(sourceId, error);
    }
  }

  async syncJiraProjects(sourceId: string): Promise<void> {
    const source = this.sources.get(sourceId);
    if (!source || source.type !== 'jira') return;

    const api = new JiraAPI(source.config);
    
    try {
      const projects = source.config.projects || [];
      
      for (const projectKey of projects) {
        // Get project requirements, epics, and technical stories
        const issues = await api.searchIssues({
          jql: `project = ${projectKey} AND (issuetype = Epic OR issuetype = Story OR issuetype = "Technical Task") AND updated >= -30d`,
          fields: ['summary', 'description', 'labels', 'components', 'updated', 'reporter']
        });

        for (const issue of issues.issues) {
          const item: KnowledgeItem = {
            id: `jira-${issue.key}`,
            sourceId,
            title: `${issue.key}: ${issue.fields.summary}`,
            content: issue.fields.description || '',
            tags: [
              ...(issue.fields.labels || []),
              ...(issue.fields.components?.map(c => c.name) || []),
              'jira',
              issue.fields.issuetype.name.toLowerCase()
            ],
            lastModified: new Date(issue.fields.updated),
            author: issue.fields.reporter.displayName,
            relevanceScore: this.calculateJiraRelevanceScore(issue),
            instructionMappings: this.findRelevantInstructions(issue.fields.summary, issue.fields.description)
          };

          await this.storeKnowledgeItem(item);
        }
      }

      source.lastSync = new Date();
      source.status = 'active';
    } catch (error) {
      source.status = 'error';
      await this.handleSyncError(sourceId, error);
    }
  }

  private findRelevantInstructions(title: string, content: string): string[] {
    const instructionKeywords = new Map([
      ['senior-developer', ['code', 'architecture', 'review', 'pattern', 'best practice']],
      ['devops-engineer', ['deployment', 'infrastructure', 'docker', 'kubernetes', 'ci/cd']],
      ['qa-engineer', ['test', 'quality', 'automation', 'bug', 'verification']],
      ['product-manager', ['requirement', 'feature', 'user story', 'roadmap', 'priority']],
      ['security-engineer', ['security', 'vulnerability', 'authentication', 'encryption', 'compliance']],
      ['data-scientist', ['data', 'analytics', 'model', 'algorithm', 'machine learning']],
      ['mobile-developer', ['mobile', 'ios', 'android', 'react native', 'flutter']],
      ['cloud-architect', ['cloud', 'aws', 'azure', 'gcp', 'infrastructure', 'scalability']]
    ]);

    const relevantInstructions: string[] = [];
    const combinedText = `${title} ${content}`.toLowerCase();

    for (const [instruction, keywords] of instructionKeywords) {
      if (keywords.some(keyword => combinedText.includes(keyword.toLowerCase()))) {
        relevantInstructions.push(instruction);
      }
    }

    return relevantInstructions;
  }
}
```

### 2. Real-Time Context Updates

#### Context Change Detection
```typescript
// integrations/context-monitor.ts
interface ContextChange {
  id: string;
  source: string;
  type: 'project_update' | 'requirement_change' | 'tech_change' | 'process_change';
  timestamp: Date;
  description: string;
  impact: 'low' | 'medium' | 'high' | 'critical';
  affectedInstructions: string[];
  suggestedActions: string[];
  autoUpdateAvailable: boolean;
}

interface ProjectContext {
  projectId: string;
  name: string;
  technologies: string[];
  architecture: string[];
  processes: string[];
  requirements: string[];
  timeline: {
    phases: ProjectPhase[];
    milestones: Milestone[];
  };
  team: TeamMember[];
  lastUpdated: Date;
}

class ContextMonitor {
  private contexts: Map<string, ProjectContext> = new Map();
  private changeListeners: Map<string, Function[]> = new Map();

  async monitorProjectChanges(projectId: string): Promise<void> {
    // Set up real-time monitoring for various sources
    await this.setupGitHubMonitoring(projectId);
    await this.setupJiraMonitoring(projectId);
    await this.setupSlackMonitoring(projectId);
    await this.setupCodebaseMonitoring(projectId);
  }

  private async setupGitHubMonitoring(projectId: string): Promise<void> {
    const context = this.contexts.get(projectId);
    if (!context) return;

    // Monitor repository changes via webhooks
    const webhook = new GitHubWebhook({
      secret: process.env.GITHUB_WEBHOOK_SECRET,
      events: ['push', 'pull_request', 'issues', 'release']
    });

    webhook.on('push', async (event) => {
      const changes = await this.analyzeGitHubPush(event, context);
      for (const change of changes) {
        await this.processContextChange(projectId, change);
      }
    });

    webhook.on('pull_request', async (event) => {
      if (event.action === 'opened' || event.action === 'synchronize') {
        const changes = await this.analyzePullRequest(event, context);
        for (const change of changes) {
          await this.processContextChange(projectId, change);
        }
      }
    });

    webhook.on('issues', async (event) => {
      if (event.action === 'opened' || event.action === 'edited') {
        const changes = await this.analyzeIssue(event, context);
        for (const change of changes) {
          await this.processContextChange(projectId, change);
        }
      }
    });
  }

  private async analyzeGitHubPush(event: any, context: ProjectContext): Promise<ContextChange[]> {
    const changes: ContextChange[] = [];
    
    // Analyze commits for technology changes
    for (const commit of event.commits) {
      // Check for new dependencies
      const packageChanges = await this.detectPackageChanges(commit);
      if (packageChanges.length > 0) {
        changes.push({
          id: `tech-change-${commit.id}`,
          source: 'github',
          type: 'tech_change',
          timestamp: new Date(commit.timestamp),
          description: `New technologies detected: ${packageChanges.join(', ')}`,
          impact: 'medium',
          affectedInstructions: this.findAffectedInstructionsByTech(packageChanges),
          suggestedActions: [
            'Update relevant instruction files with new technology guidelines',
            'Add examples for new libraries/frameworks',
            'Update deployment and testing procedures'
          ],
          autoUpdateAvailable: true
        });
      }

      // Check for architecture changes
      const archChanges = await this.detectArchitectureChanges(commit);
      if (archChanges.length > 0) {
        changes.push({
          id: `arch-change-${commit.id}`,
          source: 'github',
          type: 'project_update',
          timestamp: new Date(commit.timestamp),
          description: `Architecture changes detected: ${archChanges.join(', ')}`,
          impact: 'high',
          affectedInstructions: ['senior-developer', 'cloud-architect', 'devops-engineer'],
          suggestedActions: [
            'Review architecture documentation',
            'Update deployment procedures',
            'Validate security implications'
          ],
          autoUpdateAvailable: false
        });
      }
    }

    return changes;
  }

  private async setupJiraMonitoring(projectId: string): Promise<void> {
    // Monitor Jira changes via webhooks
    const jiraWebhook = new JiraWebhook({
      secret: process.env.JIRA_WEBHOOK_SECRET
    });

    jiraWebhook.on('issue_updated', async (event) => {
      const change = await this.analyzeJiraIssueUpdate(event, projectId);
      if (change) {
        await this.processContextChange(projectId, change);
      }
    });

    jiraWebhook.on('project_updated', async (event) => {
      const changes = await this.analyzeJiraProjectUpdate(event, projectId);
      for (const change of changes) {
        await this.processContextChange(projectId, change);
      }
    });
  }

  private async processContextChange(projectId: string, change: ContextChange): Promise<void> {
    // Store the change
    await this.storeContextChange(projectId, change);

    // Notify relevant systems
    await this.notifyInstructionSystem(change);
    
    // If auto-update is available, perform it
    if (change.autoUpdateAvailable) {
      await this.performAutoUpdate(change);
    } else {
      // Create manual review task
      await this.createReviewTask(change);
    }

    // Trigger listeners
    const listeners = this.changeListeners.get(projectId) || [];
    for (const listener of listeners) {
      try {
        await listener(change);
      } catch (error) {
        console.error('Error in context change listener:', error);
      }
    }
  }

  async generateContextReport(projectId: string): Promise<ContextReport> {
    const context = this.contexts.get(projectId);
    if (!context) throw new Error(`Project context not found: ${projectId}`);

    const recentChanges = await this.getRecentChanges(projectId, 30); // Last 30 days
    const impactAnalysis = await this.analyzeChangeImpact(recentChanges);
    const recommendations = await this.generateRecommendations(context, recentChanges);

    return {
      projectId,
      context,
      recentChanges,
      impactAnalysis,
      recommendations,
      lastUpdated: new Date(),
      healthScore: this.calculateContextHealthScore(context, recentChanges)
    };
  }
}
```

### 3. Intelligent Instruction Updates

#### Auto-Update Engine
```typescript
// integrations/auto-update-engine.ts
interface UpdateRule {
  id: string;
  name: string;
  description: string;
  trigger: UpdateTrigger;
  conditions: UpdateCondition[];
  actions: UpdateAction[];
  approval: 'automatic' | 'review_required' | 'manual_only';
  priority: number;
}

interface UpdateTrigger {
  type: 'context_change' | 'knowledge_update' | 'feedback_threshold' | 'schedule';
  config: Record<string, any>;
}

interface UpdateAction {
  type: 'add_section' | 'update_content' | 'add_example' | 'update_metric' | 'add_tool';
  target: string;
  content: string;
  template?: string;
}

class AutoUpdateEngine {
  private rules: UpdateRule[] = [];
  private pendingUpdates: Map<string, PendingUpdate[]> = new Map();

  async initializeUpdateRules(): Promise<void> {
    // Technology update rules
    this.rules.push({
      id: 'tech-stack-update',
      name: 'Technology Stack Updates',
      description: 'Automatically update instructions when new technologies are added',
      trigger: {
        type: 'context_change',
        config: { changeType: 'tech_change' }
      },
      conditions: [
        { field: 'impact', operator: 'in', values: ['medium', 'high'] },
        { field: 'autoUpdateAvailable', operator: 'equals', value: true }
      ],
      actions: [
        {
          type: 'add_section',
          target: 'development_instructions',
          content: 'auto_generated_tech_section',
          template: 'technology_integration_template'
        }
      ],
      approval: 'review_required',
      priority: 1
    });

    // Knowledge base update rules
    this.rules.push({
      id: 'knowledge-sync-update',
      name: 'Knowledge Base Synchronization',
      description: 'Update instructions based on new documentation and best practices',
      trigger: {
        type: 'knowledge_update',
        config: { relevanceThreshold: 0.8 }
      },
      conditions: [
        { field: 'source', operator: 'in', values: ['confluence', 'github', 'jira'] },
        { field: 'relevanceScore', operator: 'gte', value: 0.8 }
      ],
      actions: [
        {
          type: 'add_example',
          target: 'relevant_instructions',
          content: 'knowledge_based_example',
          template: 'example_integration_template'
        }
      ],
      approval: 'automatic',
      priority: 2
    });

    // Performance feedback rules
    this.rules.push({
      id: 'performance-improvement',
      name: 'Performance-Based Improvements',
      description: 'Update instructions based on effectiveness metrics and user feedback',
      trigger: {
        type: 'feedback_threshold',
        config: { 
          metric: 'success_rate',
          threshold: 0.7,
          direction: 'below'
        }
      },
      conditions: [
        { field: 'metric_trend', operator: 'equals', value: 'declining' },
        { field: 'feedback_count', operator: 'gte', value: 5 }
      ],
      actions: [
        {
          type: 'update_content',
          target: 'problematic_sections',
          content: 'improved_guidance',
          template: 'improvement_template'
        }
      ],
      approval: 'review_required',
      priority: 1
    });
  }

  async processUpdate(contextChange: ContextChange): Promise<void> {
    const applicableRules = this.findApplicableRules(contextChange);
    
    for (const rule of applicableRules) {
      if (this.evaluateConditions(rule.conditions, contextChange)) {
        const update = await this.generateUpdate(rule, contextChange);
        
        if (rule.approval === 'automatic') {
          await this.executeUpdate(update);
        } else {
          await this.queueForReview(update);
        }
      }
    }
  }

  private async generateUpdate(rule: UpdateRule, contextChange: ContextChange): Promise<InstructionUpdate> {
    const update: InstructionUpdate = {
      id: this.generateUpdateId(),
      ruleId: rule.id,
      instructionIds: contextChange.affectedInstructions,
      changes: [],
      source: contextChange.source,
      timestamp: new Date(),
      status: 'pending',
      metadata: {
        contextChange,
        rule,
        generatedBy: 'auto-update-engine'
      }
    };

    for (const action of rule.actions) {
      const change = await this.generateActionChange(action, contextChange);
      update.changes.push(change);
    }

    return update;
  }

  private async generateActionChange(action: UpdateAction, contextChange: ContextChange): Promise<InstructionChange> {
    switch (action.type) {
      case 'add_section':
        return await this.generateSectionAddition(action, contextChange);
      case 'update_content':
        return await this.generateContentUpdate(action, contextChange);
      case 'add_example':
        return await this.generateExampleAddition(action, contextChange);
      case 'add_tool':
        return await this.generateToolAddition(action, contextChange);
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  private async generateSectionAddition(action: UpdateAction, contextChange: ContextChange): Promise<InstructionChange> {
    if (action.template) {
      const template = await this.loadTemplate(action.template);
      const content = await this.populateTemplate(template, contextChange);
      
      return {
        type: 'section_addition',
        target: action.target,
        content: content,
        description: `Added section based on ${contextChange.description}`,
        confidence: 0.85
      };
    }

    // Generate content based on context change
    const content = await this.generateSectionContent(contextChange);
    return {
      type: 'section_addition',
      target: action.target,
      content,
      description: `Added section for ${contextChange.type}`,
      confidence: 0.75
    };
  }

  async reviewPendingUpdates(): Promise<UpdateReviewReport> {
    const pendingUpdates = Array.from(this.pendingUpdates.values()).flat();
    const highPriorityUpdates = pendingUpdates.filter(u => u.priority >= 8);
    const reviewRecommendations = await this.generateReviewRecommendations(pendingUpdates);

    return {
      totalPending: pendingUpdates.length,
      highPriority: highPriorityUpdates.length,
      byCategory: this.groupUpdatesByCategory(pendingUpdates),
      recommendations: reviewRecommendations,
      estimatedReviewTime: this.calculateReviewTime(pendingUpdates)
    };
  }
}
```

### 4. Project Management Integration

#### ControlAIMCP Enhanced Project Management
Leverage ControlAIMCP for intelligent project orchestration and automated coordination:

```typescript
// Enhanced project management with ControlAIMCP integration
interface EnhancedProjectStatus extends ProjectStatus {
  aiCoordinatorRecommendations: string[];
  automatedTaskAssignments: TaskAssignment[];
  predictiveAnalytics: ProjectPrediction[];
}

class ControlAIProjectManager {
  async orchestrateProject(projectId: string): Promise<EnhancedProjectStatus> {
    // Use ControlAIMCP for intelligent project analysis
    const aiInsights = await this.getAIProjectInsights(projectId);
    const traditionalStatus = await this.syncWithJira(projectId);
    
    return {
      ...traditionalStatus,
      aiCoordinatorRecommendations: aiInsights.recommendations,
      automatedTaskAssignments: aiInsights.suggestedAssignments,
      predictiveAnalytics: aiInsights.predictions
    };
  }
  
  async coordianteWithControlAI(projectContext: any): Promise<void> {
    // Leverage ControlAIMCP for multi-agent project coordination
    // This integrates with the ControlAI MCP server for advanced project management
    console.log("Coordinating project through ControlAIMCP...");
  }
}
```

#### Traditional Agile Tool Integration
```typescript
// integrations/project-management.ts
interface ProjectStatus {
  projectId: string;
  currentSprint?: Sprint;
  upcomingMilestones: Milestone[];
  teamVelocity: number;
  activeEpics: Epic[];
  recentDeployments: Deployment[];
  riskFactors: RiskFactor[];
}

interface Sprint {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  goal: string;
  stories: Story[];
  progress: number;
  burndownData: BurndownPoint[];
}

class ProjectManagementIntegration {
  async syncWithJira(projectKey: string): Promise<ProjectStatus> {
    const jiraAPI = new JiraAPI();
    
    // Get current sprint
    const currentSprint = await jiraAPI.getCurrentSprint(projectKey);
    
    // Get active epics
    const activeEpics = await jiraAPI.getActiveEpics(projectKey);
    
    // Get upcoming milestones
    const milestones = await jiraAPI.getUpcomingVersions(projectKey);
    
    // Calculate team velocity
    const velocity = await this.calculateTeamVelocity(projectKey);
    
    return {
      projectId: projectKey,
      currentSprint,
      upcomingMilestones: milestones,
      teamVelocity: velocity,
      activeEpics,
      recentDeployments: await this.getRecentDeployments(projectKey),
      riskFactors: await this.identifyRiskFactors(projectKey)
    };
  }

  async updateInstructionsBasedOnProject(status: ProjectStatus): Promise<void> {
    // Update sprint-specific guidance
    if (status.currentSprint) {
      await this.updateSprintGuidance(status.currentSprint);
    }

    // Update milestone preparations
    for (const milestone of status.upcomingMilestones) {
      await this.updateMilestonePreparation(milestone);
    }

    // Adjust based on team velocity and risk factors
    await this.adjustInstructionsForRisk(status.riskFactors);
  }

  private async updateSprintGuidance(sprint: Sprint): Promise<void> {
    const sprintGuidance = {
      sprintGoal: sprint.goal,
      keyStories: sprint.stories.filter(s => s.priority === 'High'),
      timeRemaining: this.calculateDaysRemaining(sprint.endDate),
      progressStatus: sprint.progress,
      recommendedFocus: this.generateSprintFocus(sprint)
    };

    // Update project manager instructions with sprint context
    await this.updateInstructionFile(
      'project-manager-agent',
      'current_sprint_context',
      sprintGuidance
    );

    // Update developer instructions with sprint priorities
    await this.updateInstructionFile(
      'senior-developer-agent',
      'sprint_priorities',
      {
        technicalStories: sprint.stories.filter(s => s.type === 'Technical'),
        codeReviewFocus: this.generateCodeReviewFocus(sprint.stories),
        testingPriorities: this.generateTestingPriorities(sprint.stories)
      }
    );
  }
}
```

## Success Metrics

### Integration Effectiveness
- **Sync Accuracy**: > 99% accurate synchronization with external sources
- **Update Timeliness**: Context changes reflected within 15 minutes
- **Knowledge Coverage**: > 95% of relevant external content captured
- **Integration Uptime**: > 99.5% availability for critical integrations

### Context Awareness
- **Relevance Score**: > 90% of suggested updates are relevant
- **Auto-Update Success**: 85% of automatic updates are accepted
- **Change Detection**: 100% of critical changes detected and processed
- **False Positive Rate**: < 5% irrelevant change notifications

### Business Impact
- **Decision Speed**: 40% faster decision-making with integrated context
- **Information Currency**: 95% of instruction content less than 30 days old
- **Team Alignment**: 90% improvement in team context awareness
- **Process Efficiency**: 50% reduction in manual information gathering

---

*Connecting AI agent instructions with the broader knowledge ecosystem for enhanced contextual intelligence and continuous improvement.*
