import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const JokeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.joke?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="setUp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Set up
        </Label>
        <TextField
          name="setUp"
          defaultValue={props.joke?.setUp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="setUp" className="rw-field-error" />

        <Label
          name="punchLine"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Punch line
        </Label>
        <TextField
          name="punchLine"
          defaultValue={props.joke?.punchLine}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="punchLine" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.joke?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="upVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Up votes
        </Label>
        <NumberField
          name="upVotes"
          defaultValue={props.joke?.upVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="upVotes" className="rw-field-error" />

        <Label
          name="downVotes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Down votes
        </Label>
        <NumberField
          name="downVotes"
          defaultValue={props.joke?.downVotes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="downVotes" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JokeForm
