import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

import '../css/app.css';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
