import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './components/Clock';
import Controls from './components/Controls';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Controls />);