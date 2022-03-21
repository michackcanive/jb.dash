import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Siderbar } from "../components/SiderBar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        toreColor: theme.colors.gray[500]

    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2022-03-18T00:00:00.000Z',
            '2022-03-19T00:00:00.000Z',
            '2022-03-20T00:00:00.000Z',
            '2022-03-22T00:00:00.000Z',
            '2022-03-24T00:00:00.000Z',
            '2022-03-26T00:00:00.000Z',
            '2022-03-27T00:00:00.000Z'
        ]
    },
    fill:{
        opacity:0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom:0.7,
            opacityTo:0.3
        }

    }
}
const series = [
    { name: 'series1', data: [29, 24, 1, 3, 56, 32, 4] }
]
const series2 = [
    { name: 'series1', data: [2, 40, 10, 30, 6, 14, 9] }
]

export default function Dashboard() {
    return (
        <Flex direction={"column"} h="100vh">
            <Header />
            
            <Flex w={"100%"} my="6" maxWidth={1480} mx="auto" px={"6"}>
                <Siderbar />

                <SimpleGrid flex={"1"} gap="4" minChildWidth={"320px"} >

                    <Box p={["6","8"]} bg="gray.800"
                        borderRadius={8}
                        pb="4" >
                        <Text fontSize={"lg"} mb="4" >
                            Inscritos da Semana
                        </Text>
                        <Chart type="area" series={series} options={options} height={160} />
                    </Box>

                    <Box p={["6","8"]} bg="gray.800"
                        borderRadius={8}
                        pb="4">
                        <Text fontSize={"lg"} mb="4" >
                            Taxa de abertura
                        </Text>
                        <Chart type="area" series={series2} options={options} height={160} />
                    </Box>

                </SimpleGrid>
            </Flex>

        </Flex>
    )
}