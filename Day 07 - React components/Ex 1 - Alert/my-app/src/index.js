import React from 'react';
import Alert from './components/Alert';
import './index.css';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />)