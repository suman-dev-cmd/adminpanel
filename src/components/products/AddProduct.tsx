import React from "react";

const AddProduct:React.FC = () => {
    return(
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 md:ml-64">
            <div className="w-full  px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-gray-300 w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-700">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-white">
                                    Add Product
                                </h3>
                            </div>
                                
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto pt-5 pb-5">
                        <form className="w-full max-w-lg justify-items-center md:ml-60">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Product Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Product Category
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Product Description
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-password"
                                        type="text"
                                        placeholder="desciption"
                                    />
                                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                        Product Origin
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city"
                                        type="text"
                                        placeholder="Albuquerque"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                        Product Type
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                        Product Price
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-zip"
                                        type="text"
                                        placeholder="90210"
                                    />
                                </div>

                            </div>
                            <button className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 text-sm  text-white py-1 px-2 mt-5 rounded md:float-right" type="button">
                                Add Product
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;