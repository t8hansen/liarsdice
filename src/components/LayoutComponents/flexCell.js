
import React, { useMemo } from 'react';
import { Block } from 'baseui/block';
import type { Node } from 'react';

type Props = {
    children: Node,
    marginTop?: String,
    marginBottom?: String,
    marginLeft?: String,
    marginRight?: String,
    value?: string | Number,
    width?: String,
    height?: String,
    minWidth?: String,
    minHeight?: String
};

const FlexCell = ({
    children,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    value,
    width = 'auto',
    height = 'auto',
    minWidth,
    minHeight,
    ...rest
}: Props) => {
    const flexOverrides = useMemo(() => {
        return {
            Block: {
                style: {
                    width: width,
                    height: height,
                    lineHeight: '1em',
                    ...(marginTop ? { marginTop: marginTop } : undefined),
                    ...(marginBottom ? 
                        { marginBottom: marginBottom } : undefined),
                    ...(marginRight ? { marginRight: marginRight } : undefined),
                    ...(marginLeft ? { marginLeft: marginLeft } : undefined),
                    ...(value ? { flex: value } : undefined),
                    ...(minWidth ? { minWidth: minWidth } : undefined),
                    ...(minHeight ? { minHeight: minHeight } : undefined),
                }
            }
        };
    }, [
        height,
        marginTop,
        marginBottom,
        marginRight,
        marginLeft,
        minHeight,
        minWidth,
        width,
        value
    ]);

    return (
        <Block overrides={flexOverrides} {...rest}>
            {children}
        </Block>
    );
};

export default FlexCell