import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 3,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkNotificationCount = get(networkAtom);
    const jobsNotificationCount = get(jobsAtom);
    const messagingNotificationCount = get(messagingAtom);
    const notificationCount = get(notificationAtom);
    return (
      networkNotificationCount +
      jobsNotificationCount +
      messagingNotificationCount +
      notificationCount
    );
  },
});
