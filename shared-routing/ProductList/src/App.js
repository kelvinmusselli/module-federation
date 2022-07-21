import React from 'react';

const Shell = React.lazy(() => import('shell/Shell'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Shell />
    </React.Suspense>
  );
}

export default App;
