import { DashboardRoutes } from "./routers/DashboardRoutes";
import { Sugar } from 'react-preloaders';
import { BackofficeRoutes } from "./routers/BackofficeRoutes";

export const App = () => {
  return (
    <>
      <BackofficeRoutes />
      <DashboardRoutes />
      <Sugar color={'#400811'} background='#cd9b81' />
    </>
  )
};