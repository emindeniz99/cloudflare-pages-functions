export async function onRequestGet(context) {
  const hash = JSON.stringify(context.params.hash);

  const value = await MESSAGES_KV.get(hash);
  if (value === null) {
    return new Response("Value not found", {
      status: 404,
    });
  }

  return new Response(value);
}
