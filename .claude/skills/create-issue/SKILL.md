---
name: create-issue
description: "Create a GitHub Issue for yamada-ui. Use when the user says they want to create an issue, report a bug, request a feature, report a documentation problem, or file an issue against yamada-ui."
compatibility:
  tools:
    - Read
    - Bash
    - EnterPlanMode
    - ExitPlanMode
---

Create a GitHub Issue for yamada-ui.

## Workflow

Use tools to interact with the user throughout the process.

1. **Discover available templates**
   - Autonomously locate the `.github/ISSUE_TEMPLATE/` directory in the repository and list English templates (excluding `.ja.yml` files)
   - Read each template file to understand its `name` and required fields

2. **Confirm issue type**
   - Present the available templates to the user and ask which type fits their need
   - Suggest the appropriate type if unclear

3. **Collect information**
   - Ask for all required fields from the selected template
   - Ask follow-up questions to gather concrete details, code snippets, and URLs
   - **For the "PR intent" field, offer three options (separate from the template's Yes/No):**

     | Option                   | Description                                  | Template value | Label              |
     | ------------------------ | -------------------------------------------- | -------------- | ------------------ |
     | **Yes**                  | Will create a PR                             | `Yes`          | none               |
     | **No**                   | Will not create a PR                         | `No`           | `triage`           |
     | **Open to contributors** | Open as a community contribution opportunity | `Yes`          | `good first issue` |

   If "Open to contributors" is selected, append the following to the issue body:

   ```
   This issue is open to community contribution.
   ```

4. **Search for existing issues (duplicates, related, parent/child candidates)**

   Search by keyword to find duplicates, related issues, and parent/child candidates:

   ```bash
   gh api "search/issues?q=repo:yamada-ui/yamada-ui+<keywords>&per_page=20" \
     --jq '.items[] | {number: .number, title: .title, state: .state, url: .html_url}'
   ```

   Autonomously determine the relationship for each result found:

   | Judgment                              | Condition                                                  | Action                                                                             |
   | ------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
   | **Duplicate**                         | Content is nearly identical                                | Abort and present the existing issue URL to the user                               |
   | **Parent/child (existing is parent)** | Existing issue is a tracking issue; new issue is a subtask | Link new issue as a child via `addSubIssue` API                                    |
   | **Parent/child (new is parent)**      | New issue is a tracking issue; existing issue is a subtask | After creating the new issue, link existing issue as a child via `addSubIssue` API |
   | **Depends on**                        | New issue requires the existing one to be resolved first   | Append `Depends on #xxxx` to the issue body                                        |
   | **Related**                           | Same component or area                                     | Append `Related #xxxx` to the issue body                                           |
   | **Unrelated**                         | Different content                                          | Do nothing                                                                         |

   To get the Node ID of an existing issue:

   ```bash
   gh api repos/yamada-ui/yamada-ui/issues/{issue_number} --jq '{node_id: .node_id, title: .title}'
   ```

5. **Autonomously determine Type and Labels**
   - **Type is required** — every issue must have a Type assigned; never skip this step
   - Run the commands below to get available options, then decide based on the collected information
   - Only use `AskUserQuestion` when genuinely uncertain

   **Fetch available Types:**

   ```bash
   gh api graphql -f query='{ repository(owner: "yamada-ui", name: "yamada-ui") { issueTypes(first: 20) { nodes { name description } } } }'
   ```

   **Fetch available Labels:**

   ```bash
   gh api repos/yamada-ui/yamada-ui/labels --paginate --jq '.[] | {name: .name, description: .description}'
   ```

   Apply labels based on the PR intent answer from step 3:
   - `Yes` → no additional label; **automatically assign the issue to the current user** (use `--assignee @me` in `gh issue create`)
   - `No` → add `triage`
   - `Open to contributors` → add `good first issue`

6. **Design parent/child structure for multiple issues**
   - When creating multiple issues, always designate one as the parent (tracking issue)
   - Break individual tasks into child issues under the parent
   - Factor in any parent/child relationships found with existing issues in step 4
   - Include the full structure (parent/child, related, depends-on) in the Plan Mode presentation

7. **Enter Plan Mode (required)**
   - Call `EnterPlanMode` before creating any issue
   - Present the following for user review:
     - List of issues to create (with parent/child relationships if applicable)
     - Title, Type, and Labels for each issue (with reasoning)
     - Relationships with existing issues (`sub-issue`, `Related`, `Depends on`)
     - Target repository: `yamada-ui/yamada-ui`
   - Wait for user approval
   - Apply any requested changes and re-present before proceeding

8. **Create and link issues after approval**
   - Call `ExitPlanMode` after receiving approval
   - Create issues using `gh issue create`
   - **Always specify Type with `--type` flag** (e.g. `--type Bug`) — this is mandatory; do not omit it
   - Specify Labels with `--label` flag (e.g. `--label "documentation,good first issue"`)
   - If PR intent is `Yes`, add `--assignee @me` to assign the issue to the current user automatically
   - For multiple issues, create the parent first, then create and link child issues

   **Sub-issue linking (for both new and existing issues):**

   ```bash
   # Get parent issue Node ID
   gh api repos/yamada-ui/yamada-ui/issues/{parent_issue_number} --jq '.node_id'

   # Write and execute the GraphQL mutation
   cat > /tmp/add_sub_issue.graphql << 'EOF'
   mutation AddSubIssue($issueId: ID!, $subIssueUrl: String!) {
     addSubIssue(input: { issueId: $issueId, subIssueUrl: $subIssueUrl }) {
       issue { number title }
       subIssue { number title }
     }
   }
   EOF

   gh api graphql \
     -F query=@/tmp/add_sub_issue.graphql \
     -F issueId="<parent Node ID>" \
     -F subIssueUrl="https://github.com/yamada-ui/yamada-ui/issues/<child_issue_number>"
   ```

   - Repeat for each child issue
   - Display the parent issue URL once all issues are created and linked

## Notes

- **Always write issues in English**
- **Type is mandatory** — every issue must have a Type; never create an issue without `--type`
- **Determine Type and Labels autonomously** — only use `AskUserQuestion` when uncertain
- **Plan Mode is mandatory** — always go through Plan Mode before creating any issue
- **Multiple issues require a parent/child structure** — create the parent first, then link children as sub-issues
- **Investigate relationships with existing issues** — check for duplicates, parent/child, related, and depends-on in that order
- **Follow the template** — include all required fields from the selected template
- **Be specific** — avoid vague descriptions; provide concrete, reproducible information
