/*
 * @Description:
 * @Autor: wxy
 * @Date: 2021-07-03 09:21:15
 * @LastEditors: wxy
 * @LastEditTime: 2021-07-12 11:54:38
 */
import { Switch, Route, Redirect } from "react-router-dom";

export default (props: any) => {
  const { routes } = props;
  const getQueryString = (name: string) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  };
  const getRoutes = (routes: Array<any>) => {
    return routes.map((e: any, i: number) => {
      return (
        <Route exact key={i} path={e.path} component={e.component}></Route>
      );
    });
  };

  const type = getQueryString("type");
  if (type === "elevator") {
    return <Switch>{getRoutes(routes)}</Switch>;
  } else {
    return <Switch>{getRoutes(routes)}</Switch>;
  }
};
