# SwissJS Examples

Example applications built with SwissJS, demonstrating real-world usage of `.ui` and `.uix` component files.

## Examples

| App | Description | Key features |
|---|---|---|
| `counter-app` | Classic counter | `state`, `computed`, `mount`, `effect` |
| `todo-app` | Todo list with persistence | `state`, `computed`, `effect`, localStorage |
| `fetch-demo` | Async data fetching | `@requires('network')`, `async mount`, error handling |

## Getting started

```bash
npm create swissjs@latest my-app
cd my-app
pnpm install && pnpm dev
```

## `.ui` files

SwissJS components use `.ui` (template-first) and `.uix` (JSX-first) file extensions.

```typescript
// Counter.ui
component Counter {
  state {
    let count: number = 0;
  }

  render() {
    return html`<button onclick="${() => this.count++}">${this.count}</button>`;
  }
}
```

## License

MIT
