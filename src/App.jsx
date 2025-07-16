import './App.css'
import ChartsSection from './components/ChartsSection'
import ContractsTable from './components/ContractsTable'
import ExecutiveDashboard from './components/ExecutiveDashboard'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <ExecutiveDashboard />
        <ContractsTable />
        <ChartsSection />
      </main>
      <Footer />
    </>
  )
}

export default App