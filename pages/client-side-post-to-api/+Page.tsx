import { TaylorSwift } from './PrincessOfDarkness'

export { Page }

function Page() {
  return (
    <>
      <h4>
        Client Side Functionality - Post data to remote API, Works Exactly the
        Same as a Regular React App
      </h4>
      <p>
        HTTP post to https://jsonplaceholder.typicode.com/posts, which accepts a
        POST request and will send a back a response.
      </p>

      <section>
        <TaylorSwift />
      </section>
    </>
  )
}
