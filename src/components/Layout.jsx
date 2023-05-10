'use strict'

import { Footer, Header, Main } from '@/components'
import { ButtonGoToUp } from '@/components/ButtonGoToUp'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export function Layout({children}) {
    const [active, setActive] = useState('')

    useEffect(() => {
        if (!(typeof window != 'undefined')) {
            throw new Error('The object window is not defined')
        }

        window.addEventListener('scroll', () => window.scrollY > 100 ? setActive('active') : setActive(''))
    }, [])

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Personal website" />
                <title>Home</title>
            </Head>
            <Header />
            <Main>{children}</Main>
            <ButtonGoToUp href='/#top' className={active}>
                <FaArrowUp />
            </ButtonGoToUp>
            <Footer />
        </>
    )
}
