export const firebaseConfigs = {
  apiKey: "AIzaSyB6A3Z7x0701Wse2WT59iQW1rQJ_6M0TLE",
  authDomain: "loteria-yaqui.firebaseapp.com",
  databaseURL: "https://loteria-yaqui.firebaseio.com",
  projectId: "loteria-yaqui",
  storageBucket: "loteria-yaqui.appspot.com",
  messagingSenderId: "171014062929",
};

export const snapshotToArray = (snapshot) => {
  let returnArray = [];
  snapshot.forEach((element) => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });
  return returnArray;
};
