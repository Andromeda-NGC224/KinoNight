import { Suspense } from 'react';
import Navigation from "../Navigation/Navigation"

export default function Layout({ children }) { 
    return (
        <div>
            <Navigation />
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </div>
    )
}