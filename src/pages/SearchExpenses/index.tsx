import { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Transactions } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Alert, FlatList } from 'react-native'
import { spendingGetAll } from '../../spending/spendingGetAll'
import { SpendingStorageDTO } from '../../spending/SpendingStorageDTO'
import { Dashboard } from '../pages/Dashboard'
import { TransactionExpenses }
  from '../../components/TransactionsExpenses'
import { Title } from '../../components/Button/styles'
import { ListCard } from '../../components/ListCard'

type registerData = {
  supplierNote:string;
  stateN:string;
  total:number
}
export function Resume() {

  const [totalResume, setTotalResume] = useState<registerData[]>([])

  async function loadData() {
    const dados =  spendingGetAll()
    const states = ['RJ','MG','SP']
    const supplierN = ['Microsoft','microsoft', 'Totvs', 'totvs']

    const totalResume: registerData[] = []

    states.forEach(stateFiscal => {
      let fiscalSum = 0
      dados.forEach( data =>{
        if (data.stateFiscal.toUpperCase() === stateFiscal.toUpperCase() && data.supplier === supplierN)
          fiscalSum += data.fiscalValue

      })

      if (fiscalSum > 0){
        totalResume.push({
          supplierNote:supplier,
          stateN:stateFiscal,
          total:parseFloat(fiscalSum.toFixed(2))
        })
      }

    })
    
  useFocusEffect(useCallback(() =>{
    loadData()
  }, []))

return(
  <Container>
    <Header>
      <Title>Resumo</Title>
    </Header>
  <Container>
    {
      totalResume.map(item => (
        <ListCard
        supplierN={item.supplier}
        stateN={item.stateFiscal}
        />
      ))

    }
  </Container>  
  </Container>
)
}
}