import React from 'react';
import { Button } from 'primereact/button';

const BasicButton = ({ label, icon, onClick, className, disabled }) => {
    return (
        <Button 
            label={label} 
            icon={icon} 
            className={`p-button p-ripple p-6 ${className}`} 
            onClick={onClick} 
            disabled={disabled}
            raised 
        />
    );
};

export default BasicButton;
