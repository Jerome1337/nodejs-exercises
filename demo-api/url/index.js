const url = new URL("https://example.org/?abc=123");

console.log(url);

console.log("PARAM ABC", url.searchParams.get("abc"));

url.searchParams.append("test", "test");

console.log(url);
