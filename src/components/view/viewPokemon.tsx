import {Fragment, useState} from 'react';
import Modal from "../modal";
import { Types } from "./types";

import {UserIcon,
	BadgeCheckIcon,
	HomeIcon,
	HashtagIcon,
	FireIcon,
	PlusCircleIcon} from "@heroicons/react/solid"

const ViewPokemon:React.FC<Types> = (props) => {
	const {species,type,weight,moves,stats,image,show,setShow} = props
	return (
		<Modal show={show} setShow={setShow} size={50}>
			<div className="bg-white shadow overflow-hidden sm:rounded-lg mb-5">
				<div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
					<button
						type="button"
						onClick={() => {
						setShow(false)
					}}
					className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
					aria-label="Close"
					>
						<svg
							className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						>
							<path
								strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
				</div>
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Pokemon Information</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">Pokemon details and attributes.</p>
				</div>
				<div className="flex px-6 py-5 sm:px-8 justify-between items-center">
					<div className="space-x-3 flex items-center ">
						<div className="flex-shrink-0 ">
							<div className="relative">
								<img
									className="h-16 w-16 rounded-full"
									src={image}
									alt="Pokemon"
								/>
								<span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
							</div>
						</div>
						<div className="sm:col-span-2">
							<h1 className="text-3xl font-bold text-gray-900">{species}</h1>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
							<dt className="text-sm font-medium text-gray-500 flex"><span><UserIcon className='h-5 w-5 inset-0 mr-2 text-blue-500'/></span>Species</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{species}</dd>
						</div>
						<div className="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
							<dt className="text-sm font-medium text-gray-500 flex"><BadgeCheckIcon className='h-5 w-5 inset-0 mr-2 text-blue-500'/>Types</dt>
							<dd>
								{
									type?.map((item,index) => {
										return (
											<div className="w-24 flex justify-center items-center mt-1 text-sm text-white sm:mt-0 sm:col-span-2 rounded-full bg-indigo-500 mb-3" key={index}>{item}</div>
										)
									})
								}
							</dd>
						</div>
						<div className="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
							<dt className="text-sm font-medium text-gray-500 flex"><HashtagIcon className='h-5 w-5 inset-0 mr-2 text-blue-500'/>Weight</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{weight}</dd>
						</div>
						<div className="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
							<dt className="text-sm font-medium text-gray-500 flex"><FireIcon className='h-5 w-5 inset-0 mr-2 text-blue-500'/>Moves</dt>
							<dd>
								{
									moves?.map((item,index) => {
										return (
											<div className="flex justify-center items-center mt-1 text-sm text-white sm:mt-0 sm:col-span-2 rounded-full bg-red-500 mb-3" key={index}>{item}</div>
										)
									})
								}
							</dd>
						</div>
						<div className="bg-white px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-8">
							<dt className="text-sm font-medium text-gray-500 flex"><PlusCircleIcon className='h-5 w-5 inset-0 mr-2 text-blue-500'/>Moves</dt>
							<dd>
								{
									stats?.map((item,index) => {
										return (
											<div className="flex justify-center items-center mt-1 mb-3 text-sm text-white sm:mt-0 sm:col-span-2 bg-yellow-500 rounded-full" key={index}>
												<span className="font-medium">{item?.name}</span> - <span className="font-regular">{item?.value}</span>
											</div>
										)
									})
								}
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div className="py-2 border-t border-gray-200 mr-5 flex justify-end bottom-2 w-full">
				<span className="inline-flex rounded-none shadow-sm mr-2">
					<button
						onClick={() => setShow(false)}
						type="button"
						className="inline-flex rounded-none items-center px-10 mr-2 py-2 border border-transparent text-sm leading-5 font-light text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-yellow focus:border-yellow-400 active:bg-yellow-400 transition duration-150 ease-in-out"
					>
					  Close
					</button>
			  	</span>
			</div>
		</Modal>
	)
}

export default ViewPokemon;