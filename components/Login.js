import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/client'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-items-center py-2'>
            <Image 
                src='/GDOCS.png'
                width='300'
                height='550'
                objectFit='contain'
            />
            <Button
                className='w-52 h-12'
                color='blue'
                buttonType='filled'
                ripple='light'
                onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
