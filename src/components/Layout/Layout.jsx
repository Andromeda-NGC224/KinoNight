import { Suspense } from 'react';
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"
import css from '../Layout/Layout.module.css'


export default function Layout({ children }) { 
    return (
        <div className={css.layoutCont}>
            <div className={css.stars}></div>
            <div className={css.shootingStar1}></div>
            <div className={css.shootingStar2}></div>
            <div className={css.shootingStar3}></div>
            <Navigation />
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Footer />
        </div>
    )
}