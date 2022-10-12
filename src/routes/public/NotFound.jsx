import React from 'react'
import { useSearchParams } from 'react-router-dom'
import NotFoundError from '../../components/NotFoundError'
export default function NotFound() {
  // eslint-disable-next-line
    const [searchParams, _setSearchParams] = useSearchParams()
    const errorMessage = searchParams.get('errorMessage')
    const sourceParentRoute = searchParams.get('sourceParentRoute')
  return (
    <NotFoundError errorMessage={errorMessage} sourceParentRoute={sourceParentRoute} />
  )
}
