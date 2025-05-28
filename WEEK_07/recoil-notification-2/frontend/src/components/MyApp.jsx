import { useRecoilState, useRecoilValue } from "recoil";
import {
  notificationAtom,
  notificationSelector,
} from "../store/atoms/notification";
import { useEffect } from "react";
import { fetchNotificaton } from "../api/notificationService";

export const MyApp = () => {
  const [notification, setNotification] = useRecoilState(notificationAtom);
  const totalNotification = useRecoilValue(notificationSelector);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetchNotificaton()
  //     console.log(response)
  //     setNotification(response)
  //   })()
  // }, []);

  return (
    <>
      <button>Home</button>
      <button>My Network ({notification.network >= 100 ? "99+" : notification.network})</button>
      <button>Jobs ({notification.jobs})</button>
      <button>Messages ({notification.messaging})</button>
      <button>Notifications ({notification.notification})</button>
      <button>Me ({totalNotification})</button>
    </>
  );
};
