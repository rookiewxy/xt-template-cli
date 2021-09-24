/*
 * @Description: 进度条
 * @Autor: wxy
 * @Date: 2021-07-03 16:37:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-07 09:10:09
 */
import "./index.less";

// 进度条配置参数
type propsConfig = {
  barConfig: {
    color: string;
    num: number;
    total: number;
  };
};
const ProgressBar: React.FC<propsConfig> = (props) => {
  const { color, num, total } = props.barConfig;

  const style={
    background:color,
    width:num/total * 100 + '%'
  }
  return (
    <div className="progress-bar">
      <div className="progress-content" style={style}></div>
    </div>
  );
};
export default ProgressBar;
