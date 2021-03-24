import { isInteger } from "lodash";
import { Fragment, useEffect, useState } from "react";

type PropTypes = {
    iconClass: string;
    num: number;
    preNum?: string;
    postNum?: string;
    info: string;
};

const Counter = ({ num, iconClass, preNum, postNum, info }: PropTypes) => {
    const [currentNum, setCurrentNum] = useState(0);

    if (!isInteger(num))
        throw new TypeError("Counter: Prop 'num' must be an integer");

    useEffect(() => {
        setTimeout(() => {
            if (currentNum < num) setCurrentNum(currentNum + 1);
        }, 500 / num);
    }, [currentNum]);

    return (
        <div className="inline-flex flex-col min-w-min max-w-sm md:max-w-md lg:max-w-lg m-0 p-2">
            <i
                className={`${iconClass} bg-blue-600 text-white p-2 text-2xl w-min text-center ml-auto mr-auto`}
                style={{ borderRadius: "50%" }}
            />
            <span className="text-4xl font-bold text-center">
                {preNum}
                {currentNum}
                {postNum}
            </span>
            <span className="text-center">{info}</span>
        </div>
    );
};

export default Counter;
