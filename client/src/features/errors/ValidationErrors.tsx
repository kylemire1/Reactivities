import { Message } from 'semantic-ui-react'

interface Props {
  errors: string[] | null
}

const ValidationErrors = ({ errors }: Props) => {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: any, idx) => {
            return <Message.Item key={`validation_error_${idx}`}>{err}</Message.Item>
          })}
        </Message.List>
      )}
    </Message>
  )
}

export default ValidationErrors
