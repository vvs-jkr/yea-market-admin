import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { appRouter } from './appRouter';

import '@/shared/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>
)