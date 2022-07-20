import React from 'react';
import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="shadow-md py-4 px-4 md:px-0">
            <div className="flex flex-col align-center justify-center max-w-md m-auto">
                <a className="logo m-auto md:ml-0" href="https://cookunity.com/" target="_blank" rel="noreferrer" title="Go to CookUnity">
                    <img src="/assets/images/cookunity.png" alt="CookUnity" width="150" height="27" />
                </a>
            </div>
        </header>
    );
}
export default Header;
