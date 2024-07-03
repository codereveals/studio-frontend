
import Breadcrumb from "../__components/Breadcrumb";
import Card from "../__components/Card";
import FilterSidebar from "../__components/FilterSidebar";
import Wrapper from "../__components/Wrapper";


export default function SearchLayout({ children }) {
    return (
        <>
            <Breadcrumb title="search" />
            <Wrapper className="py-10">
                <div className="flex flex-col lg:flex-row space-y-5">
                    <FilterSidebar />
                    <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
                    <div className="flex-1">

                        {children}



                        {/* pagination */}

                        <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                            <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
                                <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-purple-700 bg-primary-6000 text-white focus:outline-none">
                                    1
                                </span>
                                <a
                                    className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                                    href="/"
                                >
                                    2
                                </a>
                                <a
                                    className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                                    href="/"
                                >
                                    3
                                </a>
                                <a
                                    className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                                    href="/"
                                >
                                    4
                                </a>
                            </nav>
                            <button
                                disabled=""
                                className=" bg-gradient-to-r from-purple-900 to-pink-800   relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                            >
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="3"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Show me more
                            </button>
                        </div>
                    </div>


                </div>
            </Wrapper>
        </>

    );
}
