## Grill My Code

> **Generated:** 2026-05-04 19:59:53 UTC
> **Commits reviewed:** `4fdc55e` → `88d8c07`

> **Files assessed:** `README.md`

---

## Recall

_These questions check your knowledge of what specific parts of your code do._

1. **`README.md`**
   ```
   [![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23815045)
   ```
   What does clicking the Codespaces badge in the Markdown header do for users of this repository?

2. **`README.md`**
   ```
   This repository contains a GitHub Actions workflow that automatically analyses submitted code and generates comprehension questions using AI based on the code submitted.
   ```
   What is the main automated feature described in the first paragraph of the README?

3. **`README.md`**
   ```
   When you push a code file, the **Grill My Code** action will examine your changes and create a GitHub Issue containing questions about the code you submitted.
   ```
   What event triggers the question-generation workflow according to this statement?

4. **`README.md`**
   ```
   1. **Workflow validation** — Confirm that the action runs successfully end-to-end: the workflow triggers on push, the AI model is called, and a GitHub Issue containing comprehension questions is generated without errors.
   ```
   What is the first listed goal of the pilot in the Purpose section?

5. **`README.md`**
   ```
   2. **Question quality** — Evaluate whether the generated questions accurately reflect the code that was submitted.
   ```
   What is the second listed goal of the pilot?

6. **`README.md`**
   ```
   The workflow (`.github/workflows/grill-my-code.yml`) triggers on every `push` to the repository.
   ```
   Which workflow file is responsible for running the question-generation process?

7. **`README.md`**
   ```
   4. Sends the stripped diff to an AI model (currently set to `gpt-4.1` via GitHub Models).
   ```
   What AI model is used for generating questions according to the workflow description?

8. **`README.md`**
   ```
   5. Opens a **GitHub Issue** in this repository containing up to 50 comprehension questions about your code.
   ```
   What does the workflow do after generating questions?

9. **`README.md`**
   ```
   6. Writes a copy of the questions to a Markdown file inside a `_assessment/` folder and commits it back to the repository.
   ```
   Where is the generated set of questions stored besides the GitHub Issue?

10. **`README.md`**
    ```
    > The workflow skips the initial starter-code commit by default, so only **your** code changes are assessed — not any template boilerplate.
    ```
    What kind of code changes are excluded from analysis by default?

11. **`README.md`**
    ```
    NOTE: If you'd prefer, you can clone to your machine and work from there. The codespace is available for ease of coding and testing.
    ```
    What alternative does the README offer if a user does not want to use Codespaces?

12. **`README.md`**
    ```
    You can add a file in **any language** — JavaScript, Java, C#, etc. The action analyses whatever code you push.
    ```
    What languages does the workflow support for code analysis?

13. **`README.md`**
    ```
    For this pilot, you can work **directly on the `main` branch** — no feature branches are needed.
    ```
    Which branch are users instructed to work on for the pilot?

14. **`README.md`**
    ```
    Each push triggers the workflow and generates a **new, updated set of questions** reflecting your latest additions and/or modifications.
    ```
    What happens when a user pushes new changes to the repository?

15. **`README.md`**
    ```
    The questions are also saved as a Markdown file in the `_assessment/` folder in this repository — it is an exact copy of the content posted to the Issue.
    ```
    What is the relationship between the questions in the Issue and those in `_assessment/`?

16. **`README.md`**
    ```
    | Requirement | Details |
    |---|---|
    | GitHub Models access | The workflow uses `github_token` with `models: read` permission — no extra setup needed |
    | Issues enabled | GitHub Issues must be enabled on this repository (they are by default) |
    ```
    What two requirements are listed for the workflow to function?

17. **`README.md`**
    ```
    The `GITHUB_TOKEN` provided automatically by GitHub Actions has all the permissions the workflow needs.
    ```
    What is used for authentication in the workflow?

