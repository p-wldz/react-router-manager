
# react-router-manager
Using React Router and creating helpers, for using named routers. Creating links etc.

## Problem with router which you may have
Always the layout for URL is a problem, if router are like
- /customers
- /customers/55

this is not exactly a problem, problem comes when you need to generate more complicated route like:
- /customers/55/manage/projects
could be mapped to `/customers/:id/:action/:object`
with issue like that this repo can help you.

Always when developer needs to create URL like that, he needs to know pattern:
 ```javascript
<Link to={`customers/${customer.id}/manage/${objectToManage}`}>About</Link>
```
how about such a declaration? 

 ```javascript
<RouteLink name={RouterNames.CUSTOMER} params={{ id: customer.id, action: "manage", object: objectToManage }}> </RouteLink>
```


## Usage
### Creating list of routes
 ```javascript
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
```

### Generating list of Routes
 ```javascript
{Object.keys(Routes).map((route) => (  
    <Route key={route} {...Routes[route]} />  
))}
```

### Creating link in navigation
We have to specify only the name of route

    <RouteLink name={RouterNames.HOME}> </RouteLink>
### Creating link with parameters in URL
As you can see, in **names**.js is specified route Users with parameters in URL:

    path: '/users/:id/:name'
To fill this parameters we need to add new prop to **RouteLink**:

    <RouteLink name={RouterNames.USERS} params={{ id: 5, name: "p-wldz" }}> </RouteLink>
Result:
`http://localhost:81/users/5/p-wldz`

### Redirecting
Similar syntax to the **RouteLink**, if we want to specify redirect without additional params we can use only **name** prop, with params looks like:

    <RouteRedirect name={RouterNames.USERS} params={{id: 70, name: "test"}} />

