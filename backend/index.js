import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from "./lib/scraper";

const go = async () => {
  // Get html from the different sites
  const username = "adamheldring";
  const tPromise = getHTML(`https://www.twitter.com/${username}/`);
  const iPromise = getHTML(`https://www.instagram.com/${username}/`);
  const [twitterHtml, instaHtml] = await Promise.all([tPromise, iPromise]);

  // Scrape the different sites
  const twCount = await getTwitterFollowers(twitterHtml);
  const instaCount = await getInstagramFollowers(instaHtml);

  // Present the result
  console.log(`${username} has...`);
  console.log(`${twCount} Twitter followers.`);
  console.log(`${instaCount} Instagram followers.`);
};

go();

// TODO
// Add Youtube listeners or any third thing
// Error handled failed requests, no insta or whatever
// Add frontend with input for dynamic username

// SPOTIFY LISTENERS
// const htmlSpot = await getHTML(
//   "https://open.spotify.com/artist/4o6OwD3pYXO8phn4erAROF"
// );
