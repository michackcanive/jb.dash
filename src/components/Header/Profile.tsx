import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align={"center"}>
            <Box mr="4" textAlign={"right"}>
                <Text>Michack Canive</Text>
                <Text
                    color={"gray.300"}
                    fontSize="small">michakcanive@gmail.com</Text>
            </Box>
            <Avatar
                size={"md"}
                name="Michak Canive"
                src="https://github.com/michackcanive.png"
            />
        </Flex>
    )
}