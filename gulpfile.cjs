(async () => {
  try {
    await import('./gulpfile.mjs');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
