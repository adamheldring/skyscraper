import axios from "axios";
import cheerio from "cheerio";

export const getHTML = async url => {
  const { data: html } = await axios.get(url);
  return html;
};

export const getTwitterFollowers = async html => {
  const $ = cheerio.load(html);
  const el = $("a[data-nav='followers'] span[class='ProfileNav-value']");
  const twFollowers = el.data("count");
  return twFollowers;
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
  const instaFollowers = countObject.count;
  return instaFollowers;
};

// const getMonthlySpotifyListeners = html => {
//   const $ = cheerio.load(html);
//   const el = $;
// };
