import { Building2, Calendar, FileText } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building2 className="h-12 w-12" />
            <div>
              <h1 className="text-3xl font-bold">Diagnóstico Técnico-Financeiro</h1>
              <p className="text-blue-200">Dívida Garantida - Município de Belém/PA</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Julho 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>SEGEP</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-blue-200">
          <p>Fontes: Painel de Garantias STN | Relatório Quadrimestral 1º/2025 | Dados corrigidos com SELIC atual</p>
        </div>
      </div>
    </header>
  )
}

