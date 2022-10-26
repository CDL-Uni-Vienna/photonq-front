import {ChevronRightIcon, MinusIcon, PlusSquareIcon} from '@chakra-ui/icons'
import {
  Badge,
  HStack,
  IconButton,
  Link,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import {connectView} from '@jaenjs/jaen'
import {SiAtom} from '@react-icons/all-files/si/SiAtom'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {ExperimentState} from '../model/types/type.experiment'

declare module Experiment {
  export interface EncodedQubitMeasurement {
    id: number
    encodedQubitIndex: number
    theta: string
    phi: string
    ComputeSettings: number
  }

  export interface CircuitAngle {
    id: number
    circuitAngleName: string
    circuitAngleValue: string
    qubitComputing: number
  }

  export interface QubitComputing {
    id: number
    circuitAngles: CircuitAngle[]
  }

  export interface ClusterState {
    id: number
    presetSettings: string
    amountQubits: number
  }

  export interface ComputeSettings {
    encodedQubitMeasurements: EncodedQubitMeasurement[]
    qubitComputing: QubitComputing
    clusterState: ClusterState
  }

  export interface RootObject {
    user_id: string
    status: string
    created: Date
    experimentName: string
    projectId: string
    maxRuntime: number
    experimentId: string
    circuitId: number
    ComputeSettings: ComputeSettings
  }
}

type Experiment = Experiment.RootObject

function ExpandableExperimentTableRow(props: {
  index: number
  experiment: Experiment
  textColor: string
}) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const navigate = useNavigate()

  return (
    <>
      <Tr onClick={() => setIsExpanded(!isExpanded)} cursor="pointer">
        <Td>
          {isExpanded ? (
            <IconButton
              size={'sm'}
              aria-label="Collapse"
              icon={<MinusIcon />}
              variant="ghost"
            />
          ) : (
            <IconButton
              size={'sm'}
              aria-label="Expand"
              icon={<PlusSquareIcon />}
              variant="ghost"
            />
          )}
        </Td>
        <Td p={1}>
          <Text fontSize="sm" color={props.textColor} textAlign={'left'}>
            {props.index}
          </Text>
        </Td>
        <Td>
          <Text fontSize="sm" color={props.textColor}>
            {props.experiment.experimentName}
          </Text>
        </Td>
        <Td>
          {props.experiment.status === ExperimentState.Done ? (
            <Badge ml="1" colorScheme="green">
              Done
            </Badge>
          ) : props.experiment.status === ExperimentState.Running ? (
            <Badge ml="1" colorScheme="blue">
              Running
            </Badge>
          ) : props.experiment.status === ExperimentState.Failed ? (
            <Badge ml="1" colorScheme="red">
              Failed
            </Badge>
          ) : props.experiment.status === ExperimentState.IN_QUEUE ? (
            <Badge ml="1" colorScheme="yellow">
              In Queue
            </Badge>
          ) : props.experiment.status === ExperimentState.DRAFT ? (
            <Badge ml="1" colorScheme="gray">
              Draft
            </Badge>
          ) : (
            <Badge ml="1" colorScheme="gray">
              Unknown
            </Badge>
          )}
        </Td>
        <Td>
          <Text fontSize="sm" color={props.textColor}>
            {new Date(props.experiment.created).toDateString()}
          </Text>
        </Td>
        <Td>
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="User"
            size="md"
            variant="ghost"
            onClick={() =>
              navigate('/views/users', {
                state: {
                  userId: props.experiment.user_id
                }
              })
            }
          />
        </Td>
      </Tr>
      {isExpanded && (
        <Tr onClick={() => setIsExpanded(!isExpanded)} cursor="pointer">
          <Td p={1} colSpan={5}>
            <pre>{JSON.stringify(props.experiment, null, 2)}</pre>
          </Td>
        </Tr>
      )}
    </>
  )
}

const ExperimentsList = () => {
  const textColor = useColorModeValue('gray.700', 'white')
  const {experiments, isLoading, clearCacheAndFetch} = useExperiments()

  return (
    <>
      <Stack overflowY={'auto'} height="100%">
        <Table variant={'simple'}>
          <Thead position="sticky" top={0} bgColor={'white'} zIndex={1}>
            <Tr my=".8rem" pl="0px">
              <Th pl="0px" color="gray.400" />
              <Th pl="0px" color="gray.400">
                Index
              </Th>
              <Th color="gray.400">Experiment name</Th>
              <Th color="gray.400">Status</Th>
              <Th color="gray.400">Created at</Th>
              <Th color="gray.400">User</Th>

              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {experiments
              .map((experiment, index) => {
                return (
                  <ExpandableExperimentTableRow
                    index={index + 1}
                    textColor={textColor}
                    experiment={experiment}
                  />
                )
              })
              .reverse()}
          </Tbody>
        </Table>

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
  )
}

const useExperiments = () => {
  type Cache = {
    data: Array<Experiment>
    timestamp: number
  }

  const toast = useToast()

  const [isFetching, setIsFetching] = React.useState(true)

  const [isLoading, setIsLoading] = React.useState(true)

  const [data, setData] = React.useState<Cache['data']>([])

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch('https://iam.photonq.at/api/experiments')

      const data = await response.json()

      setIsFetching(false)
      setData(data || [])
      setIsLoading(false)
    }

    const cache: Cache | null =
      JSON.parse(localStorage.getItem('data-experiments') || '{}') || null

    // check if timestamp is older than 1 minute or if no cache is available

    if (!cache?.timestamp || (cache && Date.now() - cache.timestamp > 60000)) {
      fetchData()
    } else {
      setData(cache.data)
      setIsLoading(false)
      setIsFetching(false)
    }
  }, [isFetching])

  React.useEffect(() => {
    // cache users in local storage with timestamp
    if (!isLoading) {
      localStorage.setItem(
        'data-experiments',
        JSON.stringify({timestamp: Date.now(), data})
      )
    }
  }, [isLoading, data])

  const clearCacheAndFetch = React.useCallback(() => {
    localStorage.removeItem('data-experiments')
    setIsFetching(true)
  }, [])

  return {
    experiments: data,
    clearCacheAndFetch,

    isFetching,
    isLoading
  }
}

const UsersView = () => {
  // fetch users only

  return <ExperimentsList />
}

export default connectView(UsersView, {
  path: '/experiments',
  displayName: 'Lab Experiments',
  description: 'This is a list of all experiments that exist in the lab.',
  Icon: SiAtom,
  controls: []
})
