import * as React from 'react';
import {ReactNode, FC} from 'react';
// import { Wrapper, ExtendedProps } from '../Wrapper/Wrapper';

interface ButtonProps extends ExtendedProps {
    buttonText: string;
}

export const ButtonDemo: FC<ButtonProps> = ({
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


interface WrappedComponentProps {
    specificToEachWrappedComponent: string;
}

interface VeryExtendedProps {
    moreProps: string;
}

export interface ExtendedProps extends VeryExtendedProps {
    commonProp: string;
}

interface BaseWrapperProps extends ExtendedProps {
    whatever: string;
    children: FC<WrappedComponentProps>;
}


export const Wrapper: FC<BaseWrapperProps> = ({
    commonProp,
    moreProps,
    whatever,
    children
}: BaseWrapperProps) => {
    const specificToEachWrappedComponent = "It's specific";  //The important point is that it's created internally rather than passed down
    return <InsideWrapper moreProps={"Whatever"}>{children({specificToEachWrappedComponent})}</InsideWrapper>
};



// Inner Wrapper
interface SomeMoreProps extends VeryExtendedProps { //any interface would do, tbh
    children: ReactNode;    
}

const InsideWrapper = <T extends SomeMoreProps>({
    children
}: T) => {
    return <div>{children}</div>
}