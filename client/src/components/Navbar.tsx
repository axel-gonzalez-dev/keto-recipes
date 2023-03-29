import Link from 'next/link'

export default function Navbar() {

    function toggleNavbar() {
        try {
            const navbar = document.getElementById('navbar-default');
            navbar?.classList.toggle('hidden');
        } catch (error) {
            console.log(error);
        }
    }

    const routes = [{
        name: 'Home',
        path: '/'
    },
    {
        name: 'Recipes',
        path: '/recipes'
    }]

    return (
        <nav className="bg-white p-4 | sticky top-0 z-10">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="text-gray font-bold text-xl hover:text-green">
                    Keto Recipes
                </div>
                <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className='flex flex-col mt-4 space-y-2 | md:flex-row md:space-x-8 md:mt-0 md:space-y-0'>
                        {routes.map((route, index) => (
                            <li className='text-gray hover:text-green font-medium' key={index}><Link href={route.path}>{route.name}</Link></li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )

};