
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SiderbDrawerContexts";
import { SiderBarNav } from "./SiderBarNav";

export function Siderbar() {
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })
    const {isOpen,onClose}=useSidebarDrawer()

    if (isDrawerSidebar) {
        return (
     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
         <DrawerOverlay>
             <DrawerContent bg={"gray.800"} p="4">
                 <DrawerCloseButton mt="6" />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody> 
                        <SiderBarNav/>
                    </DrawerBody>
             </DrawerContent>
         </DrawerOverlay>
     </Drawer>
 )
    }

    return (
        <Box as="aside" w={"64"} mr="8">
            <SiderBarNav />
        </Box>
    )
}