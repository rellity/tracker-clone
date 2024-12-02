/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import './css/sticky.css'
import { motion } from 'framer-motion'

export const SubsectionOne = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1600px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="w-[50%] mt-28 justify-center"
      >
        <div className="flex flex-grow-0 justify-center  w-auto">
          <div className="chip">
            <Image
              src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d62dda97f876644e13af_Icon%20Features.svg"
              loading="lazy"
              alt=""
              width={16}
              height={16}
            />
            <h2 id="features">Features</h2>
          </div>
        </div>

        <div>
          <h3 className="text-[56px] text-center max-sm:text-[36px]">
            Everything you need to plan your trips
          </h3>
        </div>
        <p className="trfsnclass text-center text-[20px]">
          Lorem ipsum dolor sit amet consectetur. Molestie risus lorem erat
          enim. Eget risus feugiat a mollis tincidunt.
        </p>
      </motion.div>
      <div className="flex flex-1 w-[80%] max-lg:w-full mt-12 justify-center">
        <div className="sticky-card-wrapper w-[90%] max-[473px]:w-[93vw] max-[991px]:w-[100%]">
          <div className="sticky-card">
            <div className="sticky-card-left">
              <div className="chip floating">
                <img
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e46ecae3853858bda2_Icon%20Plan.svg"
                  loading="lazy"
                  alt=""
                  className="chip-icon"
                />
                <h4 className="heading xxs">Plan</h4>
              </div>
              <div className="sticky-card-content">
                <h5 className="heading l max-sm:text-[36px]">
                  Plan every last detail of your trips
                </h5>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur. Molestie risus lorem
                  erat enim. Eget risus feugiat a mollis tincidunt.
                </p>
              </div>
            </div>
            <div className="sticky-card-right">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474dbdfc21170e92102db1e_UI%203A.svg"
                loading="lazy"
                alt=""
                className="ui-element plan-1"
              />
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474dbdf1ccf0c8f832b4b3c_UI%203B.svg"
                loading="lazy"
                alt=""
                className="ui-element plan-2 "
              />
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab346d721fec7c8133_Feature%20Image%201.webp"
                loading="lazy"
                alt="Photo of hand holding compass"
                className="image-fit max-[4579px]:w-[93vw] max-[991px]:w-[45vw] max-[767px]:w-[93vw] max-[479px]:w-[93vw]"
              />
            </div>
          </div>
          <div className="sticky-card middle">
            <div className="sticky-card-left">
              <div className="chip floating">
                <img
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e49b3210bd809e0951_Icon%20Track.svg"
                  loading="lazy"
                  alt=""
                  className="chip-icon"
                />
                <h4 className="heading xxs">Track</h4>
              </div>
              <div className="sticky-card-content">
                <h5 className="heading l max-sm:text-[36px]">
                  Track trip progress and update on the fly
                </h5>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur. Molestie risus lorem
                  erat enim. Eget risus feugiat a mollis tincidunt.
                </p>
              </div>
            </div>
            <div className="sticky-card-right">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d96b7d964bd6918d439d_UI%204.svg"
                loading="lazy"
                alt=""
                className="ui-element track"
              />
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8abcfec71cb21ae0208_Feature%20Image%202.webp"
                loading="lazy"
                alt="Man standing on edge of cliff"
                srcSet="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8abcfec71cb21ae0208_Feature%20Image%202-p-500.webp 500w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8abcfec71cb21ae0208_Feature%20Image%202-p-800.webp 800w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8abcfec71cb21ae0208_Feature%20Image%202-p-1080.webp 1080w, https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8abcfec71cb21ae0208_Feature%20Image%202.webp 1200w"
                className="image-fit max-[4579px]:w-[93vw] max-[991px]:w-[45vw] max-[767px]:w-[93vw] max-[479px]:w-[93vw]"
              />
            </div>
          </div>
          <div className="sticky-card bottom">
            <div className="sticky-card-left">
              <div className="chip floating">
                <img
                  src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d7e48a4537859b1efc31_Icon%20Discover.svg"
                  loading="lazy"
                  alt=""
                  className="chip-icon"
                />
                <h4 className="heading xxs">Discover</h4>
              </div>
              <div className="sticky-card-content">
                <h5 className="heading l max-sm:text-[36px]">
                  Find new trip ideas based on your preferences
                </h5>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur. Molestie risus lorem
                  erat enim. Eget risus feugiat a mollis tincidunt.
                </p>
              </div>
            </div>
            <div className="sticky-card-right">
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d96bc09f7a0c63c5267e_UI%206.svg"
                loading="lazy"
                alt=""
                className="ui-element discover-2"
              />
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d96b60230e93769b7526_UI%205.svg"
                loading="lazy"
                alt=""
                className="ui-element discover-1"
              />
              <img
                src="https://assets.website-files.com/6474a8cdb2c76397ccf31f74/6474d8ab7c23ed3a60290622_Feature%20Image%203.webp"
                loading="lazy"
                alt="Eiffel Tower in Paris"
                className="image-fit max-[4579px]:w-[93vw] max-[991px]:w-[45vw] max-[767px]:w-[93vw] max-[479px]:w-[93vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
