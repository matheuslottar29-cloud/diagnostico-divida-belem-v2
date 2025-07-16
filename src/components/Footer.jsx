import { Building2, Calendar, FileText, Database } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-semibold">SEGEP - Belém/PA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Diagnóstico técnico-financeiro elaborado para subsidiar análise da dívida garantida municipal.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Fontes Oficiais</span>
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Painel de Garantias STN</li>
              <li>• Relatório Quadrimestral 1º/2025</li>
              <li>• Dados atualizados SELIC 15%</li>
              <li>• Contratos integrais analisados</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Informações Técnicas</span>
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>• Análise baseada em dados oficiais</li>
              <li>• Cálculos com BIRD SOFR + 1,5%</li>
              <li>• Escopo: estoque atual R$ 954M</li>
              <li>• Desembolsos futuros separados</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Julho 2025</span>
            </div>
            <span>•</span>
            <span>Elaborado por Manus AI</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Documento técnico para análise da SEGEP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

