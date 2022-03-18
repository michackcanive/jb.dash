import { Button , ButtonProps as ButtonPaginationProps } from "@chakra-ui/react";

interface ButtonPaginationProp extends ButtonPaginationProps{
    numberPagination:number,
    is_active?:boolean
}
export function ButtonPagination({numberPagination,is_active=false, ...rest}:ButtonPaginationProp) {
    if(is_active){
        return (
            <Button {...rest}  size={"sm"}fontSize="xs"width={4}bg="gray.700"_hover={{bg: 'gray.500'}} colorScheme="pink" disabled _disabled={{bg: 'pink.500',cursor: 'default'}}>{numberPagination}</Button>
        )
    }
    return (
        <Button {...rest}  size={"sm"}fontSize="xs"width={4}bg="gray.700"_hover={{bg: 'gray.500'}}>{numberPagination}</Button>
    )
    
}