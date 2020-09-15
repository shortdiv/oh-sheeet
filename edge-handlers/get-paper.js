Error.stackTraceLimit = 1000;

export async function onRequest(ev) {
  const timePassed = formatDistance(subDays(new Date(), 3), new Date());
  await ev.respondWith(
    200,
    `
      <html><head>New Content</head><body>${timePassed}</body></html>
    `,
    {},
  );
}
