import records from "./records.json";
export function fetchData(idx, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(records[idx]);
    }, delay + 500 * Math.random());
  });
}
