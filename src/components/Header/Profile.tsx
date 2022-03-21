import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileVersionProps{
    showProfileVertion?:boolean
}

export function Profile({showProfileVertion=true}:ProfileVersionProps) {
    return (
        <Flex align={"center"}>
           {showProfileVertion && (
                <Box mr="4" textAlign={"right"}>
                <Text>Michack Canive</Text>
                <Text
                    color={"gray.300"}
                    fontSize="small">michakcanive@gmail.com</Text>
            </Box>
           )}
            <Avatar size={"md"} name="Michak Canive" src="https://github.com/michackcanive.png"
            />
        </Flex>
    )
}