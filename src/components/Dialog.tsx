import { Dialog, Transition } from '@headlessui/react'
import React from 'react'
import { Fragment } from 'react'

interface DialogProps {
  open: boolean,
  fullWidth?: boolean,
  contentPadding?: string,
  disableDialogClose?: boolean
  maxWidth?: string,
  title?: string,
  children: React.ReactNode,
  onClose: () => void,
  onSubmit: () => void
}

export default function MyModal(props: DialogProps) {

  return (
    <>
      <Transition appear show={props.open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => props.onClose()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform  overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-medium leading-6 text-white bg-blue-900 pb-2 border-b capitalize"
                  >
                    <div className='flex justify-between items-center px-3 pt-2 pb-1'>
                      {props.title || "Title"}
                      <span className='text-sm cursor-pointer' onClick={() => props.onClose()}>X</span>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2 px-3 pb-3">
                    {props.children}
                  </div>
                  <hr />
                  <div className='mt-2 px pt-2 pb-4 mx-6 flex justify-end items-center gap-2'>
                    <button className='py-2 px-3 text-sm font-medium bg-red-600 text-white hover:bg-blue-600 rounded border-transparent  ' onClick={() => props.onClose()}>Отмена</button>
                    <button className='py-2 px-3 text-sm font-medium bg-blue-900 text-white hover:bg-blue-600 rounded border-transparent  ' onClick={() => props.onSubmit()}>послать</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
