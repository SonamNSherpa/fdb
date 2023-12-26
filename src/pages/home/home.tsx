import { useEffect, useState } from 'react'
import Footer from '../../components/shared/footer/footer'
import Header from '../../components/shared/header/header'
import { GitHubUser } from '../../type'
import UserList from '../../components/view/user-list/user-list'
import { getUsers } from '../../api/services'

function Home() {
  const [users, setUsers] = useState([])
  useEffect(function () {
    getUsers().then((data) => setUsers(data))
  }, [])

  return (
    <>
      <Header />
      <main className="h-min-[90vh] bg-orange-400">
        {users.map((user: GitHubUser) => {
          return <UserList key={user.id} userData={user} />
        })}
      </main>
      <Footer />
    </>
  )
}

export default Home
