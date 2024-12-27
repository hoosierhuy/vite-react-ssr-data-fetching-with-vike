export { TaylorSwift }

// Library import
import { useState } from 'react'

// Type to define the structure of the JSON response from the API
type JsonResponse = {
  id: number
  title: string
  body: string
  userId: number
}

/**
 * Client-side component to post data to the free jsonplaceholder API /posts endpoint
 * which accepts a POST request and returns a JSON response.
 * */
function TaylorSwift() {
  // Slice of state to hold the JSON response from the API for display
  const [json, setJson] = useState<JsonResponse | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleUnveilBtnClick = () => async () => {
    setMessage('')

    try {
      // This free endpoint will accept a POST request and return a JSON response.
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            title: 'Who is the Princess of Darkness?',
            body: 'Could it be Taylor Swift?',
            userId: 1,
          }),
        }
      )

      const data = await response.json()
      setJson(data)

      if (response.status === 201) {
        setMessage(`Response Status Code: ${response.status}`)
      }

      if (!response.ok) {
        setError(`HTTP error! Status Code: ${response.status}`)
      }
    } catch (error) {
      setError(`Error: ${error}`)
      setMessage('')
    }
  }

  return (
    <>
      <button
        type="button"
        data-tooltip="Click to post data to an API.  You can also inspect the network tab in the browser's developer tools to see the POST request."
        className="submit-btn"
        onClick={handleUnveilBtnClick()}
      >
        Unveil The Princess of Darkness
      </button>
      {/* Render this JSX if there's a successful POST request */}
      {message && json && (
        <>
          <h4>Response from API:</h4>
          <pre>
            <code>{message}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(json, null, 2)}</code>
          </pre>
        </>
      )}
      {/* Render this JSX if there's an error posting data */}
      {error && (
        <>
          <h5>Unable to POST data to API</h5>
          <pre>
            <code>{error}</code>
          </pre>
        </>
      )}
    </>
  )
}
