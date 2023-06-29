import React, { useState } from 'react'
import everyonesmilingImage from '../images/everyonesmiling.png';
import groupbusinessImage from '../images/groupbusiness.png';
import vectorImage from '../images/Vector-mice.svg'
import polygon2Image from '../images/Polygon.png';
import LollaImage from '../images/Lolla1.png'
import StarImage from '../images/Star.svg';
import groupImage from '../images/Group.svg'
import fbLogo from '../images/fbLogo.svg';
import youtubeLogo from '../images/youtubeLogo.svg';
import instaLogo from '../images/instaLogo.svg'
import twitterLogo from '../images/twitterLogo.svg'
import Line1Image from '../images/line-1.svg'
import arrowRight from '../images/arrow-right.svg';
import ellipse from '../images/Ellipse.svg';
import vectordot from '../images/vector-dot.svg'


const BasicPlan = () => {
  const [count, setCount] = useState([1, 2, 3]);
  return (
    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-default-white flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] border-[0.5px] border-solid border-ghost">
          <div className="w-[249px] flex flex-col items-start justify-start gap-[16px] text-base">
              <b className="relative">Basic Plan</b>
              <div className="relative text-xs font-text-20-bold inline-block w-[264px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
              </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[19px] text-13xl text-ghost">
              <b className="relative ">$ 54</b>
              <div className="relative text-sm font-text-20-bold">/month</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px]">
              {
                  count.map((c) => (
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                          <img
                              className="relative w-[4.75px] h-[4.75px]"
                              alt=""
                              src={vectordot}
                          />
                          <b className="relative">Free access to video class</b>
                      </div>
                  ))
              }
          </div>
          <div className="relative rounded-8xs box-border w-[149px] h-11 text-ghost font-text-20-bold border-[0.5px] border-solid border-ghost">
              <div className="absolute top-[14px] left-[31px]">
                  Start Free Trial
              </div>
          </div>
    </div>
  )
}

export default BasicPlan