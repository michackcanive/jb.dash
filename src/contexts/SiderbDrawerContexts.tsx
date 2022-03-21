import { useDisclosure,UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {  createContext, ReactNode,useContext,useEffect } from "react";

interface SiderDrawerProps{
    children:ReactNode
}
type SiderDrawerContextData=UseDisclosureReturn
const SidebarDrawerContext=createContext({}as SiderDrawerContextData)

export function  SiderbarDrawerProvider({children}:SiderDrawerProps){
    const disclosure= useDisclosure()
    const route=useRouter()
    useEffect(() => {
        return () => {
            disclosure.onClose()
        };
    }, [route.asPath])
    return(
        <SidebarDrawerContext.Provider value={disclosure}>
        {children}
        </SidebarDrawerContext.Provider>
    )
}
export const useSidebarDrawer = ()=> useContext(SidebarDrawerContext)