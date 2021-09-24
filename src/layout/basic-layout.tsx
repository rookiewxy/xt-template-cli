/*
 * @Description:
 * @Author: cxy
 * @Date: 2021-06-24 10:16:11
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-19 14:34:05
 */
import cb from 'classnames';
import { createContext, Suspense, useEffect, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { routes } from "../config/routes.config";
import SwitchRouter from "../router";
import { SystemContext } from "./context";
import './index.less'

const BIG_SCREEN_WIDTH = 5760
const BasicLayout = () => {
  const [isBigScreen,setIsBigScreen] = useState(false)
  // 初始化
  useEffect(() => {
  }, []);

  useEffect(() => {
   if(window.innerWidth >= BIG_SCREEN_WIDTH){
    setIsBigScreen(true)
   }
  }, [])

  return (
    <>
      <SystemContext.Provider
        value={{
        }}
      >
        <Header />
        <Suspense fallback="加载中...">
          <Router>
            <div className={
              cb({
                "main":!isBigScreen,
                "big-screen-main":isBigScreen
              })
            }>
              <SwitchRouter routes={routes}></SwitchRouter>
            </div>
            <Footer />
          </Router>
        </Suspense>
      </SystemContext.Provider>
    </>
  );
};

export default BasicLayout;
