import { Dialog } from '@headlessui/react';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import FormDashboard from './Dashboard/Form';
import { useState } from 'react';

const ModalTailwind = ({ isOpen, setIsOpen }) => {
    const closeModal = () => {
        setIsOpen(false); // Close modal when submit is successful
    };

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500/50 transition-opacity" />
            <div className="fixed inset-0 flex items-center justify-center p-6">
                <Dialog.Panel className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full space-y-4">
                    <div className="flex items-center">
                        <div className="bg-blue-500 p-3 rounded-full">
                            <DocumentPlusIcon className="h-6 w-6 text-gray-200" />
                        </div>
                        <h3 className="ml-3 text-xl font-semibold text-gray-900">Tambah Data Marketing</h3>
                    </div>
                    <p className="text-gray-500 text-lg">Isi formulir untuk menambahkan data baru.</p>

                    <div>
                        <FormDashboard closeModal={closeModal} />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition cursor-pointer"
                        >
                            Batal
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
export default ModalTailwind;
