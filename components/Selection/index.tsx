import '../../app/globals.css';
import { FlagIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function Selection() {
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
      style={{ marginTop: '80px', marginBottom: '120px' }}
    >
      <h1 className="categoryTitle text-3xl font-bold pt-5 max-w-[85rem] mx-auto pb-2">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <a href="/" className="flex text-gray-500 hover:text-green-500">
                <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-4 w-4 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="/selection"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-green-500"
                >
                  選考
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </h1>
      <div className="mx-auto text-base leading-7">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
        <h1 className="text-3xl font-bold">
          <div className="flex items-center pb-2 pt-2 mt-5">
            <FlagIcon className="h-8 w-8 mr-2" aria-hidden="true" />
            <div className="text-black">選考</div>
          </div>
        </h1>
      </div>
    </div>
  );
}
