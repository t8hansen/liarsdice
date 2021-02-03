import React, { useMemo } from 'react';
import { Block } from 'baseui/block';

type KnownProps = {
    children?: any,
    direction?: String,
    wrap?: Boolean,
    verticalAlign?: String,
    horizontalAlign?: String,
    height?: String,
    fullWidth?: Boolean,
    marginTop?:String,
    marginBottom?: String,
    marginRight?: String,
    marginLeft?: String,
    backgroundColor?: String,
    borderWidth?: String,
    borderStyle?: String,
};

type Props = {
    ...KnownProps,
    rest: $Rest<Props, KnownProps>
};

const Flex = ({
    children,
    direction='row',
    wrap= true,
    verticalAlign='baseline',
    horizontalAlign='flex-start',
    height='auto',
    fullWidth,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    backgroundColor,
    borderWidth,
    borderColor,
    borderStyle='hidden',
    overrides,
    ...rest
}: Props) => {
    const flexOverrides = useMemo(() => {
        return {
            Block: {
                style: {
                    height: height,
                    borderStyle: borderStyle,
                    ...(fullWidth ? { width: '100%' } : undefined),
                    ...(marginTop ? { marginTop: marginTop } : undefined),
                    ...(marginBottom ? 
                        { marginBottom: marginBottom } : undefined),
                    ...(marginRight ? { marginRight: marginRight } : undefined),
                    ...(marginLeft ? { marginLeft: marginLeft } : undefined),
                    ...(borderWidth ? { borderWidth: borderWidth } : undefined),
                    ...(borderColor ? { borderColor: borderColor } : undefined)
                }
            }
        };
    }, [
        height,
        fullWidth,
        marginTop,
        marginBottom,
        marginRight,
        marginLeft,
        borderColor,
        borderWidth,
        borderStyle
    ]);

    return (
        <Block
            display='flex'
            flexDirection={direction}
            alignItems = {verticalAlign}
            justifyContent={horizontalAlign}
            backgroundColor={backgroundColor}
            overrides={flexOverrides}
            {...(wrap ? { flexWrap: true } : undefined)}
            {...rest}
        >
            {children}
        </Block>
    );
};

export default Flex;
