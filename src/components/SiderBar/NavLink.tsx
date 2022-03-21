import {Icon, Link as ChakraLink, Stack, Text,LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProsp extends ChakraLinkProps{
    nameLink:string,
    iconLink:ElementType
    href:string
}
export function NavLink({nameLink,iconLink,href, ...rest }:NavLinkProsp) {
    return (
        <ActiveLink href={href} passHref>
        <ChakraLink  display={"flex"}  {...rest} >
            <Icon as={iconLink} fontSize="20" />
            <Text ml="4" fontWeight={"medium"}>{nameLink}</Text>
        </ChakraLink>
        </ActiveLink>

    )
}