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
import BasicPlan from './BasicPlan';
import PrimiumPlan from './PrimiumPlan';



const Price = () => {
    const [count, setCount] = useState([1, 2, 3]);
    return (
        <div className="absolute top-[1268px] left-[2px] w-[1440px] h-[691px] overflow-hidden text-[150px] text-whitesmoke font-text-20-bold">
            <div className="absolute top-[0px] left-[1px] w-[1477px] h-[568px]">
                <img
                    className="absolute top-[0px] left-[0px] w-[1439px] h-[531.08px]"
                    alt=""
                    src={Line1Image}
                />
                <img
                    className="absolute top-[17.94px] left-[1px] w-[1439px] h-[531.14px]"
                    alt=""
                    src={Line1Image}
                />
                <img
                    className="absolute top-[36.94px] left-[2px] w-[1439px] h-[531.14px]"
                    alt=""
                    src={Line1Image}
                />
                <b className="absolute top-[119px] left-[836px] inline-block w-[641px] h-[158px]">
                    Podcast
                </b>
            </div>

            <div className="absolute top-[76px] left-[175px] w-[1090px] h-[577px] text-13xl text-black font-heading-heading-3">
                <div className="absolute top-[0px] left-[317px] flex flex-col items-center justify-start gap-[24px]">
                    <div className="flex flex-col items-center justify-start gap-[24px]">
                        <b className="relative">Choose your plan</b>
                        <div className="relative text-sm font-text-20-bold text-center inline-block w-[455px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's `}</div>
                    </div>
                    <div className="rounded-3xs bg-default-white shadow-[0px_10px_30px_rgba(154,_148,_148,_0.25)] h-[37px] flex flex-row py-1.5 pr-4 pl-1.5 box-border items-center justify-start gap-[10px] text-center text-sm font-text-20-bold">
                        <div className="rounded-3xs bg-light flex flex-row py-[3px] px-[9px] items-center justify-center">
                            <div className="relative">monthly</div>
                        </div>
                        <div className="relative">yearly</div>
                    </div>
                </div>


                <div className="absolute top-[220px] left-[0px] w-[1090px] h-[357px] text-xs">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs bg-default-white flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] border-[0.5px] border-solid border-ghost">
                        <BasicPlan />
                    </div>
                    <div className="absolute top-[0px] left-[787px] rounded-3xs bg-default-white flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] border-[0.5px] border-solid border-ghost">
                        <BasicPlan />
                    </div>
                    <div className="absolute top-[0px] left-[393px] rounded-3xs bg-ghost flex flex-col py-[35px] px-[27px] items-start justify-start gap-[24px] text-default-white">
                        <PrimiumPlan />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;