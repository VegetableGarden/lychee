const lastReloaded = Date.now();

const fetcher = async () => {
  const body = await fetch('/fake-hmr');
  const json = await body.json();
  if (json.lastBuilt > lastReloaded) {
    window.location.reload();
  }
}

setInterval(fetcher, 1000);