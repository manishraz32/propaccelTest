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


const Review = () => {
    const [starCount, setStarCount] = useState([1, 2, 3, 4, 5]);
    const [vectorCount, setVectorCount] = useState([1, 2, 3, 4, 5])
    return (
        <div>
            <div className="absolute top-[1959px] left-[-1px] w-[1440px] h-[512px] text-21xl text-black">
                <div className="absolute top-[467px] left-[630px] flex flex-row items-start justify-start gap-[24px]">
                {
                        vectorCount.map((vc) => (
                            <div className="overflow-hidden flex flex-row items-center justify-center">
                                <img
                                    className="relative w-[15px] h-[15px]"
                                    alt=""
                                    src={vectordot}
                                />
                            </div>
                        ))
                }
                </div>


                <div className="absolute top-[57px] left-[175px] w-[1459px] h-[378px]">
                    <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
                        <b className="relative">Review from customers</b>
                        <div className="relative text-xs font-text-20-bold inline-block w-[399px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry
                        </div>
                    </div>
                    <div className="absolute top-[140px] left-[0px] w-[1459px] h-[238px] text-base">
                        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-default-white shadow-[0px_16px_40px_rgba(154,_148,_148,_0.25)] flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
                            <div className="flex flex-col items-start justify-start gap-[24px]">
                                <div className="flex flex-row items-center justify-start gap-[24px]">
                                    <img
                                        className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                                        alt=""
                                        src={LollaImage}
                                    />
                                    <div className="flex flex-col items-start justify-start gap-[8px]">
                                        <div className="flex flex-col items-start justify-start gap-[8px]">
                                            <b className="relative inline-block w-[88px] h-4 shrink-0">
                                                Lolla Smith
                                            </b>
                                            <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                                                Microsoft
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-[8px]">
                                            {
                                                starCount.map((sc) => (
                                                    <img
                                                        className="relative w-5 h-5 overflow-hidden shrink-0"
                                                        alt=""
                                                        src={StarImage}
                                                    />
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[497px] rounded-3xs bg-default-white flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
                            <div className="flex flex-col items-start justify-start gap-[24px]">
                                <div className="flex flex-row items-center justify-start gap-[24px]">
                                    <img
                                        className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                                        alt=""
                                        src={LollaImage}
                                    />
                                    <div className="flex flex-col items-start justify-start gap-[8px]">
                                        <div className="flex flex-col items-start justify-start gap-[8px]">
                                            <b className="relative inline-block w-[88px] h-4 shrink-0">
                                                Lolla Smith
                                            </b>
                                            <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                                                Microsoft
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-[8px]">
                                            {
                                                starCount.map((sc) => (
                                                    <img
                                                        className="relative w-5 h-5 overflow-hidden shrink-0"
                                                        alt=""
                                                        src={StarImage}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[994px] rounded-3xs bg-default-white flex flex-col py-9 px-12 items-center justify-center border-[0.5px] border-solid border-light">
                            <div className="flex flex-col items-start justify-start gap-[24px]">
                                <div className="flex flex-row items-center justify-start gap-[24px]">
                                    <img
                                        className="relative rounded-37xl-5 w-[70px] h-[70px] object-cover"
                                        alt=""
                                        src={LollaImage}
                                    />
                                    <div className="flex flex-col items-start justify-start gap-[8px]">
                                        <div className="flex flex-col items-start justify-start gap-[8px]">
                                            <b className="relative inline-block w-[88px] h-4 shrink-0">
                                                Lolla Smith
                                            </b>
                                            <div className="relative text-sm font-text-20-bold inline-block w-[65px] h-4 shrink-0">
                                                Microsoft
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-[8px]">
                                            {
                                                starCount.map((sc) => (
                                                    <img
                                                        className="relative w-5 h-5 overflow-hidden shrink-0"
                                                        alt=""
                                                        src={StarImage}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="relative text-xs font-text-20-bold inline-block w-[369px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make `}</div>
                            </div>
                        </div>
                        <div className="absolute top-[81px] left-[994px] rounded-[100px] bg-light shadow-[0px_16px_40px_rgba(154,_148,_148,_0.25)] overflow-hidden flex flex-row p-[5px] items-center justify-center">
                            <img
                                className="relative rounded-[80px] w-10 h-10 overflow-hidden shrink-0"
                                alt=""
                                src={arrowRight}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute top-[2514px] left-[0px] w-[1600px] h-[493px] overflow-hidden text-xs font-text-20-bold">
                <img
                    className="absolute top-[6.5px] left-[0px] w-[1600px] h-[486.44px]"
                    alt=""
                    src={polygon2Image}
                />
                <div className="absolute top-[419px] left-[222px] box-border w-[995px] h-[74px] overflow-hidden flex flex-row py-5 px-0 items-center justify-center gap-[192px] border-t-[0.5px] border-solid border-default-white">
                    <div className="relative">All Right Reserved @Copyright 2023</div>
                    <div className="flex flex-row items-center justify-start gap-[64px]">
                        <div className="flex flex-row items-start justify-start gap-[24px]">
                            <div className="relative">Terms of Service</div>
                            <div className="relative">Privacy Policy</div>
                            <div className="relative">Product</div>
                        </div>
                        <div className="w-36 flex flex-row items-center justify-start gap-[16px]">
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src={fbLogo}
                            />
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src={youtubeLogo}
                            />
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src={instaLogo}
                            />
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src={twitterLogo}
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute top-[68px] left-[422px] flex flex-col items-center justify-start gap-[64px] text-13xl text-black font-heading-heading-3">
                    <div className="flex flex-col items-center justify-start gap-[24px]">
                        <b className="relative">We have what you’re looking for</b>
                        <div className="relative text-xs text-blue-400 font-text-20-bold text-center inline-block w-[596px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type a
                        </div>
                    </div>
                    <div className="relative rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[60px] text-xl text-default-white font-text-20-bold">
                        <b className="absolute top-[15px] left-[36px]">Get Started Now</b>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Review