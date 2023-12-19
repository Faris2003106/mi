import Link from "next/link";

export default function PromisingSectors() {
    return(
        <>
        <section className="invest_oppor" >
            <div className="dividers-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h2 className="section-title2">
                                <span>القطاعات الواعدة</span>
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <div className="listAll-wrapper2">
                                <a className="btn btn-sm" href="#">عرض الكل</a>
                                <div className="owl-custom-control">
                                    <div className="owl-controls">
                                        <button type="button" role="presentation" className="owl-prev">
                                            <i className="Ini Ini-cheveron-left" aria-hidden="true"></i>
                                        </button>
                                        <button type="button" role="presentation" className="owl-prev">
                                            <i className="Ini Ini-cheveron-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="wrapper">
                <div className="row">
                <div class="promising_card">
                    <div className='owl-item'>
                        <a href="#"></a>
                        <div className='icon-box'>
                            <a href="#">
                                <div className="icon">
                                    
                                </div>
                            </a>
                            <h4 >
                            <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                            </h4>
                            <p>
                                وتشمل ( البيع بالجملة والتجزئة لجميع السلع)
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="promising_card">
                    <div className='owl-item'>
                        <a href="#"></a>
                        <div className='icon-box'>
                            <a href="#">
                                <div className="icon">
                                    
                                </div>
                            </a>
                            <h4 >
                            <a href="#">أنشطة زراعية</a>
                            </h4>
                            <p>
                            وتشمل (جميع أنشطة الزراعة وتربية الدواجن والمواشي والخدمات الزراعية وصيد وتربية الأسماك ....)
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="promising_card">
                    <div className='owl-item'>
                        <a href="#"></a>
                        <div className='icon-box'>
                            <a href="#">
                                <div className="icon">
                                    
                                </div>
                            </a>
                            <h4 >
                            <a href="#">الأنشطة السياحية</a>
                            </h4>
                            <p>
                            وتشمل قطاع الإيواء، وكالات السفر، تنظيم الرحلات، قصور وقاعات الأفراح
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="promising_card">
                    <div className='owl-item'>
                        <a href="#"></a>
                        <div className='icon-box'>
                            <a href="#">
                                <div className="icon">
                                </div>
                            </a>
                            <h4 >
                            <a href="#">أنشطة تجارة الجملة والتجزئة</a>
                            </h4>
                            <p>
                                وتشمل ( البيع بالجملة والتجزئة لجميع السلع)
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="oppor_3" >
                    <img src='/images/img_06.png' alt='background' className='imgCover'/>
                    <div className='row'>                    
                        <div className='col-md-12'>
                            <div className='single-cat2-inner'>
                                <h2>التراخيص وإجراءات العمل</h2>
                                    <a href='#' className='oppor3_btn'>اكتشف المزيد</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
        </>
    );
}