import _ from "lodash";

import { Piscina } from "piscina";

const piscina = new Piscina({
  filename: new URL("../workers/prime_worker.mjs", import.meta.url).href,
});

const runWorkerPool = async () => {
  const workers = Array.from(Array(10).keys());

  const results = workers.map(async (i) => {
    const result = await piscina.run();

    return result;
  });

  console.time("tenCore");
  return Promise.all(results).then((_values) => console.timeEnd("tenCore"));
};

runWorkerPool();
