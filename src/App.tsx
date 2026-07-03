import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Page } from 'konsta/react'
import { Compass, ShoppingBag, ChefHat, ShoppingBasket } from 'lucide-react'
import PhoneFrame from './PhoneFrame'
import { GlassTabbar, Tab } from './components/Glass'
import DiscoverPage from './pages/DiscoverPage'
import ProductsPage from './pages/ProductsPage'
import CookPage from './pages/CookPage'
import BasketPage from './pages/BasketPage'
import SearchPage from './pages/SearchPage'

const TABS: Tab[] = [
  { path: '/', label: 'Discover', Icon: Compass },
  { path: '/products', label: 'Products', Icon: ShoppingBag },
  { path: '/cook', label: 'Cook', Icon: ChefHat },
  { path: '/basket', label: 'Basket', Icon: ShoppingBasket },
]

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <PhoneFrame>
      <Page className="!bg-transparent">
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cook" element={<CookPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Page>

      <GlassTabbar
        tabs={TABS}
        active={pathname}
        onChange={navigate}
        onSearch={() => navigate('/search')}
        searchActive={pathname === '/search'}
      />
    </PhoneFrame>
  )
}
