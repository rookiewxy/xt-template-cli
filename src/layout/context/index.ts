import { createContext } from "react";

/*
 * @Description: 
 * @Author: cxy
 * @Date: 2021-07-08 10:37:40
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-09 10:39:06
 */

type ContextType = {
  switchPerspective: Function
}

export const SystemContext = createContext<ContextType | any>({});