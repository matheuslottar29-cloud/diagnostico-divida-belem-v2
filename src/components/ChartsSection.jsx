import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { AlertTriangle } from 'lucide-react'

export default function ChartsSection() {
  const concentrationData = [
    { period: '12 meses', amount: 164.90, percentage: 17.3 },
    { period: '1-2 anos', amount: 161.95, percentage: 17.0 },
    { period: '2-3 anos', amount: 153.39, percentage: 16.1 },
    { period: '3-4 anos', amount: 146.02, percentage: 15.3 },
    { period: '4-5 anos', amount: 136.74, percentage: 14.3 },
    { period: '+5 anos', amount: 191.40, percentage: 20.1 }
  ]

  const creditorData = [
    { name: 'BID', value: 40, color: '#22c55e', contracts: '2 contratos', cost: '5,5-6,1% a.a.' },
    { name: 'Banco do Brasil', value: 42, color: '#ef4444', contracts: '2 contratos', cost: '~16,5% a.a.' },
    { name: 'FONPLATA', value: 18, color: '#f97316', contracts: '1 contrato', cost: '6,4-6,9% a.a.' }
  ]

  const evolutionData = [
    { year: '2025', estoque: 954, desembolsos: 24, total: 978 },
    { year: '2026', estoque: 954, desembolsos: 88, total: 1042 },
    { year: '2027', estoque: 954, desembolsos: 177, total: 1131 },
    { year: '2028', estoque: 954, desembolsos: 265, total: 1219 }
  ]

  const benefitsData = [
    { scenario: 'Atual', custo: 14.5, pressao: 763 },
    { scenario: 'BIRD', custo: 5.83, pressao: 0 }
  ]

  const COLORS = ['#22c55e', '#ef4444', '#f97316']

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Análise Visual dos Dados</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Visualizações que evidenciam a concentração crítica de vencimentos e os benefícios do reperfilamento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span>Concentração de Vencimentos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={concentrationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      `R$ ${value}M`, 
                      name === 'amount' ? 'Valor' : 'Percentual'
                    ]}
                  />
                  <Bar dataKey="amount" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-red-700 font-medium">
                  79,9% da dívida (R$ 763M) vence em 5 anos - situação crítica!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Credor</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={creditorData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {creditorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {creditorData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium">{item.name}: {item.contracts}</span>
                    </div>
                    <span className="text-gray-600">{item.cost}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Evolução da Exposição Garantida</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${value}M`, 'Valor']} />
                  <Line 
                    type="monotone" 
                    dataKey="estoque" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Estoque Atual"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    name="Total c/ Desembolsos"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-700">
                  <strong>Reperfilamento abrange apenas estoque atual (R$ 954M).</strong><br/>
                  Desembolsos futuros (R$ 289M) mantêm cronogramas originais.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparação de Cenários</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={benefitsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="scenario" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="custo" fill="#ef4444" name="Custo (%)" />
                  <Bar yAxisId="right" dataKey="pressao" fill="#f97316" name="Pressão 5 anos (R$M)" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm text-green-700 font-medium">
                    Economia: 8,67 p.p. = R$ 82,7M/ano
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-sm text-blue-700 font-medium">
                    Carência: Zero amortizações por 5 anos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefícios Quantificados do Reperfilamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 82,7M</div>
                <div className="text-sm text-gray-700">Economia anual de custos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">R$ 763M</div>
                <div className="text-sm text-gray-700">Alívio fiscal (2025-2030)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">R$ 812M</div>
                <div className="text-sm text-gray-700">VPL da economia (20 anos)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

