/* eslint-disable @next/next/no-img-element */
import './css/minione.css'

export const MiniSectionOne = () => {
  return (
    <div className="relative max-w-[1600px] mx-auto px-10 w-[80%]">
      <div className="_12-columns">
        <div className="grid grid-cols-3 gap-10 max-sm:grid-cols-2">
          <div className="icon-column fade-up w-[100%] resize-none">
            <div className="w-[40px] h-[40px] bg-[#f1f5f2] rounded-md justify-center items-center mb-32 flex">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e437fa40c4b78115bb_Icon%20Settings.svg"
                loading="lazy"
                alt=""
                className="icon"
              />
            </div>
            <h2 className="heading s">Adjust to fit your needs</h2>
            <p className="text-md text-justify">
              Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
              enim. Eget risus feugiat a mollis tincidunt.
            </p>
          </div>
          <div className="icon-column fade-up">
            <div className="w-[40px] h-[40px] bg-[#f1f5f2] rounded-md justify-center items-center mb-32 flex">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e493a6291dbec22f74_Icon%20Map.svg"
                loading="lazy"
                alt=""
                className="icon"
              />
            </div>
            <h2 className="heading s">AI-generated itineraries</h2>
            <p className="paragraph s">
              Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
              enim. Eget risus feugiat a mollis tincidunt.
            </p>
          </div>
          <div className="icon-column fade-up">
            <div className="w-[40px] h-[40px] bg-[#f1f5f2] rounded-md justify-center items-center mb-32 flex">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e4b1d7cf0fa94477f1_Icon%20Wallet.svg"
                loading="lazy"
                alt=""
                className="icon"
              />
            </div>
            <h2 className="heading s">Find the best deals</h2>
            <p className="paragraph s">
              Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
              enim. Eget risus feugiat a mollis tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
