import records from "./records.json";
export function fetchData(idx = 0, delay = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(records[idx]);
    }, delay + 500 * Math.random());
  });
}
import { writable, get } from "svelte/store";

export const data = writable({});

export async function getCharacter(idx) {
  let char = get(data)[idx];
  if (char) return char;
  return fetchData(idx).then((_data) => {
    data.update((oldData) => {
      oldData[idx] = _data;
      return oldData;
    });
    return _data;
  });
}
