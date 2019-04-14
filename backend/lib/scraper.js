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
  const indexOfCountObjectStart = dataAsString.indexOf('{"count"');
  const indexOfCountObjectEnd = dataAsString.indexOf(
    "}",
    indexOfCountObjectStart
  );
  const countObject = JSON.parse(
    dataAsString.slice(indexOfCountObjectStart, indexOfCountObjectEnd + 1)
  );

  console.log("Getting Instagram followers...");
  return countObject.count;
};

// const getMonthlySpotifyListeners = html => {
//   const $ = cheerio.load(html);
//   const el = $;
// };
