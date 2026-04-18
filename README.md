# 06 AI Assisted React

## Goal
Use a chatbot as a debugging and explanation tool while still staying responsible for the code.

## What You Are Practicing
- Reading React state before changing it
- Copying an existing `onClick` pattern
- Using AI for explanation, a small feature, or debugging help
- Verifying that the code still does what you expect

## Start Here
1. Run `npm install`.
2. Run `npm run dev`.
3. Open `src/App.jsx` and look at the toolbar buttons.
4. Notice that three buttons already change the `filter` state.
5. Finish the one missing button so the UI can show only debugging tasks.

Keep the scope small: ask for explanation, a bounded feature, or help debugging.

## Example Prompts
- Explain this code like I know HTML/CSS but I am new to React. What are the props and state doing?
- Add a feature: let me filter the list by category without changing the overall layout.
- Debug this: my button click updates state but the UI does not change. What should I inspect first?

## Stretch Goals
- Add a loading state.
- Add a form to create a new item locally.
- Ask the chatbot to write tests, then review them before using them.
