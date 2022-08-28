import React ,{ useEffect, useRef }  from 'react';
import HomePageLeft from '../Components/HomePageLeft';
import RightPartH from '../Components/RightPartH';
import styles from "./HomePage.module.css"
import ReactPlayer from 'react-player'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className={styles.advertiseImg}>
        <img src="https://tpc.googlesyndication.com/simgad/4271044209677937619?" alt="ad-top" />
      </div>
      <div className={styles.homepageContainer}>
        <div style={{width:"30%"}}>
        <HomePageLeft />
        </div>
        <div className={styles.homepageMain}>
            <div className={styles.small_ad} >
              <img src="https://tpc.googlesyndication.com/simgad/17909822381541812721?" alt="small-ad" />
            </div>
            <div className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>ENGLAND VS SOUTH AFRICA</h3>
                      <p>2ND MEN'S TEST, OLD TRAFFORD</p>
                  </div>
                  <div className={styles.scoreBox}>
                      <div style={{width:"100px"}}>
                        <p style={{fontSize:"13px", color:"#E44242",fontWeight:"700"}}>STUMPS</p>
                      </div>
                      <div className={styles.scoreSA}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png" alt="SA" />
                              <h2>South Africa</h2>
                            </div>
                            <div>
                              <h2>151</h2>
                            </div>
                      </div>
                      <div className={styles.scoreSA}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png" alt="ng" />
                              <h2 style={{color:"#2B2C2D"}}>England</h2>
                              <img style={{height:"12px", width:"12px"}} src="https://toppng.com/uploads/preview/red-circle-1155276042606ekqvli9k.png" alt="" />
                            </div>
                            <div>
                              <h2 style={{color:"#2B2C2D"}}>111/3</h2>
                            </div>
                      </div>
                      <div style={{ borderBottom:"1px solid rgb(234, 234, 234)", padding:"0px 0px 16px 0px"}}>
                        <h6>Day 1 - England trail by 40 runs.</h6>
                      </div>
                      <div className={styles.vidPlayerBox}>
                      <ReactPlayer width={"100%"} playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/esci/media/motion/2022/0825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825.jpg" url='https://www.youtube.com/embed/HAzHfXttL_s" title="YouTube video player' />
                      </div>
                      <div className={styles.vidHeading}>
                        <h3>
                          Live - England take lead after Nortje fells Bairstow, Crawley
                        </h3>
                      </div>
                      <div className={styles.hozNewsSnippet}>
                        <div className={styles.hozNewsSnippetLeft}>
                          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344700/344740.6.jpg" alt="" />
                        </div>
                        <div className={styles.hozNewsSnippetRight}>
                          <h2>Broad steals back limelight, just as he's being shunted out of it</h2>
                          <p>Loss of new ball was catalyst for key display says</p>
                          <h3>Vithushan Ethunarajan</h3>
                        </div>
                      </div>
                      <div className={styles.hozNewsSnippetGrid}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/344700/344747.6.jpg" alt="" />
                              <h4>Day 1 report - Bairstow guides England after SA are rolled for 151</h4>
                            </div>
                            <div style={{marginTop:"10px",borderRadius: "12px", overflow:"hidden"}}>
                            <ReactPlayer width={"100%"} height={"120px"}  playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/esci/media/motion/2022/0825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825/dm_220825_COM_CRIC_Analysis_PoliteEnquiries_Did_Bazball_take_a_summer_break_last_week_220825.jpg" url='https://www.youtube.com/embed/HAzHfXttL_s" title="YouTube video player' />
                              <h4>#PoliteEnquiries: Did Bazball take a break last week?</h4>
                            </div>
                            <div>
                            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/344700/344744.jpg" alt="" />
                              <h4>Big battles: Mushfiqur vs Hardik, take two?</h4>
                            </div>
                        </div>
                  </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>IPL 2023</h3>
                      <p>PUNJAB KINGS NEWS</p>
                  </div>
                  <div className={styles.mainImg}>
                      <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/336800/336846.6.jpg" alt="" />
                  </div>
                  <div style={{border:"none"}} className={styles.vidHeading}>
                        <h3>
                        Kings part ways with Kumble and look for new head coach
                        </h3>
                        <p>
                        Loss of new ball was catalyst for key display says
                        </p>
                  </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>ASIA CUP 2022</h3>
                  </div>
                  <div className={styles.mainImg}>
                      <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/280400/280493.6.jpg" alt="" />
                  </div>
                  <div style={{border:"none"}} className={styles.vidHeading}>
                        <h3>
                        Quiz: Who has scored the most runs in Asia Cup history?
                        </h3>
                        <p>
                        And which two teams were involved in the only ever tie in the tournament?
                        </p>
                  </div>
                  <div className={styles.hozNewsSnippetGrid}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/329400/329423.6.jpg" alt="" />
                              <h4>Rajapaksa ready to bring IPL confidence into Asia Cup</h4>
                            </div>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/344700/344767.6.jpg" alt="" />
                              <h4>Afghanistan's focus: Batters must support spinners</h4>
                            </div>
                            <div>
                            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/280700/280797.6.jpg" alt="" />
                              <h4>All you need to know about the 2022 Asia Cup</h4>
                            </div>
                        </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>MUST WATCH</h3>
                      <p>VIDEOS OF THE WEEK</p>
                  </div>
                  <div className={styles.hozNewsSnippetGrid}>
                  <div style={{marginTop:"10px",borderRadius: "12px", overflow:"hidden"}}>
                            <ReactPlayer width={"100%"} height={"120px"}  playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0823/dm_220823_INET_CRIC_asiacup_kohli-pkg_nonbranded_global/dm_220823_INET_CRIC_asiacup_kohli-pkg_nonbranded_global.jpg" url='https://www.youtube.com/embed/HAzHfXttL_s" title="YouTube video player' />
                              <h4>Can Kohli make it count at the Asia Cup?</h4>
                            </div>
                            <div style={{marginTop:"10px",borderRadius: "12px", overflow:"hidden"}}>
                            <ReactPlayer width={"100%"} height={"120px"}  playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0823/dm_220823_interview_nonbranded_gayleint/dm_220823_interview_nonbranded_gayleint.jpg" url='https://www.youtube.com/embed/HAzHfXttL_s" title="YouTube video player' />
                              <h4>Gayle on 6ixty: 'I'm like a kid again who is excited for his debut'</h4>
                            </div>
                            <div style={{marginTop:"10px",borderRadius: "12px", overflow:"hidden"}}>
                            <ReactPlayer width={"100%"} height={"120px"}  playing  light="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2022/0823/dm_220823_INET_CRIC_Feature_Could_you_build_your_own_DRS_system_at_home_20220823_GLOBAL/dm_220823_INET_CRIC_Feature_Could_you_build_your_own_DRS_system_at_home_20220823_GLOBAL.jpg" url='https://www.youtube.com/embed/HAzHfXttL_s" title="YouTube video player' />
                              <h4>Could you build your own DRS system at home?</h4>
                            </div>
                        </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>BANGLADESH AT THE ASIA CUP</h3>
                  </div>
                  <div className={styles.mainImg}>
                      <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344500/344566.6.jpg" alt="" />
                  </div>
                  <div style={{border:"none"}} className={styles.vidHeading}>
                        <h3>
                        Methodical Sriram will 'challenge the norms' with Bangladesh
                        </h3>
                        <p>
                        Sriram's approach could deliver the results for Bangladesh, but they have to give him time, writes 
                        </p>
                  </div>
                  <div className={styles.hozNewsSnippetGrid}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/293700/293764.6.jpg" alt="" />
                              <h4>Domingo denies reports of his resignation as Test and ODI coach</h4>
                            </div>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/272700/272724.6.jpg" alt="" />
                              <h4>Isam: BCB president in control, cricket in chaos</h4>
                            </div>
                            <div>
                            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/335700/335749.6.jpg" alt="" />
                              <h4>Shakib wants 'improvement graph going up'</h4>
                            </div>
                        </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>ASIA CUP 2022</h3>
                  </div>
                  <div className={styles.mainImg}>
                      <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/330600/330686.6.jpg" alt="" />
                  </div>
                  <div style={{border:"none"}} className={styles.vidHeading}>
                        <h3>
                        Mohammad Wasim suffers back pain in another injury scare for Pakistan
                        </h3>
                        <p>
                        He is believed to have gone for an MRI scan, with Shaheen Afridi already ruled out due to a knee injury
                        </p>
                  </div>
                  <div className={styles.hozNewsSnippet}>
                        <div className={styles.hozNewsSnippetLeft}>
                          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/290700/290789.6.jpg" alt="" />
                        </div>
                        <div className={styles.hozNewsSnippetRight}>
                          <h2>Akram: Pakistan believe they can 'compete against India day-in and day-out'</h2>
                          <p>Says while Babar isn't quite there yet in comparison to Kohli, "he's on track to be one of the modern greats"</p>
                        </div>
                      </div>
            </div>

            <div  className={styles.newsOne}>
                  <div className={styles.scoreTop}>
                      <h3>BBL NEWS</h3>
                  </div>
                  <div className={styles.mainImg}>
                      <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/315900/315908.6.jpg" alt="" />
                  </div>
                  <div style={{border:"none"}} className={styles.vidHeading}>
                        <h3>
                        A comprehensive tactical guide to BBL draft for this season
                        </h3>
                        <p>
                        A rundown factoring player availability, team dynamics, and the order of the picks
                        </p>
                  </div>
                  <div className={styles.hozNewsSnippet}>
                        <div className={styles.hozNewsSnippetLeft}>
                          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/333700/333781.6.jpg" alt="" />
                        </div>
                        <div className={styles.hozNewsSnippetRight}>
                          <h2>When, where, how? All you need to know about BBL overseas players draft</h2>
                          <p>Wondering if the biggest names correspond to best picks? That, and more in ESPNcricinfo's explainer</p>
                        </div>
                      </div>
                      <div className={styles.hozNewsSnippetGrid}>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/344700/344710.6.jpg" alt="" />
                              <h4>Full BBL overseas player draft list - 332 names confirmed</h4>
                            </div>
                            <div>
                              <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/315100/315101.6.jpg" alt="" />
                              <h4>Lynn signs 11-game Strikers deal to split time with ILT20</h4>
                            </div>
                            <div>
                            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/lsci/db/PICTURES/CMS/344600/344612.6.jpg" alt="" />
                              <h4>Platinum rundown: Livingstone, Boult, du Plessis could be early picks</h4>
                            </div>
                        </div>
            </div>
        </div>
        <div style={{width:"30%"}}>
        <RightPartH />
        </div>
      </div>
    </div>
  )
}

export default HomePage