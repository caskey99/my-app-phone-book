import React from 'react';
import cl from '../../styles/ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {
    const rootClasses = [cl.modalWindow]
    if(visible) {
        rootClasses.push(cl.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalWindowContent} onClick={(e) => e.stopPropagation() }>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;