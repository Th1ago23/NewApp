import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Title,
    Amount,
    TextCard
} from './styles'

type Props = {
    supplierN:string;
    stateN:string;
    total:number
}
export function ListCard({supplierN,stateN,total}: Props) {
    return (
        <Container>
            <Title>{stateN}</Title>
            <Amount>{total}</Amount>
            <TextCard>{supplierN}</TextCard>
        </Container>
    )
}


