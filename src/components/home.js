import StudentsList from '../container/studentList'
import Search from '../container/search'

const Home = ({ history }) => {
  return (
    <div>
      <Search />
      <StudentsList history={history} />
    </div>
  )
}

export default Home
