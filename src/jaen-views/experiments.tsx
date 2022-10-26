import {
    HStack, Link, Spinner,
    Stack, Text, useColorModeValue, useToast
} from "@chakra-ui/react";
import { connectView } from "@jaenjs/jaen";
import { SiAtom } from "@react-icons/all-files/si/SiAtom";
import React from "react";
import {
    useNavigate
} from "react-router-dom";

declare module Experiment {

    export interface EncodedQubitMeasurement {
        id: number;
        encodedQubitIndex: number;
        theta: string;
        phi: string;
        ComputeSettings: number;
    }

    export interface CircuitAngle {
        id: number;
        circuitAngleName: string;
        circuitAngleValue: string;
        qubitComputing: number;
    }

    export interface QubitComputing {
        id: number;
        circuitAngles: CircuitAngle[];
    }

    export interface ClusterState {
        id: number;
        presetSettings: string;
        amountQubits: number;
    }

    export interface ComputeSettings {
        encodedQubitMeasurements: EncodedQubitMeasurement[];
        qubitComputing: QubitComputing;
        clusterState: ClusterState;
    }

    export interface RootObject {
        user_id: string;
        status: string;
        created: Date;
        experimentName: string;
        projectId: string;
        maxRuntime: number;
        experimentId: string;
        circuitId: number;
        ComputeSettings: ComputeSettings;
    }

}

type Experiment = Experiment.RootObject;



const ExperimentsList = () => {
    const textColor = useColorModeValue("gray.700", "white");

    const navigate = useNavigate();

    const { experiments, isLoading, clearCacheAndFetch } = useExperiments();

    return (
        <>
            <Stack overflowY={"auto"} height="100%">
                {/* <Table variant={"simple"}>
                    <Thead position="sticky" top={0} bgColor={"white"} zIndex={1}>
                        <Tr my=".8rem" pl="0px">
                            <Th pl="0px" color="gray.400">
                                Index
                            </Th>
                            <Th color="gray.400">E-Mail</Th>
                            <Th color="gray.400">Firstname</Th>
                            <Th color="gray.400">Lastname</Th>
                            <Th color="gray.400">Created at</Th>
                            <Th color="gray.400">Active</Th>

                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {experiments.map((user, index) => (
                            <Tr>
                                <Td p={1}>
                                    <Text fontSize="sm" color={textColor} textAlign={"left"}>
                                        {index + 1}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color={textColor}>
                                        {user.email}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color={textColor}>
                                        {user.firstName}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color={textColor}>
                                        {user.lastName}
                                    </Text>
                                </Td>
                                <Td>
                                    <Text fontSize="sm" color={textColor}>
                                        {new Date(user.createdAt).toDateString()}
                                    </Text>
                                </Td>
                                <Td>{user.isActive ? <CheckCircleIcon /> : null}</Td>
                                <Td textAlign={"right"}>
                                    <Button
                                        p="0px"
                                        bg="transparent"
                                        onClick={() => navigate((index + 1).toString())}
                                    >
                                        <Icon as={EditIcon} color="gray.400" cursor="pointer" />
                                    </Button>
                                </Td>
                            </Tr>
                        )).reverse()}
                    </Tbody>
                </Table> */}

                {JSON.stringify(experiments, null, 2)}

                <Link fontSize="sm" color={textColor} onClick={clearCacheAndFetch}>
                    <HStack>
                        <Text>Refresh</Text>
                        {isLoading && (
                            <Spinner
                                thickness="4px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="agt.blue"
                                size="sm"
                            />
                        )}
                    </HStack>
                </Link>
            </Stack>
        </>
    );
};


const useExperiments = () => {
    type Cache = {
        data: Array<Experiment>;
        timestamp: number;
    };

    const toast = useToast();

    const [isFetching, setIsFetching] = React.useState(true);

    const [isLoading, setIsLoading] = React.useState(true);

    const [data, setData] = React.useState<Cache["data"]>([]);

    React.useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            const response = await fetch('https://iam.snek.at/api/experiments')

            const data = await response.json();

            setIsFetching(false);
            setData(data || []);
            setIsLoading(false);
        };

        // check local storage for users

        const cache: Cache | null =
            JSON.parse(localStorage.getItem("users") || "{}") || null;

        console.log("try to refetch", cache);

        // check if timestamp is older than 1 minute or if no cache is available

        if (!cache?.timestamp || (cache && Date.now() - cache.timestamp > 60000)) {
            fetchUsers();
        } else {
            setData(cache.data);
            setIsLoading(false);
            setIsFetching(false);
            console.log("using cache", cache);
        }
    }, [isFetching]);

    React.useEffect(() => {
        // cache users in local storage with timestamp
        console.log("caching users", users);

        if (!isLoading) {
            localStorage.setItem(
                "users",
                JSON.stringify({ timestamp: Date.now(), users })
            );
        }
    }, [isLoading, data]);

    const clearCacheAndFetch = React.useCallback(() => {
        localStorage.removeItem("users");
        setIsFetching(true);
    }, []);

    // const checkErrors = (errors: Array<{ message: string }>) => {
    //     if (errors.length > 0) {
    //         toast({
    //             title: "Error",
    //             description: errors[0].message,
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //     }

    //     return errors.length === 0;
    // };


    return {
        experiments: data,
        clearCacheAndFetch,

        isFetching,
        isLoading,
    };
};

const UsersView = () => {
    // fetch users only

    return (
        <ExperimentsList />
    );
};


export default connectView(UsersView, {
    path: "/experiments",
    displayName: "Lab Experiments",
    description:
        "This is a list of all experiments that exist in the lab.",
    Icon: SiAtom,
    controls: [],
});
