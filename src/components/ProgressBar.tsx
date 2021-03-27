import { CSSProperties } from "react";

type PropTypes = {
    percent: number;
    outerProps: any;
    innerProps: any;
    innerStyle: CSSProperties;
    outerStyle: CSSProperties;
};

const ProgressBar = ({
    percent,
    outerProps,
    innerProps,
    outerStyle,
    innerStyle,
}: PropTypes) => {
    if ("style" in innerProps) {
        throw new TypeError("style not allowed for ProgressBar innerProps");
    }

    if ("style" in outerProps) {
        throw new Error("style not allowed for ProgressBar outerProps");
    }

    return (
        <div {...outerProps} style={{ minHeight: 24, ...outerStyle }}>
            <div
                {...innerProps}
                style={{ height: "100%", width: `${percent}%`, ...innerStyle }}
            ></div>
        </div>
    );
};

export default ProgressBar;
