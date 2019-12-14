import * as React from 'react';
import { FC } from 'react';
import { Wrapper, ExtendedProps } from '../Wrapper/Wrapper';

interface ButtonProps extends ExtendedProps {
    buttonText: string;
}

export const ButtonWrapped: FC<ButtonProps> = ({
    buttonText,
    commonProp,
    moreProps
}: ButtonProps) => {
    const whatever = "Created here";
    return (<Wrapper commonProp={commonProp} moreProps={moreProps} whatever={whatever}>
            {injected => 
                <button>{`${buttonText} - ${injected.specificToEachWrappedComponent}`}</button>
            }        
        </Wrapper>);
};
