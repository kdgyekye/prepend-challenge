import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ children, setShow, show, size }) => {
	return (
		<Fragment>
			<Transition.Root show={show} as={Fragment}>
				<Dialog
					as="div"
					static
					className="fixed z-10 inset-0 overflow-y-auto"
					open={show}
					onClose={() => null}
				>
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
							<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
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
								style={{ minWidth: `${size}vw` }}
								className="inline-block align-bottom bg-white rounded-md  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
							>
								{children}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</Fragment>
	);
};

Modal.defaultProps = {
	size: 30,
};

export default Modal;
