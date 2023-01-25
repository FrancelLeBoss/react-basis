import * as React from 'react';
import { DetailedHTMLProps, Fragment, HTMLAttributes, useRef, useState } from 'react'
import { Dialog as DialogCompose, Transition } from '@headlessui/react'
import clsx from "clsx";

interface DialogProps {
    open: boolean,
    //TODO implement this
    fullWidth?: boolean,
    contentPadding?: string,
    disableDialogClose?: boolean
    maxWidth?: string
    onClose: () => void,
    children?: React.ReactNode
}

export const MyDialog = (props: DialogProps) => {
    const { maxWidth = 'lg', disableDialogClose = false } = props;
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={props.open} as={Fragment}>
            <DialogCompose
                as="div"
                static
                style={{
                    zIndex: 400
                }}
                className="fixed inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                open={props.open}
                onClose={disableDialogClose ? () => { } : props.onClose}
            >
                <button className="hidden" ref={cancelButtonRef} />
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <DialogCompose.Overlay className="fixed bg-deep_soft_dark inset-0 bg-opacity-50 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className={`inline-block align-bottom rounded-t-lg bg-white dark:bg-dark rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-${maxWidth} w-full`}>
                            <div className={`bg-white dark:bg-dark rounded-t-lg pt-5 pb-4 p-6 sm:pb-4`}>
                                {React.Children.map(props.children, (child) =>
                                    ((child as any)?.type?.name) === DialogTitle.name && child
                                )}
                                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                    {React.Children.map(props.children, (child) =>
                                        ![DialogActions.name, DialogTitle.name].includes((child as any)?.type?.name) && child
                                    )}
                                </div>
                            </div>
                            {React.Children.map(props.children, (child) =>
                                ((child as any)?.type?.name) === DialogActions.name && child
                            )}
                        </div>
                    </Transition.Child>
                </div>
            </DialogCompose>
        </Transition.Root>
    )
};


export const DialogContent = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
    <div className={clsx("mt-2", props.className)} {...props} />


export const DialogActions = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
    <div className={clsx("bg-semi_light rounded-b-lg dark:bg-deep_dark px-4 py-3 sm:px-6 flex flex-row-reverse", props.className)} {...props} />

export const DialogTitle = ({
    children,
    ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) =>
    <h3 className="text-lg leading-6 font-medium text-blue-900">
        <h2 {...rest}>
            {children}
        </h2>
    </h3>
