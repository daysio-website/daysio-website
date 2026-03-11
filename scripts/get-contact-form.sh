#!/bin/bash

echo "=== Checking git branches ==="
git branch -a

echo -e "\n=== Checking current branch ==="
git branch --show-current

echo -e "\n=== Git log (last 10 commits) ==="
git log --oneline -10

echo -e "\n=== Showing contact-section.tsx from branching-and-api-issues ==="
git show branching-and-api-issues:components/contact-section.tsx || echo "File not found in that branch"

echo -e "\n=== Showing contact-section.tsx from HEAD ==="
git show HEAD:components/contact-section.tsx || echo "File not found"
