import * as React from 'react';
import { ButtonDemo } from './Button';

export default {
  title: `Addons/Docs/typescript`,
  component: ButtonDemo,
};

export const Basic = () => <ButtonDemo buttonText={"TextHere"} commonProp={"random"} moreProps={"RandomToo"} />;