import {useRoutes} from 'react-router-dom'
import TeamMembers from '../pages/team_members/TeamMembers';
const Router = ()=>{
    const routes = useRoutes([
      {
        path:'/members',
        element:<TeamMembers/>
      }
    ])
    return(routes);
}

export default Router;