import axios from 'axios';

export function fetcher(url: string) {
  return axios(url).then(
    response => new Promise(resolve =>
      setTimeout(() => {
        resolve(response);
      }, 1000),
    ),
  );
}