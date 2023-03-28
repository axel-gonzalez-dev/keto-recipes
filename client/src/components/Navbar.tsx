import Link from 'next/link'

export default function Navbar() {

    const routes = [{
        name: 'Home',
        path: '/'
    },
    {
        name: 'Recipes',
        path: '/recipes'
    }]

    return (
        <nav>
            <ul>
                <>
                    {routes.map((route, index) => (
                        <li key={index}><Link href={route.path}>{route.name}</Link></li>
                    ))
                    }
                </>
            </ul>
        </nav>
    )

};