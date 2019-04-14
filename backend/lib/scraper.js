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
  const dataAsString = $("body script").html();
  const beginningOfCountObject = dataAsString.indexOf('{"count"');

  const dataCutBeginning = dataAsString.slice(beginningOfCountObject);
  const dataCutBothEnds = dataCutBeginning.slice(
    0,
    dataCutBeginning.indexOf("}") + 1
  );
  console.log(typeof JSON.parse(dataCutBothEnds));
  console.log(typeof dataCutBothEnds);
  console.log(JSON.parse(dataCutBothEnds).count);

  console.log("Getting Instagram followers...");
  return "TEST VALUE";
};

// const getMonthlySpotifyListeners = html => {
//   const $ = cheerio.load(html);
//   const el = $;
// };
