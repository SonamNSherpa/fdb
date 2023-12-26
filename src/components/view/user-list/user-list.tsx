import { GitHubUser } from '../../../type'

interface IUser {
  userData: GitHubUser
}

function UserList({ userData }: IUser) {
  return (
    <div
      className="flex flex-col justify-center 
items-center  rounded-[20px] p-[10px]"
    >
      <img className="w-[200px] rounded-[50%]" src={userData.avatar_url} alt="" />
      <h1 className="mt-2 ">{userData.login.toUpperCase()}</h1>
    </div>
  )
}

export default UserList

// interface IObj {
//   name: string
//   age: number
// }

// let obj: IObj

// obj = {
//   name: 'alex',
//   age: 20,
// }

// obj = {
//   name: 'alex',
//   age: 30,
// }

// console.log(obj)
