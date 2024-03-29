import React, { Fragment, useEffect, useState } from 'react'
import { deviceDetect, mobileModel } from "react-device-detect"

import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Find_correct_number from './Projects/find_correct_number/Find_correct_number';
import { Scroll_utils } from './component/utils/scroll/check_scroll_length';
import Calculator from './Projects/calculator/calculator';
import Find_correct_text from './Projects/find_correct_text/find_correct_text';
import Snake from './Projects/snake/snake';
import Personal_manager from './Projects/calendar/containers/personal_manager';
import Pc_site from './Projects/pc_site/pc_site';
import Heads_or_tails from './Projects/heads_or_tails/heads_or_tails'
export default function App() {

  useEffect(() => {
    Scroll_utils();
    console.log("devicedata deviceDetect", deviceDetect()) // gives object shown in image below
    console.log("devicedata browserName", mobileModel) // gives "iphone"
    
  }, [])

  return (
    <Fragment>
      {/* <BrowserRouter> */}
      {/* <Router> */}

      <Routes>
        <Route path={'project'}>
          <Route path={'math_try'} element={<Find_correct_number />} />
          <Route path={'calculator'} element={<Calculator />} />
          <Route path={'find_correct_text'} element={<Find_correct_text />} />
          <Route path={'snake'} element={<Snake />} />
          <Route path={'calendar'} element={<Personal_manager />} />
          <Route path={'movie_site'} element={<Pc_site />} />
          <Route path={'heads_or_tails'} element={<Heads_or_tails />} />
        </Route>
        <Route path={''}>
          <Route path={""}
            element={
              <Fragment>
                <Head />
                <Main />
                <Footer />
              </Fragment>
            } />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
      {/* <Heads_or_tails/> */}

      <div className='footer-creator'>این سایت متعلق به علی پارسامنش میباشد  </div>
      {/* {scroll_utils} */}
      {/* {Scroll_utils} */}
      {/* </Router> */}
    </Fragment>
  )
}