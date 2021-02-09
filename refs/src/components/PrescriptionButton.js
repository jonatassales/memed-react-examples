import React from 'react'
import Button from '@material-ui/core/Button'

import { useMemed } from 'memed-react'

export default function PrescriptionButton() {
  const buttonRef = React.useRef(null)
  const { setActionRef, setDoctorToken, setPatient, loadingModule } = useMemed()

  React.useEffect(() => {
    function fetchDoctorToken() {
      setDoctorToken(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzMxNjUxLCJlNWM1Zjc3OGNkOTFmZGJiYmUzODE1MjI1ZWMwODIzNSIsIjIwMjEtMDItMDkiLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMjcwNTMiXQ.saHH12Knr04SwGHu5dIVwcaIew4bUJxj0hYLY0bVtoY'
      )
      setActionRef(buttonRef)
      setPatient({
        nome: 'José da Silva',
        endereco: 'Rua 1',
        cidade: 'Itapetininga',
        telefone: '+5515999999999',
        altura: 190,
        idExterno: 'ABCDE'
      })
    }

    fetchDoctorToken()
  }, [setDoctorToken, setActionRef, setPatient])

  return (
    <Button variant="outlined" ref={buttonRef} disabled={loadingModule}>
      {loadingModule ? 'Loading...' : 'Prescrição'}
    </Button>
  )
}
