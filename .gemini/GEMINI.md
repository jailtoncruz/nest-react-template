# NestJS + React Monolith Template — Gemini Style Code Guidelines

## 1. Project Structure

**Backend (NestJS)** — `apps/api/src`

- Domain-first: each module has `controllers`, `services`, `entities`, `dto`
- No business logic in controllers → delegate to services

**Frontend App (React + Vite)** — `apps/client/src`

- Functional components + hooks (`useState`, `useEffect`, `useQuery`)
- Tailwind + Radix UI for consistent design

---

## 2. Coding Style

- Indentation: **2 spaces**
- Variables/functions: **camelCase**
- Classes/types/components: **PascalCase**
- Interfaces: prefix with `I` (e.g., `IUser`)
- _Note: This is a project-specific convention. While modern TypeScript style guides often omit the `I` prefix, we use it for consistency._
- Private members: `_` prefix (e.g., `_service`)
- _Note: Use the `private` keyword where possible, but use the `_` prefix for identifying private members at a glance.\_
- Use ES modules + async/await
- Always strict equality (`===`, `!==`)
- JSDoc for exported functions, services, and utilities

---

## 3. Backend Guidelines

- DTOs + Validation Pipes for request handling
- Unit tests: `__tests__` or `*.spec.ts`

---

## 4. Frontend Guidelines

- Hooks for stateful logic
- Components for UI only
- Functional components with modern React patterns
- Ensure accessibility (WCAG 2.1 AA) and good performance.
- Keep logic modular and reusable

---

## 5. Dependencies

- Run `npm install` to ensure you have all dependencies.
- Introduce only with strong justification
- Examples: `zod` for validation, `stripe` for billing

---

## 6. Testing & QA

- Backend: unit (`*.spec.ts`) + integration tests
- Frontend: React Testing Library + Vitest
- E2E validation: Postman or Cypress
- Test subscription and authentication flows

---

## 7. Utilities & Helpers

- Small, predictable, reusable
- Fully typed with TypeScript
- JSDoc comments required

**Example:** `generateCode.ts`

```ts
/**
 * Generate a user-friendly code with optional parts and length.
 * @param parts Number of blocks (default: 2)
 * @param length Characters per block (default: 4)
 */
export function generateCode(parts: number = 2, length: number = 4): string {
  const blocks: string[] = [];
  for (let i = 0; i < parts; i++) {
    blocks.push(uid.randomUUID(length));
  }
  return blocks.join("-");
}
```

---

## 8. Checklist for Contributors

- [ ] Follow module structure
- [ ] All tests pass (`npm run test`).
- [ ] Write JSDoc for all exported functions/services
- [ ] Use hooks for state, components for UI
- [ ] Log AI interactions properly
- [ ] Unit tests written for all new services/utilities
