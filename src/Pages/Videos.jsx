import React, { useEffect } from 'react';
import styles from "./Videos.module.css"
import ReactPlayer from 'react-player'
import Carousalbox from '../Components/Carousal/Carousal';

import RightPartH from '../Components/RightPartH';
import SubNavbar from '../Components/SubNavbar';

const Videos = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const data ={
        title:"Video",
        subTitle:"Video home",
        data1:"Players in Focus",
        data2:"T20 Timeout",
        data3:"Hindi videos",
        data4:"Match Day",
        data5:"Han ya Naa"
    }
  return (
    <div>
        <SubNavbar iteam={data}/>
        <div className={styles.advertiseImg}>
        <img src="https://tpc.googlesyndication.com/simgad/4271044209677937619?" alt="ad-top" />
        </div>

        <div className={styles.vidOne}>
            <div className={styles.vidOneLeft}>
                <div className={styles.textHolder}>
                    <h6>Features</h6>
                    <h1>Can Kohli make it count at the Asia Cup?</h1>
                    <p>The former India captain will have a point to prove come August 28</p>
                    <h6>Aug 23, 2022</h6>
                </div>
            </div>
            <div className={styles.vidOneRight}>
                <div className={styles.vid}>
                <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_80/esci/media/motion/2022/0823/dm_220823_INET_CRIC_asiacup_kohli-pkg_nonbranded_global/dm_220823_INET_CRIC_asiacup_kohli-pkg_nonbranded_global.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                </div>
            </div>
        </div>

        <div className={styles.featureHead}>
           <div><h2> Feature Videos</h2></div>
           <div><a href="">View all videos <i class="fa-solid fa-arrow-right"></i></a></div>
        </div>

        <div className={styles.hozVidSnippet}>
            <div className={styles.newsBox}>
                <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                </div>
            </div>
            <div className={styles.newsBox}>
                <div className={styles.vidCont}>
                    <div className={styles.vid}>
                <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0824/dm_220824_Stokes_promises_England_wont_take_backwards_step/dm_220824_Stokes_promises_England_wont_take_backwards_step.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                </div>
                </div>
            </div>
            <div className={styles.newsBox}>
                <div className={styles.vidCont}>
                    <div className={styles.vid}>
                <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0823/dm_220823_interview_nonbranded_gayleint/dm_220823_interview_nonbranded_gayleint.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                </div>
                </div>
            </div>
            <div className={styles.newsBox}>
                <div className={styles.vidCont}>
                    <div className={styles.vid}>
                <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0823/dm_220823_INET_CRIC_Feature_Could_you_build_your_own_DRS_system_at_home_20220823_GLOBAL/dm_220823_INET_CRIC_Feature_Could_you_build_your_own_DRS_system_at_home_20220823_GLOBAL.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                </div>
                </div>
            </div>
        </div>

        <div className={styles.featureHead}>
           <div><h2>ESPNcricinfo shows</h2></div>
           {/* <div><a href="">View all videos <i class="fa-solid fa-arrow-right"></i></a></div> */}
        </div>

        <div className={styles.carousalHold}>
            <Carousalbox />
        </div>

        <div  className={styles.GridHold}>
            <div className={styles.GridHoldLeft} >
                <div className={styles.GridHoldVid}>
                    <div className={styles.boxHold}>
                    <div style={{backgroundImage:"url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/336600/336674.jpg)"}} className={styles.boxImage}>
                        <img style={{width:"90%"}} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/340800/340880.png" alt="" />
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0826/dm_220826_INET_CRIC_aisacup-m1-preview_nonbranded_global/dm_220826_INET_CRIC_aisacup-m1-preview_nonbranded_global.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Should Afghanistan batters look to take on the Sri Lanka spinners?
                        </h2>
                        <p>
                        Aug 26, 2022
                        </p>
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0826/dm_220826_INET_CRIC_aisacup-promo_nonbranded_global/dm_220826_INET_CRIC_aisacup-promo_nonbranded_global.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Who will take the Asia Cup by storm? Which teams will make the final?
                        </h2>
                        <p>
                        Aug 26, 2022
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.GridHoldVid}>
                    <div className={styles.boxHold}>
                    <div style={{backgroundImage:"url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/336600/336670.jpg)"}} className={styles.boxImage}>
                        <img style={{width:"90%"}} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/336600/336683.png" alt="" />
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0826/dm_220826_fantasypick/dm_220826_fantasypick.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Fantasy Pick: Back the spin threat of Rashid Khan and Wanindu Hasaranga
                        </h2>
                        <p>
                        Aug 26, 2022
                        </p>
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0807/dm_220807_INET_CRIC_indvwi_fantasy-t20i5_wonderwins_india/dm_220807_INET_CRIC_indvwi_fantasy-t20i5_wonderwins_india.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Fantasy Pick: Expect fireworks from Suryakumar Yadav
                        </h2>
                        <p>
                        Aug 07, 2022
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.GridHoldVid}>
                    <div className={styles.boxHold}>
                    <div style={{backgroundImage:"url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/317700/317756.png)"}} className={styles.boxImage}>
                        <img style={{width:"90%"}} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317757.png" alt="" />
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0805/dm_220805_INET_CRIC_runorder_stokes-allformat2_nonbranded_global/dm_220805_INET_CRIC_runorder_stokes-allformat2_nonbranded_global.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Is it the beginning of the end for all-format players?
                        </h2>
                        <p>
                        Aug 06, 2022
                        </p>
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0624/dm_220624_INET_CRIC_runorder_rotating-captains_nonbranded_global/dm_220624_INET_CRIC_runorder_rotating-captains_nonbranded_global.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Should Afghanistan batters look to take on the Sri Lanka spinners?
                        </h2>
                        <p>
                        July 28, 2022
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.GridHoldVid}>
                    <div className={styles.boxHold}>
                    <div style={{backgroundImage:"url(https://www.espncricinfo.com/static/images/genre-default-bg.png)"}} className={styles.boxImage}>
                        <img style={{width:"90%"}} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/317700/317749.png" alt="" />
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0822/dm_220822_generic_interview_stokes2/dm_220822_generic_interview_stokes2.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Ben Stokes - 'Every series you play for your country should be important'
                        </h2>
                        <p>
                        Aug 22, 2022
                        </p>
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2022/0822/dm_220822_generic_interview_stokes1/dm_220822_generic_interview_stokes1.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        Ben Stokes - 'Everything still has an effect, even years down the road from the event happening'
                        </h2>
                        <p>
                        Aug 22, 2022
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.GridHoldVid}>
                    <div className={styles.boxHold}>
                    <div style={{backgroundImage:"url(https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640/lsci/db/PICTURES/CMS/317700/317741.png)"}} className={styles.boxImage}>
                        <img style={{width:"90%"}} src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/327300/327356.png" alt="" />
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/cricinfo/2022/0827/cric_220827_Hindi_Virat_Promotional/cric_220827_Hindi_Virat_Promotional.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        मुझे स्वीकार करने में बिल्कुल झिझक नहीं है कि मानसिक तौर पर मैं कमज़ोर हुआ हूं : विराट कोहली
                        </h2>
                        <p>
                        Aug 27, 2022
                        </p>
                    </div>
                    </div>

                    <div className={styles.boxHold}>
                    <div className={styles.vidCont}>
                    <div className={styles.vid}>
                    <ReactPlayer width={"100%"} height={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/cricinfo/2022/0822/cric_220822_Hindi_ZIMvIND_3rdODI_Review/cric_220822_Hindi_ZIMvIND_3rdODI_Review.jpg" url='https://www.youtube.com/embed/tmc1ViYkCdg" title="YouTube video player" title="YouTube video player' />
                    </div>
                    </div>
                    <div className={styles.text}>
                        <h2>
                        शुभमन की पारी के बाद रज़ा ने डराया लेकिन गिल के अद्भुत कैच ने भारत को दिलाई रिकॉर्ड जीत
                        </h2>
                        <p>
                        Aug 26, 2022
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.GridHoldRight}>
                <RightPartH />
            </div>
        </div>
    </div>
  )
}

export default Videos