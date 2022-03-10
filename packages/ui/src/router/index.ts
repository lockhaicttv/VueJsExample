import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const lazyLoad = (view: string) => {
  return () => import(`@/views/${view}.vue`);
};

const routes: Array<RouteConfig> = [
  {
    path: "/stats",
    name: "stats",
    component: lazyLoad("StatsPage"),
  },
  {
    path: "/standing",
    name: "standing",
    component: lazyLoad("StandingPage"),
  },
  {
    path: "/",
    name: "Home",
    component: lazyLoad("MatchesPage"),
  },
  {
    path: "/matches",
    name: "Matches",
    component: lazyLoad("MatchesPage"),
  },
  {
    path: "/matches/:id",
    name: "Matches ID",
    component: lazyLoad("MatchesPage"),
  },
  {
    path: "/match/:id",
    component: lazyLoad("MatchDetailPage"),
    children: [
      { path: "stats", component: lazyLoad("MatchDetail/MatchDetailStats") },
      { path: "news", component: lazyLoad("MatchDetail/MatchDetailNews") },
      { path: "lineups", component: lazyLoad("MatchDetail/MatchDetailLineUp") },
      { path: "timeline", component: lazyLoad("MatchDetail/MatchDetailTimeLine") },
    ],
  },
  {
    path: "/news",
    name: "News",
    component: lazyLoad("NewsPage"),
  },
  {
    path: "/players",
    name: "Players",
    component: lazyLoad("PlayersPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
