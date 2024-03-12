import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center'>

            <div class="flex items-center justify-center gap-5">
                <a className='w-10 h-10' href="https://github.com/Buraktc" target="_blank" rel="noopener noreferrer">
                    <img className='' src="assets/github.png" alt="GitHub Logo" />
                </a>
                <a href="https://www.linkedin.com/in/burakcan-burcak-9b8894231/" target="_blank" rel="noopener noreferrer">
                    <img className='w-10 h-10' src="assets/linkedin.png" alt="Linkedin Logo" />
                </a>
            </div>


            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Burakcan Burcak.
            </p>

        </div>
    )
}

export default Footer;