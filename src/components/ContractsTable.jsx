import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ContractsTable() {
  const contracts = [
    {
      id: 1,
      name: "FONPLATA BRA-37/2022",
      type: "SAC Semestral",
      creditor: "FONPLATA",
      creditorType: "multilateral",
      value: "USD 60.000.000",
      currency: "USD",
      term: "15 anos",
      grace: "Carência: 4,0 anos",
      rate: "SOFR + 2,60%/2,10%",
      status: "Carência até ~2028",
      statusType: "grace"
    },
    {
      id: 2,
      name: "Banco do Brasil 40/00020-6",
      type: "SAC Mensal",
      creditor: "Banco do Brasil",
      creditorType: "domestic",
      value: "R$ 200.000.000",
      currency: "BRL",
      term: "9 anos",
      grace: "Carência: 1,0 ano",
      rate: "CDI + 1,48%",
      status: "Em amortização",
      statusType: "amortizing"
    },
    {
      id: 3,
      name: "Banco do Brasil 40/00041-9",
      type: "SAC Mensal",
      creditor: "Banco do Brasil",
      creditorType: "domestic",
      value: "R$ 200.000.000",
      currency: "BRL",
      term: "9 anos",
      grace: "Carência: 1,0 ano",
      rate: "CDI + 1,62%",
      status: "Inicia set/2025",
      statusType: "starting"
    },
    {
      id: 4,
      name: "BID PROMABEN I",
      type: "SAC Semestral",
      creditor: "BID",
      creditorType: "multilateral",
      value: "USD 68.750.000",
      currency: "USD",
      term: "25 anos",
      grace: "Carência: 5,5 anos",
      rate: "SOFR + 1,2-1,6%",
      status: "Em amortização",
      statusType: "amortizing",
      note: "MELHOR CONDIÇÃO"
    },
    {
      id: 5,
      name: "BID PROMABEN II",
      type: "SAC Semestral",
      creditor: "BID",
      creditorType: "multilateral",
      value: "USD 71.802.000",
      currency: "USD",
      term: "25 anos",
      grace: "Carência: 5,5 anos",
      rate: "SOFR + 1,4-1,8%",
      status: "Inicia 2025",
      statusType: "starting",
      note: "MELHOR CONDIÇÃO"
    }
  ]

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'grace':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Carência até ~2028</Badge>
      case 'amortizing':
        return <Badge variant="destructive">Em amortização</Badge>
      case 'starting':
        return <Badge variant="outline" className="border-orange-500 text-orange-700">Inicia set/2025</Badge>
      default:
        return <Badge variant="secondary">{statusType}</Badge>
    }
  }

  const getCreditorBadge = (creditorType, creditor) => {
    if (creditorType === 'multilateral') {
      return <Badge variant="outline" className="border-green-500 text-green-700">{creditor}</Badge>
    }
    return <Badge variant="outline" className="border-red-500 text-red-700">{creditor}</Badge>
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contratos Ativos</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Análise detalhada dos cinco contratos que compõem a carteira de dívida garantida
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span className="text-2xl">💰</span>
              <span>Carteira de Dívida Garantida - R$ 954,40 milhões</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Contrato</th>
                    <th className="text-left py-3 px-4 font-semibold">Credor</th>
                    <th className="text-left py-3 px-4 font-semibold">Valor</th>
                    <th className="text-left py-3 px-4 font-semibold">Prazo</th>
                    <th className="text-left py-3 px-4 font-semibold">Indexador</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((contract) => (
                    <tr key={contract.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium">{contract.name}</div>
                          <div className="text-sm text-gray-500">{contract.type}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {getCreditorBadge(contract.creditorType, contract.creditor)}
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium">{contract.value}</div>
                          <div className="text-sm text-gray-500">{contract.currency}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium">{contract.term}</div>
                          <div className="text-sm text-gray-500">{contract.grace}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium">{contract.rate}</div>
                          {contract.note && (
                            <div className="text-xs text-green-600 font-medium">{contract.note}</div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {getStatusBadge(contract.statusType)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">R$ 400 milhões</div>
              <div className="text-sm font-medium text-red-800 mb-1">Operações Domésticas</div>
              <div className="text-xs text-red-600">Custo: ~16,5% a.a. (CDI + spread)</div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">USD 271 milhões</div>
              <div className="text-sm font-medium text-green-800 mb-1">Operações Multilaterais</div>
              <div className="text-xs text-green-600">Custo: 5,5-6,9% a.a. (SOFR + spread)</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3 contratos</div>
              <div className="text-sm font-medium text-blue-800 mb-1">Convergência Temporal</div>
              <div className="text-xs text-blue-600">Iniciam amortização 2024-2025</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

