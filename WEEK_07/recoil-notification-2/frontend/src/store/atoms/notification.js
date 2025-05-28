import { atom, selector } from "recoil";
import axios from "axios";

// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: {
//     network: 105,
//     jobs: 23,
//     messaging: 2,
//     notification: 34,
//   },
// });

// Asynchronous data queries
export const notificationAtom = atom({
  key: 'notificationAtom',
  default: selector({
    key: "notificationAtomSelector",
    get: async () => {
      const {data} = await axios.get(`http://localhost:8080/notification`)
      return data
    }
  })
})

export const notificationSelector = selector({
  key: "notificationSelector",
  get: ({ get }) => {
    const totalNotification = get(notificationAtom);
    return (
      totalNotification.network +
      totalNotification.jobs +
      totalNotification.messaging +
      totalNotification.notification
    );
  },
});
