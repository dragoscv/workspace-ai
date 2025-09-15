---
mode: agent
---
Use "E:/GitHub/workspace-ai/.github/instructions/senior-developer-agent.instructions.md" and "E:/GitHub/workspace-ai/.github/instructions/sre-agent.instructions.md".

PROJECT=<NAME>
AREA=<page-load|database|api|memory|cpu>
TARGETS=<response-time-ms|throughput-rps|memory-mb>
THRESHOLD=<performance-target>

Mission: Analyze and optimize performance with measurable targets and monitoring.

Do now:
- Profile current performance and establish baselines
- Identify bottlenecks using appropriate profiling tools
- Implement optimizations with before/after metrics
- Set up performance monitoring and alerting
- Run load tests and validate improvements
- Document optimization strategies and results

Deliver:
- Performance analysis report with concrete metrics
- Optimized code with benchmark comparisons
- Database query optimizations and indexing
- Caching strategy implementation
- Load testing results and capacity planning
- Performance monitoring dashboard setup
- Update /.agent-state/state.json with performance metrics

## 🚨 CRITICAL DEVELOPMENT RULES - MANDATORY

1. **NO MOCKS! 0 MOCK DATA!** - Only real connections and actual data. No fake/mock/placeholder content.
2. **NO HARDCODED STRINGS** - Use translation files and i18n systems for all text content.
3. **NO PLACEHOLDERS** - Replace all placeholders with dynamic variables and real content.
