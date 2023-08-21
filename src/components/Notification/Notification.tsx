import React from "react";
import Alert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { removeNotification } from "../../store/notifications/notificationsSlice";
import { Snackbar } from "@mui/material";
import { selectNotifications } from "../../store/notifications/selectors";

const Notification: React.FC = () => {
  const notifications = useAppSelector(selectNotifications);
  const dispatch = useAppDispatch();

  const handleClose = (notificationId: string) => {
    console.log({ notificationId });
    dispatch(removeNotification(notificationId));
  };

  console.log(notifications);

  return (
    <div>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={6000}
          onClose={() => handleClose(notification.id)}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={notification.type}
            onClose={() => handleClose(notification.id)}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </div>
  );
};

export default Notification;
