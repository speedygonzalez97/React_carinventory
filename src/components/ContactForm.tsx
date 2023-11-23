// @ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { choosecolor, chooseid, choosemake, choosemodel, chooseyear } from "../redux/slices/RootSlice"


interface ContactFormProps {
  id?: string[]
}

  const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
    } else {
      dispatch(choosecolor(data.color));
      dispatch(chooseid(data.id));
      dispatch(choosemake(data.make));
      dispatch(choosemodel(data.model));
      dispatch(chooseyear(data.year));

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">make</label>
          <Input {...register('make')} name='make' placeholder="make" />
        </div>
        <div>
          <label htmlFor="model">model</label>
          <Input {...register('model')} name='model' placeholder="model" />
        </div>
        <div>
          <label htmlFor="year">year</label>
          <Input {...register('year')} name='year' placeholder="year" />
        </div>
        <div>
          <label htmlFor="color">color</label>
          <Input {...register('color')} name='color' placeholder="color" />
        </div>
        <div>
          <label htmlFor="id">id</label>
          <Input {...register('id')} name='id' placeholder="id" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm