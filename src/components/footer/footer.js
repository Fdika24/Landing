import React from 'react';
import './footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Baked with ♥ by Farhandika
                </p>
            </section>
        </div>
    );
}

export default Footer;