18. **`README.md`**
    ```
    | Setting | Value | Description |
    |---|---|---|
    | `ai_model` | `gpt-4.1` | AI model used to generate questions |
    | `num_questions` | `50` | Number of questions generated per push |
    | `post_issue` | `true` | Questions are posted as a GitHub Issue |
    | `skip_initial_commit` | `true` (default) | Only your code changes are assessed |
    ```
    What is the default number of questions generated per push?

19. **`README.md`**
    ```
    To change these settings, edit `.github/workflows/grill-my-code.yml`.
    ```
    Where should users go to change workflow settings?

20. **`README.md`**
    ```
    git pull
    ```
    What command is suggested for updating the local `_assessment/` folder?

## Comprehension

_These questions ask you to explain why or how particular choices in your code work the way they do._

21. **`README.md`**
    ```
    Strips any comments from the code before analysis, so the AI assesses the code itself rather than any hints or explanations left in comments.
    ```
    Why does the workflow remove comments from the code before sending it to the AI model?

22. **`README.md`**
    ```
    The workflow skips the initial starter-code commit by default, so only **your** code changes are assessed — not any template boilerplate. However this can be overridden.
    ```
    Why is it important for the workflow to skip the initial starter-code commit during analysis?

23. **`README.md`**
    ```
    No secrets or API keys need to be configured manually.
    ```
    How does the workflow avoid requiring manual API key configuration?

24. **`README.md`**
    ```
    The `GITHUB_TOKEN` provided automatically by GitHub Actions has all the permissions the workflow needs.
    ```
    How does using `GITHUB_TOKEN` simplify the workflow setup for users?

25. **`README.md`**
    ```
    Each push triggers the workflow and generates a **new, updated set of questions** reflecting your latest additions and/or modifications.
    ```
    How does the workflow ensure that questions are always relevant to the most recent code changes?

26. **`README.md`**
    ```
    You can add a file in **any language** — JavaScript, Java, C#, etc. The action analyses whatever code you push.
    ```
    Why might supporting multiple languages be important for the workflow's intended audience?

27. **`README.md`**
    ```
    Writes a copy of the questions to a Markdown file inside a `_assessment/` folder and commits it back to the repository.
    ```
    How does storing questions in the `_assessment/` folder benefit users beyond the GitHub Issue?

28. **`README.md`**
    ```
    Suggestions for improvements or new features are equally encouraged. The goal of this pilot is to learn as much as possible, so no observation is too small to share.
    ```
    Why does the pilot encourage all feedback, even on small observations?

29. **`README.md`**
    ```
    If the questions feel generic, off-topic, or miss important aspects of the code, please note that when reporting back.
    ```
    How does user feedback on question quality contribute to the project?

30. **`README.md`**
    ```
    The questions are also saved as a Markdown file in the `_assessment/` folder in this repository — it is an exact copy of the content posted to the Issue.
    ```
    Why do you think it is valuable to have an exact copy of the questions in both the Issue and a Markdown file?

## Analysis

_These questions require you to trace execution, reason about logic, or identify issues with your code._

31. **`README.md`**
    ```
    2. Computes a diff of the files you changed since the starter code was first committed.
    ```
    How might computing a diff help the workflow generate questions tailored to your own code rather than the template?

32. **`README.md`**
    ```
    4. Sends the stripped diff to an AI model (currently set to `gpt-4.1` via GitHub Models).
    ```
    What could happen if the diff sent to the AI model included comments, and how would that affect the questions generated?

33. **`README.md`**
    ```
    5. Opens a **GitHub Issue** in this repository containing up to 50 comprehension questions about your code.
    ```
    What potential problems could arise if the workflow failed to open a GitHub Issue after generating questions?

34. **`README.md`**
    ```
    6. Writes a copy of the questions to a Markdown file inside a `_assessment/` folder and commits it back to the repository.
    ```
    What are the consequences if the workflow fails to commit the Markdown file to the `_assessment/` folder?

