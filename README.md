# react-hopscotch

React components for Hopscotch framework

## Usage

`HopscotchContext` expose instance of Hopscotch in context, so you can access it to call methods like defined in [Hopscotch’s documentation](http://linkedin.github.io/hopscotch/).

All tour and step options like defined in the Hopscotch’s documentation are available respectively in `HopscotchContext` and `Step` components.

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HopscotchContext, Step } from 'react-hopscotch';

import 'hopscotch/dist/css/hopscotch.css';

ReactDOM.render(
    <HopscotchContext id="hello-hopscotch" active>
        <div>
            <Step
                title="My Header"
                content="This is the header of my page."
                placement="bottom"
            >
                <h1 id="header">
                    My First Hopscotch Tour
                </h1>
            </Step>
            <Step
                title="My content"
                content="Here is where I put my content."
                placement="bottom"
            >
                <div id="content">
                    <p>Content goes here...</p>
                </div>
            </Step>
        </div>
    </HopscotchContext>,
    document.getElementById('root')
);
```
