import React, {useMemo} from "react";

type KnownProps = {
    children?: any,
    padding?: String,
    margin?: String,
    textAlign?: String,
    height?: String,
    maxHeight?: String,
    width?: String,
    flexValue?: Number,
    overflow?: String,
    background?: String,
    position?: String,
    top? string,
    bottom?: string,
    left?: string,
    right?: string,
    borderWidth?: string,
    borderRight?: string,
    borderLeft?: string,
    borderColor?: string,
    borderStyle?: string,
    opacity?: Number,
    className?: string
};

type Props = {
    ...KnownProps,
    rest: $Rest<Props, KnownProps>
};

/*
padding - padding in pixels
margin - margin in pixels
textAlign - right, left, or center
height - height in pixels or percentage
maxHeight - max height in pixels
width - pixels or percentage
flexValue - 1 or 0 only in the flex block
overflow - if it should be scrollable or hidden
background - background color
position - absolute, relative or fixed
top, bottom, left or right - element postion
borderColor (primitive theme)
*/

const Container = ({
    padding,
    margin,
    textAlign,
    height,
    maxHeight,
    width,
    flexValue,
    overflow= "auto",
    background,
    postion,
    top,
    bottom,
    left,
    right,
    borderWidth,
    borderRight,
    borderLeft,
    borderColor,
    borderStyle,
    opacity,
    children,
    ...rest
}: Props) => {
    const boxStyle = useMemo(() => {
        return {
            ...(padding ? { padding: padding } : undefined),
            ...(margin ?  { margin: margin } : undefined),
            ...(textAlign ? { textAlign: textAlign } :undefined),
            ...(height ? { height: height } :undefined),
            ...(width ? { width: width } :undefined),
            ...(flexValue ? { flexValue: flexValue } :undefined),
            ...(background ? { background: background } :undefined),
            ...(borderWidth ? { borderWidth: borderWidth } :undefined),
            ...(borderRight ? { borderRight: borderRight } :undefined),
            ...(borderLeft ? { borderLeft: borderLeft } :undefined),
            ...(borderColor ? { borderColor: borderColor } :undefined),
            ...(borderWidth || borderColor ? { borderStyle: "solid" } :undefined),
            boxSizing: "border-box",
            overflow: overflow,
            postion: postion || "relative",
            top: top || undefined,
            bottom: bottom || undefined,
            left: left || undefined,
            right: right || undefined,
            maxHeight: maxHeight || undefined,
            opacity: opacity || undefined,
            borderStyle: borderStyle || undefined,
        };
    }, [
        background,
        borderColor,
        borderWidth,
        borderStyle,
        borderRight,
        borderLeft,
        bottom,
        flexValue,
        height,
        left,
        margin,
        maxHeight,
        opacity,
        overflow,
        padding,
        postion,
        right,
        textAlign,
        top,
        width
    ]);
    return (
        <div style={boxStyle} {...rest}>
            {children}
        </div>
    );
};

export default Container;