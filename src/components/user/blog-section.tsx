/* eslint-disable @next/next/no-img-element */
export default function BlogSection() {
  return (
    <div
      id="blog"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f1f5f2]"
    >
      <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-10">
        Latest from the blog
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div>
          <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:zoom-in-110 lg:h-80 lg:aspect-none">
            <img
              alt="Traveling cross-country in a vintage van"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-lg hover:scale-125"
              height="450"
              src="https://assets.website-files.com/6474d40277f62794cee76375/6474d54fb1d7cf0fa941b6e4_Blog%20Image%201.jpg"
              width="260"
            />
          </div>
          <div className="mt-4 flex justify-between flex-col">
            <div className="group relative">
              <h3 className="text-md text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Traveling cross-country in a vintage van
                </a>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 underline">
              Read more
            </p>
          </div>
        </div>
        <div>
          <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
            <img
              alt="10 tips for planning your next international vacation"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full hover:scale-125"
              height="450"
              src="https://assets.website-files.com/6474d40277f62794cee76375/6474d4ac7c23ed3a602557cd_Blog%20Image%202.jpg"
              width="270"
            />
          </div>
          <div className="mt-4 flex justify-between flex-col">
            <div className="group relative">
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  10 tips for planning your next international vacation
                </a>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 underline">
              Read more
            </p>
          </div>
        </div>
        <div className="mt-0 max-lg:mt-8">
          <div className="w-full min-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              alt="A comprehensive guide of California National Parks"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full hover:scale-125"
              height="450"
              src="https://assets.website-files.com/6474d40277f62794cee76375/6474d53493a6291dbebfdf79_Blog%20Image%203.jpg"
              width="270"
            />
          </div>
          <div className="mt-4 flex justify-between flex-col">
            <div className="group relative">
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />A
                  comprehensive guide of California National Parks
                </a>
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900 underline">
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
