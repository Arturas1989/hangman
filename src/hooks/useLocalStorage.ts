import { useEffect, useState } from "react";
import { addStoragePrototypes } from "../utils/helpers";

export const useLocalStorage = <T>(key: string, defaultStorageValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  addStoragePrototypes();
  const storageVal = localStorage.getDecryptedItem(key);
  const initialValue: T = storageVal ? JSON.parse(storageVal) : defaultStorageValue;
  const [gameInfo, setGameInfo] = useState<T>(initialValue);

  useEffect(() => {
    localStorage.setEncryptedItem(key, JSON.stringify(gameInfo));

    window.onstorage = function(e){
      if(e.key === key) localStorage.setEncryptedItem(key, JSON.stringify(gameInfo));
    }
  },[gameInfo, key])

  return [gameInfo, setGameInfo];
}