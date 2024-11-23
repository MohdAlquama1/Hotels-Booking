import { Link } from "react-router-dom";

function OwnerHomePage() {
    return (
        <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full">
                <a href="javascript:void(0)">
                    <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                </a>

                {/* Centered Navigation Menu */}
                <div className="flex flex-1 justify-center">
                    <ul className="flex gap-x-10">
                        <li className="max-lg:border-b max-lg:py-3">
                            <Link to="/owner" className="hover:text-blue-600 text-[15px] font-bold">
                                Home
                            </Link>
                        </li>
                        <li className="group max-lg:border-b max-lg:py-3 relative">
                            <Link to="/pages" className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                                Pages
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                    <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                                </svg>
                            </Link>
                            <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                                <li className="border-b py-2">
                                    <Link to="/addRoom" className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                                        Add Room Detail
                                    </Link>
                                </li>
                                <li className="border-b py-2">
                                    <Link to="/contact" className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                                        Contact
                                    </Link>
                                </li>
                                {/* Additional links can be added here */}
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    );
}

export default OwnerHomePage;
