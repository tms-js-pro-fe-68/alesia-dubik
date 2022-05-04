import AppBar from '../../components/AppBar'
import Page from '../../components/Page'
import ChangeColorButton from './ChangeColorButton'
import AdvicesWithFetch from './AdvicesWithFetch'
import PasswordCracking from './PasswordCracking'
import ClothesForm from './ClothesForm'
import AdvicesWithMyHook from './AdvicesWithMyHook'
import StyledTodos from './StyledTodos'
import AdvicesWithReactQuery from './AdvicesWithReactQuery'
  
export default function HomePage() {

  return (
    <Page>
      <AppBar />
      <ChangeColorButton/>
      <AdvicesWithFetch/>
      <PasswordCracking/>
      <ClothesForm/>
      <AdvicesWithMyHook/>
      <StyledTodos/>
      <AdvicesWithReactQuery/>
    </Page>
  )
}