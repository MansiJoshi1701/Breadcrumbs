import {Link, useLocation} from 'react-router-dom'

function Breadcrumbs() {

    //useLocation hook provides access to the current location object, which contains information about the URL.
    //This hook has a prop 'pathname' : path of the URL (e.g., /products/item) so you can directly destructure
    //the returned location to get just the pathname 
    let { pathname } = useLocation(); 
    pathname = pathname.split('/').filter(x => x);//filter is to remove empty space since pathname = [" " , "products" , "1"]
    let breadcrumbPath = "";

    return (
        <div className='breadcrumbs'>
            
            {pathname.length > 0 && <Link to="/">Home</Link>}
            
                {
                    pathname.map((name,index) => {
                        breadcrumbPath += `/${name}`;

                        //if last index, it shouldn't have hyperlink coz dont wanna navigate to the same page
                        if(index === pathname.length -1){
                            return(
                                <span key={index}> /{name} </span>
                            )
                        }
                        else{
                            return(
                                <span key={index}> <Link to={breadcrumbPath}>/{name}</Link> </span>
                            )
                        }
                        
                    })
                }
            
        </div>
    )
}

export default Breadcrumbs