import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { registerReactComponent, useActions } from "@anvil-works/anvil-react";
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
    }, {
        name: "size",
        type: "enum",
        options: ["small", "medium", "large"],
        defaultValue: "medium",
    }, {
        name: "enabled",
        type: "boolean",
        defaultValue: true,
    }],
    events: [{
        name: "click",
    }],
    component: ({
        properties: {text, variant, outline, size, enabled},
    }, ref) => {
        const { designName } = useDesignerApi();
        const { raiseEvent } = useActions();
        const _size = React.useMemo(() => {
            switch(size) {
                case "small": return "sm";
                case "large": return "lg";
                default: return undefined;
            }
        }, [size]);
        return <Button ref={useInlineEditRef("text", ref)}
                       variant={`${outline ? 'outline-' : ''}${variant}`}
                       size={_size}
                       disabled={!enabled}
                       onClick={() => raiseEvent("click", {})}
        >
            {text || designName}
        </Button>
    }
})