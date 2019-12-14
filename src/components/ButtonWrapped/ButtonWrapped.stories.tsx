import * as React from 'react';
import { ButtonWrapped } from './ButtonWrapped';

export default {
  title: `Addons/Docs/wrapped`,
  component: ButtonWrapped,
};

export const Basic = () => <ButtonWrapped buttonText={"TextHere"} commonProp={"random"} moreProps={"RandomToo"} />;