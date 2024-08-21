import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootElm = document.getElementById('root')

if (!rootElm) throw new Error('Root element not found')

const root = createRoot(rootElm)
root.render(
  <App />
)
