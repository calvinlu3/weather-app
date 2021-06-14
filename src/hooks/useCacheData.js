import { useEffect, useState } from 'react';
import axios from 'axios';

const removeAllStorage = (isForceClear) => {
  if (localStorage.length > 10 || isForceClear) {
    localStorage.clear();
  }
};

const retrieveFromStorage = (key) => {
  var cachedData = JSON.parse(localStorage.getItem(key));
  if (cachedData) {
    console.log('getting from cache...');
    if (new Date(cachedData) < new Date()) {
      cachedData = null;
      localStorage.removeItem(key);
    }
  }
  return cachedData;
};

const addToStorage = (key, value) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        value: value,
        ttl: new Date(new Date().getTime() + 10 * 60000),
      })
    );
  } catch (err) {
    removeAllStorage(true);
  }
};

export function useCacheData(name, url) {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    removeAllStorage();

    var parsedCacheData = retrieveFromStorage(name);

    if (parsedCacheData) {
      setFetchedData(parsedCacheData.value);
    } else {
      console.log('fetching....');
      axios.get(url).then((res) => {
        addToStorage(name, res.data);
        setFetchedData(res.data);
      });
    }
  }, [name, url]);

  return [fetchedData];
}
