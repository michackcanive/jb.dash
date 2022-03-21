import { Box, Button, Stack } from "@chakra-ui/react";
import { ButtonPagination } from "./ButtonPagination";

export function Pagination() {
    return (
        <Stack
            direction={["column","row"]}
            mt="8"
            justify={"space-between"}
            align="center"
            spacing={"6"}
        >
            <Box>
                <strong>0</strong>- <strong>10</strong> de  <strong>100</strong>
            </Box>
            <Stack direction={"row"} spacing="2">
                <ButtonPagination numberPagination={1} is_active/>
                <ButtonPagination numberPagination={2} />
                <ButtonPagination numberPagination={3}/>
                <ButtonPagination numberPagination={4}/>
                <ButtonPagination numberPagination={5}/>

            </Stack>
        </Stack>
    )
}