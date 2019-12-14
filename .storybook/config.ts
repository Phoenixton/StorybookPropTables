import { configure, addParameters } from '@storybook/react';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';

// configure(require.context('../src', true, /\.stories\.tsx$/), module);
// import { configure } from '@storybook/react';
 
const addDoc = () => {
    addParameters({
        docs: {
            container: DocsContainer,
            page: DocsPage
        }
    });
};

addDoc();

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);