35. **`README.md`**
    ```
    The workflow uses `github_token` with `models: read` permission — no extra setup needed
    ```
    If the `models: read` permission was missing from `github_token`, what part of the workflow would be affected?

36. **`README.md`**
    ```
    Issues enabled | GitHub Issues must be enabled on this repository (they are by default)
    ```
    What would be the result if Issues were disabled in the repository during workflow execution?

37. **`README.md`**
    ```
    | Setting | Value | Description |
    |---|---|---|
    | `num_questions` | `50` | Number of questions generated per push |
    ```
    What might happen if you reduce `num_questions` to a much lower value in the workflow configuration?

38. **`README.md`**
    ```
    | `skip_initial_commit` | `true` (default) | Only your code changes are assessed |
    ```
    What would be the impact of changing `skip_initial_commit` to `false` in the workflow?

39. **`README.md`**
    ```
    To change these settings, edit `.github/workflows/grill-my-code.yml`.
    ```
    What risks could there be if a user edited this workflow file incorrectly?

40. **`README.md`**
    ```
    The questions are also saved as a Markdown file in the `_assessment/` folder in this repository — it is an exact copy of the content posted to the Issue.
    ```
    If the Markdown file and the Issue content ever diverged, what confusion could occur for users?

## Evaluation

_These questions ask you to judge design decisions, tradeoffs, or rationale._

41. **`README.md`**
    ```
    Strips any comments from the code before analysis, so the AI assesses the code itself rather than any hints or explanations left in comments.
    ```
    What are the advantages and disadvantages of stripping comments from the code before analysis for AI-generated questions?

42. **`README.md`**
    ```
    This action is at a **very early stage of development**, and all feedback is highly welcomed — not just on question quality, but on any aspect of the implementation: workflow behaviour, output format, Issue presentation, edge cases you encounter, or anything that feels off.
    ```
    Why might it be beneficial to solicit feedback on aspects beyond just question quality at this stage?

43. **`README.md`**
    ```
    The workflow skips the initial starter-code commit by default, so only **your** code changes are assessed — not any template boilerplate.
    ```
    What are the tradeoffs of skipping template code versus including it in the analysis for question generation?

44. **`README.md`**
    ```
    Each push triggers the workflow and generates a **new, updated set of questions** reflecting your latest additions and/or modifications.
    ```
    What are the pros and cons of triggering the workflow on every push rather than only on completed features?

45. **`README.md`**
    ```
    Writes a copy of the questions to a Markdown file inside a `_assessment/` folder and commits it back to the repository.
    ```
    What are the benefits and drawbacks of storing generated questions both in a GitHub Issue and a Markdown file within the repository?

46. **`README.md`**
    ```
    No secrets or API keys need to be configured manually.
    ```
    How does avoiding manual secrets/API key setup affect the security and usability of the workflow?

47. **`README.md`**
    ```
    You can add a file in **any language** — JavaScript, Java, C#, etc. The action analyses whatever code you push.
    ```
    What challenges might arise in supporting code analysis for any language in the workflow?

48. **`README.md`**
    ```
    For this pilot, you can work **directly on the `main` branch** — no feature branches are needed.
    ```
    What are the implications of allowing direct commits to the `main` branch for this pilot?

49. **`README.md`**
    ```
    Suggestions for improvements or new features are equally encouraged. The goal of this pilot is to learn as much as possible, so no observation is too small to share.
    ```
    How might encouraging suggestions for new features impact the direction and outcome of the pilot?

50. **`README.md`**
    ```
    The questions are also saved as a Markdown file in the `_assessment/` folder in this repository — it is an exact copy of the content posted to the Issue.
    ```
    In what situations might having a local copy of questions in the repository be preferable to relying on the GitHub Issue alone?

---

<sub>Generated by [grill-my-code](https://github.com/NSCC-ITC-Assessment/GrillMyCode) · gpt-4.1 via github-models · main</sub>