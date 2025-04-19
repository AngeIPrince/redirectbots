export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
    const bots = ["telegrambot", "discordbot", "slackbot", "facebookexternalhit", "twitterbot"];
    for (const bot of bots) {
      if (userAgent.includes(bot)) {
        return Response.redirect("https://wikipedia.org", 302);
      }
    }
    return fetch(request);
  },
};
