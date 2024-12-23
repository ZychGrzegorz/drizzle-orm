declare module 'swagger-ui-react' {
    import { ComponentType } from 'react';
    
    export interface SwaggerUIProps {
        url?: string;
        spec?: any;
        [key: string]: any;
    }
    
    const SwaggerUI: ComponentType<SwaggerUIProps>;
    export default SwaggerUI;
} 