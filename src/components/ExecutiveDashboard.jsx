import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Banknote, Clock, DollarSign, Target, TrendingUp } from 'lucide-react';

export default function ExecutiveDashboard() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Executivo</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Indicadores críticos que fundamentam a necessidade urgente de reperfilamento da dívida garantida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-orange-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Exposição Total Garantida</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 954,40 milhões</div>
              <p className="text-xs text-muted-foreground">Estoque total da dívida garantida</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Concentração 5 Anos</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">79,9%</div>
              <p className="text-xs text-muted-foreground">R$ 763 milhões vencem até 2030</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Custo Médio Atual</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14,5% a.a.</div>
              <p className="text-xs text-muted-foreground">Estimado com SELIC 15% atual</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vida Média (ATM)</CardTitle>
              <Clock className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6,3 anos</div>
              <p className="text-xs text-muted-foreground">Inadequado para infraestrutura</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meta Reperfilamento</CardTitle>
              <Target className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,83% a.a.</div>
              <p className="text-xs text-muted-foreground">BIRD: SOFR + 1,5% (teto máximo)</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Economia Anual</CardTitle>
              <Banknote className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 82,7 milhões</div>
              <p className="text-xs text-muted-foreground">Diferencial de 8,67 pontos percentuais</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Situação Crítica: "Concentração Temporal"</h3>
                <p className="text-red-700">
                  <strong>79,9% da dívida</strong> (R$ 763 milhões) vence nos próximos 5 anos, criando pressão fiscal insustentável.
                  <strong> Três contratos</strong> iniciam amortização simultaneamente entre 2024-2025, comprometendo a capacidade de investimento municipal.
                  <strong> Desembolsos futuros</strong> (R$ 289M) adicionarão pressão extra com cronogramas separados.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-blue-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Próximo Passo: Aprovação Política</h3>
            <p className="mb-4">
              A janela de oportunidade é limitada. O início imediato das tratativas é essencial
              para implementar a solução antes que a pressão fiscal se torne insustentável.
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => {
                // Criar link para download do documento
                const link = document.createElement('a');
                link.href = '/REPERFILAMENTO DA DÍVIDA GARANTIDA.pdf';
                link.download = 'REPERFILAMENTO_DA_DÍVIDA_GARANTIDA.pdf';
                link.click();
              }}
            >
              <FileText className="h-4 w-4 mr-2" />
              Baixar Diagnóstico Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

