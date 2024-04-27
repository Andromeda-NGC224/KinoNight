import { Suspense } from 'react';
import Navigation from "../Navigation/Navigation"
import css from '../Layout/Layout.module.css'

export default function Layout({ children }) { 
    return (
        <div className={css.layoutCont}>
            <Navigation />
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </div>
    )
}