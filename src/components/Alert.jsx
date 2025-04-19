import { useState } from 'react';

export default function Alert(props) {
    const [visible, setVisible] = useState(true);
    
    if (!visible) return null;

    return (
        <div style={{height:["50px"]}}>
            {
        props.alert && <div id="alert-4" className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-green-4000 dark:text-green-4000" role="alert">
            
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
            <strong>{props.alert.type}</strong>: {props.alert.msg}    
            </div>
        </div>
}
        </div>
    );

}