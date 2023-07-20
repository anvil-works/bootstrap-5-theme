import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { registerReactComponent } from '@anvil-works/anvil-react';
import { useDesignerApi } from "@anvil-works/anvil-react/designer";

import "../scss/theme.scss";

registerReactComponent({
    name: "Bootstrap.Button",
    showInToolbox: true,
    properties: [{
        name: "text",
        type: "string",
        defaultValue: '',
    }],
    events: [],
    component: ({
        properties: {text},
    }, ref) => {
        const { inDesigner, designName } = useDesignerApi();
        return <Button>{text || designName}</Button>
    }
})