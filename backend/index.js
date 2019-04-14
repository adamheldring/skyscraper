import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from "./lib/scraper";

const go = async () => {
  // TWITTER FOLLOWERS
  const twitterHtml = await getHTML("https://www.twitter.com/adamheldring/");
  const twCount = await getTwitterFollowers(twitterHtml);
  console.log(`You have ${twCount} Twitter followers...`);

  // INSTAGRAM FOLLOWERS
  const instaHtml = await getHTML("https://www.instagram.com/adamheldring/");
  const instaCount = await getInstagramFollowers(instaHtml);
  console.log(`You have ${instaCount} Instagram followers...`);

  // SPOTIFY LISTENERS
  // const htmlSpot = await getHTML(
  //   "https://open.spotify.com/artist/4o6OwD3pYXO8phn4erAROF"
  // );
};

go();
