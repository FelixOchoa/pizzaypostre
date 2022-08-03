import React from "react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ContainerModal } from "./ContainerModal";
import { getTime } from "../pizza/services/getTime";

export const Modal = ({ infoDialog, isOpen, dataModal }) => {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);
  const { open, color } = getTime([
    dataModal.horaApertura,
    dataModal.horaCierre,
  ]);

  const handleClose = () => {
    setIsOpenModal(false);
    infoDialog(false);
  };

  return (
    <>
      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
                <Dialog.Panel className="max-w-xs w-full lg:max-w-3xl transform overflow-y-auto rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="mb-4">
                    <img
                      src={dataModal.imagenLink}
                      alt={dataModal.nombre}
                      className="object-cover h-80 w-full"
                    />
                  </div>
                  <div className="pb-6 px-6">
                    <div className="flex justify-between">
                      <Dialog.Title
                        as="h2"
                        className="text-2xl font-medium leading-6 text-gray-900"
                      >
                        {dataModal.nombre}
                      </Dialog.Title>
                      <span
                        className={`lg:mr-8 text-gray-200 text-xs rounded-xl ${color} p-1`}
                      >
                        {open}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <ContainerModal
                        data={{
                          title: "Ubicación:",
                          data: dataModal.ubicacion,
                        }}
                      ></ContainerModal>
                      <ContainerModal
                        data={{ title: "Teléfono:", data: dataModal.telefono }}
                      ></ContainerModal>
                      <ContainerModal
                        data={{
                          title: "Hora de Apertura:",
                          data: dataModal.horaApertura,
                        }}
                      ></ContainerModal>
                      <ContainerModal
                        data={{
                          title: "Hora de Cierre:",
                          data: dataModal.horaCierre,
                        }}
                      ></ContainerModal>
                      <ContainerModal
                        data={{
                          title: "Instagram:",
                          data: dataModal.instagram,
                        }}
                      ></ContainerModal>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleClose}
                      >
                        Gracias, volver a la lista
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
