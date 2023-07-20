import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { registerReactComponent } from "@anvil-works/anvil-react";
import { useDesignerApi, useInlineEditRef } from "@anvil-works/anvil-react/designer";

registerReactComponent({
    name: "Bootstrap.Button",
    showInToolbox: true,
    properties: [{
        name: "text",
        type: "string",
        defaultValue: '',
    }, {
        name: "variant",
        type: "enum",
        options: ["primary","secondary","success","warning","danger","info","light","dark","link"],
        defaultValue: "primary",
    }, {
        name: "outline",
        type: "boolean",
        defaultValue: false,
    }],
    events: [],
    component: ({
        properties: {text, variant, outline},
    }, ref) => {
        const { designName } = useDesignerApi();
        return <Button ref={useInlineEditRef("text", ref)}
                       variant={`${outline ? 'outline-' : ''}${variant}`}
        >
            {text || designName}
        </Button>
    }
})