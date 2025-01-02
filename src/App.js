import { useState } from 'react';
import './reset.css';
import './index.css';
import Form from './components/Form';
import { initialSummary } from './components/constants';
import SummaryContext from './context/summary-context';

function App() {
  const [summary, setSummary] = useState(initialSummary);

  return (
    <SummaryContext.Provider value={{ summary, setSummary }}>
      <Form />
    </SummaryContext.Provider>
  );
}

export default App;
