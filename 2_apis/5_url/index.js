// const arrayUrl = require("./url");

const url = require("url");

const { urls, unicodeUrls, ASCIIUrls } = require("./url");

const getUrlInfo = () => {
  const urlInfo = [];

  // arrayUrl.urls.forEach()

  urls.forEach((url) => {
    const formattedUrl = new URL(url);

    urlInfo.push(formattedUrl);
  });

  return urlInfo;
};

console.log(getUrlInfo());

const transformToASCII = () => {
  const ASCIIURL = [];

  unicodeUrls.forEach((value) => {
    const formattedUrl = new URL(value);

    ASCIIURL.push(url.domainToASCII(formattedUrl.hostname));
  });

  return ASCIIURL;
};

console.log(transformToASCII());

const transformToUnicode = () => {
  const Unicode = [];

  ASCIIUrls.forEach((value) => {
    //const formattedUrl = new URL(value);

    const { hostname } = new URL(value);

    Unicode.push(url.domainToUnicode(hostname));
  });

  return Unicode;
};

console.log(transformToUnicode());
