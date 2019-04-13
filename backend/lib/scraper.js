import axios from "axios";
import cheerio from "cheerio";

export const getHTML = async url => {
  const { data: html } = await axios.get(url);
  return html;
};

export const getTwitterFollowers = async html => {
  const $ = cheerio.load(html);
  const el = $("a[data-nav='followers'] span[class='ProfileNav-value']");

  console.log("Getting Twitter followers...");
  const followers = el.data("count");
  return followers;
};

export const getInstagramFollowers = async html => {
  const $ = await cheerio.load(html);
  // const el = $(script");
  console.log($("script[type='text/javascript']").html());

  // console.log("Getting Instagram followers...");
  // console.log(el.html());
  return "TEST VALUE";
};

// const getMonthlySpotifyListeners = html => {
//   const $ = cheerio.load(html);
//   const el = $;
// };
