/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import Editor from "views/Editor";
import Landing from "views/Landing";

const routes = [
  {
    path: "/editor",
    name: "Editor",
    rtlName: "Editor",
    icon: null,
    component: Editor,
    layout: "/"
  },
  {
    path: "/",
    name: "Landing",
    rtlName: "Landing",
    icon: null,
    component: Landing,
    layout: "/"
  }
];

export default routes;
