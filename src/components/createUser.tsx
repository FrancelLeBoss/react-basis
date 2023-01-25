import React, { useState } from 'react'


interface createUser {
    open: boolean
    setOpen: (open: boolean) => void
    user?: any
}
const createUser = (props: createUser) => {
    const [formState, setFormState] = useState<any>({
        values: {},
        errors: {},
        isValid: false,
        isSubmit: false
    })
    return (
        <div className='border border-blue-900 px-16 py-12 max-w-lg'>
            <h2 className='text-blue-900 font-medium'>завести аккаунт</h2>
            <hr />
        </div>
    )
}
export default createUser