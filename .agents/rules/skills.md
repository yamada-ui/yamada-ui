# Skill Rules

Follow these rules when creating or modifying skills.

## Specification

Conform to the [Agent Skills Specification](https://agentskills.io/specification.md).

### Directory Structure

```text
skill-name/
├── SKILL.md          # Required: metadata + instructions
├── scripts/          # Optional: executable code
├── references/       # Optional: documentation
└── assets/           # Optional: templates, resources
```

### `SKILL.md` Frontmatter

| Field           | Required | Summary                                                   |
| --------------- | -------- | --------------------------------------------------------- |
| `name`          | Yes      | Lowercase alphanumeric + hyphens, 1-64 chars, matches dir |
| `description`   | Yes      | What it does & when to use it, 1-1024 chars               |
| `license`       | No       | License name                                              |
| `compatibility` | No       | Environment requirements, 1-500 chars                     |
| `metadata`      | No       | Arbitrary key-value pairs                                 |
| `allowed-tools` | No       | Pre-approved tools (space-separated)                      |

### Size Limits

- Keep `SKILL.md` body under **500 lines / 5,000 tokens**
- Split details into `references/` and load only when needed (Progressive Disclosure)

## Best Practices

Follow [Best practices for skill creators](https://agentskills.io/skill-creation/best-practices.md). Key points below.

### Content

- **Write only what the agent lacks** — skip general knowledge
- **Write procedures, not answers** — reusable approaches, not instance-specific outputs
- **Pick one default** — recommend one tool/approach, mention alternatives briefly
- **Gotchas section** — list non-obvious pitfalls concretely

### Patterns

Use as needed. Not all are required for every skill.

- **Templates** — show concrete output structure instead of prose descriptions
- **Checklists** — track progress in multi-step workflows
- **Validation loops** — do → validate → fix → re-validate cycle
- **Plan-Validate-Execute** — validate intermediate plan before executing batch/destructive operations

### Calibrating Control

- Flexible areas → **explain why** (agent can judge from purpose)
- Fragile areas → **prescribe exact steps** (no deviation)

### Iterative Refinement

- Run against real tasks, review execution traces, and improve
- Add agent mistakes to the Gotchas section
