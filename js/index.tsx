import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { registerReactComponent } from '@anvil-works/anvil-react';

import "../scss/theme.scss";

registerReactComponent({
    name: "Bootstrap.Button",
    showInToolbox: true,
    properties: [],
    events: [],
    component: ({
        properties,
    }, ref) => {
        return <Button>A Button</Button>
    }
})