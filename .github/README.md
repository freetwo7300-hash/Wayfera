# GitHub Configuration

This directory contains GitHub-specific configuration files for the Wayfera project.

## Contents

### CI/CD Pipeline
- **workflows/ci.yml** - Continuous Integration workflow
  - Runs tests on pull requests
  - Builds the project
  - Validates TypeScript
  - Runs linting

### Issue Templates
- **ISSUE_TEMPLATE/bug_report.md** - Template for reporting bugs
- **ISSUE_TEMPLATE/feature_request.md** - Template for feature requests

### Pull Request
- **PULL_REQUEST_TEMPLATE.md** - Template for pull requests
  - Ensures PRs include proper descriptions
  - Links to related issues
  - Documents changes

## Workflows

### CI Workflow (ci.yml)
Triggers on:
- Pull requests to main/master
- Pushes to main/master

Actions:
- Install dependencies
- Build project
- Run tests
- Type checking

## Contributing
See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
