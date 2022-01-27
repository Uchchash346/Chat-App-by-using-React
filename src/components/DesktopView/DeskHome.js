import React from 'react';
import DeskHeader from './DeskHeader/DeskHeader';
import DeskMessage from './DeskMessage/DeskMessage';
import DeskNavBar from './DeskNavBar';

const DeskHome = () => {
    return (
        <div>
            <DeskNavBar />
            <DeskHeader />
            <DeskMessage />
        </div>
    );
};

export default DeskHome;