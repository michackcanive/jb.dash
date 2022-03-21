import { Button, Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SiderbDrawerContexts"
import { Logo } from "./Logo"
import { Notifications } from "./Notifications"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"
export function Header() {
    const {onOpen}= useSidebarDrawer()

    const isBigVersion=useBreakpointValue({
        base:false,
        lg:true
    })

    return (
        <Flex as="header"w="100%"maxWidth={1480}h="20"mx="auto"mt="4"px="6" align="center" >
            {!isBigVersion && (
                <IconButton aria-label="Open navetion" icon={<Icon as ={RiMenuLine}/>} fontSize="24" variant={"unstyled"} onClick={onOpen} mr="2">
                </IconButton>
            )}
            <Logo />
                {isBigVersion && <SearchBox />}
            <Flex align={"center"} ml="auto">
                <Notifications />
                <Profile  showProfileVertion={isBigVersion}/>
            </Flex>
        </Flex>
    )
}