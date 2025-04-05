export default async function handler(req, res) {
  const channelId = req.query.id || "144";

  const targetUrl = `https://fredflix.fun/jioplay.php?id=${channelId}`;

  const response = await fetch(targetUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
      "Referer": "https://fredflix.fun/",
      "Cookie": "player_access_key=FREDFLIX_SECURE_KEY_123",
    },
  });

  const contentType = response.headers.get("content-type");
  res.setHeader("Content-Type", contentType || "application/vnd.apple.mpegurl");

  const body = await response.text();
  res.send(body);
}
