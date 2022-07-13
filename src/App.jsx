import { DashboardRoutes } from "./routers/DashboardRoutes";
import { Sugar } from 'react-preloaders';

export const App = () => {
  return (
    <>
      <DashboardRoutes />
      <Sugar color={'#400811'} background='#cd9b81' />
    </>
  )
};