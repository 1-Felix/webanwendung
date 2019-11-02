// Die Logik um mit dem Backend zu kommunizieren
import axios from "axios";

// Ein Wrapper um den axios API Call, der Errors etc formatiert
// method -> der HTTTP-Request-Typ (z.b. POST/GET)
// path -> Der Pfad / Endpoint
// data (optional) Daten in JSON form für POST Requests
export function apiCall(method, path, data) {
  return new Promise((resolve, recject) => {
    // axios[method] gibt eine Methode zurück
    // Diese wird mit (path, data) aufgerufen, wenn das abgeschlossen ist,
    // wird eine Funtion aufgerufen, die response von der vorherigen Methode übernimmt
    return axios[method](path, data).then(res => {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
      return resolve(res.data)
    }).catch(err => {
      // Von axios kommt ein res.data Objekt zurück. Das Error-Objekt ist dann von meiner API
      return recject(err.response.data.error);
    })
  });
}
