# Agent Behavior & Workflow

## Before Starting Work
- Read existing code before suggesting modifications; never edit blind
- Understand the project structure and conventions before making changes
- Check for existing patterns in the codebase; follow them consistently
- Verify assumptions by reading relevant files, not guessing
- Use Next.js DevTools MCP when available for route context and unified logs

## During Work
- Break complex tasks into small, verifiable steps
- Make one change at a time; verify it works before moving on
- Prefer editing existing files over creating new ones
- Keep changes minimal and focused on the request; don't add unrequested features
- Don't add comments, docstrings, or type annotations to code you didn't change
- Don't add error handling or validation for scenarios that can't happen
- Run tests after making changes to verify nothing is broken
- If blocked, try alternative approaches rather than brute-forcing

## Code Generation
- Generate production-ready code, not pseudocode or placeholders
- Include only necessary imports and dependencies
- Follow the project's existing code style and patterns
- Use the project's existing utilities and helpers; don't reinvent them
- Use `proxy.ts` (not middleware.ts) for route interception in Next.js 16 projects
- Use `"use cache"` directive for cacheable components/pages; default is dynamic
- Use `useActionState` for simple forms; react-hook-form only for complex forms

## Communication
- Be concise and direct; match response depth to task complexity
- Explain reasoning for significant decisions
- When uncertain, state assumptions and proceed with the most reasonable approach
- After completing file operations, confirm briefly; don't over-explain
- Never fabricate information; say you don't know when you don't

## Problem Solving
1. Understand the problem completely (read code, check errors, gather context)
2. Identify the root cause, not just symptoms
3. Plan the minimal fix or implementation
4. Implement and verify with tests
5. Review for unintended side effects
