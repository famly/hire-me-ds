import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './App';
import {BrandProvider} from './brand/BrandProvider';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrandProvider>
            <App />
        </BrandProvider>
    </StrictMode>,
);
