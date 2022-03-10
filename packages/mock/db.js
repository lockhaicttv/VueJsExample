const standing = require("./standing/standing");
const news = require("./news/news");
const newspaper = require("./news/newspaper");
const matches = require("./matches/matches");
const player = require("./player/player");
const detailMatches = require("./detailMatches/detailMatches");

module.exports = {
  matches: matches,
  news: news,
  newspaper: newspaper,
  standing: standing,
  player: player,
  details: detailMatches,
};
