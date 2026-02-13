import React from 'react';

const AnimatedBackground = () => {
    return (
        <div className="animated-bg" aria-hidden="true">
            {/* Primary blue blob — drifts top-left to center */}
            <div className="animated-bg__blob animated-bg__blob--1" />
            {/* Secondary pink blob — drifts bottom-right */}
            <div className="animated-bg__blob animated-bg__blob--2" />
            {/* Tertiary violet blob — drifts center-left */}
            <div className="animated-bg__blob animated-bg__blob--3" />
            {/* Accent warm blob — subtle, moves slowly */}
            <div className="animated-bg__blob animated-bg__blob--4" />
            {/* Small highlight blob — fast drift */}
            <div className="animated-bg__blob animated-bg__blob--5" />
        </div>
    );
};

export default AnimatedBackground;
