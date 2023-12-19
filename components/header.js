import Image from 'next/image'
import React, { useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';
/*const links = ["عن المنصة", "الميزة النسبية للمنطقة", "القطاعات", "الفرص الاستثمارية","خارطة الفرص الاستثمارية","المكتبة الاقتصادية","تواصل معنا"];*/

export default function Header() { 
    // script for the changing header background color by scrolling
    
    useEffect(() => {
        // Run this code when the component mounts
        $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
        });
    }, []);
    return (
        <>
        <div className='top-header'>
        <div className='header-info-left'>
            <ul>
                <li>
                    <a href='#'>English</a>
                </li>
            </ul>            
        </div>
        <div className="header-info-right">
            <ul className="header-social">
                <li><a target="_blank" href="https://twitter.com/madinahchamber" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/MadinahChamber/" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/madinahchamber/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/company/madinahchamber/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a target="_blank" href="/home/Contact"><i className="lni lni-envelope"></i></a></li>
            </ul>
        </div>
        </div>
        <hr/>
        <header>
    <div className='header'>
        
        <a href='#' className='logo'><img src='/images/mi.png'/></a>
        <input type='checkbox' id='menu-bar'/>
        <label for="menu-bar" id='menu-bar-label'>Menu</label>
    <nav className='navbar'>
        <ul>
            <li><a href='#'>عن المنصة</a></li>
            <li><a href='#'>الميزة النسبية للمنطقة +</a>
                <ul>
                    <li><a href='#'>منطقة المدينة المنورة</a></li>
                    <li><a href='#'>المحافظات</a></li>
                    <li><a href='#'>إمكانات السياحة</a></li>
                    <li><a href='#'>مزايا الاستثمار</a></li>
                </ul>
            </li>
            <li><a href='#'>القطاعات +</a>
                <ul>
                    <li><a href='#'>القطاعات الاقتصادية</a></li>
                    <li><a href='#'>القطاعات الواعدة +</a>
                    <ul>
                        <li><a href='#'>القطاع الصناعي</a></li>
                        <li><a href='#'>القطاع الزراعي</a></li>
                        <li><a href='#'>القطاع اللوجستي</a></li>
                        <li><a href='#'>قطاع التشييد والبناء</a></li>
                        <li><a href='#'>القطاع السياحي  </a></li>
                        <li><a href='#'>قطاع المطاعم والمقاهي</a></li>
                        <li><a href='#'>قطاع الجملة والتجزئة</a></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><a href='#'>الفرص الاستثمارية</a></li>
            <li><a href='#'>خارطة الفرص الاستثمارية</a></li>
            <li><a href='#'>المكتبة الاقتصادية</a></li>
            <li><a href='#'>تواصل معنا</a></li>
        </ul>
        
        </nav>
        { <div>
            <a href='#' className='navbtn'>تسجيل</a>
            </div>}
    </div>
    </header>
    <section>
        <div className='hero-bg'>
        <img src='/images/img_04.png'/>
        <div className='hero-title'><h2>قطاعات واعدة</h2></div>
        <button className='hero-btn'>إكتشف المزيد</button>
        </div>
    </section>
    </>
    );
}


// import Image from 'next/image'

// //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// //import { faTwitter, faFacebook, faInstagram, faLinkedin,faPhone,faEnvelope } from '@fortawesome/free-brands-svg-icons';
// /*const links = ["عن المنصة", "الميزة النسبية للمنطقة", "القطاعات", "الفرص الاستثمارية","خارطة الفرص الاستثمارية","المكتبة الاقتصادية","تواصل معنا"];*/
// export default function Header() { 
//     return (
//  <div>
//     <h1>test</h1>
//  </div>
//     );
// }