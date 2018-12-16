
# react-router-manager
Using React Router and creating helpers, for using named routers. Creating links etc.

## Usage
### Creating list of routes

    const routes = {  
        [RouteNames.HOME]: {  
            component: Home,  
      name: "Home",  
      path: '/',  
      exact: true  
      },  
      [RouteNames.CONTACT]: {  
            component: Contact,  
      name: "Contact",  
      path: '/contact'  
      },  
      [RouteNames.USERS]: {  
            component: Users,  
      name: "Specific user",  
      path: '/users/:id/:name'  
      },  
      [RouteNames.REDIRECT]: {  
            component: RedirectTo,  
      name: "Redirect to contact",  
      path: '/redirect'  
      }  
    };

### Generating list of Routes

    {Object.keys(Routes).map((route) => (  
        <Route key={route} {...Routes[route]} />  
    ))}

### Creating link in navigation
We have to specify only the name of route

    <RouteLink name={RouterNames.HOME}> </RouteLink>
### Creating link with parameters in URL
As you can see, in **names**.js is specified route Users with parameters in URL:

    path: '/users/:id/:name'
To fill this parameters we need to add new prop to **RouteLink**:

    <RouteLink name={RouterNames.USERS} params={{ id: 5, name: "p-wldz" }}> </RouteLink>

### Redirecting
Similar syntax to the **RouteLink**, if we want to specify redirect without additional params we can use only **name** prop, with params looks like:

    <RouteRedirect name={RouterNames.USERS} params={{id: 70, name: "test"}} />

