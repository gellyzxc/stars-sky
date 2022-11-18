declare module "*.svg" {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.js";
declare module "*.jsx";
declare module "*.module.scss";
declare module "*.module.css";