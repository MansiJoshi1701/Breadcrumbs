import {Link, useLocation} from 'react-router-dom'

function Breadcrumbs() {

    //useLocation hook provides access to the current location object, which contains information about the URL.
    //This hook has a prop 'pathname' : path of the URL (e.g., /products/item) so you can directly destructure
    //the returned location to get just the pathname 
    let { pathname } = useLocation(); 
    pathname = pathname.split('/').filter(x => x);//filter is to remove empty space
    let breadcrumbPath = "";

    return (
        <div>
            <Link to="/">Home</Link>
            
                {
                    pathname.map((name,index) => {
                        breadcrumbPath += `/${name}`;

                        return(
                            <span key={index}>/ <Link to={breadcrumbPath}>{name}</Link> </span>
                        )
                    })
                }
            
        </div>
    )
}

export default Breadcrumbs