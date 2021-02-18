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
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Set up:
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
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Punch line:
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
          className="rw-label text-white"
          errorClassName="rw-label rw-label-error"
        >
          Your name:
        </Label>
        <TextField
          name="name"
          defaultValue={props.joke?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <div className="">
          <Submit
            disabled={props.loading}
            className="block bg-green-300 rounded text-gray-900 text-center font-bold py-2 shadow-2xl mt-5 w-full"
          >
            Add it!
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JokeForm
