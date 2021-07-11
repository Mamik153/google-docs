import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useSession, signOut } from 'next-auth/client'

function Header({ img }) {
    const [session] = useSession()
    
    return (
        <header className='flex items-center sticky top-0 z-50 px-4 py-2 shadow-md bg-white'>
            <Button 
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='h-20 w-20 border-0'
            >
                <Icon name='menu' size='3xl' />
            </Button>

            <Icon name='description' size='5xl' color='blue' />
            <h1 className='ml-2 text-gray-600 text-2xl'>Docs</h1>

            <div className='mx-5 md:mx-20 flex flex-grow bg-gray-100 items-center px-5 py-2 rounded-lg text-gray-600 focus-within:text-gray-600 focus-within:shadow-md'>
                <Icon name='search' size='3xl' color='darkgray' />
                <input type='text' className='bg-transparent flex-1 px-5 text-base outline-none' placeholder='Search' />
            </div>
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='ml-5 md:ml-20 h-20 w-20 border-0'
            >
                <Icon name='apps' size='3xl' color='gray' />
            </Button>

            <img 
                loading='lazy' 
                src={session.user.image}
                alt="" 
                className='cursor-pointer h-12 w-12 rounded-full ml-2'    
                onClick={signOut}
            />
        </header>
    )
}

export default Header
