import Link ,{ LinkProps }from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children:ReactElement,
    showMatchActiveLink?:boolean
}

export function ActiveLink({children,showMatchActiveLink=false,...rest}:ActiveLinkProps){
    const {asPath}=useRouter()
    let isactive=false;
    if(showMatchActiveLink&&(asPath===rest.href||asPath===rest.as)){
        isactive=true
    }
    if(!showMatchActiveLink && (asPath.startsWith(String(rest.href))||asPath.startsWith(String(rest.as)))){
        isactive=true
    }
    return(
        <Link {...rest}>
            {cloneElement(
                children,{ 
                    color:isactive?'pink.400':'pink.50'
                }
            )}
        </Link>
    )
}