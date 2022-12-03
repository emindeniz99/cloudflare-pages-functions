export async function onRequestPost(context) {
  const body = await context.request.clone().text();

  // Hash the request body to use it as a part of the cache key
  const hash = await sha256(body);

  var ttlSecondsFromNow = 60 * 60; // 1 hour
  await context.env.MESSAGES_KV.put(hash, body, { expirationTtl: ttlSecondsFromNow });

  return new Response(hash);
}

// https://developers.cloudflare.com/workers/examples/cache-post-request/
async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert bytes to hex string
  return [...new Uint8Array(hashBuffer)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
