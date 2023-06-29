import React, { useState, useEffect } from 'react'
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
import polygonTop from '../images/polygon-top.png';
import Feature from './Feature';

const HomePage = () => {
    const [count, setCount] = useState([]);

    const fillCount = () => {
        let arr = [];
        for (let i = 1; i <= 70; i++) {
            arr.push(i);
        }
        setCount(arr);
    }
    useEffect(() => {
        fillCount()
    }, [])

    return (
        <div >
            <img
                className="absolute top-[0px] left-[-500px] w-[2017.41px] h-[1100.82px] rotat-[-33.608deg] shrink-0"
                alt=""
                src={polygonTop}
            />

            <div className="absolute top-[0px] left-[0px] w-[1440px] h-[91px] overflow-hidden">
                <b className="absolute top-[36px] left-[175px] text-white hover:cursor-pointer">Logo</b>
                <div className="absolute top-[36px] left-[898px] flex flex-row items-start justify-start gap-[107px]">
                    <div className="relative text-white hover:cursor-pointer">About</div>
                    <div className="relative text-white hover:cursor-pointer">Pricing</div>
                    <div className="relative text-white hover:cursor-pointer"> Review</div>
                </div>
            </div>

            <div className="absolute top-[743px] left-[0px] w-[1439px] h-[525px] overflow-hidden text-xl text-black font-text-20-bold">
                <div className="absolute top-[49px] left-[175.5px] w-[552px] h-[397px]">
                    <div className="absolute top-[0px] left-[0px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
                        <Feature />
                    </div>
                    <div className="absolute top-[214px] left-[0px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
                        <Feature />
                    </div>
                    <div className="absolute top-[23px] left-[284px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
                        <Feature />
                    </div>
                    <div className="absolute top-[237px] left-[284px] rounded-3xs overflow-hidden flex flex-col p-[30px] items-start justify-start gap-[16px] border-[0.5px] border-solid border-ghost">
                        <Feature />
                    </div>
                </div>

                <div className="absolute top-[125.5px] left-[847.5px] flex flex-col items-start justify-start gap-[48px] text-29xl font-heading-heading-3">
                    <div className="flex flex-col items-start justify-start gap-[24px]">
                        <b className="relative">About the Course</b>
                        <div className="relative text-sm font-text-20-bold inline-block w-[367px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unkno
                        </div>
                    </div>
                    <div className="relative rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[60px] text-xl text-default-white font-text-20-bold">
                        <b className="absolute top-[15px] left-[56px]">Explore Now</b>
                    </div>
                </div>
            </div>
            <div className="absolute top-[91px] left-[0px] w-[1439px] h-[652px] overflow-hidden">
                <div className="absolute top-[94px] left-[175px] w-[580px] h-[371px]">
                    <div className="absolute top-[0px] left-[0px] w-[580px] h-[214.45px]">
                        <div className="absolute top-[151.7px] left-[0px] inline-block w-[433px] h-[62.75px] text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            in ustry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s
                        </div>
                        <b className="absolute top-[0px] left-[0px] text-29xl inline-block w-[580px] h-[127.7px] text-white">
                            Learn how to launch a successful podcast
                        </b>
                    </div>
                    <div className="absolute top-[296.14px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#4776e6,_#8e54e9)] w-[237px] h-[74.86px] text-xl font-text-20-bold">
                        <b className="absolute top-[19px] left-[55px] text-white">Sign up Now</b>
                    </div>
                </div>
                <div className="absolute top-[153.96px] left-[774.1px] w-[550px] h-[370px] flex flex-wrap">
                    {
                        count && count.map((c) => (
                            <img
                                src={ellipse}
                                className="w-[10px] h-10px b-[10px] m-[22px]"
                            />
                        ))
                    }
                </div>
                <img
                    className="absolute top-[94px] left-[773px] rounded-3xs w-[491px] h-[281px] object-cover"
                    alt="hello"
                    src={everyonesmilingImage}
                />
                <img
                    className="absolute top-[184px] left-[720px] rounded-3xs w-[491px] h-[281px] object-cover"
                    alt=""
                    src={groupbusinessImage}
                />
                <div className="absolute top-[431px] left-[1253.19px] rounded-8xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] w-[63px] h-[62px] flex flex-row py-0.5 px-[7px] box-border items-center justify-center [transform:_rotate(15.14deg)] [transform-origin:0_0]">
                    <img
                        className="relative w-[46.6px] h-[54.14px]"
                        alt=""
                        src={groupImage}
                    />
                </div>
                <div className="absolute top-[264.82px] left-[1295px] rounded-8xs bg-default-white shadow-[0px_10px_40px_rgba(154,_148,_148,_0.25)] w-[65px] h-[65px] overflow-hidden flex flex-col py-[7px] px-[3px] box-border items-center justify-center [transform:_rotate(-16.83deg)] [transform-origin:0_0]">
                    <img
                        className="relative w-[44.79px] h-[34.39px]"
                        alt=""
                        src={vectorImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage