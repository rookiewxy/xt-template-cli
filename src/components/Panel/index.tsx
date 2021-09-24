/*
 * @Description:面板
 * @Autor: wxy
 * @Date: 2021-07-03 11:38:55
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-13 18:14:44
 */
import { useLayoutEffect } from "react";
import "./index.less";

type PanelProps = {
  panelConfig: {
    title: string;
    width: number;
    height: number;
  };
};
const Panel: React.FC<PanelProps> = (props) => {
  const { title, width, height} = props.panelConfig;
  return (
    <div className="panel-box" style={{ width: (width / 1920) * 100 + "vw", height: (height / 1920) * 100 + "vw" }}>
      <p className="title">{title}</p>
      <div className="title-line" />
      {props.children}
    </div>
  );
};
export default Panel;
