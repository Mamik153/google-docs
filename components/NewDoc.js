import { useState } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { getSession, useSession } from 'next-auth/client'
import { db } from '../firebase'
import firebase from 'firebase'

const NewDoc = () => {
    const [session] = useSession()
    const [showModal, setShowModal] = useState(false)
    const [input, setInput] = useState('')

    const createDocument = () => {
        if(!input) return

        db.collection('userDocs').doc(session.user.email).collection('docs').add({
            fileName: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
        setShowModal(false)
    }

    const modal = (
        <Modal 
            size='sm' 
            active={showModal} 
            toggler={() => setShowModal(false)}
        >
            <ModalBody>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                    className='outline-none w-full'
                    placeholder='Enter name of document...'
                    onKeyDown={(e) => e.key === 'Enter' && createDocument()}
                />
            </ModalBody> 
            <ModalFooter>
                <Button
                    color='blue'
                    buttonType='link'
                    onClick={(e) => setShowModal(false)}
                    ripple='dark'
                >
                    Cancel    
                </Button>    

                <Button color='blue' onClick={createDocument} ripple='light'>
                    Create
                </Button>
            </ModalFooter>   
        </Modal>
    )

    return (
        <>
            {modal}
            <section className='bg-[#F8F9FA] pb-10 px-10'>
                <div className='max-w-3xl mx-auto'>
                <div className='flex items-center justify-between py-6'>
                    <h2 className='text-gray-700 text-lg'>Start a new document</h2>
                    <Button
                    color='gray'
                    buttonType='outline'
                    iconOnly={true}
                    ripple='dark'
                    className='border-0'
                    >
                    <Icon name='more_vert' size='3xl' />
                    </Button>
                </div>
                <div className=''>
                    <div className='relative h-52 w-40 border-2 cursor-pointer hover:border-blue-600'>
                    <Image src='https://links.papareact.com/pju' layout='fill'  onClick={() => setShowModal(true)} />
                    </div>
                    
                    <p className='ml-2 mt-2 font-semibold text-sm text-gray-700'>Blank</p>
                </div>
                </div>
            </section>
        </>
    )
}

export default NewDoc
